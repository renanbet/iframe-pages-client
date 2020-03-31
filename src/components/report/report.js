import AuthMixin from '@/shared/mixins/auth.mixin'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'report',
  mixins: [
    AuthMixin
  ],
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    report () {
      return this.getCurrentReport()
    }
  },
  mounted () {
    let user = this.getUser()
    if (user) {
      this.setCurrentReport(user.menu[0])
    }
  },
  methods: {
    ...mapGetters([
      'getCurrentReport'
    ]),
    ...mapActions([
      'setCurrentReport'
    ])
  }
}
