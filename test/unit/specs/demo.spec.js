import {} from 'jest'
import {
  sum
} from 'api/demo'

describe('demo api', () => {
  it('测试加法111', () => {
    expect(sum(1, 3)).toEqual(4)
  })
})
