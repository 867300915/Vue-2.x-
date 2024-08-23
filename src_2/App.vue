<template>
    <!-- html -->
    <div class="app">
        你好~
    </div>
    <Person></Person>
</template>
<script>
    import Person from './components/Person.vue';
    export default {
        name: 'App',
        components:{Person}//注册组件
    }
</script>
<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>