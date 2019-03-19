import * as types from './mutations_types'

export const createTask = ({ commit }, payload) => {
  try {
    const task = payload
    commit(types.CREATE_TASK, task)
  } catch (err) {
    console.log('error')
  }
}
export const removeTask = ({ commit }, payload) => {
  try {
    const index = payload
    commit(types.REMOVE_TASK, index)
  } catch (err) {
    console.log('error')
  }
}
export const changeStatus = ({ commit }, payload) => {
  try {
    commit(types.CHANGE_TASK_STATUS, payload)
  } catch (err) {
    console.log('error')
  }
}
export const chooseAllTasks = ({ commit }) => {
  try {
    commit(types.CHOOSE_ALL_TASK)
  } catch (err) {
    console.log('error')
  }
}