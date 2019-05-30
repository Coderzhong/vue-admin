<template>
  <div class="login-bg-wrapper">
    <canvas ref="myCanvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      canvas: null,
      width: window.innerWidth,
      height: window.innerHeight,
      circleArr: [],
      point: 35,
      context: null,
      timer: null
    }
  },
  mounted () {
    this.canvas = this.$refs.myCanvas
    const canvas = this.canvas
    this.context = canvas.getContext('2d')
    this.circleArr = []

    this.init()
    this.timer = setInterval(() => {
      for (let i = 0; i < this.point; i++) {
        const cir = this.circleArr[i]
        cir.x += cir.moveX
        cir.y += cir.moveY
        if (cir.x > this.width) {
          cir.x = 0
        } else if (cir.x < 0) {
          cir.x = this.width
        }
        if (cir.y > this.height) {
          cir.y = 0
        } else if (cir.y < 0) {
          cir.y = this.height
        }
      }
      this.draw()
    }, 16)

    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.init()
    })
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    // 线条：开始xy坐标，结束xy坐标，线条透明度
    Line (x, y, _x, _y, o) {
      this.beginX = x
      this.beginY = y
      this.closeX = _x
      this.closeY = _y
      this.o = o
    },
    // 点：圆心xy坐标，半径，每帧移动xy的距离
    Circle (x, y, r, moveX, moveY) {
      this.x = x
      this.y = y
      this.r = r
      this.moveX = moveX
      this.moveY = moveY
    },
    // 生成max和min之间的随机数
    num (max, _min) {
      const min = arguments[1] || 0
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // 绘制原点
    drawCricle (cxt, x, y, r, moveX, moveY) {
      const circle = new this.Circle(x, y, r, moveX, moveY)
      cxt.beginPath()
      cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
      cxt.closePath()
      cxt.fillStyle = 'rgba(0, 0, 0, .08)'
      cxt.fill()
      return circle
    },
    // 绘制线条
    drawLine (cxt, x, y, _x, _y, o) {
      const line = new this.Line(x, y, _x, _y, o)
      cxt.beginPath()
      cxt.strokeStyle = `rgba(0, 0, 0, ${o})`
      cxt.moveTo(line.beginX, line.beginY)
      cxt.lineTo(line.closeX, line.closeY)
      cxt.closePath()
      cxt.stroke()
    },
    // 初始化生成原点
    init () {
      this.circleArr = []
      for (let i = 0; i < this.point; i++) {
        this.circleArr.push(this.drawCricle(
          this.context,
          this.num(this.width),
          this.num(this.height),
          this.num(15, 2),
          this.num(10, -10) / 40,
          this.num(10, -10) / 40)
        )
      }
      this.draw()
    },
    // 每帧绘制
    draw () {
      this.context.clearRect(0, 0, this.width, this.height)
      const circleArr = this.circleArr
      for (let i = 0; i < this.point; i++) {
        this.drawCricle(this.context, circleArr[i].x, circleArr[i].y, circleArr[i].r)
      }
      for (let i = 0; i < this.point; i++) {
        for (let j = 0; j < this.point; j++) {
          if (i + j < this.point) {
            const A = Math.abs(circleArr[i + j].x - circleArr[i].x)
            const B = Math.abs(circleArr[i + j].y - circleArr[i].y)
            const lineLength = Math.sqrt(A * A + B * B)
            const C = 1 / lineLength * 7 - 0.009
            const lineOpacity = C > 0.03 ? 0.03 : C
            if (lineOpacity > 0) {
              this.drawLine(
                this.context,
                circleArr[i].x,
                circleArr[i].y,
                circleArr[i + j].x,
                circleArr[i + j].y,
                lineOpacity
              )
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-bg-wrapper {
  position: fixed;
  z-index: -1;
  background: #f0f2f5;
}
</style>
