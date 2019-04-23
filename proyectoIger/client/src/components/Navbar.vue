<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">Prueba</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">LogIn</b-nav-item>
      <b-nav-item href="#">Register</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
    export default {
    name: 'Navbar'
    };
</script>