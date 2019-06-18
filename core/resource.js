const images = {}

// image登録関数
// keyは任意の名前、srcはファイルパス
// 例: loadImage("title", "res/title.png")
const loadImage = (key, src) => {
  images[key] = {}
  images[key].image = new Image()
  images[key].image.src = src
}

// ディレクトリを指定すると一気に読み込んでくれるやつ
const loadImages = (directory) => {
  for (let i = 0; i < data.length; i++) {
    let key = data[i].key
    let src = directory + "/" + key + ".png"
    loadImage(key, src)
  }
}

// imageを描画する
// 描画する前にloadImageでkeyを登録しておかないといけない
const drawImage = (key, sx, sy, sw, sh, dx, dy, dw, dh) => {
  if (sw === undefined) ctx.drawImage(images[key].image, sx, sy)
  else if (dx === undefined) ctx.drawImage(images[key].image, sx, sy, sw, sh)
  else ctx.drawImage(images[key].image, sx, sy, sw, sh, dx, dy, dw, dh)
}