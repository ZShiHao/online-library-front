<script setup lang="ts">
    // import Home from '@/views/Home/index.vue';
    import Header from './components/Header.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <div>
        <Header></Header>
        <RouterView></RouterView>
    </div>
</template>

<style lang="scss" scoped></style>
