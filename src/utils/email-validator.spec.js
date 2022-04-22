class EmailValidator {
  isValid (email) {
    return true
  }
}
describe('Email validator', () => {
  test('Should return true with validator returns true ', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@emai.com')
    expect(isEmailValid).toBe(true)
  })
})
