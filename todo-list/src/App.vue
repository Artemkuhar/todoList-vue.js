<template>
  <div id="app">
    <h1>todos</h1>
    <TasksComponent></TasksComponent>
  </div>
</template>

<script>
import TasksComponent from './components/tasksComponent/tasks.vue';
export default {
  components: {
    TasksComponent,
  },
  name: 'app',
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100vh;
  background-color: #eee;
}

h1,
h2 {
  font-size: 100px;
  font-weight: normal;
  color: rgba(175, 47, 47, 0.15);
}
</style>
