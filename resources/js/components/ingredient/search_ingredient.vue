<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        {{ title }}
                    </h1>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <label class="label">Search Ingredient</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Search" v-model="q">
                            </div>
                        </div>
                        <div v-if="results.length > 0 && q ">
                            <label class="label">Output</label>
                            <div class="control" v-for="result in results">
                                <div class="field is-grouped">
                                    <p class="control is-expanded">
                                        <input class="input" :key="result.id" :value="result.name" disabled >
                                    </p>
                                    <p class="control">
                                        <a class="button is-info" @click="openIngredientDetails(result)">
                                            Edit
                                        </a>
                                    </p>
                                </div>
                                <br>
                            </div>
                            <div id="ingredientDetails" class="overlay">
                                <a href="javascript:void(0)" class="closebutton" v-on:click="closeDetails()">&times;</a>
                                <div class="overlay-content">
                                    <edit_ingredient :ingredient="ingredient"></edit_ingredient>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'; // lodash lib
export default {
    name: "SearchIngredientComponent",
    props: ['title'],
    data() {
        return {
            q: null,
            results: [],
            url: 'http://127.0.0.1:8000/ingredient/',
            ingredient: {
                id : 0,
                name: '',
                description: '',
                creationDate: '',
                quantity: '',
                slug: '',
                recipeId: '',
                updateDate: ''
            }
        };
    },
    watch: {
        q() {
            _.debounce(this.search(),500);
        }
    },
    methods: {
        search() {
            if (this.q.length > 0) {
                axios.post('/search/ingredient?q=' + this.q)
                    .then(res => this.results = res.data)
                    .catch(err => console.log(err.data, err.status, err.statusText, err.headers, err.config));
            }
        },
        openIngredientDetails(result) {
            document.getElementById("ingredientDetails").style.width = "100%";
            // console.log(value);
            this.ingredient.name = result.name;
            this.ingredient.id = result.id;
            this.ingredient.description = result.description;
            this.ingredient.creationDate = result.created_at;
            this.ingredient.quantity = result.quantity;
            this.ingredient.slug = result.slug;
            this.ingredient.recipeId = result.recipe_id;
            this.ingredient.updateDate = result.updated_at;
            console.log(this.ingredient.name);
            console.log("Recipe ID of ingredient" + this.ingredient.recipeId);
        },
        closeDetails() {
            document.getElementById("ingredientDetails").style.width = "10%";
        }
    }
}
</script>

<style scoped>
tr:hover {
    background: lightcoral;
}

.overlay {
    transition: 0.5s;
    overflow-x: hidden;
    background-color: white;
    height: 90%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    
    
}

.overlay-content {
    position: relative;
    top: 30%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    display: block;
    text-decoration: none;
    font-size: 35px;
    padding: 10px;
    transition: 0.3s;
    color: #818181;
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebutton {
    top: 18px;
    right: 40px;
    font-size: 55px;
    position: absolute;
}
</style>
