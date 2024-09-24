import mitt, { type Emitter } from "mitt";

type ImageLoaderEvents = {
    progress: number; // 進度
    complete: Record<string, HTMLImageElement>; // 完成時加載的圖片
    error: string; // 錯誤信息
};

export class ImageLoader {
    private images: string[];
    private loadedImages: Record<string, HTMLImageElement>;
    private total: number;
    private loaded: number;
    private emitter: Emitter<ImageLoaderEvents>;

    constructor(imageUrls: string[]) {
        this.images = imageUrls;
        this.loadedImages = {};
        this.total = imageUrls.length;
        this.loaded = 0;
        this.emitter = mitt();
    }

    // 開始加載圖片
    load() {
        this.images.forEach((url) => {
            const img = new Image();
            img.src = url;

            img.onload = () => {
                this.loadedImages[url] = img;
                this.loaded++;
                this.updateProgress();
            };

            img.onerror = () => {
                this.emitter.emit('error', `Failed to load image: ${url}`);
            };
        });
    }

    // 更新進度
    private updateProgress() {
        const progress = (this.loaded / this.total) * 100;
        this.emitter.emit('progress', progress);

        if (this.loaded === this.total) {
            this.emitter.emit('complete', this.loadedImages);
        }
    }

  // 綁定事件
  on<K extends keyof ImageLoaderEvents>(event: K, listener: (payload: ImageLoaderEvents[K]) => void) {
    this.emitter.on(event, listener);
  }

  // 解除事件綁定
  off<K extends keyof ImageLoaderEvents>(event: K, listener: (payload: ImageLoaderEvents[K]) => void) {
    this.emitter.off(event, listener);
  }
}
