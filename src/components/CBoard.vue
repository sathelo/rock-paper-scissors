<template>
  <section class="board">
    <img src="/logos/logo.svg" alt="logo" class="board__logo" />
    <div class="board__counter">
      <p class="board__counter-title">счет</p>
      <span class="board__counter-count">{{ score }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IProps {
  score: number;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
.board {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  border: 2px solid var(--secondary-lighten);
  border-radius: 10px;
  box-shadow: 0 1px var(--secondary);
  padding: 14px 20px;

  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background: var(--white);
    padding: 10px 36px;
  }

  &__counter-title {
    width: 100%;
    max-width: 200px;
    text-wrap: wrap;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 500;
    font-style: normal;
    font-size: var(--text-body);
  }

  &__counter-count {
    color: var(--secondary);
    font-weight: 500;
    font-style: normal;
    font-size: var(--text-scream);
  }
}
</style>
