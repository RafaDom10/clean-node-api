module.exports = class ServerError extends Error {
  constructor () {
    super('Server error, try again later')
    this.name = 'ServerError'
  }
}
