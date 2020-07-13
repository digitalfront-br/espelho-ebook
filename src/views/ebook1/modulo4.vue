<template>
    <div>
        <header-component :modulo="modulo" titulo="Gestão Financeira" /> 
        <section v-for="item in dados" :key="item.id" > 
            <Capa v-if="item.tipo == 'capa'" :dados="item" :modulo="url"   />
            <Left v-if="item.tipo == 'left'" :dados="item" :modulo="url" />
            <Right v-if="item.tipo == 'right'" :dados="item" :modulo="url" />
            <Slideshow v-if="item.tipo == 'slideshow'" :dados="item" :modulo="url" />
            <Slidenav v-if="item.tipo == 'slidenav'" :dados="item" :modulo="url" />
            <Passos v-if="item.tipo == 'passos'" :dados="item" :modulo="url" />
            <PassosContainer v-if="item.tipo == 'passosContainer'" :dados="item" :modulo="url" />
            <Encerramento v-if="item.tipo == 'encerramento'" :dados="item" :modulo="url" />
        </section> 
    </div>  
</template>
<script>

import modulo4 from "@/assets/data/modulo4.json";
import headerComponent from "@/components/header.vue";
import Capa from "@/components/sections/capa.vue";
import Left from "@/components/sections/left.vue";
import Right from "@/components/sections/right.vue";
import Slideshow from "@/components/sections/slideshow.vue";
import Slidenav from "@/components/sections/slidenav.vue";
import Passos from "@/components/sections/passos.vue";
import PassosContainer from "@/components/sections/passosContainer.vue";
import Encerramento from "@/components/sections/encerramento.vue"

export default {
    components:{  
        Capa,
        Left,
        Right,
        Slideshow,
        Slidenav,
        Passos,
        PassosContainer,
        Encerramento,
        "header-component": headerComponent
    },
    data(){
        return {
            url: "modulo4/",
            modulo: "Modulo IV",
            dados: modulo4
        }
    } 
}
</script>
