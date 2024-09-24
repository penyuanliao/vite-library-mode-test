<template>
    <main>
        <!-- <GameButton message="Hi" /> -->
        <XLoader />

    </main>
</template>

<script lang="ts">
// import TheWelcome from '../components/TheWelcome.vue';
// import { GameButton } from '@mkt/custom-components';
import { defineComponent } from 'vue';
import XLoader from '../components/XLoader.vue';
export default defineComponent({
    components: {
        XLoader
    }
});
</script>
