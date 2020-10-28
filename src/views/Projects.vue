<template>
  <div class="projects">
    <h1 class="subtitle-2 lightgray--text" >My Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="card in myProjects " :key="card.title" >
          <v-expansion-panel-header>
            {{card.title}}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 lightgray--text">
            <div class="font-weight-bold">Due by: {{card.date}}</div>
            <div>{{card.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return{
      cards:[
        {title:'Create a New Website', person:'Ninja', date:'Jan. 1, 2020', status:'In-Process', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit dolores commodi doloribus iusto id quo quibusdam. Assumenda totam ipsam corporis dicta.'},
        {title:'Create New Job', person:'Bob', date:'Feb. 1, 2020', status:'Planning', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit dolores commodi doloribus iusto id quo quibusdam. Assumenda totam ipsam corporis dicta.'},
        {title:'Be Awesome', person:'Tyler', date:'March. 1, 2020', status:'Completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit dolores commodi doloribus iusto id quo quibusdam. Assumenda totam ipsam corporis dicta.'},
        {title:'Do Something', person:'Angela', date:'March. 1, 2019', status:'Overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit dolores commodi doloribus iusto id quo quibusdam. Assumenda totam ipsam corporis dicta.'},
        {title:'Do Something, again', person:'Ninja', date:'March. 12, 2029', status:'Completed', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fugit dolores commodi doloribus iusto id quo quibusdam. Assumenda totam ipsam corporis dicta.'}
      ]
    }
  },
  computed:{
    myProjects(){
      return this.cards.filter(card=> {
        return card.person === 'Ninja'
      })
    }
  }
}
</script>

<style lang="scss" scoped>


</style>