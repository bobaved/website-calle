const fs = process.server ? require('fs-extra') : null

var glob = require('glob')
var path = require('path')

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/music': 'music/*.json'
})
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: '_posts' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`)
    })
  )
}
export const state = () => ({
  music: []
})

export const mutations = {
  setMusic(state, music) {
    state.music.push(music)
  }
}

export const actions = {
  async get({ commit }) {
    /*
      for (let i = 0; i < fileNames.length; i++) {
      let post = await import('~/content/blog/posts/' + params.slug + '.json')
      console.log(post)
      music.push(post)
    }
*/
    commit('setMusic', dynamicRoutes)
  }
}
