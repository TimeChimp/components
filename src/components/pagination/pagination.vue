<template>
  <div class="pagination">
    <ul class="pagination__list">
      <!--First-->
      <li v-if="hasFirst">
        <a
          role="button"
          href="#"
          class="pagination__link"
          @click.prevent="first"
        >
          1
        </a>
      </li>
      <li v-if="hasFirstEllipsis">
        <span class="pagination__ellipsis">&hellip;</span>
      </li>

      <!--Pages-->
      <li v-for="page in pagesInRange" :key="page.number">
        <a
          href="#"
          class="pagination__link"
          :class="{ 'pagination__link--current': page.isCurrent }"
          @click.prevent="page.click"
        >
          {{ page.number }}
        </a>
      </li>

      <!--Last-->
      <li v-if="hasLastEllipsis">
        <span class="pagination__ellipsis">&hellip;</span>
      </li>
      <li v-if="hasLast">
        <a href="#" class="pagination__link" @click.prevent="last">
          {{ pageCount }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./pagination.ts"></script>

<style lang="scss" src="./pagination.scss"></style>
