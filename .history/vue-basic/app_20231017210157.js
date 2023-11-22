new Vue({
  // options object
  el: '#app',
  template: `<div>Name:{{sayHello}}, Inst:{{inst}} 
  <button v-on:click='sayHello'>Click Me</button>
  </div>`,
  data: {
    firstName: 'Narendra2',
    lastName: 'Mishra',
    inst: 'IITM',
  },
  methods: {
    sayHello() {
      alert('Hello from method')
    },
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
  },
  computed: {},
})
