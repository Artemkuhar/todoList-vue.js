<template >
  <div class="task-block">
    <header>
      <div class="create-task">
        <input
          class="create-task-value"
          type="text"
          v-model="newTask"
          placeholder="What need to be done?"
          @keyup="createNewTask()"
        >
        <label for="create-task-value"></label>
      </div>
      {{newTask}}
    </header>
    <section>
      <tasksList></tasksList>
    </section>
    <footer>
      <taskFooter v-show="true"></taskFooter>
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
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    ...mapActions(['createTask']),
    createNewTask() {
      if (event.keyCode == 13) {
        let task = {
          todoName: this.newTask,
          todoStatus: false,
        };
        this.createTask(task);
      }
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>