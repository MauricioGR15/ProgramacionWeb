<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="info" class="px-4">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/tickets">Tickets</b-nav-item>
          <b-nav-item to="/categorias-tickets">Categorías de Tickets</b-nav-item>
          <b-nav-item to="/personal">Personal</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <router-view />
      <notifications />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
