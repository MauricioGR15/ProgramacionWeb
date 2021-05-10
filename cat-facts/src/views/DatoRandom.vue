<template>
    <div class="home">
        <button id="button-random" @click="getDatoRandom">
            Obtener dato random
        </button>
        <hr>
        <div class="card" v-if="datoRandom">
            <h2>{{datoRandom.type}}</h2>
            <p class="text">{{datoRandom.text}}</p>
            <p v-if="datoRandom.status['verified']" id="verified">{{datoRandom.status['verified']}}</p>
            <p v-else id="unverified">No verified</p>
        </div>
        
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Home",
    components: {},
    computed: {
        ...mapState(["datoRandom"]),
    },
    methods: {
        ...mapActions(["getDatoRandom"]),
    },
};
</script>


<style>

#button-random{
    margin: 2rem;
    height: 50px;
    width: auto;
    color: violet;
    border-radius: 10px;
    border: 1px solid violet;
    box-shadow: 2px 2px 2px rgba(155, 155, 155, 0.5);
    background-color: white;
    
}

#button-random:hover{
    animation: shadow-card 0.5s ease both;
}

#verified {
    color: green;
    font-size: 1.2rem;
}

#unverified{
    color: red;
    font-size: 1.2rem;
}

</style>