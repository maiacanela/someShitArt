<template>
<div id="home" class="foto" >
    <div class="textart">
        <h4>we are</h4>
        <h1 class="art">Art</h1>

    </div>

</div>

</template>


<style>
    .foto{
        background-image: url("../img/home.jpg");
        height: 77vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    @font-face{
        font-family: font-titol;
        src:url(../fonts/Stora.ttf);
    }

    .art{
        margin-top: -25px;
        font-size: 100px;
        font-family: font-titol;
        cursor: pointer;
    }


     .textart{
        color: white;
    }


    /* entra si te menos de 900px */
    @media screen and (max-width: 900px){
        .textart{
            position: absolute;
            top: 70%;
            margin-left: 20%;
            transform: translateY(-50%);
        }
    }

    /* entra si te mes de 900px */
    @media screen and (min-width: 900px){
         .textart{
            position: absolute;
            top: 50%;
            margin-left: 70%;
            transform: translateY(-50%);
        }
    }

</style>



