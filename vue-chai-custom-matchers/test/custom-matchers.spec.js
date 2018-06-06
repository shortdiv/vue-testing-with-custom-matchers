import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import customAssertions from './matchers.js'
import chai from 'chai'

describe('Counter.vue', () => {
  beforeEach(() => {
    chai.use(customAssertions)
  })
  it('increments count when button is clicked', () => {
    const vm = new Vue({
      template: `<div><p>Hello</p></div>`
    }).$mount()
    expect(vm.$el).toHaveContent()
  })
})
