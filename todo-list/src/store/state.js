import * as actions from './actions'
import mutations from './mutations'
export default {
  state: {
    todoListItems: [],
    selectListTasks: [],
    showTasks: [],
    activeTasks: [],
  },
  mutations,
  actions
}
