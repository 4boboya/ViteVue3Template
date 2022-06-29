<template>
  <div>test</div>
  <button @click="router.push('/')">home</button>
  <input type="text" v-model="input">
  <button @click="changeTestData">store</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const input = ref<string>("")

const init = () => {
    input.value = store.getters["Data/GetTest"]
}

const changeTestData = () => {
    store.dispatch("Data/SetTest", input.value)
}

init()
</script>