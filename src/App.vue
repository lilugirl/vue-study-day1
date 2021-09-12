<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <p @click="$store.commit('add')">{{ $store.state.counter }}</p>
    <p @click="$store.dispatch('add')">async{{ $store.state.counter }}</p>
    <p @click="$store.state = { counter: 1 }">
      直接修改state {{ $store.state.counter }}
    </p>

    <p>dobulecunter {{ $store.getters.doubleCounter }}</p>
    <!-- 占位符 -->
    <router-view />
  </div>
</template>
