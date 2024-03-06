<template>
  <section :style="{ '--color': `${data.styleColor}` }" class="game-item">
    <div class="game-item__inner">
      <div class="game-item__box">
        <img :src="data.ico" alt="" class="game-item__ico" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TGameItem } from "@/types";

interface IProps {
  data: TGameItem;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.game-item {
  position: relative;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    width: calc(130px + 20px + 20px);
    height: calc(130px + 20px + 20px);
    background: var(--white);
    border: 20px solid var(--color);
    border-radius: 50%;
    opacity: 0.7;
  }

  &__inner {
    position: relative;
    border: 20px solid var(--color);
    border-radius: 50%;
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    background: var(--white);
    border-radius: 50%;
    border-top: 8px solid var(--secondary-light);
  }

  &__ico {
    width: 100%;
    max-width: calc(100% / 3);
    user-select: none;
    pointer-events: none;
  }
}
</style>
