import { Readable, Transform, Writable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    if (i > 100) {
      this.push(null)
    } else {
      setTimeout(() => {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }, 1000)
    }
  }
}

class InverseNumber extends Transform {
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString())  * -1;

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, enconding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}


new OneToHundredStream()
  .pipe(new InverseNumber())
  .pipe(new MultiplyByTenStream())