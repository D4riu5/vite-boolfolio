<script>
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";

export default {
    name: "App",
    components: {
        AppMain,
    },
    data() {
        return {
            store,
        };
    },
    methods: {},
};
</script>

<template>
    <Header class="p-5 container text-center"> Ciao Header </Header>

    <Main class="p-5 container">
        <AppMain />
    </Main>

    <Footer class="p-5 container text-center"> Ciao Footer </Footer>
</template>

<style lang="scss">
@use "./styles/main";
</style>
