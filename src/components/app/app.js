import AuthMixin from '@/shared/mixins/auth.mixin'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  mixins: [
    AuthMixin
  ],
  components: {},
  props: {
    source: String,
  },
  data () {
    return {
      rightMenu: false,
      leftMenu: false,
      company: 'Hangar Data',
      menuItems: []
    }
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapGetters([
      'getCurrentReport'
    ]),
    ...mapActions([
      'setCurrentReport'
    ]),
    openLeftMenu () {
      let user = this.getUser()
      if (user && !this.menuItems.length) {
        this.menuItems = user.menu
      }
      this.leftMenu = !this.leftMenu
    },
    clickItem (item) {
      let report = {
        title: item.title,
        src: item.src
      }
      this.setCurrentReport(report)
    }
  }
}
