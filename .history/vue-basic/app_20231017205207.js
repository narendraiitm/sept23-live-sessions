new Vue({
  // options object
  el: '#app',
  template: `<div>Name:{{name}}, Inst:{{inst}} 
  <button v-on:click='sayHello'>Click Me</button>
  </div>`,
  data: {
    name: 'Narendra2',
    inst: 'IITM',
  },
  methods: {
    sayHello() {
      alert('Hello from method')
    },
  },
})
