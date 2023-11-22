const User = {
  template: `<div>
  <h1>Email: {{user.email}}</h1>
  <div>First Name: {{user.first_name}}</div>
  </div>`,
  props: ['user'],
}

new Vue({
  el: '#app',
  template: `<div>
  <User v-for="user in users" :user='user'></User>
  </div>`,
  data: {
    users: null,
  },
  components: {
    User,
  },
  async created() {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    console.log(data.data)
    this.users = data.data
  },
})

// beforeCreate
// CreateHook
// Before Mount
// Mounted Hook
