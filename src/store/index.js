import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popularMovies: [],
    searchMovies: [],
    currentMovie: ''
  },
  mutations: {
    pushPopularMovies(state,payload){
      state.popularMovies = [...payload]
    },
    getCurentMovie(state,payload){
      state.currentMovie = payload
    },
    setSearchMovies(state,payload){
      state.searchMovies = [...payload]
    }
  },
  actions: {
    async getPopularMovies(state)
    {
      //get the popular movies
      const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1`)

      //commit the mutation to store the data into state
      const popular = await movies.json()
      state.commit("pushPopularMovies",[...popular.results])
    },
    async getMovieWithID(state,id)
    {
      //get any movie given an ID
      const movies = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_APIKEY}&language=en-US`)

      //commit the mutation to store the data into state
      const movie = await movies.json()
      state.commit("getCurentMovie",movie)
    },
    async searchMovie(state,term)
    {
      //search the db with the given term
      const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&query=${term}`)

      //commit the mutation to store the data into state
      const movie = await movies.json()
      state.commit("setSearchMovies",[...movie.results])
    }
  },
  modules: {
  },
  getters:{
    //get all the popular movies
    getPopularMovies: (state) => state.popularMovies,

    //get the current movie
    getCurrentMovie: (state) => state.currentMovie,

    //get the movies after the result
    getSearchResults: (state) => state.searchMovies,

    getMovie: state => id =>  {
      return state.popularMovies.find(movie => movie.id === id)
    }
  }
})
