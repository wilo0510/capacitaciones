<template>
  <div id="app">
    <router-view></router-view>    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
       
  }
}
</script>

<style>
  :root {
      --colorprimario: rgba(0,55,112,1);
      --colorsecundario: rgba(118,184,42,1);
      --colorAdvertencia: rgba(241,235,53,1);
      --colorterciario: rgb(137, 190, 76,1);
  }
  #app {
    font-family: 'Montserrat', sans-serif !important;
  }
  div > .labelInputEstilo {
      font-size: 0.8em;
      font-weight: normal !important;
  }
  div > .labelInputEstilo + div > i + input, div > .labelInputEstilo + div > input {
      border: 2px solid #b7b7b7 !important;    
      box-shadow: 0px 5px 5px 1px #707070 !important;
  }
  div > .labelInputEstilo + div > i, div>i {
      color: var(--colorprimario) !important;
  }
  div .card-body{
    background: linear-gradient(to right, rgba(237,237,237,1) 11%, rgba(237,237,237,1) 26%, rgba(246,246,246,1) 50%, rgba(246,246,246,1) 50%, rgba(237,237,237,1) 77%, rgba(237,237,237,1) 100%);
      box-shadow: 0px 0px 6px 5px rgba(171,171,171,1);
      border-radius: 8px;
  }
  .form-header {
    text-align: center;
      background: rgba(118,184,42,1) !important;
      color: white;
      background: linear-gradient(to bottom, rgba(118,184,42,1) 0%, rgba(112,179,45,1) 44%, rgba(75,138,12,1) 62%, rgba(56,107,5,1) 100%) !important;
      border-radius: 0px !important;
  }
</style>
