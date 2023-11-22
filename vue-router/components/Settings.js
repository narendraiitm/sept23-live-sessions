export default {
  template: `<div> 
  <button @click='goToHome'> Go Home</button>
  <button @click='goBack'> Go Back</button>
  <button @click='goForward'> Go Forward </button>
  <button @click='refresh'> Refresh The page </button>
  This is Setting</div>`,
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goBack() {
      this.$router.go(-2000)
    },
    goForward() {
      this.$router.go(1)
    },
    refresh() {
      this.$router.go(0)
    },
  },
}

// home->profile->setting
