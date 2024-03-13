<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(async () => {
  //   const viewer = new Cesium.Viewer('cesiumContainer') //基础页面
  //     const custom = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
  //         "https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer", {
  //             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZTRmNWMwNy0yOGI0LTQ5YzItYTRjYi1mMmNhYjIwZjQ5OWYiLCJpZCI6MTk4NDk2LCJpYXQiOjE3MDkxMTA0NDR9.Ed9R9osjir-sI3obnvtvwgQLipSPalE1mnhRFWITEhk"
  //     });
  //   const viewer = new Cesium.Viewer('cesiumContainer', {
  //     //设置小部件
  //     baseLayerpicker: false,
  //     //设置图像提供的程序
  //     imageryProvider: custom,
  //     //设置界面地形
  //     terrainProvider: Cesium.createWorldTerrainAsync({
  //       requestWaterMask: true,
  //       requestVertexNormals: true
  //     })
  //   })

  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZTRmNWMwNy0yOGI0LTQ5YzItYTRjYi1mMmNhYjIwZjQ5OWYiLCJpZCI6MTk4NDk2LCJpYXQiOjE3MDkxMTA0NDR9.Ed9R9osjir-sI3obnvtvwgQLipSPalE1mnhRFWITEhk'

  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain()
  })

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0)
    }
  })

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  const buildingTileset = await Cesium.createOsmBuildingsAsync()
  viewer.scene.primitives.add(buildingTileset)
})
</script>

<style>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
