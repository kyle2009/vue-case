<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style>
    @import './assets/base.css';
    div{
        box-sizing: border-box;
    }
    .page {
        width: 500px;
        height: 450px;
        position: fixed;
        right: 0;
        bottom: 0;
        background: #e7e7eb;
        z-index: 9999;
    }
  body {
    background: #F6F8F9;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

  }
   body,div,ul,li,a {
    padding: 0;
    margin: 0;
   }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }

</style>
