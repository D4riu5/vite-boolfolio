<script>
import { store } from "../../store.js";

import axios from "axios";

export default {
    name: "ProjetCards",
    components: {},
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: "",
            defaultImg:
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
        };
    },
    methods: {
        getProjects() {
            axios
                .get("http://127.0.0.1:8000/api/projects", {
                    params: {
                        page: this.currentPage,
                    },
                })
                .then((resp) => {
                    // console.log(resp.data.projects.data);

                    this.store.Projects = resp.data.projects.data;
                    this.lastPage = resp.data.projects.last_page;
                });
        },

        setPage(page) {
            this.currentPage = page;

            this.getProjects();
        },
    },
    created() {
        this.getProjects();
    },
};
</script>

<template>
    <div v-if="store.Projects.length > 0" class="row g-5 my-4">
        <div
            v-for="project in store.Projects"
            class="col-xl-4 col-md-6 col-xs-1 d-flex flex-row justify-content-center"
        >
            <div class="text-dark">
                <div class="card h-100">
                    <img
                        :src="project.full_img_path ?? defaultImg"
                        class="card-img-top"
                        :alt="project.title"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ project.title }}
                        </h5>
                        <p class="card-text">
                            {{ project.description }}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Type:
                            {{ project.type ? project.type.name : "Not set" }}
                        </li>
                        <li class="list-group-item">
                            <h5>Technologies used:</h5>
                            <span
                                v-for="technology in project.technologies"
                                class="badge text-bg-success mx-1"
                            >
                                {{ technology.name }}
                            </span>
                        </li>
                        <li class="list-group-item text-center">
                            <router-link class="btn btn-primary btn-sm"
                                :to="{
                                    name: 'projects-show',
                                    params: { slug: project.slug },
                                }"
                            >
                            See more!
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination buttons -->
    <div v-if="store.Projects.length > 0" class="d-flex justify-content-center">
        <button
            class="btn btn-primary"
            :disabled="currentPage === 1"
            @click="setPage(currentPage - 1)"
        >
            Prev
        </button>
        <button
            class="btn btn-light"
            v-for="number in lastPage"
            @click="setPage(number)"
        >
            {{ number }}
        </button>
        <button
            class="btn btn-primary"
            :disabled="currentPage === lastPage"
            @click="setPage(currentPage + 1)"
        >
            Next
        </button>
    </div>

    <div v-else class="text-center">
        <h2>LOADING</h2>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 20rem;

    img {
        height: 300px;
        object-fit: cover;
        object-position: top;
    }
}

button {
    margin: 0 10px;
}
</style>
