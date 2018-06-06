import Vue from 'vue/dist/vue.common'
import { mount } from '@vue/test-utils'
import customMatchers from '../matchers'

describe('component', () => {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });

  it('should have content', () => {
    const vm = new Vue({
      template: `<div><p>Hello</p></div>`
    }).$mount()
    expect(vm.$el).toHaveContent()
  })

  it('should be divisible', () => {
    expect(4).toBeDivisibleBy2()
  })
})
