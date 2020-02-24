it('Testing to see if Jest works', () => {
  expect(2).toBe(2)
})

it('Testing to see if Jest works again', async done => {
  expect(1).toBe(1)
  done()
})

it('Get a test endpoint', async done => {
  const res = await request.get('/test')
  done()
})
