<template>
    <div class="book_container">
        <div class="book_card">
            <section>
                <img :src="book.cover" alt="" />
            </section>
            <section class="info_container">
                <div class="title">{{ book.title }}</div>
                <div>{{ book.author }}</div>
                <section>
                    <div class="row">
                        <span>语言: </span>
                        <span>{{ book.language }}</span>
                    </div>
                    <div class="row">
                        <span>标签: </span>
                        <span>{{ book.language }}</span>
                    </div>
                    <div class="row">
                        <span>出版年份: </span>
                        <span>{{ book.date }}</span>
                    </div>
                    <div class="row">
                        <span>下载格式: </span>
                        <div class="source_container">
                            <div v-for="source in book.source">
                                <span class="format" @click="show_captcha=true">{{ source.format }}</span>
                                <span>{{ source.pages }}页</span>
                                <span>{{ source.size }}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <DownloadDialog v-if="show_captcha"></DownloadDialog>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { getBookDetail } from '@/apis/books';
    import DownloadDialog from './components/DownloadDialog.vue';

    const route = useRoute();
    const book = ref<{
        [key: string]: string;
    }>({});

    const show_captcha=ref(false)


    onMounted(async () => {
        const res = await getBookDetail(route.params.id as string);
        book.value = res.data;
    });
</script>

<style lang="scss" scoped>
    .book_container {
        padding-top: 50px;
        margin: 0 auto;

        .book_card {
            border: 1px solid grey;
            border-radius: 10px;
            margin: 0 auto;
            padding: 15px;
            width: 800px;
            display: flex;
            justify-content: space-evenly;
            .info_container {
                padding: 0 10px;
                text-align: center;
                .title {
                    font-weight: 700;
                    font-size: 18px;
                }

                section {
                    margin-top: 20px;
                    border-top: 1px solid grey;
                    padding-top: 10px;
                    text-align: left;
                    .row {
                        padding: 5px 0;
                        .source_container{
                            display: inline-block;
                            color: #2ECC40;
                            span{
                                padding: 0 8px;
                            }
                            .format{
                                padding: 5px 7px;
                                border-radius: 5px;
                                background-color: #2ECC40;
                                font-size: 14px;
                                color: white;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }


    }
</style>
