<template>
  <div class="virtual-list">
    <template v-if="show">
      <virtual-list :size="39" :remain="5">
        <slot />
      </virtual-list>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts" src="./virtual-list.ts"></script>
