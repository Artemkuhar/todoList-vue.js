import * as types from './mutations_types'
export default {
  [types.CREATE_TASK](state, payload) {
    state.showSpinner = false
    state.todoListItems.push(payload)
  },
}
