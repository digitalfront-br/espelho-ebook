<template> 
<div 
    uk-scrollspy="cls: uk-animation-fade; repeat: true" 
    class="uk-height-viewport  " >
<div 
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true" 
        class="uk-background-cover uk-height-viewport uk-panel uk-flex uk-flex-middle uk-scrollspy-inview uk-animation-slide-left" 
        :style="`background-image: url('/img/${ modulo + dados.img }');`">
        <div 
            uk-scrollspy="cls: uk-animation-slide-right; repeat: true" 
            class=" uk-margin-left uk-box-shadow-medium uk-scrollspy-inview uk-animation-slide-right uk-flex uk-flex-column uk-width-1-1" >
             <div class="uk-padding uk-width-1-1@s uk-width-1-1@m ">
                <div class="uk-container uk-section-secondary uk-padding">
                    <h2>{{ dados.titulo }}</h2>
                    <div v-html="dados.texto"></div>
                </div> 
            </div>
            <div uk-slider="center: true" uk-height-match> 
                <ul class="uk-slider-items uk-grid" >
                    <li v-for="item in dados.itens" :key="item.id" class="uk-width-1-1@s uk-width-3-4@m" > 
                        <div class="uk-flex uk-flex-center " >
                            <div class="uk-card uk-card-default uk-card-body uk-margin-large-bottom"> 
                                <h2>{{ item.titulo }}</h2>
                                <div class="uk-text-small" v-html="item.texto"></div>
                            </div>
                        </div> 
                    </li> 
                </ul> 
                <div class="uk-position-absolute uk-position-bottom-right  uk-padding uk-light" style="width: 135px; "> 
                        <a class="uk-position-bottom-left uk-position-small uk-padding  uk-background-secondary" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                        <a class="uk-position-bottom-right uk-position-small uk-padding  uk-background-secondary" href="#" uk-slidenav-next uk-slider-item="next"></a> 
                </div>

            </div>
        </div>
    </div> 
</div>
<!-- <div :style="`background-image: url(/img/${ modulo + dados.img});`"> 
        <div class="uk-section"> 
            <h2>{{ dados.titulo }}</h2>
            <div v-html="dados.texto"></div>
        </div>
     <div class="uk-position-relative uk-visible-toggle uk-light uk-slideshow" tabindex="-1" uk-slideshow="" >  
        <ul class="uk-slideshow-items" >
            <li v-for="item in dados.itens" :key="item.id">
                <div class="uk-position-center uk-text-center  uk-padding uk-animation-fade ">
                    <div class="uk-overlay uk-overlay-primary">  
                        <h3>{{ item.titulo }}</h3>  
                        <div v-html="item.texto" ></div>
                    </div>
                </div>
            </li> 
        </ul>
        <div class="uk-position-bottom-right  uk-background-primary" style="width: 150px;">
            <div class="uk-background-primary uk-padding">
                <a class="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-icon uk-slidenav-next uk-slidenav" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
            </div> 
        </div>

    </div>
</div> -->
         <!-- <div class="uk-container uk-margin">
            <h2 class="uk-text-center uk-h1">{{ dados.titulo }}</h2> 
         <div class="" uk-slideshow="ratio: 7:3; animation: push">
             <ul class="uk-slideshow-items uk-card">
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
                
                    

                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                </div>
             </ul>

                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>  
            </div> --> 
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>