<template >
  <v-app>
    <Navbar/>
    <v-main>
      <v-container  class="ma-4">
        <router-view></router-view>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {Navbar},
  data ()  {
    return{

    }
  },
}
</script>

<style lang="scss" scoped>
#app{
  background-color: rgba(0,0,0,0.04);
}
</style>
