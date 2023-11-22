new Vue({
  // options object
  el: '#app',
  template: `<div>
  Name:{{fullName}}, Inst:{{inst}}
  <p v-if='hide'>Paragraph 1</p>
  <ul>
   <li v-for="(fruit, index) in fruits">{{index}}{{fruit}}</li>
  </ul>
  <button v-on:click='sayHello'>Click Me</button>
  </div>`,
  data: {
    firstName: 'Narendra2',
    lastName: 'Mishra',
    inst: 'IITM',
    hide: true,
    fruits: ['mango', 'banana'],
    error: 'danger',
  },
  methods: {
    sayHello() {
      alert('Hello from method')
    },
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
  },
  watch: {
    firstName(newVal) {
      alert(newVal)
    },
    lastName(newVal, oldVal) {
      alert(newVal)
      alert(oldVal)
    },
  },
})
