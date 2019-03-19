import * as types from './mutations_types'
export default {
  [types.CREATE_TASK](state, payload) {
    state.todoListItems.push(payload)
  },
  [types.REMOVE_TASK](state, payload) {
    state.todoListItems.splice(payload, 1)
  },
  [types.CHANGE_TASK_STATUS](state, payload) {
    state.todoListItems[payload.index].todoStatus = !state.todoListItems[payload.index].todoStatus
    const task = payload.task
    if (task.todoStatus == true) {
      state.selectListTasks.push(task)
    } else {
      state.selectListTasks.forEach((element, index) => {
        if (element.todoName === task.todoName) {
          state.selectListTasks.splice(index, 1)
        }
      });
    }
  },
  [types.CHOOSE_ALL_TASK](state) {
    if (state.selectListTasks.length == state.todoListItems.length) {
      state.selectListTasks.length = []
      state.todoListItems.forEach(element => {
        element.todoStatus = false
      })
    } else {
      state.todoListItems.forEach(element => {
        if (element.todoStatus === false) {
          state.selectListTasks.push(element)
          element.todoStatus = true
        }
      })
    }
  },

}
