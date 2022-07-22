export function generateFlowers() {
  let f = []
  for (let i = 0; i < 20; i++) {
    let x, y
    do {
      x = r(2, 98)
      y = r(70, 95)
    } while (f.some((e) => ((x - e.x) ** 2 + (y - e.y) ** 2) ** 0.5 < 5))

    f.push({
      x,
      y,
      type: r(1, 10),
    })
  }
  return f
}

function r(lo, hi) {
  return Math.floor(Math.random() * (hi + 1 - lo)) + lo
}
