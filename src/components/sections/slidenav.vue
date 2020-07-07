<template> 
<div class="uk-background-primary uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
         <div class="" uk-slider="center: true">
        <div class="uk-container uk-margin">
            <h2 class="uk-text-center uk-h1 uk-light">{{ dados.titulo }}</h2>
        </div>       

                <div class="  " tabindex="-1">

                    <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                        <li v-for="item in dados.itens" :key="item.id">
                            <div class="uk-card uk-card-default uk-height-1-1">
                                <!-- <div class="uk-card-media-top">
                                    <img src="images/photo.jpg" alt="">
                                </div> -->
                                <div class="uk-card-body uk-flex uk-flex-middle">
                                    <!-- <h3 class="uk-card-title">{{item.titulo}}</h3> -->
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
            </div>
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>