<template>
    <div class="outer_container">
        <header>分类</header>
        <div class="row" v-for="{ tags, name } in category">
            <div class="category">{{ name }}</div>
            <div class="tags">
                <span v-for="tag in tags">{{ tag }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getTags } from '../../../apis/tags';

    const category = ref([]);

    onMounted(async () => {
        const tags_res = await getTags({});
        category.value = tags_res.data;
    });
</script>

<style lang="scss" scoped>
    .outer_container {
        border: 1px solid grey;
        border-radius: 10px;
        margin: 0 auto;
        width: 800px;
        padding: 25px;
        .row {
            display: flex;
            padding-top: 10px;
            .category{
                padding-right: 25px;
                font-size: 17px;
            }
            .tags{
                span{
                    padding-left: 10px;
                    padding-right: 10px;
                    font-size: 15px;
                    cursor: pointer;
                    color: #3e76bb;
                }
            }
        }
    }
</style>
