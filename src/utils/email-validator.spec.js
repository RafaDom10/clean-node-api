const validator = require('validator')
class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator()
}

describe('Email validator', () => {
  test('Should return true with validator returns true ', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@emai.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false with validator returns false ', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@emai.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@emai.com')
    expect(validator.email).toBe('any_email@emai.com')
  })
})
