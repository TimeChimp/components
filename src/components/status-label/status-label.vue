<template>
  <div
    v-tooltip:bottom="{ visible: true, title: hintTitle }"
    class="status-label"
    :class="{
      'status-label--grey': status === 'registered',
      'status-label--yellow': status === 'offered',
      'status-label--red': status === 'rejected',
      'status-label--green': status === 'approved'
    }"
  >
    <div class="status-label__circle" />
  </div>
</template>

<script lang="ts" src="./status-label.ts"></script>

<style lang="scss" src="./status-label.scss"></style>
