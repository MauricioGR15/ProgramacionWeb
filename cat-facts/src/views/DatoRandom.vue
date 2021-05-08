<template>
    <div class="home">
        <button @click="getDatoRandom">
            Obtener dato random
        </button>
        <p>{{datoRandom.text}}</p>
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
