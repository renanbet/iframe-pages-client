import navbar from '@/components/layout/navbar'
import AuthMixin from '@/shared/mixins/auth.mixin'

export default {
  name: 'App',
  components: {
    navbar
  },
  mixins: [
    AuthMixin
  ],
  data () {
    return {
      dark: false,
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      menuItems: [],
      user: {
        name: 'Renan Bet Rodrigues'
      },
      title: '',
      copy: 'Hangar Data'
    }
  },
  computed: {
    items () {
      return this.menuItems
    }
  },
  mounted () {
    this.$root.$on('setMenu', (data) => {
      this.menuItems = data
    })
    let user = this.getUser()
    this.menuItems = user.menu
    this.set
  },
  methods: {
    darken (dark) {
      this.dark = dark
    }
  }
}
