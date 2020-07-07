<template>
<div 
    uk-scrollspy="cls: uk-animation-fade; repeat: true" 
    class="uk-height-viewport uk-scrollspy-inview uk-animation-fade" >
    <div 
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true" 
        class="uk-background-cover uk-height-viewport uk-panel uk-flex uk-flex-bottom uk-scrollspy-inview uk-animation-slide-left" 
        :style="`background-image: url('/img/${ modulo + dados.img }');`">
        <div 
            uk-scrollspy="cls: uk-animation-slide-right; repeat: true" 
            class="uk-overlay uk-overlay-default uk-position-bottom uk-margin-left uk-margin-bottom uk-box-shadow-medium uk-scrollspy-inview uk-animation-slide-right" >
            <h2 class="uk-heading-small uk-text-bold">{{ dados.titulo }}</h2>
        </div>
    </div>
</div> 
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>