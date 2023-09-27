<template>
    <div class="search_container">
        <section>
            <header>几何书舍</header>
            <input type="text" placeholder="搜索">
        </section>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.search_container{
    height: 150px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    section{
        text-align: center;
        Header{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        input{
            outline: none;
            height: 35px;
            width: 350px;
            padding-left: 20px;
            border-radius: 17.5px;
            border: 1px solid grey;
            box-shadow: 0 4px 20px rgba(0,25,104,.05);
        }
    }
}
</style>