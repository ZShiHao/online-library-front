<script setup lang="ts">
    import { onMounted } from 'vue';
    import Tags from './components/Tags.vue';
    import BooksShelf from './components/BooksShelf.vue';
    import Search from './components/Search.vue';

    onMounted(async () => {
        // const new_book_res = await getBooksPage({
        //     sort: 'updateDate',
        //     current: 1,
        //     pageSize: 16,
        // });
        // new_books.value = new_book_res.data;
    });
</script>

<template>
    <div class="home_container">
     <section class="banner">
      <Search></Search>
     </section>
     <section class="content">
      <Tags></Tags>
        <BooksShelf type="download" title="下载榜"></BooksShelf>
        <BooksShelf type="updateDate" title="最近更新"></BooksShelf>
     </section>
    </div>
</template>

<style lang="scss" scoped>
    .home_container {
        // max-width: 1300px;

        .banner{
         background-color: #edeef0;
         // background: linear-gradient(to bottom, #edeef0, #CFDEF3);
        }
 
        .content{
         width: 900px;
        margin: 0 auto;
        padding: 2rem;
        }
    }
</style>
