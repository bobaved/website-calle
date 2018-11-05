import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      musicPaths: []
    }),
    mutations: {
      setMusicPaths(state, paths) {
        state.musicPaths = paths
      }
    },
    actions: {
      nuxtServerInit({ commit }) {
        commit('setMusicPaths', ['lala/lala', 'bebe/bebe'])
      }
    }
  })
}

export default createStore
