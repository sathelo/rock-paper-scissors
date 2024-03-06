<template>
  <section class="home">
    <div class="home__main container">
      <CBoard :score="score" />
      <CGameResult
        v-if="choiceUser && choiceComputer"
        :choice1="choiceUser"
        :choice2="choiceComputer"
        :result-game="resultGame"
        @retry="retry"
      />
      <CGame v-else :items="itemsGames" @choice="choice" />
    </div>
    <div class="home__buttons">
      <button
        v-for="(auxiliary, auxiliaryIndex) in auxiliaryList"
        :key="auxiliaryIndex"
        class="home__button"
        @click="clickHandlerAuxiliary(auxiliary.name)"
      >
        {{ auxiliary.title }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";

import CBoard from "@/components/CBoard.vue";
import CGame from "@/components/CGame.vue";
import CGameResult from "@/components/CGameResult.vue";

import { EAuxiliary, EItemGame, TGameItem, TResultGame, WINS } from "@/types";

const score = ref(0);
const itemsGames = reactive<TGameItem[]>([
  {
    ico: "/icons/icon-paper.svg",
    role: EItemGame.paper,
    styleColor: "#4865F4",
  },
  {
    ico: "/icons/icon-scissors.svg",
    role: EItemGame.scissors,
    styleColor: "#EC9E10",
  },
  {
    ico: "/icons/icon-rock.svg",
    role: EItemGame.rock,
    styleColor: "#DC2E4E",
  },
]);
const itemsGamesMap = computed(() =>
  Object.fromEntries(itemsGames.map((item) => [item.role, item])),
);
const auxiliaryList = reactive([
  {
    name: EAuxiliary.bonus,
    title: "Бонус",
  },
  {
    name: EAuxiliary.rules,
    title: "Правила",
  },
]);
const choiceUser = ref<TGameItem | null>(null);
const choiceComputer = ref<TGameItem | null>(null);
const resultGame = computed(() => {
  if (!choiceUser.value || !choiceComputer.value) return 0;
  return getResultGame(choiceUser.value.role, choiceComputer.value.role);
});

watch(choiceUser, (choiceUser) => {
  if (choiceUser === null) return;
  choiceComputer.value = generateChoiceComputer();
  scoreChange(resultGame.value);
});

function choice(choice: TGameItem) {
  choiceUser.value = choice;
}

function randomNumber(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function generateChoiceComputer() {
  const values = Object.values(EItemGame);
  const role = EItemGame[values[randomNumber(0, values.length - 1)]];
  return itemsGamesMap.value[role];
}

function scoreChange(value: TResultGame): void {
  score.value += value;
}

function getResultGame(choice1: EItemGame, choice2: EItemGame): TResultGame {
  if (WINS[choice1].includes(choice2)) return 1;
  if (WINS[choice2].includes(choice1)) return -1;
  return 0;
}

function retry() {
  choiceUser.value = null;
  choiceComputer.value = null;
}

function clickHandlerAuxiliary(auxiliary: EAuxiliary) {
  console.log(auxiliary);
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 720px;
  padding: 50px 20px;

  &__main {
    & > *:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  &__buttons {
    position: absolute;
    bottom: 40px;
    right: 30px;
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 26px;
    }
  }

  &__button {
    text-transform: uppercase;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 10px;
    padding: 6px 20px;
    font-weight: 500;
    font-style: normal;
    font-size: var(--text-body);
  }
}
</style>
