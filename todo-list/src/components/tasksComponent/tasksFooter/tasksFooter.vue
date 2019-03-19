<template >
  <div>
    <div class="task-footer">
      <p class="task-counter">{{`${todoListItems.length} item${todoListItems.length > 1 ? 's' : ''}`}} left</p>
      <div class="sorting-all">All</div>
      <div class="sorting-active">Active</div>
      <div class="sorting-completed">Completed</div>
      <p class="clear-completed-btn">Clear completed</p>
    </div>
    <div class="footer-block-shadow">
      <div class="footer-block-1"></div>
      <div class="footer-block-2"></div>
    </div>
  </div>

</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      todoListItems: state => state.state.todoListItems,
    }),
  },
};
</script>
<style scoped>
@import './index.css';
</style>