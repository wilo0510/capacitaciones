<template>
    <div>
        <navegacion/>
        <div class="container-fluid">
            <div class="mb-5">
                <div class="box box-info">
                    <div class="box-body">
                        <div id="bannerImprime" class="text-center col-12 p-0">

                        </div>
                    </div>
                </div>
			</div>
            <div class="colorSecundario form-header btnRounded ml-5 mr-5 mt-3" style="margin-top:-2rem;">
                <h4 class="font-weight-500 my-0 py-0 p-3  titulosCard h4-relative"><i class="fas fa-check-circle"></i> MIS CAPACITACIONES DISPONIBLES <label class="estiloFirm">(PCAP-<label class="codVer"></label>)</label></h4>
            </div>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div id="cardCapacitaciones" class="col-md-12 col-sm-12 col-12">
                        <div class="cardMiscapacitaciones row d-flex justify-content-center mt-3" >
                        
					<div class="col-md-4 col-sm-12 col-12 mb-4">
						<div class="card card-cascade narrower">
							<div class="white-tex text-center">
								<h5 class="font-weight-500 my-1 h5-relative">CAPACITACIONES VIRTUALES</h5>
							</div>
							<div class="card-body text-center">
								<div class="capacitacion" @click="capacitacion">
                                    
									<label for="">CAPACITACION PRUEBA</label>
								</div>
								<div class="">
									
								</div>
							</div>
						</div>
					</div>
				</div>
                    </div>
                    

                  



                </div>            
                
			</div>
			
        </div>
    </div>
</template>
<script>
import navegacion from './navigation'
export default {
    name:'Home',
    components:{
        navegacion:navegacion
    },
    methods:{
        capacitacion(){
            this.$router.push("/capacitacion")//LLamo a capacitacion
        }
    }
    
}
</script>
<style scoped>

</style>