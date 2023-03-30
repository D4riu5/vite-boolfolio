<script>
// Helpers
import { store } from "./../store";
import axios from "axios";

export default {
    name: "AppHomepage",
    data() {
        return {
            store,
            defaultImg:
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
            project: null,
        };
    },
    methods: {
        getProjects() {
            axios
                .get(
                    `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`
                )
                .then((resp) => {
                    // console.log(resp.data);
                    if (resp.data.success) {
                        this.project = resp.data.project;
                    } else {
                        this.$router.push({ name: "not-found" });
                    }
                });
        },
    },
    created() {
        this.getProjects();
    },
};
</script>

<template>
    <div>
        <h1 class="my-3">
            {{ project.title }}
            <img class="my-3"
                :src="project.full_img_path ?? defaultImg"
                :alt="project.title"
            />

        </h1>
        <h3 class="my-3">
            {{ project.description }}
        </h3>
    </div>
</template>

<style lang="scss">
img {
    width: 80%;
    aspect-ratio: 16/9; 
}
</style>
