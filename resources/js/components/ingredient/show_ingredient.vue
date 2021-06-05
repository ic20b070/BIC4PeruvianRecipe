<template>
    <div class="table-container is-fullwidth">
        <table class="table is-fullwidth">
            <thead>
            <tr class="title is-6">
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Unit</th>
                <th width="6%">Quantity</th>

                <th width="6%">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr class="hover" v-for="ingredient in ingredients" :key="ingredient.id" v-on:click.stop.prevent="openIngredientDetails(ingredient)">
                <th>{{ingredient.id}}</th>
                <th>{{ingredient.name}}</th>
                <th width="1000px">{{ingredient.description}}</th>
                <th>{{ingredient.unit}}</th>
                <th>{{ingredient.quantity}}</th>
                <th v-if="!loading">
                    <button style = "background: #FF5100FF" type="button" v-on:click.stop.prevent="deleteIngredient(ingredient)">Remove</button>
                </th>
            </tr>
            </tbody>
        </table>
        <div id="ingredientDetails" class="overlay">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeDetails()">&times;</a>
            <div class="overlay-content">
                <edit_ingredient :ingredient="ingredient"></edit_ingredient>
            </div>
        </div>
    </div>
</template>

<script>
let form = new Form({
    'slug':'',
    'name':'',
    'id':''
});
export default {
    name: "show_ingredient",
    data(){
        return{
            ingredients:[],
            recipes:[],
            ingredient: {
                id : 0,
                name: '',
                description: '',
                creationDate: '',
                quantity: '',
                slug: '',
                recipeId: '',
                updateDate: ''
            },
            loading: false,
            form:form,
            url: ''
        }
    },
    created() {
        this.loading = true;
        console.log("Component show_ingredient loaded");

        axios.get('./list/ingredient')
            .then(response => {
                this.ingredients = response.data;

            })
            .catch(e => console.log(e));
        axios.get('./list/recipe')
            .then(response => {
                this.recipes = response.data;
                this.loading = false;
            })
            .catch(e => console.log(e));

        this.loading = true;
    },
    methods: {
        openIngredientDetails(value) {
            document.getElementById("ingredientDetails").style.width = "100%";
            console.log(value);
            this.ingredient.name = value.name;
            this.ingredient.id = value.id;
            this.ingredient.description = value.description;
            this.ingredient.creationDate = value.created_at;
            this.ingredient.quantity = value.quantity;
            this.ingredient.slug = value.slug;
            this.ingredient.recipeId = value.recipe_id;
            this.ingredient.updateDate = value.updated_at;
            console.log(this.ingredient.name);
        },
        closeDetails() {
            document.getElementById("ingredientDetails").style.width = "0%";
            axios.get('./list/ingredient')
                .then(response => this.ingredients = response.data)
                .catch(e => console.log(e));
        },
        openRecipeList(receptReference) {
            this.ingredient.recipeId = receptReference
            window.location = './recipe#'+this.ingredient.recipeId;
        },
        deleteIngredient(ingredient) {
            this.form.slug = ingredient.slug;
            this.form.name = ingredient.name;
            this.form.id = ingredient.id;
            this.url='/ingredient/' + form.slug;
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

           this.loading = true;
            console.log("Component show_ingredient loaded");
            axios.get('./list/ingredient')
                .then(response => {
                    this.ingredients = response.data;
                })
                .catch(e => console.log(e));
            axios.get('./list/recipe')
                .then(response => {
                    this.recipes = response.data;
                    this.loading = false;
                })
                .catch(e => console.log(e));
            this.loading = true;



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
    font-size: 60px;
}
</style>
