<template>
  <div class="content bg">
    <dv-full-screen-container>
      <dv-border-box-7 style="height: 60px">
        <dv-decoration-7
          style="
            width: 150px;
            line-height: 60px;
            margin: 0 auto;
            font-size: 24px;
          "
          >测试数据</dv-decoration-7
        >
        <dv-decoration-11
          @click="show = !show"
          style="
            width: 150px;
            top: -40px;
            height: 60px;
            float: right;
            z-index: 99;
          "
          >切换</dv-decoration-11
        >
      </dv-border-box-7>
      <dv-border-box-7>
        <dv-loading v-if="show">Loading...</dv-loading>
        <dv-flyline-chart-enhanced
          v-if="!show"
          :config="ff"
          style="width: 100%; height: 100%"
        />
      </dv-border-box-7>
    </dv-full-screen-container>

    <div class="data-footer"></div>
  </div>
</template>

<script setup>
//vue3 静态资源 组件 通过import方式加载
import { ref } from 'vue'
import a from '@/assets/img/map.jpg'
// import b from '@/assets/img/mapCenterPoint.png'
// import c from '@/assets/img/mapPoint.png'

// let num = 10
let show = ref(false)
// let config = {
//   name: 'zhangsan',
//   age: 19
// }

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
.data-footer {
  height: 20%;
  width: 100%;
  background-color: rgba(85, 18, 156, 0.6);
  pointer-events: auto;
  bottom: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
