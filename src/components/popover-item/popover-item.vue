<template>
  <div class="popover-item">
    <router-link v-if="route" :to="{ name: route }" class="popover-item__title">
      {{ title }}
    </router-link>
    <a
      v-else-if="link"
      :href="link"
      target="_blank"
      class="popover-item__title"
    >
      {{ title }}
    </a>
    <a
      v-else
      :class="{ 'popover-item--warning': warning }"
      @click="$emit('click')"
      class="popover-item__title"
    >
      {{ title }}
    </a>
  </div>
</template>

<script lang="ts" src="./popover-item.ts"></script>

<style lang="scss" src="./popover-item.scss"></style>
