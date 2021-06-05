<template>
    <div>
        <h1>  Peruvian Recipe  </h1>
        <h2>
            Jasmin Dobler<br>
	    Andi Graf<br>
            Emre Pacariz<br>
            Phillip Stibl
        </h2>
    </div>
</template>

<script>
export default {
    props: ['title'],
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    h1 {font-size:40px; margin-bottom: 20px; color: #193d29}
    h2 {font-size:28px; text-align:left; color: lightcoral}
</style>
