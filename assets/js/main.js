import { drawBackground, drawGrid, fillSquare } from './canvas-helpers.js'

/**
 * @param {HTMLCanvasElement} canvas The canvas to draw on
 */
function main(canvas) {
  const { width, height } = canvas
  console.log(width, height)
  const context = canvas.getContext(`2d`)
  drawBackground(context)
  drawGrid(context)
  canvas.addEventListener(`click`, evt => {
    console.log(evt)
    // FIXME: Every value is offset from the page, not the element???
    const { clientX, clientY } = evt
    fillSquare(context, clientX, clientY)
  })
}
main(document.querySelector(`#screen`))
