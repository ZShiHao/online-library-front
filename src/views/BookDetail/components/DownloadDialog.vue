<template>
    <div class="dialog_background">
        <div class="captcha_card">
            <header>请输入验证码后下载</header>
            <div class="row">
                <span>验证码: </span>
                <input v-model="input_text" type="text" required placeholder="请输入" />
                <div v-html="svg" @click="refreshCaptcha" class="captcha"></div>
            </div>
            <div class="validation_row" >{{ validate_error }}</div>
            <div class="button_row">
                <div class="button cancel_button" @click="cancel">取 消</div>
                <div class="button confirm_button" @click="downloadBook">下 载</div>
            </div>
            <object :data="url" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { getCaptcha } from '@/apis/captcha';
import { getBookDownloadURL } from '@/apis/books';

    const props=defineProps({
     bookId:{
            type:String
        }
    })

    const emit=defineEmits(['cancel','download'])

    const svg = ref('');
    const captcha_text = ref('');
    const input_text=ref('')
    const validate_error=ref('')
    const url=ref('')



    async function refreshCaptcha() {
        const res = await getCaptcha();
        svg.value = res.data.data;
        captcha_text.value = res.data.text;
    }

    function validate(){
        return new Promise(async (resolve,reject)=>{
            if(!input_text.value){
                validate_error.value='*请输入验证码'
                reject()
            }else if(input_text.value.toLowerCase()!=captcha_text.value.toLowerCase()){
                validate_error.value='*验证码错误'
                await refreshCaptcha()
                reject()
            }else{
                validate_error.value=''
                resolve(null)
            }
        })
    }

    function cancel(){
     emit('cancel')
    }

    async function downloadBook(){
        await validate()
        const res=await getBookDownloadURL(props.bookId)
        // url.value=res.data.url

        const a=document.createElement('a')
        a.href=res.data.url
        // a.download=''
        a.click()
        emit('download')


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
        background-color: rgba(0, 0, 0, 0.5);
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
                padding-top: 15px;
                display: flex;
                span {
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


            }

            .validation_row{
                padding-bottom: 15px;
                padding-left: 76px;
                height: 12px;
                color: red;
                font-size: 13px;
            }

            .button_row {
                padding: 15px 0;
                display: flex;
                justify-content: flex-end;
                .button {
                    display: inline-block;
                    width: 76px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    border-radius: 10px;
                    padding: 10px 15px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .cancel_button {
                    border: 1px solid #dcdfe6;
                }
                .confirm_button {
                    color: white;
                    background-color: #409eff;
                    margin-left: 25px;
                }
            }
        }
    }
</style>
