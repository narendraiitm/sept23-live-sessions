new Vue({
  // options object
  el: '#app',
  template: `<div>Name, Inst:{{inst}} 
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
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName
    },
  },
})
