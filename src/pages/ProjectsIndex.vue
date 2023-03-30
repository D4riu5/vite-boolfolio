<script>
import { store } from "../store.js";
import ProjectCards from "../components/Partials/ProjectCards.vue"

import axios from "axios";

export default {
    name: "ProjectsIndex",
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
    </div>
    <ProjectCards />
</template>

<style lang="scss" scoped>
// img{
//     width: 400px;
// }
</style>
