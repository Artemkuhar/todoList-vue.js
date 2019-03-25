import * as actions from './actions'
import mutations from './mutations'
export default {
  state: {
    todoListItems: [],
    showTasks: [],
    filterStatus: 'all',
  },
  mutations,
  actions
}
