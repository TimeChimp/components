<template>
  <svg :style="svgStyle" class="letter-avatar">
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="central"
      :style="textStyle"
    >
      {{ avatarLetter }}
    </text>
  </svg>
</template>

<script lang="ts" src="./letter-avatar.ts"></script>
