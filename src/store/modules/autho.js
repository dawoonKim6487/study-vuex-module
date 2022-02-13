const autho = {
    namespaced: true,
    state: {
        name: 'dawoon',
        userId: 'dawoon6487'
    },
    mutations: {
        USERNAMECH: (state, payload) => {
            state.name = payload
        }
    },
    actions: {
        userNamech: ({ state, commit, rootState }, payload) => {
            console.log(payload)
            console.log('state', state)
            console.log('rootState', rootState)
            commit('USERNAMECH', payload)
        }
    },
    getters: {
        userName: (state, getters, rootGetters) => {
            console.log(getters)
            console.log(rootGetters)
            return state.name
        }
    },
};


export default autho