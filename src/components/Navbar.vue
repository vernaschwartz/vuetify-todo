<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="lightgray--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase lightgray--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--dropdown menu-->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                        <span>Menu</span>
                        <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="link in links" :key="link.text" router :to="link.route">
                        <v-icon left class="lightgray--text">{{link.icon}}</v-icon>
                        <v-list-item-title class="lightgray--text">{{ link.text }}</v-list-item-title>
                        
                    </v-list-item>
                </v-list>
            </v-menu> 
            
            <v-btn @click="toggleTheme" text>Toggle Theme</v-btn>
            <v-btn depressed color="light-grey">
                <span>Sign Out</span>
                <v-icon right >mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app class="primary white--text">
            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                    <v-avatar size="80" >
                        <img src="/avatar2.png">
                    </v-avatar>
                </v-col>
                <v-col cols="12" class="py-0 d-flex justify-center">Ninja</v-col>
                <v-col cols="12" class="d-flex justify-center">
                    <Popup/>
                </v-col>
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components:{Popup},
    data(){
        return{
            drawer: false,
            links:[
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route:'/'},
                {icon: 'mdi-folder', text: 'My Projects', route:'/projects'},
                {icon: 'mdi-account', text: 'Team', route:'/team'}
            ]
        }  
    },
     methods:{
        //this toggles the theme from dark to light via the btn
        toggleTheme() {
            this.$vuetify.theme.dark= !this.$vuetify.theme.dark
        }
    }
}
</script>