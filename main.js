"use strict"

// 全てのファイルで共通して使う(使える)インスタンスをここで宣言する
let SCENE = {
  Title: 1,
  Game: 2
}
let scene
let title
let game
let keyManager
let mouseManager
let grid = {}

// index.htmlが読み込まれたときにまずこれが実行される
const init = _ => {
  keyManager = new KeyManager()
  mouseManager = new MouseManager()
  title = new Title()
  game = new Game()
  scene = SCENE.Title

  // ここでアセット(画像)を読み込む
  loadImage("title", "res/title.png")

  window.requestAnimationFrame(step)
}

const step = _ => {
  keyManager.update()
  mouseManager.update()
  grid = mouseManager.getNowMouse()
  if (scene == SCENE.Title) {
    title.step()
  } else if (scene == SCENE.Game) {
    game.step()
  } else {
    throw `undefained scene ${scene}`
  }
  draw()
  window.requestAnimationFrame(step)
}

const draw = _ => {
  context.fillStyle = "black"
  context.clearRect(0, 0, 600, 400)
  if (scene == SCENE.Title) {
    title.draw()
  } else if (scene == SCENE.Game) {
    game.draw()
  } else {
    throw `undefained scene ${scene}`
  }
}