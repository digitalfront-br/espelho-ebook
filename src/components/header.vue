<template>
    <header class="uk-background-muted uk-position-fixed uk-width-1-1 uk-box-shadow-small" style="z-index: 9999">
        <div class="uk-flex uk-flex-between">
            <div class="uk-padding-small uk-text-bold">{{ modulo }}</div>
            <div class="uk-padding-small uk-text-bold" ><a class="uk-link-reset" href="/" >{{ titulo }}</a></div>
        </div>
    </header>
</template>

<script>
export default {
    props: ["modulo", "titulo"]
}
</script>