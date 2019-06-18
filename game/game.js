class Game {
  constructor() {
    this.timer = 0
    this.initalize = true
  }

  init() {
    this.startTime = new Date().getTime()
    this.initalize = false
  }

  step() {
    // ここにゲームのロジックを書いていく
    if (this.initalize) this.init()
    this.timer = new Date().getTime() - this.startTime
  }

  draw() {
    // ここにゲームの描画部分を書いていく
    ctx.globalAlpha = 1.0
    ctx.fillStyle = "black"
    ctx.font = "80px 'Agency'"
    ctx.textAlign = "center"
    ctx.fillText("Game Scene", canvas.width / 2, canvas.height / 2)
    ctx.font = "50px 'Agency'"
    ctx.fillText(`経過時間: ${this.formatTime(this.timer)}秒`, canvas.width / 2, canvas.height / 2 + 80)
  }

  formatTime(num) {
    return (num / 1000).toFixed(3)
  }
}