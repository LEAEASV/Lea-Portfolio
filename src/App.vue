<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from '@/components/FooterView.vue'  
</script>
<template>
  <header>
      <img alt="Vue logo" class="logo" src="@/assets/LH-media-design---LOGO.png" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Hjem</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
  <FooterView/> 

</template>

<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 0px;
  background-color:#2D499F;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 15px;
}

nav a.router-link-exact-active {
  color:white

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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-bottom: 0px;

  }

  .logo {
    margin: 0 2rem 0;
    
  }
  

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 20px;
    margin-top: 2px;
  }
}


@media (max-width: 1024px) {

  .logo, img {
  padding-top: 15px;
    
  }
 
  .nav {
  padding-bottom: 15px!important;

  }
 
 }
</style>
