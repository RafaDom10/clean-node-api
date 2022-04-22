const validator = require('validator')
class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

describe('Email validator', () => {
  test('Should return true with validator returns true ', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@emai.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false with validator returns false ', () => {
    validator.isEmailValid = false
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('invalid_email@emai.com')
    expect(isEmailValid).toBe(false)
  })
})
