import * as actions from './actions'
import mutations from './mutations'
export default {
  state: {
    todoListItems: [
      {
        todoName: 'name',
        todoStatus: false,
      },
      {
        todoName: 'name2',
        todoStatus: true,
      }
    ]
  },
  mutations,
  actions
}
