<template>
  <div class="forside">


    <img alt="lea" class="lea" src="@/assets/leaimg.png" width="300"/>

    <h1>Hej, mit navn er Lea</h1>

    <p>Grafisk designer og Content creator</p>

    <div class="button"><RouterLink to="/portfolio"><button class="knapfarve">Mit portfolio</button></RouterLink>
    </div>


</div>


</template>



<style>

.knapfarve {
    color:white;
  }
  .bgpink {
   height: 500px;
  }

.ikoner {
    display:flex;
    justify-content: center;
    margin-bottom: 60px;
    gap:10px

  } 
  .boxbox {
    width: 33.33%;
    padding: 8%;
    z-index: 0;
  } 

  .forside {
    min-height: 500px;
    color:#EAD1E5;
    background-color: #fefdfd;
    padding-top: 200px;
  } 
  .forside p {
    margin-left: 20%;
    font-size: 1.5rem;
    width: 45%;
  }
    .forside h1 {
    font-size: 2rem;   
    margin-left: 20%;
    font-weight: bold;
    width: 45%;
    margin-top: -30px;
  }
  .button {
    margin-left: 20%;
    background-color: #2D499F;
    color: #fefdfd;
    height: 55px;
    width: 150px;
    border-radius: 20px;
    text-align: center;
    padding-top: 15px;
    margin-top: 20px;
  }
  .button1 {
    margin-left: 15%;
    background-color: #2D499F;
    color: #fefdfd;
    height: 55px;
    width: 150px;
    border-radius: 20px;
    text-align: center;
    padding-top: 15px;
    margin-top: 20px;
  }
  .lea {
    float: right;
    border-radius: 40px;
    margin-top: -120px;
    margin-right: 20%;
   

  }




  
</style>
