new Vue({
  // options object
  el: '#app',
  template: `<div>Name:{{fullName}}, Inst:{{inst}} 
  <button v-on:click='fullName'>Click Me</button>
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
