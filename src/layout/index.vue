<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="left">Aside</el-aside>
      <el-container>
        <el-header class="top">
          
        </el-header>
        <el-main class="butt">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.left{
  width: 15%;
  height: 100vh;
  background-color: gray;
}
.top{
  width: 100%;
  height: 50px;
  background-color: rgb(10, 102, 60);
}
</style>
