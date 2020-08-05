<template>
    <section 
        uk-scrollspy="cls: uk-animation-fade; repeat: true" 
        class="uk-height-viewport uk-position-relative " >
        <div 
            uk-scrollspy="cls: uk-animation-slide-left; repeat: true" 
            class="uk-background-cover uk-height-viewport uk-flex uk-flex-middle uk-flex-collumn  " 
            :style="`background-image: url('/ebook/gestaoestrategica/img/${ modulo + dados.img }');`">
            <div class="uk-container">
                <div 
                    uk-scrollspy="cls: uk-animation-slide-right; repeat: true" 
                    class="uk-overlay uk-overlay-default uk-margin-top uk-box-shadow-medium " >
                    <div>
                        <h2 class="uk-h1 uk-text-bold">{{ dados.titulo }}</h2>
                        <div v-html="dados.texto"></div>
                    </div>
                </div>
                <div class=" uk-width-1-1  uk-background-secondary">
                    <div 
                        uk-grid="" 
                        uk-switcher="animation: uk-animation-fade" 
                        class="tabes uk-grid uk-grid-small uk-child-width-1-2 uk-child-width-1-2@s  uk-child-width-1-4@m uk-child-width-expand@l uk-margin-remove">
                         <div v-for="item in dados.itens" :key="item.id" class="uk-text-center uk-light uk-text-bold uk-padding-small">
                            <a href="#" class="uk-link-reset uk-text-uppercase uk-text-small">{{ item.titulo }}</a>
                        </div>  
                    </div>
                    <hr class="uk-margin-remove " style="border-color: rgba(229, 229, 229, 0.1)" />
                    <ul class="uk-switcher uk-padding uk-margin" style="touch-action: pan-y pinch-zoom;">
                        <li v-for="item in dados.itens" :key="'painel-' + item.id">
                            <div 
                                id="alcance-1" 
                                class=" uk-light" 
                                v-html="item.texto"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </section>
</template>
<script>
export default {
    props: ["dados", "modulo"]
}
</script>