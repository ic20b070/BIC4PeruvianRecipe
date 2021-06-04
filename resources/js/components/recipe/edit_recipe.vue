<template id="edit_recipe">
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title is-centered"  >Edit</h1>
        </div>
        <div class="card-content">
            <form v-model="form" @submit.prevent="submit">
                <strong>Name:</strong> <br>
                <input type="text" style="height:35px;width:200px; font-size:15px; background-color:#ffffff "class="form-control" v-model="recipe.name"/>
                <br> <br>
                <strong>Description:</strong> <br>
                <textarea style="height:50px;width:200px; font-size:15px; background-color:#ffffff" cols="90" class="form-control" v-model="recipe.description"/>
                <hr>
                <button class="block">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
let form = new Form({
    //'slug':'',
    'name':'',
    'description':'',
    'recipe_id':''
});
export default {
    name: "edit_recipe",
    components:{
        QueryMessage
    },
    props: ['recipe'],
    created(){
        console.log("edit_recipe loaded");
    },
    data(){
        return{
            form:form,
            url:''
        }
    },
    methods:{
        submit() {
            this.url='/recipe/' //+ form.slug;
            console.log(form.name + " " + form.description);
            console.log(this.url);
            this.form
                .put(this.url)
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

    /*.my-pre{
        background-color: rgb(244, 252, 226);
        background-size:2.4em 2.4em;
        background-origin:content-box;

        /* some extra styles*/
     /*   padding:0 20px;
        text-align:justify;
        font-family:calibri,arial,sans-serif;
    }*/
</style>
