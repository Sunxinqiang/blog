var assert = require('assert')
var Light = require('../src/state/sate')
var light = new Light()
describe('状态模式', function () {
  describe('灯开关', function () {
    it('关着点按钮-变开着', function () {
      assert.equal(light.change(), 'on')
    })
    it('开着点-强光', function () {
      assert.equal(light.change(), 'strong')
    })
    it('强光-关', function () {
      assert.equal(light.change(), 'off')
    })
  })
})