<template>
    <div class="table-container is-fullwidth">
        <div v-for="recipe in recipes" :key="recipe.id">
            <h2>
                {{recipe.name}}
            </h2>
            <table class="table is-fullwidth" >
                <thead>
                <tr class="title is-6">
                    <th>ID</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr class ="hover" v-on:click="openRecipeDetails(recipe)">
                    <th v-bind:id="recipe.id">{{recipe.id}}</th>
                    <th>{{recipe.description}}</th>
                    <th>
                        <button style = "background: #FF5100FF" type="button" v-on:click.stop.prevent="deleteRecipe(recipe)">Remove</button>
                    </th>
                </tr>
                </tbody>
            </table>
            <h3>
                Ingredients
            </h3>
            <div >
                <table class="table is-fullwidth">
                    <thead>
                    <tr class="title is-5">
                        <th >ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Unit</th>
                        <th width="15%">Quantity</th>
                        <th>slug</th>
                        <th width="15%">Recipe ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class ="hover" v-for="ingredient in filtering_all(ingredients,recipe.id)" :key="ingredient.id">
                        <th>{{ingredient.id}}</th>
                        <th>{{ingredient.name}}</th>
                        <th>{{ingredient.description}}</th>
                        <th>{{ingredient.unit}}</th>
                        <th>{{ingredient.quantity}}</th>
                        <th>{{ingredient.slug}}</th>
                        <th>{{ingredient.recipe_id}}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="recipeDetails" class="overlay">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeDetails()">&times;</a>
            <div class="overlay-content">
                <edit-recipe :recipe="recipe"></edit-recipe>
            </div>
        </div>
    </div>
</template>

<script>
let form = new Form({
    'slug':'',
    'name':'',
    'recipe_id':''
});
import EditRecipe from "./edit_recipe";
export default {
    name: "show_recipe.vue",
    components: {EditRecipe},
    data(){
        return{
            recipes:[],
            ingredients:[],
            form:form,
            url:'',
            recipe: {
             slug: '',
                description: '',
                name: ''
            }
        }
    },
    created() {
        axios.get('./list/recipe')
            .then(response => this.recipes = response.data)
            .catch(e => console.log(e));
        axios.get('./list/ingredient')
            .then(response => this.ingredients = response.data)
            .catch(e => console.log(e));
    },
    updated() {
        let recipeName = window.location.href.split("#");
        if(typeof(recipeName[1] !== 'undefined')) {
            var element = document.getElementById(recipeName[1]);
            element.scrollIntoView();
        }
    },
    methods:{
        filtering_all(inPut, filterKey){
            var list= [];
            for(var i=0;i<inPut.length;i++){
                if(inPut[i].recipe_id == filterKey){
                    list.push(inPut[i]);
                }
            };

            return list;
        },
        openRecipeDetails(recipe) {
            document.getElementById("recipeDetails").style.width = "100%";
            console.log("RECIPE DETAILS TEST");
            console.log(recipe);
            this.recipe.slug = recipe.slug;
            this.recipe.name = recipe.name;
            this.recipe.description = recipe.description;
        },
        closeDetails() {
            document.getElementById("recipeDetails").style.width = "0%";
            axios.get('./list/recipe')
                .then(response => this.recipes = response.data)
                .catch(e => console.log(e));
            axios.get('./list/ingredient')
                .then(response => this.ingredients = response.data)
                .catch(e => console.log(e));
        },
        deleteRecipe(recipe){
            this.form.slug = recipe.slug;
            this.form.name = recipe.name;
            this.form.id = recipe.id;
            this.url='/recipe/' + form.slug;
            //console.log(form.name + " " + form.description + " " + form.recipe_id)
            console.log(this.url);

            this.form
                .delete(this.url)
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log("Errormessage:");
                    console.log(this.form.failMessage);
                });

            axios.get('./list/recipe')
                .then(response => this.recipes = response.data)
                .catch(e => console.log(e));
            axios.get('./list/ingredient')
                .then(response => this.ingredients = response.data)
                .catch(e => console.log(e));

        }
    }
}

</script>

<style scoped>

.hover:hover {
    background: lightcoral;
}

.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 70px;
}

h2 {
    text-align: center;
    font-weight: bold;
    color: red;
}

h3 {
    text-align: center;
    font-weight: bold;
    color: #F08080FF;
    font-size: larger;
}
</style>



