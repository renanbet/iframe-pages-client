import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
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
  methods: {
    ...mapGetters([
      'getCurrentReport'
    ]),
    ...mapActions([
      'setCurrentReport'
    ]),
    onLoad () {
      console.log('load')
    }
  }
}
