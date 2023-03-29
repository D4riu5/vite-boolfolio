<script>
import { store } from "../store.js";
import ProjectCards from "./Main/ProjectCards.vue";

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
    <div class="row">
        <div class="col-12">
            <h1 class="my-4">My projects</h1>
        </div>
        <ProjectCards />
    </div>
</template>

<style lang="scss" scoped>
// img{
//     width: 400px;
// }
</style>
