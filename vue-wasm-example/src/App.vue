<script setup lang="ts">

import {ref} from 'vue'
import {loadWasm} from './wasm/wasmLoader'
const result = ref(BigInt(0))
const a = ref(BigInt(0))


const calculate = async () =>{
    const wasm = await loadWasm();
    a.value++
    result.value = wasm.add(a.value,BigInt(20));// 调用 Rust 中的 add 函数
}
</script>

<template>
   <div>
    <h1>Rust + WASM in Vue</h1>
    <button @click="calculate">Add Numbers</button>
    <p>Result: {{ result }}</p>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
