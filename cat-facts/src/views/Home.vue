<template>
  <div class="home">
  
    <div class="card" v-for="d in datos" :key="d._id"> 
        <router-link :to="`/detalle/${d._id}`"> 
            <h3>{{d.text}}</h3>
            <p>{{d._id}}</p>
        </router-link>
        
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

<style scoped>
.card {
  height: auto;
  width: 500px;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 3px 3px 1rem rgba(125,125,125,0.5);
  border-radius: 10px;
}

.card:hover {
  animation: zoom-card 2s ease both
}

.card a {
  color: midnightblue;
  text-decoration: none;
}

.card p {
  color: darkorchid;
  font-size: 0.9rem;
}

@keyframes zoom-card {
  50%{
    box-shadow: 4px 4px 0.8rem rgba(125,125,125,0.7);
  }
  100%{
    box-shadow: 5px 5px 0.7rem rgba(125,125,125,0.7);
  }
}
</style>