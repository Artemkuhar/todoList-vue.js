<template >
  <div class="task-footer">
    <p class="task-counter">1 item left</p>
    <div class="sorting-all">All</div>
    <div class="sorting-active">Active</div>
    <div class="sorting-completed">Completed</div>
    <p class="clear-completed-btn">Clear completed</p>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
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