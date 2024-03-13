<template>
  <div class="content">
    <dv-full-screen-container style="width: 2048px; height: 1400px">
      <div style="width: auto; height: 5vh">
        <el-row :gutter="20">
          <el-col :span="5">
            <p style="font-size: 24px; margin-left: 10px">2024年12月8日</p>
          </el-col>
          <el-col :span="14">
            <dv-decoration-7
              style="
                width: 150px;
                line-height: 60px;
                margin: 0 auto;
                font-size: 24px;
              "
              >测试数据</dv-decoration-7
            >
          </el-col>
          <el-col :span="5">
            <dv-decoration-11
              @click="$emit('enlarge-text')"
              style="width: 150px; height: 60px; float: right; z-index: 99"
              >切换</dv-decoration-11
            >
          </el-col>
        </el-row>
      </div>
      <div style="width: auto; height: 95vh">
        <el-row :gutter="20">
          <el-col :span="5">
            <dv-border-box-3 style="width: 100%; height: 300px">
              <!-- 环形图 -->
              <dv-active-ring-chart
                :config="config"
                style="width: 300px; height: 300px"
            /></dv-border-box-3>
            <!-- 轮播图表 -->
            <dv-border-box-8 style="width: 100%; height: 300px">
              <dv-scroll-board
                :config="lunbotubiao"
                style="width: 99%; height: 298px"
              />
            </dv-border-box-8>

            <!-- 排名轮播表 -->
            <dv-scroll-ranking-board
              :config="baiminglunbobiao"
              style="width: 100%; height: 300px"
            />
            <!-- 环形图 -->
            <dv-active-ring-chart
              :config="config"
              style="width: 300px; height: 300px"
            />
          </el-col>
          <el-col :span="14">
            <!-- 地图 -->
            <dv-flyline-chart-enhanced
              :config="ff"
              style="width: 100%; height: 600px"
            />
            <!-- 排名轮播表 -->
            <dv-scroll-ranking-board
              :config="baiminglunbobiao"
              style="width: 100%; height: 400px"
            />
          </el-col>
          <el-col :span="5">
            <!-- 环形图 -->
            <dv-active-ring-chart
              :config="config"
              style="width: 300px; height: 300px"
            />
            <!-- 水位图 -->
            <dv-water-level-pond
              :config="shuiweitu"
              style="width: 150px; height: 200px"
            />
            <!-- 锥形图 -->
            <dv-conical-column-chart
              :config="zhuixingtu"
              style="width: 400px; height: 200px"
            />
          </el-col>
        </el-row>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script setup>
//vue3 静态资源 组件 通过import方式加载
import a from '@/assets/img/map.jpg'
// import b from '@/assets/img/mapCenterPoint.png'
// import c from '@/assets/img/mapPoint.png'

// let num = 10
// let config = {
//   name: 'zhangsan',
//   age: 19
// }
let shuiweitu = {
  data: [66]
}
let zhuixingtu = {
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ],
  img: []
}
let lunbotubiao = {
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
  ]
}
let baiminglunbobiao = {
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ]
}

// let list = {
//   data: [
//     ['行1列1', '行1列2', '行1列3'],
//     ['行2列1', '行2列2', '行2列3'],
//     ['行3列1', '行3列2', '行3列3'],
//     ['行4列1', '行4列2', '行4列3'],
//     ['行5列1', '行5列2', '行5列3'],
//     ['行6列1', '行6列2', '行6列3'],
//     ['行7列1', '行7列2', '行7列3'],
//     ['行8列1', '行8列2', '行8列3'],
//     ['行9列1', '行9列2', '行9列3'],
//     ['行10列1', '行10列2', '行10列3']
//   ]
// }

let ff = {
  points: [
    {
      name: '郑州',
      coordinate: [0.48, 0.35]
    },
    {
      name: '新乡',
      coordinate: [0.52, 0.23]
    },
    {
      name: '焦作',
      coordinate: [0.43, 0.29]
    },
    {
      name: '开封',
      coordinate: [0.59, 0.35]
    },
    {
      name: '许昌',
      coordinate: [0.53, 0.47]
    },
    {
      name: '平顶山',
      coordinate: [0.45, 0.54]
    },
    {
      name: '洛阳',
      coordinate: [0.36, 0.38]
    },
    {
      name: '周口',
      coordinate: [0.62, 0.55]
    },
    {
      name: '漯河',
      coordinate: [0.56, 0.56]
    },
    {
      name: '南阳',
      coordinate: [0.37, 0.66]
    },
    {
      name: '信阳',
      coordinate: [0.55, 0.81]
    },
    {
      name: '驻马店',
      coordinate: [0.55, 0.67]
    },
    {
      name: '济源',
      coordinate: [0.37, 0.29]
    },
    {
      name: '三门峡',
      coordinate: [0.2, 0.36]
    },
    {
      name: '商丘',
      coordinate: [0.76, 0.41]
    },
    {
      name: '鹤壁',
      coordinate: [0.59, 0.18]
    },
    {
      name: '濮阳',
      coordinate: [0.68, 0.17]
    },
    {
      name: '安阳',
      coordinate: [0.59, 0.1]
    }
  ],
  lines: [
    {
      source: '新乡',
      target: '郑州'
    },
    {
      source: '焦作',
      target: '郑州'
    },
    {
      source: '开封',
      target: '郑州'
    },
    {
      source: '许昌',
      target: '郑州'
    },
    {
      source: '平顶山',
      target: '郑州'
    },
    {
      source: '洛阳',
      target: '郑州'
    },
    {
      source: '周口',
      target: '郑州'
    },
    {
      source: '漯河',
      target: '郑州'
    },
    {
      source: '南阳',
      target: '郑州'
    },
    {
      source: '信阳',
      target: '郑州'
    },
    {
      source: '驻马店',
      target: '郑州'
    },
    {
      source: '济源',
      target: '郑州'
    },
    {
      source: '三门峡',
      target: '郑州'
    },
    {
      source: '商丘',
      target: '郑州'
    },
    {
      source: '鹤壁',
      target: '郑州'
    },
    {
      source: '濮阳',
      target: '郑州'
    },
    {
      source: '安阳',
      target: '郑州'
    }
  ],
  bgImgSrc: a
}
</script>

<style scoped>
.content {
  color: white;
}
.full {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
  height: 100vh;
}
</style>
