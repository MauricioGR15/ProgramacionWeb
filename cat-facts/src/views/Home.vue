<template>
  <div class="home">
  
    <div v-for="d in datos" :key="d._id"> 
        <router-link :to="`/detalle/${d._id}`"> 
            <h3>{{d.text}}</h3>
            <h5>{{d._id}}</h5>
        </router-link>
        <hr>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    ...mapState(['datos'])
  },
  methods: {
    ...mapActions(['getDatos'])
  },
  created() {
    this.getDatos()
  },
}
</script>
