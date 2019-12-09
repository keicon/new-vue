import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: []
}
//改变state里面值 
const mutations = {
    xiuCount(state, payload) {
        // window.console.log( payload.id)

        // state.count.push(payload)

        // console.log(state.count);

        let abc = state.count.findIndex(n => n.id === payload.id)
        // window.console.log(abc);
        if (abc < 0) {
            state.count.push(payload)
        } else {

            // console.log(state.count[abc])
            state.count[abc].num++

            // console.log(state.count)、

            //  abc.id.num++
        }

    }

}


export default
    new Vuex.Store({
        state, mutations
    })