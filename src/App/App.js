import navbar from '@/components/layout/navbar'
import AuthMixin from '@/shared/mixins/auth.mixin'
import { mapGetters, mapActions } from 'vuex'

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
    this.$root.$on('loadUser', (user) => {
      this.menuItems = user.menu
    })
    this.loadUser()
  },
  methods: {
    ...mapGetters([
      'getCurrentReport'
    ]),
    ...mapActions([
      'setCurrentReport'
    ]),
    changePage (item) {
      let report = {
        title: item.title,
        src: item.src
      }
      this.setCurrentReport(report)
    },
    loadUser () {
      let user = this.getUser()
      if (user) {
        this.menuItems = user.menu
      }
    },
    darken (dark) {
      this.dark = dark
    }
  }
}
