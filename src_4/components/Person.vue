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

<!-- setup语法糖 -->
<script setup>
    let name = "TOM"
    let age = 18
    let tel = "123456"
    function showTel(){
        alert("123456789")
    }
    function changeName(){
        name = "hahahaha"
    }
    function changeAge(){
        age = 100
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