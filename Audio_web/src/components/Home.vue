<template>
  <div class="grid place-items-center h-screen">
    <div ref="wave"
         class="w-full h-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 z-10 transition duration-300 border border-white/30">
      <h1 class="box text-3xl font-extrabold text-center text-teal-600 mb-8 tracking-wide">音频文件上传与处理展示</h1>
      <div class="box z-50 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- 左侧：音频上传和播放 -->
        <div>
          <label for="audio-upload" class="block text-gray-700 font-semibold mb-2">请选择音频文件</label>
          <input type="file" id="audio-upload" accept=".mp3,.wav,.ogg"
                 class="border border-teal-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition bg-white/60" />
          <audio id="audio-player" controls
                 class="w-full h-14 rounded-lg shadow-inner border border-gray-300 bg-gray-50"></audio>
        </div>

        <!-- 右侧：结果展示 -->
        <div>
          <label for="result-display" class="block text-gray-700 font-semibold mb-2">处理结果</label>
          <textarea id="result-display" placeholder="后端处理结果将显示在这里"
                    class="border border-teal-300 rounded-lg p-4 w-full h-48 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none bg-white/60"></textarea>
        </div>
      </div>

      <!-- 提交按钮 -->
      <div class="box flex justify-center">
        <button
            class="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition duration-300">
          <i class="fas fa-paper-plane mr-2"></i> 提交处理
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from 'three';
import WAVE from 'vanta/src/vanta.waves.js';
import {onMounted,onBeforeMount,ref} from "vue";

const wave = ref(null)
let vantaEffect = null

onMounted(()=>{
  vantaEffect = WAVE({
    el: wave.value,
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x7ed6df,
    shininess: 30.0,
    waveHeight: 15.0,
    waveSpeed: 0.4,
    zoom: 0.9
  });
})

onBeforeMount(()=>{
  if(vantaEffect){
    vantaEffect.destroy();
  }
})

</script>

<style scoped>
.box{
  margin-top: 90px;
  margin-right: 50px;
  margin-left: 50px;
}

</style>