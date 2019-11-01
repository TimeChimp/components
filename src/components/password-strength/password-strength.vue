<template>
  <div class="password-strength">
    <div
      class="password-strength--bar"
      :class="{
        'password-strength--empty': score === -1,
        'password-strength--red': score === 0,
        'password-strength--orange': score === 1,
        'password-strength--yellow': score === 2,
        'password-strength--lightgreen': score === 3,
        'password-strength--green': score === 4
      }"
    />
  </div>
</template>

<script lang="ts" src="./password-strength.ts"></script>

<style lang="scss" src="./password-strength.scss"></style>
