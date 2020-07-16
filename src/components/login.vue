<template>
   <div class="row justify-content-center"  style="margin-top:6rem;">
    <div class="card-body col-md-3 col-sm-6 col-10">

        <!-- Header -->
        <div class="form-header row justify-content-center" style="padding:0.1rem;margin-bottom: 1.5rem; ">
            <h3 class="font-weight-500 my-2 py-1">
                <i class="fas fa-user"></i> Login
            </h3>
        </div>

        <form id="formLogin">
            <div class="col-md-12 col-sm-12 col-12 mb-3">
                <label class="labelInputEstilo"></label>
                <div class="md-form md-outline row ">
                    <i class="fas fa-passport prefix col-2 mt-2 mr-1"></i>
                    <select class="browser-default custom-select form-control col-9" 
                    v-model="tipoDocumento" autofocus style="width: 87%;">
                        <option value="" selected>Tipo de documento</option>
                        <option value="CC" >Cédula</option>
                        <option value="TI">Tarjeta Identidad</option>
                        <option value="CE">Cédula Extranjería</option>
                        <option value="PEP">Permiso Especial de Permanencia</option>    
                        <option value="PA">Pasaporte</option>
                    </select>
                </div>
            </div>
            
            <div class="col-md-12 col-sm-12 col-12 ">
                <label class="labelInputEstilo"></label>
                <div class="md-form md-outline row">
                    <i class="fas fa-portrait prefix col-2 mt-2 mr-1"></i>
                <input type="number"
                v-model="numeroDocumento"                  
                class="form-control col-9" placeholder="Numero" autofocus />
                </div>
            </div>
            
            <div class="col-md-12 col-sm-12 col-12 mb-3">
                <label class="labelInputEstilo"></label>
                <div class="md-form md-outline row ">
                    <i class="fas fa-key prefix col-2 mt-2 mr-1"></i>
                <input type="password" 
                v-model="contraseña" 
                class="form-control col-9" placeholder="Contraseña" />
                </div>
            </div>
            

            <div class="custom-control custom-checkbox text-center">
                <input id="showPassword" type="checkbox" class="custom-control-input" />
                <label class="custom-control-label" for="showPassword">Mostrar contraseña</label>
            </div>


            <div class="text-center">
                <button type="button" id="btnEnviar" @click="ingresar()" class="btn btn-md text-white  mt-3 mb-3" style="background-color: #3d3935;">
                    Ingresar
                </button>
                <div class="inline-ul text-center d-flex justify-content-center">
                    <a class="p-1 m-1 fa-lg fb-ic" href="https://www.fb.com/clubdeldroguista" target="_blank">
                        <i class="fab fa-facebook letrasColorSecundario"></i>
                    </a>
                    <a class="p-1 m-1 fa-lg ins-ic" href="https://www.instagram.com/clubdeldroguista" target="_blank">
                        <i class="fab fa-instagram letrasColorSecundario"> </i>
                    </a>
                    <a class="p-1 m-1 fa-lg ins-ic" href="https://www.youtube.com/channel/UCKyXyPRtmhd2O2KQxqJEvJw/videos?view=0&sort=dd&shelf_id=0" target="_blank">
                        <i class="fab fa-youtube letrasColorSecundario"></i>
                    </a>
                </div>
            </div>

        </form>




    </div>
</div>
<!-- Form with header -->
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      tipoDocumento:null,
      numeroDocumento:null,
      contraseña:null
    }
  },
  methods:{
    ingresar(){
      if(this.tipoDocumento=="CC" && this.numeroDocumento==1016066005 && this.contraseña==123){
        this.$router.push("/")//LLamo a la pagina principal
      }else{
        console.log("ingreso inválido")
      }
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
