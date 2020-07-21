import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'


describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const routes = [{"name":"Route","to":"/"},{"name":"Route2","to":"/route"},{"name":"Route3","to":"/route"}]
    const wrapper = shallowMount(Header, {
      propsData: { routes },
      stubs: ['router-link']
    })
    expect(wrapper.findAll('.header-menu__item').length).toBe(3)
  })
})