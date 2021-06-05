<template>
  <Table :items="categorias" :fields="campos" :busy="loading">
    <template slot="actions" slot-scope="{ item }">
      <b-button @click="onEliminar(item)">Eliminar</b-button>
    </template>
  </Table>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";

export default {
  name: "TablaCategorias",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "id", label: "Id" },
        { key: "nombre" },
        { key: "actions", label: "Eliminar" },
      ],
    };
  },
  computed: {
    ...mapState(["categorias", "loading"]),
  },
  methods: {
    ...mapActions(["obtenerCategorias", "eliminarCategoria"]),
    onEliminar(item) {
      this.$bvModal
      .msgBoxConfirm("Esta opción no se puede deshacer.", {
        title: "Eliminar categoría",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "Aceptar",
        cancelTitle: "Cancelar",
        footerClass: "p-2",
        centered: true,
      })
        .then((value) => {
          if (value) {
            this.eliminarCategoria({
              id: item.item.id,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
                setTimeout(() => this.setPersonas(), 1000);
              },
            });
          }
        })
        .catch((err) => { // eslint-disable-line no-unused-vars
          // An error occurred
        });
    },
  },
  mounted(){
      this.obtenerCategorias()
  }
};
</script>