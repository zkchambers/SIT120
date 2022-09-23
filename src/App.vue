<template>
  <div><!-- Navbar and title -->
   <navbar></navbar>
   <form-helper>
    <h2 v-color slot="title">{{ title }}</h2>
   </form-helper>
  </div>
</template>

<!-- Components imported -->
<script>
import FormHelper from './FormHelper.vue';
import Navbar from './Navbar.vue';

export default {
  components: {
  'navbar': Navbar,
  'form-helper': FormHelper
  },
  data() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'montserrat', sans-serif;
  }
  
  header {
    width: 100vw;
    background-color: black;
    padding: 15px;
  }
</style>