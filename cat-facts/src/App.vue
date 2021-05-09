<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/dato-random">Dato Random</router-link>
        </div>
        <div id="wrapper">
          <router-view />
          </div>
    </div>
</template>

<style>
#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    background-color: black;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
}

#nav a {
    text-decoration: none;
    color: white;
    padding: 20px;
}

#nav a:hover {
    animation: navAnimation 1s ease-in-out both;
}

#wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

@keyframes navAnimation {
    100% {
        color: violet;
        font-size: 1.6rem;
    }
}


</style>
