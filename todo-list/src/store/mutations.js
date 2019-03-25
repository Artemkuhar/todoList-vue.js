import * as types from './mutations_types'
export default {
  [types.CREATE_TASK](state, payload) {
    const nameValidation = [];
    state.todoListItems.forEach(task => {
      if (task.todoName == payload.todoName) {
        nameValidation.push(payload)
        alert('This task is already in task list, please change task name ');
      }
    });
    if (nameValidation.length == 0) {
      state.todoListItems.push(payload)
    }
  },
  [types.REMOVE_TASK](state, payload) {
    state.todoListItems.forEach((task, index) => {
      if (task.todoName == payload.todoName) {
        state.todoListItems.splice(index, 1)
      }
    });
  },
  [types.CHANGE_TASK_STATUS](state, payload) {
    state.todoListItems.forEach((task) => {
      if (task.todoName == payload.todoName) {
        task.todoStatus = !task.todoStatus
      }
    });
  },
  [types.CHOOSE_ALL_TASK](state) {
    let checkTasksStatus = []
    checkTasksStatus = state.showTasks.filter((task) => {
      return task.todoStatus === false;
    });
    let filter = (arr1, arr2) => {
      arr1.forEach(task => {
        arr2.forEach(item => {
          if (task.todoName === item.todoName) {
            task.todoStatus = !task.todoStatus
          }
        })
      })
    }
    if (checkTasksStatus.length > 0) {
      filter(state.todoListItems, checkTasksStatus)
    } else {
      filter(state.todoListItems, state.showTasks)
    }
  },
  [types.UPDATE_DISPAYED_TASKS](state, payload) {
    state.filterStatus = payload || state.filterStatus
    if (state.filterStatus == 'all') {
      state.showTasks = state.todoListItems.filter((task) => {
        return task
      });
    } else if (state.filterStatus == 'completed') {
      state.showTasks = state.todoListItems.filter((task) => {
        return task.todoStatus === true;
      });
    } else if (state.filterStatus == 'active') {
      state.showTasks = state.todoListItems.filter((task) => {
        return task.todoStatus === false;
      });
    }
  },
  [types.DELETE_COMPLETED_TASK](state) {
    state.todoListItems = state.todoListItems.filter((task) => {
      if (task.todoStatus === false) return task
    });
  },
}
