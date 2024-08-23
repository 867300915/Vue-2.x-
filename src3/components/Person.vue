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
        // setup函数里面的this是undefined
        setup(){
            //数据
            let name = "TOM"
            let age = 18
            let tel = "123456"
            //函数
            function showTel(){
                alert("123456789")
            }
            function changeName(){
                name = "hahahaha"
            }
            function changeAge(){
                age = 100
            }

            return { name,age,showTel,changeName,changeAge }
            // return ()=>{
            //     return "哈哈"
            // }
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