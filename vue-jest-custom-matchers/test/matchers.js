const customMatchers = {
  toBeDivisibleBy: (received, argument) => {
    const pass = received % argument === 0
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${argument}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${argument}`,
        pass: false,
      }
    }
  },
  toHaveContent: (received) => {
    const pass = received.innerHTML.length !== 0
    if (pass) {
      return {
        message: () =>
          `expected element not to have content`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected element to have content`,
        pass: false,
      }
    }
  }
}

global.expect.extend(customMatchers)
