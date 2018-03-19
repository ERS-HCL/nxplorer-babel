/* global it, expect, describe */

import createServer from '../server/createServer'
import request from 'supertest'

const app = createServer()

describe('Backpack with Jest', () => {
  it('Object Rest Spread', () => {
    const hello = { hello: 'world' }
    const other = { ...hello, nice: 'to meet you' }

    expect(other).toEqual({ hello: 'world', nice: 'to meet you' })
  })
})
