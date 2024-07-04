<template>
    <div class="homepage">
        <div class="container">
            <P>welcome to your own world </P>
            <p>of creation</P>
        </div>
        <router-link to="/slider3d">slider3d</router-link>
    </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
.homepage{
    min-height: 200vh;
    background-color: rgb(248, 134, 4);
    color: azure;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 80px;
    min-width: 100vh;
    padding: 40px;

}
.container{
    display: flex;
    margin-left: calc(10%);
    align-items: center;
    max-width: 80%;
    height: 100vh;
    padding: 25px;
    background-color: rgb(232, 18, 18);
    border-radius: 20%;
}


</style>