<template>
    <div>
        <h1>BBB</h1>
        <input type="text" v-model="int" @blur="onBlur">
    </div>
</template>

<script>
export default {
    data(){
        return{
            int:null,   //和输入框绑定的值
            old:null    //存上一次输入的值
        }
    },
    methods:{
        onBlur(){
            if(this.int != '' && this.int == this.old){
                return
            }
                this.old = this.int     //值不为空并且值改变后将新值存起来，做下次对比
                console.log(this.int);  //值不为空并且值改变后才输出
             
        }
    }
}
</script>

<style>

</style>