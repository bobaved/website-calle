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
        const fs = require('fs-extra')
        let path = 'content/music-list'
        let musicList = fs.readdirSync(path)
        commit('setMusicPaths', musicList.map(item => path + '/' + item))
      }
    }
  })
}

export default createStore
