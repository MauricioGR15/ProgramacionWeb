<template>
  <div class="m-4">
    <h2>Categorias de tickets</h2>
    <b-tabs content-class="mt-3">
        <b-tab title="Catálogo" active><TablaCategorias/></b-tab>     
        <b-tab title="Agregar"><AgregarCategoria/></b-tab>       
    </b-tabs>
  </div>
</template>

<script>
import AgregarCategoria from '../components/AgregarCategoria.vue'
import TablaCategorias from '../components/TablaCategorias.vue'

export default {
  name: 'CategoriaTickets',
  components: {
    AgregarCategoria,
    TablaCategorias
  },
}
</script>