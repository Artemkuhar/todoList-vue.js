<template >
  <div class="task-block">
    <header>
      <div class="create-task">
        <input
          class="create-task-value"
          :class="{'change-label-color': labelColor}"
          type="text"
          v-model="newTask"
          placeholder="What need to be done?"
          @keyup="createNewTask()"
        >
        <label
          for="create-task-value"
          v-if="todoListItems.length > 0"
          @click="chooseAll()"
        ></label>
      </div>
    </header>
    <section>
      <tasksList></tasksList>
    </section>
    <footer>
      <taskFooter v-if="todoListItems.length > 0"></taskFooter>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import tasksList from '../tasksComponent/taskList/tasksList';
import taskFooter from '../tasksComponent/tasksFooter/tasksFooter';
export default {
  name: 'tasks',
  components: {
    tasksList,
    taskFooter,
  },
  data() {
    return {
      newTask: '',
      labelColor: false,
    };
  },
  watch: {
    todoListItems() {
      this.updateLabelColor();
    },
    showTasks() {
      this.updateLabelColor();
    },
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
      showTasks: state => state.state.showTasks,
    }),
  },
  methods: {
    ...mapActions(['createTask', 'chooseAllTasks', 'updateDisplayedTasks']),
    createNewTask() {
      if (event.keyCode == 13 && this.newTask != '') {
        let task = {
          todoName: this.newTask,
          todoStatus: false,
        };
        this.createTask(task);
        this.newTask = '';
      }
    },
    chooseAll() {
      this.chooseAllTasks();
      this.updateLabelColor();
      this.updateDisplayedTasks();
    },
    updateLabelColor() {
      let checkArray = this.showTasks.filter(task => {
        return task.todoStatus === false;
      });
      checkArray.length > 0 ? (this.labelColor = false) : (this.labelColor = true);
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>