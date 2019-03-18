<template >
  <div>
    <div
      class="task-item"
      v-for=" task of todoListItems"
      :key="task.name"
    >
      <div class="comlete-status">
        <img
          src="../../../assets/done.png"
          alt="ok"
          width="21px"
          height="21px"
          v-if="task.todoStatus"
        >
      </div>
      <p class="task-item-name">{{task.todoName}}</p>
      <div class="task-item-delete">+</div>
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