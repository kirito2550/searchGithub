<template>
  <div class="container">
    <MySearch/>
    <MyList/>
  </div>
</template>

<script>
import MySearch from './components/MySearch'
import MyList from './components/MyList'

export default {
  name: 'App',
  components: {
    MySearch,MyList
  },
  mounted(){
    console.log('app',this);
  }
  
}


</script>

<style>
  
</style>