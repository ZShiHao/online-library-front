<template>
    <div class="dialog_background">
        <div class="captcha_card">
            <header>请输入验证码</header>
            <div class="row">
                <span>验证码: </span>
                <input type="text" placeholder="请输入" />
                <div v-html="svg" @click="refreshCaptcha" class="captcha"></div>
            </div>
            <div class="row">
                <div class="button cancel_button">取 消</div>
                <div class="button confirm_button">下 载</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getCaptcha } from '@/apis/captcha';

    // const props=defineProps({
    //     value:{
    //         type:Boolean,
    //         default:false
    //     }
    // })

    const svg = ref('');
    const captcha_text = ref('');

    async function refreshCaptcha() {
        const res = await getCaptcha();
        svg.value = res.data.data;
        captcha_text.value = res.data.text;
    }

    onMounted(async () => {
        await refreshCaptcha();
    });
</script>

<style lang="scss" scoped>
    .dialog_background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        // padding: 50px;
        background-color: rgba(0, 0, 0,0.5);
        // background-color: white;

        .captcha_card {
            width: 400px;
            height: 180px;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            margin: 15vh auto 50px;
            header {
                font-weight: 600;
                font-size: 16px;
                padding-bottom: 20px;
            }
            .row {
                display: flex;
                padding: 15px 0;
                span{
                    line-height: 30px;
                    padding-right: 15px;
                }
                input {
                    width: 100px;
                    height: 28px;
                    border: none;
                    box-shadow: 0 0 0 1px #dcdfe6 inset;
                    padding-left: 14px;
                    padding-top: 3px;
                    padding-bottom: 2px;
                    border-radius: 4px;
                    &:focus {
                        outline: none;
                    }
                    &::placeholder {
                        color: #606266;
                        font-size: 15px;
                    }

                }
                .captcha {
                        display: inline-block;
                        cursor: pointer;
                    }

                .button{
                    display: inline-block;
                    width: 76px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    border-radius: 10px;
                    padding: 10px 15px;
                }

                .cancel_button{
                    border: 1px solid #dcdfe6;
                }
                .confirm_button{
                    color: white;
                    background-color: #409eff;
                }
            }
        }
    }
</style>
