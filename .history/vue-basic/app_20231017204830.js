new Vue({
  // options object
  el: '#app',
  template: `<div>Name:{{name}}, Inst:{{inst}}</div>`,
  data: {
    name: 'Narendra2',
    inst: 'IITM',
  },
  methods: {
    sayHello() {
      return 'Hello'
    },
  },
})
