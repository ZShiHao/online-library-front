<template>
    <div class="container">
        <header>{{ title }}</header>
        <div class="books">
            <div class="book_card" v-for="book in books">
                <img class="cover" :src="book.cover" alt="" @click="goBookDetail(book.id)" />
                <div class="title">{{ book.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import router from '@/router';
    import { getBooksPage } from '../../../apis/books';

    const props = defineProps({
        type: String,
        title: String,
    });

    const books = ref<
        {
            id: string;
            cover:string
            title:string
        }[]
    >([]);

    const goBookDetail = (id: string) => router.push(`/book/${id}`);

    onMounted(async () => {
        const books_res = await getBooksPage({
            sort: props.type,
            current: 1,
            pageSize: 12,
        });
        books.value = books_res.data;
    });
</script>

<style lang="scss" scoped>
    .container {
        width: 800px;
        margin: 0 auto;
        min-width: 800px;
        padding-top: 30px;

        header {
            padding: 10px 0;
            font-weight: 700;
        }
        .books {
            display: flex;
            flex-wrap: wrap;

            .book_card {
                flex: 1;
                font-size: 13px;
                padding: 10px;
                .cover {
                    width: 110px;
                    height: 146px;
                    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    cursor: pointer;
                }
                .title {
                    width: 110px;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3; /* 这里是超出几行省略 */
                    overflow: hidden;
                }
            }
        }
    }
</style>
