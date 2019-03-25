import * as types from './mutations_types'

export const createTask = ({ commit }, payload) => {
  try {
    commit(types.CREATE_TASK, payload)
  } catch (err) {
    console.log('error')
  }
}
export const removeTask = ({ commit }, payload) => {
  try {
    commit(types.REMOVE_TASK, payload)
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
export const updateDisplayedTasks = ({ commit }, payload) => {
  try {
    commit(types.UPDATE_DISPAYED_TASKS, payload)
  } catch (err) {
    console.log('error')
  }
}
export const deleteCompleted = ({ commit }) => {
  try {
    commit(types.DELETE_COMPLETED_TASK)
  } catch (err) {
    console.log('error')
  }
}