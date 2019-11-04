<template>
  <li
    class="subnav-section-item"
    :class="{ 'subnav-section-item__active': active }"
    @click="$emit('click')"
  >
    <router-link :to="{ name: route }">
      {{ title }}

      <tc-icon
        name="arrow"
        height="9"
        width="10"
        style="transform:rotate(-90deg)"
      />
    </router-link>
  </li>
</template>

<script lang="ts" src="./subnav-section-item.ts"></script>

<style lang="scss" src="./subnav-section-item.scss"></style>
