import { mount } from '@vue/test-utils'
import Vue from 'vue/dist/vue.common'


describe('component', () => {
  it('should be divisible', () => {
    expect(4).toBeDivisibleBy(2)
  })
  it('should have content', () => {
    const vm = new Vue({
      template: `
        <div><p>Hello</p></div>
      `
    }).$mount()
    expect(vm.$el).toHaveContent()
  })
  it('should not have content', () => {
    const vm = new Vue({
      template: `
        <div></div>
      `
    }).$mount()
    expect(vm.$el).not.toHaveContent()
  })
})
