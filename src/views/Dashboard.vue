<template>
  <div class="dashboard">
    <v-container>
      <h1 class="subtitle-2 lightgray--text mb-4">Dashboard</h1>
      <v-row class="my-4">
        <v-btn small class="mx-3 py-4"  @click="sortBy('title')">
          <v-icon class="px-2 pl-0">mdi-folder</v-icon> 
          <span>Order by Project Title</span>
        </v-btn>
      
        <v-btn small class="py-4"  @click="sortBy('person')">
          <v-icon class="px-2 pl-0">mdi-account</v-icon>
          <span>Order by Person</span>
        </v-btn>
      </v-row>

      <v-card :class="`px-4 mb-2 card-project ${card.status}`" v-for="card in cards" :key="card.title">
        <v-row wrap >
          <v-col cols="12" xs="12" md="6">
            <div class="caption grey--text pb-1">Project Title</div>
            <div>{{card.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text pb-1">Person</div>
            <div>{{card.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text pb-1">Due Date: </div>
            <div>{{card.date}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="float-right d-flex align-center">
              <v-chip small :class="`${card.status} white--text caption my-2`">{{card.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return{
      cards:[
        {title:'Create a New Website', person:'Ninja', date:'Jan. 1, 2020', status:'In-Process'},
        {title:'Create New Job', person:'Bob', date:'Feb. 1, 2020', status:'Planning'},
        {title:'Be Awesome', person:'Tyler', date:'March. 1, 2020', status:'Completed'},
        {title:'Do Something', person:'Angela', date:'March. 1, 2019', status:'Overdue'}
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.cards.sort((a,b)=> a[prop]< b[prop] ? -1 : 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-project.Completed{
  border-left: 8px solid $success;
}
.card-project.In-Process{
  border-left: 8px solid $info;
}
.card-project.Overdue{
  border-left: 8px solid $error;
}
.card-project.Planning{
  border-left: 8px solid $blue;
} 

.v-chip.v-chip--no-color.Completed{
  background: $success;
}
.v-chip.v-chip--no-color.In-Process{
  background: $info;
}
.v-chip.v-chip--no-color.Overdue{
  background: $error;
}
.v-chip.v-chip--no-color.Planning{
  background: $blue;
} 
.buttonactive{
  background-color:$blue !important;
  color: white !important;
}


</style>