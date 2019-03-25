<template >
  <div>
    <div class="task-footer">
      <p class="task-counter">{{`${activeTasks.length} item${activeTasks.length > 1 ? 's' : ''}`}} left</p>
      <div
        class="sorting-all"
        :class="{'sorting-focus-value': visibility == 'all' }"
        @click="updateTasksList('all')"
      >All</div>
      <div
        class="sorting-active"
        :class="{'sorting-focus-value': visibility == 'active' }"
        @click="updateTasksList('active')"
      >Active</div>
      <div
        class="sorting-completed"
        :class="{'sorting-focus-value': visibility == 'completed' }"
        @click="updateTasksList('completed')"
      >Completed</div>
      <div
        class="clear-completed-btn"
        :class="{'clear-completed-active': completedTask.length > 0 }"
        @click="deleteCompletedTasks()"
      >Clear completed</div>
    </div>
    <div class="footer-block-shadow">
      <div class="footer-block-1"></div>
      <div class="footer-block-2"></div>
    </div>
  </div>

</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      activeTasks: [],
      visibility: 'all',
      completedTask: [],
    };
  },
  watch: {
    todoListItems() {
      this.leftItems();
      this.chekCompletedTask();
    },
    showTasks() {
      this.leftItems();
      this.chekCompletedTask();
    },
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
      showTasks: state => state.state.showTasks,
    }),
  },
  methods: {
    ...mapActions(['updateDisplayedTasks', 'deleteCompleted']),
    updateTasksList(filterName) {
      this.updateDisplayedTasks(filterName);
      this.visibility = filterName;
    },
    leftItems() {
      this.activeTasks = this.todoListItems.filter(task => {
        if (task.todoStatus === false) return task;
      });
    },
    chekCompletedTask() {
      this.completedTask = this.todoListItems.filter(task => {
        if (task.todoStatus === true) return task;
      });
      console.log(this.completedTask);
    },
    deleteCompletedTasks() {
      this.deleteCompleted();
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>