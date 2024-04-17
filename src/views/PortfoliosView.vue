<template>
    <main>
      <h1 class="text-3xl font-bold underline">
  
      </h1>
      <!--
      <button @click="selectCategory = 'web'"> WEB </button>
      <button @click="selectCategory = 'photo'"> PHOTO </button> 
      <button @click="selectCategory = ''"> ALL </button>
      -->
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <h2>{{ portfolioItem.title }}</h2>
        <p>{{ portfolioItem.description }}</p>
     
  
        <img :src="portfolioItem.image" alt="">
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">Link</a>
        </div>
        <div v-else>
  
        </div>
      </div>

    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue' 
  import getPortfolio from '@/modules/getPortfolio'
  const { portfolioItems } = getPortfolio()
  
  let selectCategory = ref('')
  
  const filteredPortfolioItems = computed(() => {
    if (selectCategory.value == '') {
      return portfolioItems.value
    }
    else{
      return portfolioItems.value.filter(item => item.category == selectCategory.value)
    }
  })
  
  
  
  </script>

  <style lang="scss">
  .card {
    color:#333;
    background-color: #EAD1E5;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .card img {
  width: 40%;
  margin-left: 30%;
  }

  .card h2 {
    font-size:large;
    display: flex;
    justify-content: center;  
    color: #2D499F;
    text-decoration: none;
    font-weight: bold;
  }
  .card p {
    display: flex;
    justify-content: center;  
    color: #2D499F;
    text-decoration: none;
    font-weight: medium;
    margin-bottom: 15px;
  }





  </style>