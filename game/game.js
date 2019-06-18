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
    context.globalAlpha = 1.0
    context.fillStyle = "black"
    context.font = "80px 'Agency'"
    context.textAlign = "center"
    context.fillText("Game Scene", canvas.width / 2, canvas.height / 2)
    context.font = "50px 'Agency'"
    context.fillText(`経過時間: ${this.formatTime(this.timer)}秒`, canvas.width / 2, canvas.height / 2 + 80)
  }

  formatTime(num) {
    return (num / 1000).toFixed(3)
  }
}