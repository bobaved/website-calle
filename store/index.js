import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const SET_MUSIC = 'set_music'
const SET_ART = 'set_art'
const SET_POSTS = 'set_posts'

const createStore = () =>
  new Vuex.Store({
    state: {
      music: [],
      art: [],
      posts: []
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getMusic')
        await dispatch('getArt')
        await dispatch('getPosts')
      },
      async getMusic({ state, commit }) {
        const req = require.context('~/content/music/', false, /\.json$/)
        const searchMusic = await req.keys().map(key => ({
          ...req(key),
          _path: `/music/${key.replace('.json', '').replace('./', '')}`
        }))
        commit(SET_MUSIC, searchMusic.reverse())
      },
      async getArt({ state, commit }) {
        const req = require.context('~/content/art/', false, /\.json$/)
        const searchArt = await req.keys().map(key => ({
          ...req(key),
          _path: `/art/${key.replace('.json', '').replace('./', '')}`
        }))
        commit(SET_ART, searchArt.reverse())
      },
      async getPosts({ state, commit }) {
        const req = require.context('~/content/post/', false, /\.json$/)
        const searchPosts = await req.keys().map(key => ({
          ...req(key),
          _path: `/post/${key.replace('.json', '').replace('./', '')}`
        }))
        commit(SET_POSTS, searchPosts.reverse())
      }
    },
    mutations: {
      [SET_MUSIC](state, data) {
        state.music = data
      },
      [SET_ART](state, data) {
        state.art = data
      },
      [SET_POSTS](state, data) {
        state.posts = data
      }
    }
  })

export default createStore
