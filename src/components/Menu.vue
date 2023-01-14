<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand class="titul">
    <h2 class="titol">SOME SHIT<span> ART </span></h2>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="nav-link" to="/home">Home</b-nav-item>
            <b-nav-item class="nav-link" to="/about">About</b-nav-item>
            <b-nav-item class="nav-link" to="/photography">Photography</b-nav-item>
            <b-nav-item class="nav-link" to="/drawings">Drawings</b-nav-item>
            <b-nav-item class="nav-link" to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>



<style scoped>

@font-face{
  font-family: font-titol;
  src:url(../fonts/Stora.ttf);
}

.titol{
  font-family: font-titol;
  cursor: pointer;
}

span{
  color: #FE8989
}


</style>

