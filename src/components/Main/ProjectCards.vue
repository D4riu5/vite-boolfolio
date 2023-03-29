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
    <div class="col-12 d-flex flex-wrap justify-content-center">
        <div v-for="project in store.Projects" class="m-3 text-dark">
            <div class="card" style="width: 18rem">
                <img
                    v-if="project.full_img_path"
                    :src="project.full_img_path"
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
                        Type: {{ project.type ? project.type.name : "Not set" }}
                    </li>
                    <li class="list-group-item">
                        Technologies used:
                        <span
                            v-for="technology in project.technologies"
                            class="m-2"
                        >
                            {{ technology.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Pagination buttons -->
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary" :disabled="currentPage === 1" @click="setPage(currentPage - 1)">
            Prev
        </button>
        <button class="btn btn-light" v-for="number in lastPage" @click="setPage(number)">
            {{ number }}
        </button>
        <button class="btn btn-outline-light" @click="setPage(lastPage)">last page</button>
        <button class="btn btn-primary" :disabled="currentPage === lastPage" @click="setPage(currentPage + 1)">Next</button>
    </div>
</template>

<style lang="scss" scoped>
.card {
    min-height: 650px;

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
