<template id="edit_ingredient">
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title is-centered"> Edit Ingredient </h1>
        </div>
        <div class="card-content" style="background-color:#ffffff">
            <form v-model="form" @submit.prevent="submit">
                <strong> Name: </strong> <br>
                <input type="text" style="height:30px;width:190px; font-size:16px; background-color:#ffffff" class="form-control" v-model="ingredient.name"/> <br> <br>
                <strong> Description: </strong> <br>
                <textarea style="height:50px;width:650px; font-size:15px; background-color:#ffffff" cols="90" v-model="ingredient.description"/> <br> <br>
                <strong> For Recipe: </strong> <br>
                <select style="font-size:15px" class="form-control" v-model="ingredient.recipeId"> <br>
                    <option v-for="recipe in recipes" :key="recipe.id" v-bind:value="recipe.id">{{recipe.name}}</option>
                </select><hr>
                <button class="block">Submit</button>
            </form>
        </div>
    <div class="card-content" style="display: none;">
        <pre class="my-pre">
        	<p>{{form.name = ingredient.name}}</p>
                <p>{{form.slug = ingredient.slug}}</p>
                <p>{{form.description = ingredient.description}}</p>
                <p>Recipe ID: {{form.recipe_id = ingredient.recipeId}}</p>
        	</pre>
	</div>
	</div>
</template>

<script>
let form = new Form({
    'slug':'',
    'name':'',
    'description':'',
    'recipe_id':''
});
export default {
    name: "edit_ingredient",
    components:{
        QueryMessage
    },
    props: ['ingredient'],
    created(){
        console.log("edit_ingredient loaded");
        axios.get('../list/recipe')
            .then(response => {
                this.recipes = response.data;
                console.log("recipies");
		console.log(this.recipes);
            })
            .catch(e => console.log(e));
    },
    data(){
        return{
            form:form,
            url:'',
            recipes:[]
        }
    },
    methods:{
        submit() {
            this.url='/ingredient/' + form.slug;
            console.log(form.name + " " + form.description + " " + form.recipe_id)
            console.log(this.url);
            this.form
                .put(this.url)
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log("Error:");
                    console.log(this.form.failMessage);
                });

        }
    }

}
</script>

<style scoped>
    .block {
        display: block;
        width: 100%;
        border: none;
        background-color: #FF5100FF;
        color: white;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
    }
    .block:hover {
        background-color: darkred;
        color: black;
    }
    hr {
        border: 3px solid #FF5100FF;
        border-radius: 10px;
    }

</style>
