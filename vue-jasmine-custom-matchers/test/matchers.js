const customMatchers = {
  toHaveContent: (util) => {
    return {
      compare: (el) => {
        var result = {}
        result.pass = el.innerHTML.length !== 0

        if (result.pass) {
          result.message = 'Expected ' + el + ' not to have content'
        } else {
          result.message = 'Expected ' + el + 'to have content'
        }
        return result
      }
    }
  },
  toBeDivisibleBy2: (util) => {
    return {
      compare: (received) => {
        var result = {}
        result.pass = received % 2 === 0

        if (result.pass) {
          result.message = 'Expected ' + received + ' not to be divisible'
        } else {
          result.message = 'Expected ' + received + 'to be divisible'
        }
        return result
      }
    }
  }
}

export default customMatchers
