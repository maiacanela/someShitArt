<template>
  <div>
    <h1 class="txtFoto">Our drawings</h1> 
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="dibuix in dibuixos" :key="dibuix.id">
             <TargetaFoto :autor="dibuix.autor" :img="dibuix.img" :titol="dibuix.titol"></TargetaFoto> 
            </div>
           </b-card-group>
       </div>
 </div>
</template>

<script>
import TargetaFoto from '../components/TargetaFoto.vue' 
const llistaDibuixos = '../dadesDibuixos.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'Drawings'
    }
  },
  components: {
        TargetaFoto
      },
  data() {
      return {
        dibuixos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
        async fetchData() {
          const res = await fetch (llistaDibuixos);
          const val= await res.json();
          this.dibuixos=val;
        }
    }
  }
</script>


<style>
.txtFoto{
  margin-top:30px;
}
</style>
