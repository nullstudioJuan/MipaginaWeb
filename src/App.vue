<template>
  <div>
     
        <router-view/> 
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import navBar from '../src/components/NavBar'

export default {
  components: {
    FadeTransition,
    appNav:navBar
  }
};
</script>
