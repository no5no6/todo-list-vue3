<template>
  <el-container>
    <el-header>
      <h1>MY TODO LIST</h1>
    </el-header>
    <el-main class="main">
      <article class="article">
        <section class="input-section">
          <div class="add-region">
            <el-input 
              style="flex: 1"
              placeholder="请输入内容"
              clearable>
            </el-input>
            <el-button style="width: 80px;margin-left: 20px;" type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </section>
        <section>
          <el-card class="box-card">
          </el-card>
        </section>
      </article>
    </el-main>
    <el-footer>
      我是底部
    </el-footer>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Index',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.add-region {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.main {
  display: flex!important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.input-section {
  display: flex!important;
  flex-direction: row;
}

.article {
  width: 40%;
}
</style>
