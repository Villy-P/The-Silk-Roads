<template>
    <div class="h-10"></div>
    <div v-for="(u, index) in store.state.users.filter((i) => i.status != USER_STATUS.LEADER).sort((a, b) => calculateScore(b) - calculateScore(a))" :key="JSON.stringify(u)" class="userbox">
        <div class="text-4xl px-2 underline">{{ index + 1 }}</div>
        <div>{{ u.username }}</div>
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/silver.jpg" class="w-10">
            <div class="select-none">{{ u.silver }}</div>
            <div class="tooltip-text tooltip-bottom">Silver</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/gold.jpg" class="w-10">
            <div class="select-none">{{ u.gold }}</div>
            <div class="tooltip-text tooltip-bottom">Gold</div>
        </div>
        <div class="flex items-center justify-center w-fit pl-5">
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ u.items.length }}</p>
                <div class="tooltip-text tooltip-bottom">Items</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center cursor-pointer">
                <img src="../assets/economic.png" class="w-10">
                <div class="tooltip-text tooltip-bottom">Inventory</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ u.imports.length }}</p>
                <div class="tooltip-text tooltip-bottom">Imports</div>
            </div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container float-right text-right px-3 cursor-pointer">
            <img src="../assets/icon/culture.png" class="w-10">
            <div class="select-none">{{ u.cultureCards.length }}</div>
            <div class="tooltip-text tooltip-bottom">Culture Cards</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container float-right text-right px-3 cursor-pointer ml-auto">
            <div class="select-none">{{ calculateScore(u) }}</div>
            <div class="tooltip-text tooltip-bottom">Score</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container float-right text-right px-3 cursor-pointer" v-if="u.silverDebt > 0 || u.goldDebt > 0">
            <div class="bg-red-600 w-fit p-3 border-2 border-black">DEMAND {{ u.silverDebt }} SILVER {{ u.goldDebt }} GOLD DEBT</div>
            <div class="tooltip-text tooltip-bottom">Debt</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { USER_STATUS, User } from '@/scripts/interface';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class TeacherView extends Vue {
        store = useStore(key);

        USER_STATUS = USER_STATUS;

        calculateScore(user: User) {
            let score = 0;
            score += user.silver * 2;
            score += user.gold * 1.5;
            score += user.items.length * 2;
            score -= user.imports.length;
            score += user.cultureCards.length * 5;
            if (user.imports.length == 0)
                score += 100;
            return score;
        }

        demandDebt(user: User) {
            //
        }
    }
</script>

<style lang="scss">
    .userbox {
        @apply w-11/12 border-black border-2 m-auto h-16 flex items-center mb-5;
    }
</style>