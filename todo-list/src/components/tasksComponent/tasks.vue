<template >
  <div class="task-block">
    <header>
      <div class="create-task">
        <input
          class="create-task-value"
          type="text"
          placeholder="What need to be done?"
        >
        <label for="create-task-value"></label>
      </div>
    </header>
    <section>
      <tasksList></tasksList>
    </section>
    <footer>
      <taskFooter></taskFooter>
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import tasksList from '../tasksComponent/taskList/tasksList';
import taskFooter from '../tasksComponent/tasksFooter/tasksFooter';
export default {
  name: 'tasks',
  components: {
    tasksList,
    taskFooter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({}),
  },
};
</script>
<style scoped>
@import './index.css';
</style>