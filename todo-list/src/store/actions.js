import * as types from './mutations_types'

export const createTask = ({ commit }, payload) => {
  try {
    const task = payload
    setTimeout(() => {
      commit(types.CREATE_TASK, task)
    }, 300)
  } catch (err) {
    console.log('error')
  }
}