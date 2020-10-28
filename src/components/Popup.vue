<template class="d-flex justify-center" >
    <v-dialog max-width="600px" >
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid" ref="form">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="12" class="pb-0">
                                <v-text-field
                                    :rules="inputRules"
                                    outlined
                                    dense
                                    v-model="title"
                                    label="Project Title"
                                    prepend-inner-icon="mdi-folder"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" class="py-0">
                                <v-textarea
                                    :rules="inputRules"
                                    outlined
                                    dense
                                    v-model="content"
                                    label="Information"
                                    prepend-inner-icon="mdi-pencil"
                                    required
                                ></v-textarea>
                            </v-col>

                            <v-col cols="12" md="12">
                                <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                max-width="290"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        :rules="inputRules"
                                        :value="date"
                                        clearable
                                        outlined
                                        dense
                                        label="Due Date"
                                        readonly
                                        v-bind="attrs"
                                        prepend-inner-icon="mdi-calendar"
                                        v-on="on"
                                        @click:clear="date = null"
                                        >
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        @change="menu2 = false"
                                    >
                                    </v-date-picker>
                                </v-menu>
                            </v-col>

                            <v-col cols="12" >
                                <v-btn class="success mx-0" @click="submit()">Add Project</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog> 
</template>

<script>
import { format, parseISO} from 'date-fns'
export default {
    data(){
        return{
            title: '',
            content: '',
            date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
            menu2: false,
            inputRules:[
                v => v.length >=3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.title, this.content, this.date)
            }
        }
    }
}
</script>

<style lang="scss">
div.v-input__icon.v-input__icon--prepend-inner{
    padding-right:8px;
}
</style>