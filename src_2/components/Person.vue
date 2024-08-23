<template>
    <div class="person">
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <!-- <div>电话：{{ tel }}</div> -->
         <button @click="showTel()">查看联系方式</button>
         <button @click="updateName()">修改名字</button>
         <button @click="updateAge()">修改年龄</button>

    </div>
</template>

<script>
    export default {
        name: 'Person',
        data(){
            return {
                name: "Tom",
                age: 12,
                tel: 1234567
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            },
            updateAge(){
                this.age = 100
            },
            updateName(){
                this.name = "hahaha"
            }
        }
    }
</script>

<style>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
</style>