<template>
    <button type="button">Hello I am Awesome library -> {{ message }}</button>
</template>

<script lang="ts">

export default {
    name: 'GameButton',
    props: {
        message: String
    },
    setup(props) {
        console.log(`[x] Message: ${props.message}`);
        return props;
    }
}

</script>