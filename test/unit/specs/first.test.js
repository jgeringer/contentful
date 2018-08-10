/*
// Example test for a vue component. If Vuex was installed as well, it will test that the mutation really commits as well.
*/
import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import first from '@/Vue/Components/first'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('first.vue', () => {
  const wrapper = shallow(first)

  test('should render correct contents', () => {
    expect(wrapper.find('div>p').text()).toEqual('This is a test vue component, which is part of the initial build process.')
  })
  test('and have a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  describe('this button', () => {
    let store // mock store
    let mutations // and mutation

    mutations = {
      clickUp: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })

    const wrapper = shallow(first, { localVue, store })

    test('should commit a clickUp mutation when clicked', () => {
      wrapper.find('button').trigger('click')
      expect(mutations.clickUp).toHaveBeenCalled()
    })
  })
})