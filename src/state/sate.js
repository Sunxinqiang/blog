var FSM = {
  on: {
    change () {
      this.state = FSM.strong
      return 'strong'
    }
  },
  strong: {
    change () {
      this.state = FSM.off
      return 'off'
    }
  },
  off: {
    change () {
      this.state = FSM.on
      return 'on'
    }
  }
}

var Light = function () {
  this.state = FSM.off
}

Light.prototype.change = function () {
  return this.state.change.call(this)
}

module.exports = Light