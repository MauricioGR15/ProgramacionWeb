<template>
  <div class="card">
    <p class="id">{{`ID: ${dato._id} `}}</p>
    <h4>Fact</h4>
    <p class="text">{{dato.text}}</p>
    <h4>Fecha de creación</h4>
    <p>{{dato.createdAt}}</p>
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

<style>

h4 {
  font-size: 0.8rem;
}

.id{
  font-size: 1.2rem;
  font-weight: 600;
}

.text{
  font-size: 1.6rem;
  font-weight: 500;
  color: purple;
}


</style>