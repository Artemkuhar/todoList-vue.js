<template >
  <div class="task-item">
    <div class="comlete-status">
      <img
        src="../../../assets/done.png"
        alt="ok"
        width="21px"
        height="21px"
      >
    </div>
    <p class="task-item-name">123</p>
    <div class="task-item-delete">+</div>
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