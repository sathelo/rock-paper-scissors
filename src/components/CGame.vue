<template>
  <section class="game">
    <div class="game__items">
      <CGameItem
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :data="item"
        class="game__items-item"
        @click="$emit('choice', item)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CGameItem from "@/components/CGameItem.vue";

import { TGameItem } from "@/types";

interface IProps {
  items: TGameItem[];
}
interface IEmits {
  (event: "choice", value: TGameItem): void;
}

defineProps<IProps>();
defineEmits<IEmits>();
</script>

<style lang="scss" scoped>
.game {
  &__items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > *:nth-child(1) {
      margin-right: 80px;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        right: 5%;
        transform: rotate(148deg);
        width: 12px;
        height: 250px;
        background-color: var(--secondary-darken);
      }
    }

    & > *:nth-child(2) {
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: -20%;
        left: -30%;
        transform: rotate(90deg);
        width: 12px;
        height: 250px;
        background-color: var(--secondary-darken);
      }
    }

    & > *:nth-child(3) {
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: -75%;
        right: 15%;
        transform: rotate(-148deg);
        width: 12px;
        height: 250px;
        background-color: var(--secondary-darken);
      }
    }

    & > *:nth-child(-n + 2) {
      margin-bottom: 40px;
    }
  }

  &__items-item {
    cursor: pointer;
  }
}
</style>
