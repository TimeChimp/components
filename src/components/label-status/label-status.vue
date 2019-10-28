<template>
  <div
    class="label-status"
    :class="{
      'label-status__registered': status === 0,
      'label-status__pending-approval': status === 1,
      'label-status__approved': status === 2,
      'label-status__rejected': status === 3,
      'label-status__invoiced': status === 4,
      'label-status__written-off': status === 5
    }"
  >
    <span v-if="status === 0">{{ "Registered" }}</span>
    <span v-else-if="status === 1">{{ "Pending approval" }}</span>
    <span v-else-if="status === 2">{{ "Approved" }}</span>
    <span v-else-if="status === 3">{{ "Rejected" }}</span>
    <span v-else-if="status === 4">{{ "Invoiced" }}</span>
    <span v-else-if="status === 5">{{ "Written off" }}</span>
  </div>
</template>

<script lang="ts" src="./label-status.ts"></script>

<style lang="scss" src="./label-status.scss"></style>
