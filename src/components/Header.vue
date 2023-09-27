<template>
    <div class="header">
        <section @click="goHome">几何书舍</section>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

const goHome=()=>router.push('/')

</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d4d4d4;
    background-color: #fff;

    padding: 0 150px;

    section{
        height: 100%;
        line-height: 40px;
        cursor: pointer;
    }
}
</style>