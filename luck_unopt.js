'use strict'

function easeInQuad(t) {
    return t * t;
}

const N = 100

const xs = Array.from({ length: N }, () => Math.random())
const ys = Array.from({ length: N }, (_, n) => easeInQuad(n / N))

let tBee = 0

const cloverPic = {
    value: 0x15f762f0734dbbd8256072e4b4d420cn,
    width: 9,
    height: 9,
    cardinality: 3,
    palette: [
        ,
        0x38b764,
        0xa7f070,
    ],
}

const beePic = {
    value: 0x555007f7507fddd1df7757fddd07f75005550019a90069a4005140n,
    width: 11,
    height: 10,
    cardinality: 4,
    palette: [
        ,
        0x1a1c2c,
        0x73eff7,
        0xffcd75,
    ],
}

function decodeBitmapBigInt(value, width, height, cardinality, readFunction) {
    cardinality = BigInt(cardinality);
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            readFunction(x, y, Number(value % cardinality));
            value /= cardinality;
        }
    }
}

function paint(pic, x0, y0, scale) {
    const { value, width, height, cardinality, palette } = pic

    decodeBitmapBigInt(value, width, height, cardinality, (x, y, value) => {
        c.fillStyle = `#${palette[value]?.toString(16).padStart(6, '0') ?? '0000'}`;
        c.fillRect(x0 + scale * x, y0 + scale * y, scale, scale);
    });
}

let tPrev = 0

function render(tCurrent) {
    requestAnimationFrame(render)

    let t = tCurrent - tPrev
    tPrev = tCurrent

    c.fillStyle = '#333c57'
    c.fillRect(0, 0, a.width, a.height)

    for (let n = 0; n < N; ++n) {
        if ((xs[n] -= 0.0005 * t * (0.1 + ys[n] * 0.9)) < 0) {
            xs[n] += 1
        }
        paint(cloverPic, 0 | xs[n] * (a.width + 120) - 60, 0 | ys[n] * (a.height - 60) + 10, 0 | 2 + 5 * ys[n])
    }

    tBee += 0.001 * t
    if (tBee > 2 * Math.PI) tBee -= 2 * Math.PI

    paint(beePic, 0 | 0.5 * a.width - 22, 0 | (0.5 + 0.1 * Math.sin(tBee)) * a.height - 20, 4)

    paint(beePic, 0 | (0.45 - 0.01) * a.width - 16, 0 | (0.5 + 0.1 * Math.sin(tBee - 0.2)) * a.height - 15, 3)
    paint(beePic, 0 | (0.40 - 0.01) * a.width - 16, 0 | (0.5 + 0.1 * Math.sin(tBee - 0.4)) * a.height - 15, 3)
    paint(beePic, 0 | (0.35 - 0.01) * a.width - 16, 0 | (0.5 + 0.1 * Math.sin(tBee - 0.6)) * a.height - 15, 3)
}

requestAnimationFrame(render)
