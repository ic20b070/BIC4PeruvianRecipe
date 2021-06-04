<template>
    <footer>
        <div class="text">
            <a href="http://127.0.0.1:8000/home">Home</a>
            <a href="http://127.0.0.1:8000/ingredient">Ingredients</a>
            <a href="http://127.0.0.1:8000/recipe">Recipes</a>
        </div>
        <div>
            <p style="text-align: center">{{ new Date().getFullYear() }} — <strong>Peruvian Recipe</strong></p>
        </div>
    </footer>
</template>

<script>
</script>

<style>
    a {
        color: #121212;
    }
    .text {
        color: #121212;
        text-align: center;
        font-weight: bolder;
    }
    footer {
        padding: 10px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FF5100FF;
        border-color: #FF5100FF;
    }
</style>
