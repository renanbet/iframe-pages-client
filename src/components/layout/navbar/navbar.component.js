import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'navbar',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: []
    },
    user: {
      type: Object,
      default: {}
    },
    itemsRight : {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      darken: false,
      show: false,
      breadcrumbsItems: [
      {
        text: 'Dashboard',
        disabled: true,
        href: 'dashboard'
      }],
      currentPage: ''
    }
  },
  computed: {
    firstName: function () {
      let arr = this.user.name.split(' ')
      return arr[0]
    }
  },
  mounted () {
    this.showNavbar()
  },
  methods: {
    ...mapGetters([
      'getCurrentReport'
    ]),
    ...mapActions([
      'setCurrentReport'
    ]),
    loadReport (item) {
      let report = {
        title: item.title,
        src: item.src
      }
      this.setCurrentReport(report)
    },
    showNavbar () {
      const routeName = this.$router.currentRoute.name
      if (/Login/.test(routeName)) {
        this.hideNavbar()
        return
      }

      // if (!this.authService.isAuthenticated()) {
      //   return
      // }

      this.userName = 'guest'
      this.show = true
      this.currentPage = this.$route.name
    },
    hideNavbar () {
      this.show = false
    },
    logout () {
      this.rightDrawer = false
      this.$router.push('/')
    }
  },
  watch: {
    darken: function (val, old) {
      this.$emit('darken', val)
    },
    $route: function (to, from) {
      if (/Login/.test(to.name) || /Criar Conta/.test(to.name)) {
        this.show = false
        return
      }

      if (/Login/.test(from.name)) {
        this.loadReport(this.items[0])
        this.show = true
      }

      this.currentPage = to.name
    }
  }
}
