<template>
  <svg :style="svgStyle" class="lock-avatar">
    <!-- <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="central"
            :style="textStyle"
        >

            {{ avatarLetter }}
        </text> -->
    <i class="fas fa-lock" />
  </svg>
</template>

<script lang="ts" src="./lock-avatar.ts"></script>

<style lang="scss" src="./lock-avatar.scss"></style>
