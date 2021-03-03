const HEIGHT_BUFFER = 1
const SQUARE_COUNT = 50
/**
 * @param {CanvasRenderingContext2D} context Context to draw on
 */
export function drawBackground(context) {
  const { width, height } = context.canvas
  const unit = height / (SQUARE_COUNT + HEIGHT_BUFFER * 2)
  const xOffset = (width - unit * SQUARE_COUNT) / 2
  context.fillStyle = `limegreen`
  context.fillRect(xOffset, unit * HEIGHT_BUFFER, unit * SQUARE_COUNT, unit * SQUARE_COUNT)
}
/**
 * @param {CanvasRenderingContext2D} context Context to draw on
 */
export function drawGrid(context) {
  const { width, height } = context.canvas
  const unit = height / (SQUARE_COUNT + HEIGHT_BUFFER * 2)
  const size = unit * SQUARE_COUNT
  const xOffset = (width - size) / 2
  const yOffset = unit * HEIGHT_BUFFER
  context.strokeStyle = `black`
  let x = xOffset + unit
  let y = yOffset + unit
  for (let i = 0; i < SQUARE_COUNT - 1; ++i) {
    context.beginPath()
    context.moveTo(x, yOffset)
    context.lineTo(x, yOffset + size)
    context.stroke()
    context.moveTo(xOffset, y)
    context.lineTo(xOffset + size, y)
    context.stroke()
    x += unit
    y += unit
  }
}
/**
 * @param {CanvasRenderingContext2D} context Context to draw on
 * @param {number} x The x coordinate to find the square for
 * @param {number} y The y coordinate to find the square for
 */
export function fillSquare(context, x, y) {
  const { width, height } = context.canvas
  const unit = height / (SQUARE_COUNT + HEIGHT_BUFFER * 2)
  const size = unit * SQUARE_COUNT
  const xOffset = (width - size) / 2
  const yOffset = unit * HEIGHT_BUFFER
  console.log({ x, y })
  if (x < xOffset || x > xOffset + size || y < yOffset || y > yOffset + size) return
  const adjustedX = x - xOffset
  const adjustedY = y - yOffset
  const squareX = Math.floor(adjustedX / unit)
  const squareY = Math.floor(adjustedY / unit)
  console.log(squareX, squareY)
}
