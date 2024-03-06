<template>
  <section class="game-result">
    <div
      class="game-result__choice"
      :class="{ 'game-result__choice_active': userWon }"
    >
      <p class="game-result__choice-title">вы выбрали</p>
      <CGameItem :data="choice1" class="game-result__item" />
    </div>

    <div class="game-result__state">
      <h2 class="game-result__state-title">{{ textStateTitle }}</h2>
      <button class="game-result__state-button" @click="$emit('retry')">
        играть&nbsp;снова
      </button>
    </div>

    <div
      class="game-result__choice"
      :class="{ 'game-result__choice_active': computerWon }"
    >
      <p class="game-result__choice-title">компьютер выбрал</p>
      <CGameItem :data="choice2" class="game-result__item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CGameItem from "@/components/CGameItem.vue";

import { TGameItem, TResultGame } from "@/types";
import { computed } from "vue";

interface IProps {
  choice1: TGameItem;
  choice2: TGameItem;
  resultGame: TResultGame;
}

interface IEmits {
  (event: "retry"): void;
}

const props = defineProps<IProps>();
defineEmits<IEmits>();

const textStateTitle = computed(() => {
  if (props.resultGame === 1) return "Вы выиграли";
  if (props.resultGame === -1) return "Вы проиграли";
  return "Увы ничья";
});
const userWon = computed(() => props.resultGame === 1);
const computerWon = computed(() => props.resultGame === -1);
</script>

<style lang="scss" scoped>
.game-result {
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 46px;
  }

  &__choice {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__choice-title {
    z-index: 1;
    text-transform: uppercase;
    text-align: center;
    color: var(--white);
    font-style: normal;
    font-size: var(--text-title);
    font-weight: 500;
    letter-spacing: 2px;
  }

  &__choice_active &__item {
    box-shadow:
      0 0 40px #3d5882,
      0 0 80px #284a80,
      0 0 120px #2e4b77;
  }

  &__state {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 6px;
    }
  }

  &__state-title {
    text-transform: uppercase;
    text-align: center;
    color: var(--white);
  }

  &__state-button {
    text-transform: uppercase;
    color: var(--primary);
    background: var(--white);
    border-radius: 10px;
    padding: 10px 24px;
    font-size: var(--text-body);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
}
</style>
