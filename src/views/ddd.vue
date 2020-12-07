<template>
    <div>
        <h1>DDD</h1>
        <h2>节流</h2>
        <button @click="click">click</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            timer:null,
            flag:true
        }
    },
    methods:{
        click(){
            if(!this.flag)return
            this.flag = false
            console.log("节流实例");
            this.timer = setTimeout(()=>{
                this.flag = true
            },3000)
        }
    }
}
</script>

<style>

</style>