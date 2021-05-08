<template>
  <div class="home">
    {{dato.text}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions} from 'vuex'

export default {
  name: 'Detalle',
  components: {
    
  },
  computed: {
      ...mapState(['dato'])
  },
  methods: {
      ...mapActions(['getDato'])
  },
  created() {
    this.getDato(this.$route.params.id);
  }
}
</script>