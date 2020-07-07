<template> 
        <section 
            class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid uk-height-viewport" 
            uk-grid=""
            uk-scrollspy="cls: uk-animation-fade; repeat: true">
            <div class="uk-card-media-left uk-cover-container "  uk-scrollspy="cls: uk-animation-slide-up; repeat: true">
                <canvas width="1800" height="1200"></canvas>
                <img :src="`/img/${modulo + dados.img}`" :alt="dados.titulo" uk-cover="" class="uk-cover" >
            </div>
            <div class="uk-flex uk-flex-middle" uk-scrollspy="cls: uk-animation-scale-up; repeat: true"> 
                <div class="uk-card-body "> 
                    <h1 class="uk-card-title uk-text-bold uk-margin-remove uk-text-uppercase">{{dados.titulo}}</h1>
                    <div v-html="dados.texto"></div> 
                </div> 
            </div>
        </section>  
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>