<template >
  <div>
    <div
      class="task-item"
      v-for=" (task, index) of tasks"
      :key="task.name"
    >
      <label class="statusLable">
        <input
          id="taskStatus"
          type="checkbox"
          :value="task"
          v-model="selectTasks"
        >
        <div
          class="comlete-status"
          @click="changeTaskStatus(task,index)"
        >
          <img
            src="../../../assets/done.png"
            alt="ok"
            width="21px"
            height="21px"
            v-if="task.todoStatus"
          >
        </div>
      </label>
      <p
        class="task-item-name"
        :class="{'task-item-name-inactive': task.todoStatus }"
      >{{task.todoName}}</p>
      <div
        class="task-item-delete"
        @click="deleteTask(index,task)"
      >+</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      selectTasks: [],
      tasks: [],
    };
  },
  watch: {
    selectTasks() {
      this.sendSelectTasks(this.selectTasks);
    },
    selectListTasks() {
      this.selectTasks = this.selectListTasks;
    },
    todoListItems() {
      this.tasks = this.todoListItems;
    },
    showTasks() {
      this.tasks = this.showTasks;
    },
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
      selectListTasks: state => state.state.selectListTasks,
      showTasks: state => state.state.showTasks,
    }),
  },
  methods: {
    ...mapActions(['removeTask', 'changeStatus', 'sendSelectTasks']),
    deleteTask(index, task) {
      let taskInfo = {
        task: task,
        index: index,
      };
      this.removeTask(taskInfo);
    },
    changeTaskStatus(task, index) {
      let taskInfo = {
        task: task,
        index: index,
      };
      this.changeStatus(taskInfo);
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>