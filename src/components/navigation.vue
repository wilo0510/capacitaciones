<template>
    
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-nav class="mr-auto">
                <!-- Using 'button-content' slot -->
                <b-navbar-brand v-b-toggle.sidebar-1><span class="navbar-toggler-icon"></span></b-navbar-brand>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                
                </button>
                <b-sidebar id="sidebar-1"  
                shadow
                :backdrop-variant="variant"
                backdrop>
                <div class="px-3 py-2">                    
                    
                </div>
                </b-sidebar>
               
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>Usuario</em>
                </template>                
                <b-dropdown-item href="#">Salir</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    
</template>
<script>
export default {
    name:'Navigation',
    data(){
        return{
            variant: 'dark',
        }
    }
}
</script>
<style  scoped>

</style>