<template >
  <div>
    <div
      class="task-item"
      v-for=" task of showTasks"
      :key="task.name"
    >
      <label class="statusLable">
        <input
          id="taskStatus"
          type="checkbox"
          :value="task"
        >
        <div
          class="comlete-status"
          @click="changeTaskStatus(task)"
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
        @click="deleteTask(task)"
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
  watch: {
    todoListItems() {
      this.updateDisplayedTasks();
    },
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
      showTasks: state => state.state.showTasks,
    }),
  },
  methods: {
    ...mapActions(['removeTask', 'changeStatus', 'updateDisplayedTasks']),
    deleteTask(task) {
      this.removeTask(task);
    },
    changeTaskStatus(task) {
      this.changeStatus(task);
      this.updateDisplayedTasks();
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>