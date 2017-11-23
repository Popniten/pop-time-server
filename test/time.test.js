const supertest = require('supertest')
const should = require('should')

const server = supertest.agent('http://localhost:8000')

describe('Time API test', () => {
  it('should return JSON', () => {
    server
      .get('/time')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200)
        done()
      })
  })
})
