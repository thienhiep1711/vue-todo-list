import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: 'all',
    todos: [
      {
        id: 1,
        title: 'Finish Vue Screencast',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
        editing: false
      },
      {
        id: 3,
        title: 'Style vue todo app',
        completed: true,
        editing: false
      }
    ]
  },
  getters: {
    remaining (state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining (state, getters) {
      return getters.remaining !== 0
    },
    todosFiltered (state) {
      if (state.filter === 'all') {
        return state.todos
      } else if (state.filter === 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter === 'completed') {
        console.log(state.todos.filter(todo => todo.completed))
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    showClearCompletedButton (state) {
      return state.todos.filter(todo => todo.completed).length > 0
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
