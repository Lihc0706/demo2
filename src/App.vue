<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/aaa">aaa</router-link> |
      <router-link to="/bbb">bbb</router-link> |
      <router-link to="/ccc">ccc</router-link> |
      <router-link to="/ddd">ddd</router-link> |
    </div> -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link active" :to="{ path: '/' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/About' }">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/aaa' }">AAA</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/bbb' }">BBB</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/ccc' }">CCC</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/ddd' }">DDD</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/eee' }">EEE</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/fff' }">FFF</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link disabled"
          :to="{path:'/aaa'}"
          tabindex="-1"
          aria-disabled="true"
          >Disabled</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
  #app {
    height: 100%;
  }
}
</style>
