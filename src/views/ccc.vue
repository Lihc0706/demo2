<template>
    <div>
        <h1>CCC</h1>
        <h2>防抖</h2>
        用户名：<input type="text" placeholder="请输入用户名" v-model="username">
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:null,
            timer:null
        }
    },
    watch:{
        username(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=null
            this.timer = setTimeout(()=>{
                this.hadle()
            },1000)
        }
    },
    methods:{
        //防抖
        debounce(){

        },
        //节流
        throttle(){

        },
        hadle(){
            console.log(this.username);
        }
    }
}
</script>

<style>

</style>