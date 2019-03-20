import * as types from './mutations_types'
export default {
  [types.CREATE_TASK](state, payload) {
    state.todoListItems.push(payload)
  },
  [types.REMOVE_TASK](state, payload) {
    state.todoListItems.splice(payload.index, 1)
    state.selectListTasks.forEach((element, index) => {
      if (element.todoName == payload.task.todoName) {
        state.selectListTasks.splice(index, 1)
      }
    })
  },
  [types.CHANGE_TASK_STATUS](state, payload) {
    state.todoListItems[payload.index].todoStatus = !state.todoListItems[payload.index].todoStatus
  },
  [types.CHOOSE_ALL_TASK](state) {
    if (state.selectListTasks.length === state.todoListItems.length) {
      state.selectListTasks = []
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
  [types.UPDATE_SELECT_TASK](state, payload) {
    state.selectListTasks = payload
  },
  [types.UPDATE_DISPAYED_TASKS](state, payload) {
    if (payload == 'completed') {
      state.showTasks = state.selectListTasks
    } else if (payload == 'all') {
      state.showTasks = state.todoListItems
    } else if (payload == 'active') {
      state.activeTasks = state.todoListItems
        .filter(x => state.selectListTasks.indexOf(x) == -1)
        .concat(state.selectListTasks.filter(x => state.todoListItems.indexOf(x) == -1));
      state.showTasks = state.activeTasks
    }
  },
}
