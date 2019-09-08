var assert = require('assert')
var chain500 = require('../src/duty_chain/aopAfter')

describe('职责链-aop', function () {
  describe('定金500', function () {
    it('定金500已付', function () {
      assert.equal(chain500(1, true, 10), '定金500已付')
    })
    it('定金500未付', function () {
      assert.equal(chain500(1, false, 10), '普通购买')
    })
    it('定金500未付-库存不足', function () {
      assert.equal(chain500(1, false, 0), '库存不足')
    })
  })
  describe('定金300', function () {
    it('定金300已付', function () {
      assert.equal(chain500(2, true, 10), '定金300已付')
    })
    it('定金300未付', function () {
      assert.equal(chain500(2, false, 10), '普通购买')
    })
    it('定金300未付-库存不足', function () {
      assert.equal(chain500(2, false, 0), '库存不足')
    })
  })
  describe('普通购买', function () {
    it('普通购买-有库存', function () {
      assert.equal(chain500(3, false, 10), '普通购买')
    })
    it('普通购买-无库存', function () {
      assert.equal(chain500(3, true, 0), '库存不足')
    })
  })
})