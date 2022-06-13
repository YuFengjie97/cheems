<template>
  <div class="con">
    <svg id="test3" viewBox="0 0 300 300">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style="stop-color: rgb(0, 255, 42); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(47, 195, 214); stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style="stop-color: rgb(255, 255, 0); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(255, 0, 0); stop-opacity: 1"
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'
export default {
  setup() {
    //起点
    const s = [20, 150]
    //终点
    const t = [
      [200, 10],
      [200, 50],
      [200, 90],
      [200, 130],
      [200, 170],
      [200, 210],
      [200, 250],
    ]

    //是否展开
    let isExpend = true
    //点格式需要拼成d3需要的格式
    const data3 = t.map((item) => {
      const line = {
        source: { x: s[0], y: s[1] },
        target: {
          x: item[0],
          y: item[1],
        },
      }
      return line
    })

    let svg3

    onMounted(() => {
      svg3 = d3.select('#test3')

      init()
      draw()
    })

    function draw() {
      //水平贝塞尔曲线
      const link3 = d3
        .linkHorizontal()
        .x((d) => d.x)
        .y((d) => d.y)

      const child = svg3.select('.child')

      // 渐变线其实是两条线,一条铺在另一条上面,下层的比较宽
      const pathStroke = child.selectAll('.pathStroke')
      pathStroke
        .data(data3)
        .enter()
        .append('path')
        .attr('d', (d) => link3(d))
        .attr('class', 'pathStroke')

      const pathFill = child.selectAll('.pathFill')
      pathFill
        .data(data3)
        .enter()
        .append('path')
        .attr('d', (d) => {
          // console.log(d);
          return link3(d)
        })
        .attr('class', 'pathFill')

      //绘制终点
      child
        .selectAll('circle')
        .data(t)
        .enter()
        .append('circle')
        .attr('cx', (d) => d[0])
        .attr('cy', (d) => d[1])
        .attr('r', 2)
        .attr('fill', 'red')
        .attr('class', 'endPoint')

      //终点文字
      child
        .selectAll('text')
        .data(t)
        .enter()
        .append('text')
        .attr('x', (d) => d[0] + 4)
        .attr('y', (d) => d[1] + 4)
        .attr('fill', 'red')
        .attr('font-size', 10)
        .text((d) => d)
    }

    function hide() {
      svg3.select('.child').style('opacity', 0)
    }
    function show() {
      svg3.select('.child').style('opacity', 1)
    }

    function init() {
      //起点
      svg3
        .append('circle')
        .attr('cx', s[0] - 6)
        .attr('cy', s[1])
        .attr('r', 4)
        .attr('fill', 'purple')
        .attr('class', 'startPoint')
        .on('click', function () {
          // console.log(this);
          if (isExpend) {
            // console.log('hide');
            hide()
          } else {
            // console.log('show');
            show()
          }
          isExpend = !isExpend
        })

      //添加子级 点 线 文字 容器
      svg3.append('g').attr('class', 'child')
    }
    return {}
  },
}
</script>

<style lang="less" scoped>
.con {
  svg {
        border: 1px solid black;
    }

    path {
        fill: none;
        stroke: url('#myLinearGradient1');
        stroke-width: 2;
        /* 起点圆头 */
        stroke-linecap: round;
        /* 拐角圆头 */
        stroke-linejoin: round;
        /* vector-effect: non-scaling-stroke; */
    }

    .pathFill {
        fill: "none";
        stroke: url('#grad1');
        stroke-width: 2px
    }

    .pathStroke {
        fill: "none";
        stroke: url('#grad2');
        stroke-width: 6px
    }

    .startPoint {
        cursor: pointer;
    }

    .child {
        transition: opacity .3s ease-in-out;
    }

    label {
        display: block;
        margin-left: 30px;
    }
}
</style>
