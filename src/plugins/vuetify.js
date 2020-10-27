import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                //edits light theme preset colors
                primary: '#9652ff',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
                lightgray: '#707070'
            }
        },
        light: true
    }
});
