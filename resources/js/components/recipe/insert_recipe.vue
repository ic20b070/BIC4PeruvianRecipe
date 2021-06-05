<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-header-title is-centered">New Recipe</h1>
        </div>
        <div class="card-content">
            <form v-model="rform" @submit.prevent="submitting">
                <strong>Name:</strong><br>
                <input type="text" class="form-control" style="font-size:20px" v-model="rform.name"><br><br>
                <strong>Description:</strong><br>
                <textarea class="form-control" style="height:70px;width:450px; font-size:18px" cols="90" v-model="rform.description"></textarea><hr>
                <button class="block">Submit</button>
            </form>
        </div>
        
    </div>
</template>

<script>
let rform =new Form({
    'id':'',
    'name':'',
    'description':'',
    'slug':'',
});
export default {
    name: "insert_recipe.vue",
    components:{
        QueryMessage
    },
    created() {
        console.log("insert_recipe loaded");
    },
    data(){
        return{
            edit: undefined,
            rform: rform,
            url:'',
            output:''
        }
    },
    methods:{
        submitting(e){
            this.url='/recipe/';
            this.rform
                .post(this.url)
                .then((response) => {
                    console.log(response);
                })
                .catch((error)=> {
                    console.log("Errormessage:");
                    console.log(this.rform.failMessage);
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
</style>
