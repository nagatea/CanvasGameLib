class Title {
  constructor() {
    this.text = "Press ENTER or Click"
  }

  step() {
    // ここにゲームのロジックを書いていく
    if (keyManager.isJustPressed('enter')){
      scene = SCENE.Game
    }
    if (grid.x > 0 && grid.x < 500 && grid.y > 0 && grid.y < 550 && mouseManager.isJustPressed('left')){
      scene = SCENE.Game
    }
  }

  draw() {
    // ここにゲームの描画部分を書いていく
    drawImage("title", 0, 0, 600, 400)
    context.globalAlpha = 1.0
    context.fillStyle = "black"
    context.font = "30px 'Agency'"
    context.textAlign = "center"
    context.fillText(this.text, 300, 360)
  }
}