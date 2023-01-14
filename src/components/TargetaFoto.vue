<template>
  <div>
      <b-card
        :img-src="img"
        tag="proyecto"
        img-bottom>
          <b-card-text>
            {{autor}} 

          </b-card-text>

         

      </b-card>
      
  </div>
</template>

<script>
export default {
  props: ["id", "autor", "img"]
};
</script>
