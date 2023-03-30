<script>
import { store } from "../store.js";
import ProjectCards from "./Partials/ProjectCards.vue";

import axios from "axios";

export default {
    name: "AppMain",
    components: {
        ProjectCards,
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
    <footer class="p-5 container text-center">
        ciao from footer
    </footer>
</template>

<style lang="scss" scoped>
// img{
//     width: 400px;
// }
</style>
