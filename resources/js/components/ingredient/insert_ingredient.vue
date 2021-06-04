<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title is-centered">New Ingredient</h1>
        </div>
        <div class="card-content">
            <form v-model="form" @submit.prevent="submit">
                <strong>Name:</strong>
                <br>
                <input type="text" style="font-size:20px" class="form-control" v-model="form.name"/>
                <br>
                <strong>Description:</strong>
                <br>
                <textarea class="form-control" style="height:70px;width:450px; font-size:18px" cols="90" v-model="form.description"/>
                <br>
                <strong >Quantity:</strong>
                <br>
                <input type="number" style="font-size:18px" class="form-control" v-model="form.quantity"/>
                <br>
                <strong>Unit:</strong>
                <br>
                <select class="form-control"  style="font-size:18px" v-model="form.unit">
                    <option value="grams">grams</option>
                    <option value="milliliters">milliliters</option>
                    <option value="pieces">pieces</option>
                </select>
                <br>
                <strong>For Recipe:</strong>
                <br>
                <select style="font-size:20px" class="form-control" v-model="form.recipe_id">
                    <option v-for="recipe in recipes" :key="recipe.id" v-bind:value="recipe.id">{{recipe.name}}</option>
                </select>
                <hr>
                <button class="block">Submit</button>
            </form>
        </div>
        <!--<div class="card-footer">
            <div class="card-footer-item" style="background-color: #f6f8ed">
            <pre class="my-pre">
                <a style="font-size:30px; color:#FF5100FF; font-weight: bold; text-align:center;">PREVIEW</a>
                <a style="font-size:18px; text-align:center; font-weight: bold">{{form.name}}</a>
                <a style="font-size:16px; max-width: 30em">{{form.description}}</a>
                <a style="font-weight:bold"> Quantity: {{form.quantity}}</a>
                <a style="font-weight:bold"> Unit: {{form.unit}}</a>
                <a style="font-weight:bold"> For recipe: {{form.recipe_id}}</a>
                <a>{{form.id}}</a>
            </pre>
            </div>
            </div> />-->
        </div>
</template>

<script>
let form = new Form({
    'id':'',
    //'slug':'',
    'name':'',
    'description':'',
    'unit':'',
    'quantity':'',
    'recipe_id':''
});
export default {
    name: "insert_ingredient.vue",
    components:{
        QueryMessage
    },
    created(){
        console.log("insert_ingredient loaded");
        axios.get('../list/recipe')
            .then(response => {
                this.recipes = response.data;
                console.log("Inhalt recipies");
                console.log(this.recipes);
            })
            .catch(e => console.log(e));
    },
    data(){
        return{
            form:form,
            url:'',
            recipes:[],
        }
    },
    methods:{
        submit() {
            this.url='/ingredient';
            this.form
                .post(this.url)
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log("Errormessage:");
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
    font-size: 20px;
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

.my-pre{
    background-color: rgb(244, 252, 226);
    background-size:2.4em 2.4em;
    background-origin:content-box;

    /* some extra styles*/
    padding:0 20px;
    text-align:justify;
    font-family:calibri,arial,sans-serif;
}
</style>
