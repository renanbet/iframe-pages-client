import navbar from '@/components/layout/navbar'

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      dark: false,
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Tiger',
          src: 'https://www.pexels.com/search/tiger'
        },
        {
          icon: 'dashboard',
          title: 'Lion',
          src: 'https://www.pexels.com/search/lion'
        }
      ],
      months: [
      ],
      user: {
        name: 'Renan Bet Rodrigues'
      },
      title: '',
      copy: 'Hangar Data'
    }
  },
  mounted () {
  },
  methods: {
    setMonth (month) {
      this.currentMonth = month.name
      this.rightDrawer = false
    },
    darken (dark) {
      this.dark = dark
    }
  }
}
