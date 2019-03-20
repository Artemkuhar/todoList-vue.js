<template >
  <div>
    <div class="task-footer">
      <p class="task-counter">{{`${todoListItems.length} item${todoListItems.length > 1 ? 's' : ''}`}} left</p>
      <div
        class="sorting-all"
        @click="updateTasksList('all')"
      >All</div>
      <div
        class="sorting-active"
        @click="updateTasksList('active')"
      >Active</div>
      <div
        class="sorting-completed"
        @click="updateTasksList('completed')"
      >Completed</div>
      <p class="clear-completed-btn">Clear completed</p>
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
    return {};
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
    }),
  },
  methods: {
    ...mapActions(['updateDisplayedTasks']),
    updateTasksList(filterName) {
      console.log(filterName);
      this.updateDisplayedTasks(filterName);
    },
  },
};
</script>
<style scoped>
@import './index.css';
</style>