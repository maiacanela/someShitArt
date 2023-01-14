<template>
  <div>
    <h1 class="txtFoto">Our photos</h1> 
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="foto in fotos" :key="foto.id">
             <TargetaFoto :autor="foto.autor" :img="foto.img" :titol="foto.titol"></TargetaFoto> 
            </div>
           </b-card-group>
       </div>
 </div>
</template>

<script>
import TargetaFoto from '../components/TargetaFoto.vue' 
const llistaFotografies = '../dadesFotografies.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'Photography'
    }
  },
  components: {
        TargetaFoto
      },
  data() {
      return {
        fotos:[],
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
          const res = await fetch (llistaFotografies);
          const val= await res.json();
          this.fotos=val;
        }
    }
  }
</script>


<style>
.txtFoto{
  margin-top:30px;
}
</style>
