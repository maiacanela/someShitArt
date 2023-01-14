<template>
  <b-container>
    <div id="About" class="img"/>
    <div class="contingut">
        <p class="puntos">...</p>
        <p class="titolAbout">Welcome everybody to our place. We are two young artists willing to create a world full of color and madness through our drawings. We want our art to reach positive people who want to enjoy it and value it like us.</p>
        <p class="puntos">...</p>
      </div>
  </b-container>
</template>


<style scoped>

.img{
  background-image: url("../img/nosaltres.jpg");
  height: 75vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
}

.puntos{
  font-size: 45px;
}

.titolAbout{
  color: white;
  font-size: 20px;
}

.contingut{
  padding: 140px;
  color: white;
}

    /* entra si te menos de 750px */
    @media screen and (max-width: 750px){
        .contingut{
          padding: 70px;
        }
    }

</style>