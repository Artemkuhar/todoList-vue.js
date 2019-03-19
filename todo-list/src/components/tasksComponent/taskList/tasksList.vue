<template >
  <div>
    <div
      class="task-item"
      v-for=" (task, index) of todoListItems"
      :key="task.name"
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
      <p
        class="task-item-name"
        :class="{'task-item-name-inactive': task.todoStatus }"
      >{{task.todoName}}</p>
      <div
        class="task-item-delete"
        @click="deleteTask(index)"
      >+</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
      selectListTasks: state => state.state.selectListTasks,
    }),
  },
  methods: {
    ...mapActions(['removeTask', 'changeStatus']),
    deleteTask(index) {
      this.removeTask(index);
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