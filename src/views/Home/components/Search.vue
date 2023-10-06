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
    height: 270px;
    margin: 0 auto;
    padding: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    section{
        text-align: center;
        Header{
           font-family: '仿宋';
            font-size: 35px;
            font-weight: 600;
            color: black;
            margin-bottom: 15px;
        }
        input{
            outline: none;
            height: 40px;
            width: 440px;
            padding-left: 20px;
            border-radius: 20px;
            border: 1px solid rgb(250, 250, 250);
            box-shadow: 0 4px 20px rgba(0,25,104,.05);
        }
    }
}
</style>