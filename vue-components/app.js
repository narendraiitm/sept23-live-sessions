import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import NamedSlots from './components/NamedSlots.js'

new Vue({
  el: '#app',
  template: `
  <div>
    <Header name="Narendra" :country='country' :a='1' :b='2' @test-event='doSomething'/>
    <NavBar> <li> Shopping Cart </li><li> Fav </li></NavBar>
    <NavBar> <li> Users </li><li> Aprroved </li></NavBar>
    <NamedSlots>
           <p> This is slot2 </p>
           <p> This is default slot</p>
        <template v-slot:slot1>
           <p> This is slot1 </p>
        </template>
        <template v-slot:slot3>
           <p> This is slot3 </p>
        </template>
        <template v-slot:slot4>
           <p> This is slot4 </p>
        </template>
    </NamedSlots>
  </div>`,
  components: {
    Header,
    NavBar,
    NamedSlots,
  },
  data: {
    country: 'India',
  },
  methods: {
    doSomething(x, y) {
      console.log(x, y)
    },
  },
})
