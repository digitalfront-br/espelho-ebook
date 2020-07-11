<template>
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-height-viewport"
    uk-grid
  >
    <div class="uk-flex uk-flex-middle uk-card-media-right uk-cover-container">
      <img
        :src="`/img/${ modulo + dados.img }`"
        alt
        uk-cover
      />
      <canvas width="600" height="400"></canvas>
      <div
        uk-grid
        class="uk-grid uk-grid-small uk-child-width-1-1 uk-width-1-2 uk-margin-top uk-flex uk-flex-middle uk-position-right"
      >
        <div
          uk-scrollspy="cls: uk-animation-scale-down; repeat: true"
          class="uk-margin-bottom uk-first-column uk-scrollspy-inview"
          v-for="(item, index) in dados.itens"
            :key="item.id"
        >
          <h4
            
            :uk-toggle="`cls: uk-hidden; animation: uk-animation-slide-bottom; target: #item-${index}`"
            :style="`background-color: ${item.cor}`"
            class="uk-text-center  uk-text-bold   uk-box-shadow-small uk-margin-remove uk-padding-small"
          >{{ item.titulo }}</h4>
        </div>

      </div>
    </div>
    <div class="uk-flex uk-flex-middle uk-background-muted">
      <div>
        <div class="uk-card-body uk-text-right">
          <h3 class="uk-card-title">{{ dados.titulo }}</h3>
          <div v-html="dados.texto"></div>
        </div>
        <div
            v-for="(item, index) in dados.itens"
            :key="item.id" 
            :style="`background-color: ${item.cor}`"
            :id="`item-${index}`" class="uk-hidden  uk-padding-small">
           <div v-html="item.texto"></div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: ["dados", "modulo"]
};
</script>