<template>
<div class="container22">


<div class="cen">KONTAKT MIG HER</div>

<div class="ikoner">
  <div class="centered1">
    <img src="@/assets/telefon.png" alt="mail">
    <p>+45 51 51 66 34 </p>
  </div>
  <div class="centered2">
    <img src="@/assets/mail.png" alt="mail">
    <p>lea-madsen123@outlook.dk</p>
  </div>
  <div class="centered3">
    <img src="@/assets/QR.png" alt="mail">
    <p>Mere om mig på LinkTree</p>
  </div>
</div>



</div>

<div class="footer">   
<nav>
  <img alt="Vue logo" class="logo" src="@/assets/LH-media-design---LOGO.png" width="125" height="125" />
      <RouterLink to="/">Hjem</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/cv">CV</RouterLink>

    </nav></div>


</template>

<script setup>

</script>

<style lang="scss" scoped>
/* Footer */
.footer {
  z-index: 0;
  height:100px;
  background-color: #23499F;
}


.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
}

nav a.router-link-exact-active {
  color: white
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


.container22 {
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  background-image: url('../assets/LH-babbrund.png');

}

.cen {
  position: relative;
  margin: 40px 0 40px 0;
  color: #23499F;
  font-size: 30px;
  font-weight: bolder;

}

.centered1 {
  position: relative;
  width: 200px;
  color: #23499F;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.centered2 {
  position: relative;
  width: 200px;
  flex-direction: column;
  color: #23499F;
  display: flex;
  align-items: center;
}

.centered3 {
  position: relative;
  width: 200px;
  flex-direction: column;
  color: #23499F;
  display: flex;
  align-items: center;
}

.centered1 img, .centered2 img, .centered3 img {
  width: 100px;
  height: 100px;
}


.centered1 p, .centered2 p, .centered3 p {
  font-size: 15px;
  padding-top: 10px 
}
















/* media kontakt information img */
@media (max-width: 767px) {
.lea {margin-right: 4%;
  width: 150px;
  }
}
@media (max-width: 767px) {
  .button, .forside p, .forside h1{
    margin-left: 4%;
    
  }
}
@media (max-width: 767px) {
  .forside h1{
    font-size: 1.7rem;
    margin-top: -80px;
    
  }
  }

  @media (max-width: 767px) {
  .forside p{
    font-size: 1.3rem;
    
  }
}

/* media kontakt information tekst */
@media (max-width: 767px) {
  .centered1 p, .centered2 p, .centered3 p{
    font-size: 0,1rem;
    
  }

}


/* media logo */
@media (max-width: 767px) {
  .centered1, .centered2, .centered3{
  


  }

}

</style>