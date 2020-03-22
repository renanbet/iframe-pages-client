import { mapGetters, mapActions } from 'vuex'
import AuthMixin from '@/shared/mixins/auth.mixin'

export default {
  name: 'home',
  components: {},
  mixins: [
    AuthMixin
  ],
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
    this.setCurrentReport(user.menu[0])
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
