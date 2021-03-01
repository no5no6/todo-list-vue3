<template>
  <el-container>
    <el-header>
      <h1>MY TODO LIST</h1>
    </el-header>
    <el-main class="main">
      <article class="article">
        <section class="section">
          <div class="add-region">
            <el-input 
              v-model="input"
              style="flex: 1"
              placeholder="请输入待执行任务"
              clearable>
            </el-input>
            <el-button style="width: 80px;margin-left: 20px;" type="primary" icon="el-icon-plus" @click="addTask">新增</el-button>
          </div>
        </section>
        <section class="section">
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50">
            <span> 5 / 10</span>
          </el-progress>
        </section>
        <section class="section">
          <el-card class="box-card">
            <ul class="tasks">
              <li class="task" v-for="(task, index) in tasks" :key="index" >
                <span style="flex: 1;text-align: left">
                  <el-input
                    v-model="task.text"
                    v-if="editStatus"
                    placeholder="请输入待执行任务"
                    clearable>
                  </el-input> 
                  <span style="font-size: 24px;">{{ task.text }}</span>
                </span>
                <span>
                  <i v-show="!task.checked" class="icon el-icon-edit" style="margin-right: 15px; cursor: pointer;font-size:20px;"></i>
                  <i class="icon el-icon-delete-solid" style="margin-right: 15px; cursor: pointer;font-size:20px;" ></i>
                  <i v-show="!task.checked" class="icon el-icon-check" style="cursor: pointer;font-size:20px;" ></i>
                </span>
              </li>
            </ul>
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
import { ref, reactive } from 'vue'

import { getItem } from '@/utils/storage'

// 1. 添加待办事项
const add = tasks => {
  let input = ref('')
  
  const addTask = () => {
    const taskText = input.value && input.value.trim()
    if ( taskText.length ) {
      tasks.unshift({
        text: taskText,
        checked: false
      })
    }
    input.value = ''
  }

  return {
    input,
    addTask
  }
}

export default {
  name: 'Index',
  setup() {
    const editStatus = ref(false)
    const key = 'tasks'
    console.log(Storage, 'Storage')
    let tasks = reactive(getItem(key) || [])
    
    return {
      tasks,
      editStatus,
      ...add(tasks)
    }
  },
  directives: {
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
}

.main {
  display: flex!important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.section {
  margin-bottom: 20px;
}

.article {
  width: 40%;
}

.tasks {
  padding-left: 0px;
}

.task {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.icon:hover {
  color: #409EFF
}
</style>
