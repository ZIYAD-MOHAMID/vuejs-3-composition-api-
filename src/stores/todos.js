import { defineStore } from 'pinia'
export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        id: 1,
        text: 'clean room',
        isfinished: false
      }
    ],
    filter: 'all'
  }),
  getters: {
    filteredTodos() {
      if (this.filter === 'finished') {
        return this.todos.filter((todo) => todo.isfinished)
      } else if (this.filter === 'unfinished') {
        return this.todos.filter((todo) => !todo.isfinished)
      }
      return this.todos
    }
  },
  actions: {
    addTodo(text) {
      if (!text) return
      this.todos.push({
        id: Math.floor(Math.random() * 1000000),
        text,
        isfinished: false
      })
    },
    toggleTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id)
      this.todos[index].isfinished = !this.todos[index].isfinished
    },
    updateFilter(value) {
      this.filter = value
    }
  }
})

// import { storeToRefs } from 'pinia'
// import { useTodosStore } from './store/todos'

// const todosStore = useTodosStore()
// const { filteredTodos } = storeToRefs(todosStore)
// const { addTodo, toggleTodo, updateFilter } = todosStore

// const newTodo = ref('')
// const addNewTodo = (text) => {
//   addTodo(text)
//   newTodo.value = ''
// }

{
  /* <div class="yo">
<div>
  <button @click="() => updateFilter('all')">all</button>
  <button @click="() => updateFilter('finished')">finish</button>
  <button @click="() => updateFilter('unfinished')">unfinish</button>
</div>
<input v-model="newTodo" />
<button @click="() => addNewTodo(newTodo)">Add</button>
<div v-for="todo in filteredTodos" :key="todo">
  <h1 :style="todo.isfinished && { textDecoration: 'line-through' }">{{ todo.text }}</h1>
  <button @click="() => toggleTodo(todo.id)">toggle</button>
</div>
</div> */
}
