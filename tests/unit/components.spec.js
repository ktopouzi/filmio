import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import MovieDetail from '@/components/Movies/MovieDetail.vue'


describe('Components', () => {
  it('renders props.msg when passed', () => {
    const routes = [{"name":"Route","to":"/"},{"name":"Route2","to":"/route"},{"name":"Route3","to":"/route"}]
    const wrapper = shallowMount(Header, {
      propsData: { routes },
      stubs: ['router-link']
    })
    expect(wrapper.findAll('.header-menu__item').length).toBe(3)
  })

  it('should display a movie detail view', () => {
    const movie = {"poster_path":"/",
    "title":"Title",
    "overview":"Overview",
    "release_date":"2020-07-10",
    "vote_average":6.3,
    "vote_count":25,
  }
    const wrapper = shallowMount(MovieDetail, {
      propsData: { movie },
      stubs: ['router-link']
    })
    expect(wrapper.find('.movie-details__section-2__vote-counts').text()).toBe("(25)")
  })
})