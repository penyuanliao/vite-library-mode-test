<template>
        <div>
            <div v-if="loading">加載進度：{{ progress }}%</div>
            <div v-if="error">錯誤: {{ error }}</div>
            <div v-if="!loading && !error">
                <div v-for="(image, url) in loadedImages" :key="url">
                    <img :src="image.src" :alt="`Loaded from ${url}`" />
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { ImageLoader } from '../utils/ImageLoader';

export default defineComponent({
    setup() {
        const progress = ref(0);
        const loading = ref(true);
        const error = ref<string | null>(null);
        const loadedImages = ref<Record<string, HTMLImageElement>>({});

        const imageUrls = [
            'https://sample-videos.com/img/Sample-jpg-image-30mb.jpg',
            'https://cdn-icons-png.flaticon.com/128/16947/16947181.png'
            // 其他圖片網址
        ];

        let loader: ImageLoader | null = null;

        onMounted(() => {
            loader = new ImageLoader(imageUrls);

            loader.on('progress', (p:number) => {
                progress.value = p;
            });

            loader.on('complete', (images) => {
                loadedImages.value = images;
                loading.value = false;
            });

            loader.on('error', (err: string) => {
                error.value = err;
                loading.value = false;
            });

            loader.load();
        });

        onBeforeUnmount(() => {
            if (loader) {
                loader.off('progress', () => {});
                loader.off('complete', () => {});
                loader.off('error', () => {});
            }
        });

        return {
            progress,
            loading,
            error,
            loadedImages
        };
    }
});
</script>