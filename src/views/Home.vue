<template>
  <div 
    uk-scrollspy="cls: uk-animation-fade; repeat: true" 
    class="uk-height-viewport uk-scrollspy-inview uk-animation-fade" >
    <div 
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true" 
        class="uk-background-cover uk-height-viewport uk-panel uk-flex uk-flex-middle uk-flex-center uk-scrollspy-inview uk-animation-slide-left" 
        style="background-image: url('/img/bg-indice.jpeg') ">  
    <div class="uk-card uk-card-body uk-card-default uk-width-medium">
      <ul class="uk-nav">
        <li class="uk-h3 uk-text-uppercase uk-text-bold">Marketing Digital</li>
        <hr>
        <li> <router-link to="/marketing-digital/modulo1">Modulo I</router-link></li>
        <li> <router-link to="/marketing-digital/modulo2">Modulo II</router-link></li>
        <li> <router-link to="/marketing-digital/modulo3">Modulo III</router-link></li>
        <li> <router-link to="/marketing-digital/modulo4">Modulo IV</router-link></li>
        <li> <router-link to="/marketing-digital/modulo5">Modulo V</router-link></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script> 
export default { 
}
</script>
