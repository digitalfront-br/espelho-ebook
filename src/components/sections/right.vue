<template> 
<div 
    uk-scrollspy="cls: uk-animation-fade; repeat: true" 
    class="uk-height-viewport uk-scrollspy-inview uk-animation-fade" >
    <div 
        uk-scrollspy="cls: uk-animation-scale-down; repeat: true" 
        class="uk-background-cover uk-height-viewport uk-flex uk-flex-right uk-flex-middle uk-scrollspy-inview uk-animation-scale-down" 
        :style="`background-image: url(/img/${ modulo + dados.img});`">
        <div 
            uk-scrollspy="cls: uk-animation-scale-up; repeat: true" 
            class="uk-overlay uk-overlay-default uk-margin-left@m uk-margin-top uk-margin-bottom uk-box-shadow-medium uk-width-1-1@s uk-width-1-2@m uk-scrollspy-inview uk-animation-scale-up" >
            <h2 class="uk-heading-small uk-text-bold">{{ dados.titulo }}</h2>
            <div v-html="dados.texto"></div>
        </div>
    </div>
</div> 
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>