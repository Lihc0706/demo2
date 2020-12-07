<template>
    <div>
        <h1>AAA</h1>
    </div>
</template>

<script>
    // const promise = new Promise(function(resolve,reject){

    // })
    // function timeout(ms){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(resolve,ms,'done')
    //     })
    // }
    // timeout(200).then(res=>{
    //     console.log(res);
    // })

    let promise = new Promise(function(resolve,reject){
        console.log('Promise');
        resolve();
    })

    promise.then(function(){
        console.log('resolved');
    })

    console.log('Hi');
export default {

}
</script>

<style>

</style>