<template>
    <b-form @submit.prevent="guardarCategoria()">
        <Input
            v-model="categoria.nombre"
            id="nombre"
            titulo="Nombre"
            placeholder="Nombre"
            :maxlength="50"
            :error="erroresValidacion && !validacionNombre"
            mensajeError="El nombre es obligatorio"
            class="mb-2"
        />
        <b-button type="submit" class="m-4">Agregar</b-button>
    </b-form>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../components/Input.vue'

export default {
    name: 'AgregarCategoria',
    components: {
        Input,
    },
    data(){
        return {
            categoria: {
                nombre: ""
            },
            erroresValidacion: false,
        }
    },

    computed: {
        validacionNombre() {
            return (
                this.categoria.nombre !== undefined && this.categoria.nombre.trim() !== ""
            )
        }
    },
    methods: {
        ...mapActions(["crearCategoria"]),
        guardarCategoria() {
            if(this.validacionNombre){
                this.erroresValidacion = true

                this.crearCategoria({
                    params: this.categoria,
                    onComplete: response => {
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        })
                    },
                    onError: error => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje
                        })
                    }
                })
            }
            else {
                this.erroresValidacion = true
            }
        }
    },
}
</script>