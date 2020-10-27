<template>
  <div class="team">
    <h1 class="subtitle-2 lightgray--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap >
          <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
            <v-card text class="text-center ma-2 py-2">
              <v-responsive>
                <v-avatar size="100" style="border: 2px solid lightgray">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subtitle-2">{{person.name}}</div>
                <div class="caption lightgray--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="lightgray">
                  <v-icon small left>mdi-message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return{
      team:[
        {name: 'Ninja', role:'Web Developer', avatar: '/avatar1.png'},
        {name: 'Ryu', role:'Graphic Designer', avatar: '/avatar2.png'},
        {name: 'Chun Li', role:'Web Developer', avatar: '/avatar3.png'},
        {name: 'Gouken', role:'Social Media', avatar: '/avatar4.png'},
        {name: 'Yoshi', role:'Sales', avatar: '/avatar5.png'}
      ]
    }
  }

}
</script>

<style lang="scss" scoped>


</style>