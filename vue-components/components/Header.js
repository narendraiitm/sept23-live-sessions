export default {
  template: `<div> 
  This is header {{name}} {{country}} {{sum}}
  <button @click="$emit('test-event', x, 5)"> Click Me</button>
  </div>`,
  props: ['name', 'country', 'a', 'b'],
  data() {
    return {
      x: 2,
    }
  },
  computed: {
    sum() {
      return this.a + this.b
    },
  },
}
