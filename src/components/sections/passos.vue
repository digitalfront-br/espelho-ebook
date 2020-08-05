<template> 
<div 
    uk-scrollspy="cls: uk-animation-fade; repeat: true" 
    class="uk-height-viewport   " >
    <div 
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true" 
        class="uk-background-cover uk-height-viewport uk-panel uk-flex uk-flex-middle uk-scrollspy-inview uk-animation-slide-left" 
        :style="`background-image: url('/ebook/gestaoestrategica/img/${ modulo + dados.img }');`">
        <div class="uk-container uk-width-1-1">
            <div 
                uk-scrollspy="cls: uk-animation-slide-right; repeat: true" 
                class="uk-overlay uk-overlay-default uk-margin-top uk-box-shadow-medium uk-scrollspy-inview uk-animation-slide-right" >
                <div>
                    <h2 class="uk-h1 uk-text-bold">{{ dados.titulo }}</h2>
                </div>
                <div v-html="dados.texto"></div>
                <div uk-height-match="target: > div > .painel" uk-grid="" class="uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-expand@m uk-margin-top">
                    <div 
                        v-for="(item, index) in dados.itens"
                        :key="item.id"
                        uk-scrollspy="cls: uk-animation-scale-down; repeat: true" 
                        class=" uk-scrollspy-inview uk-animation-scale-down uk-margin-bottom" >

                        <h4 
                            :uk-toggle="`cls: uk-hidden; animation: uk-animation-slide-bottom; target: #item-${index}`" 
                            class="uk-text-center uk-background-primary uk-text-bold uk-light uk-margin-remove uk-padding-small">{{item.titulo}}</h4>
                        <div :id="`item-${index}`" class="uk-hidden uk-light painel uk-padding-small uk-background-primary" v-html="item.texto" > </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="uk-background-secondary uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
         <div class="" uk-slider="center: true">
        <div class="uk-container uk-margin">
            <h2 class="uk-text-center uk-h1 uk-light">{{ dados.titulo }}</h2>
        </div>       

                <div class="uk-position-relative uk-visible-toggle " tabindex="-1">

                    <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                        <li v-for="item in dados.itens" :key="item.id">
                            <div class="uk-card uk-card-default uk-height-1-1">
                                <div class="uk-card-media-top">
                                    <img src="images/photo.jpg" alt="">
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">{{item.titulo}}</h3>
                                     <div v-html="item.texto"></div>
                                </div>
                            </div>
                        </li> 
                    </ul>

                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                </div>

                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>  
            </div> -->
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>