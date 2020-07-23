import store from "@/store"
import { resetTheState } from "../helpers"

describe('Mutations', () => {
    beforeEach(resetTheState);

    it('Should initialize popular movies', () => {
        const mockData = [
        {"title": "A title","overview": "lorem ipsum"},
        {"title": "A second title","overview": "lorem ipsum"}]

        store.commit("pushPopularMovies",mockData)
        expect(store.state.popularMovies).toMatchObject(mockData)

    })

    it('Should initialize currentMovie', () => {
        const mockData={"title": "A title","overview": "lorem ipsum"}

        store.commit("getCurentMovie",mockData)
        expect(store.state.currentMovie).toMatchObject(mockData)

    })
  })

  describe('Getters', () => {

    it('Should return a single movie from the popular ones', () => {
        const mockData = [
            {"popularity":246.634,"vote_count":1168,"video":false,"poster_path":"/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg","id":547016,"adult":false,"backdrop_path":"/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg","original_language":"en","original_title":"The Old Guard","genre_ids":[28,14],"title":"The Old Guard","vote_average":7.4,"overview":"Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.","release_date":"2020-07-10"},
            {"popularity":212.813,"vote_count":482,"video":false,"poster_path":"/kjMbDciooTbJPofVXgAoFjfX8Of.jpg","id":516486,"adult":false,"backdrop_path":"/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg","original_language":"en","original_title":"Greyhound","genre_ids":[28,18,10752],"title":"Greyhound","vote_average":7.5,"overview":"A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.","release_date":"2020-07-10"}]
        store.state.popularMovies = mockData
        const theMovie = store.getters.getMovie(547016)
        expect(theMovie).toEqual(mockData[0])

    })

  })