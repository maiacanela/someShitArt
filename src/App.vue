<template>
  <div id="app">

      <Menu /> <!-- se añade el menú -->
      <router-view/>
    <Footer />

  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>

/* Etiqueta per centrar el text en totes les pagines. */
#app {
  text-align: center;
}

</style>
