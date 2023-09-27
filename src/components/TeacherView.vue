<template>
    <div class="h-10"></div>
    <div v-for="(u, index) in store.state.users.filter((i) => i.status != USER_STATUS.LEADER)" :key="JSON.stringify(u)" class="userbox">
        <div class="text-4xl px-2 underline">{{ index + 1 }}</div>
        <div>{{ u.username }}</div>
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/silver.jpg" class="w-10">
            <div class="select-none">{{ store.state.user?.silver }}</div>
            <div class="tooltip-text tooltip-bottom">Silver</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/gold.jpg" class="w-10">
            <div class="select-none">{{ store.state.user?.gold }}</div>
            <div class="tooltip-text tooltip-bottom">Gold</div>
        </div>
        <div class="flex items-center justify-center w-fit pl-5">
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ store.state.user?.items.length }}</p>
                <div class="tooltip-text tooltip-bottom">Items</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center cursor-pointer">
                <img src="../assets/economic.png" class="w-10">
                <div class="tooltip-text tooltip-bottom">Inventory</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ store.state.user?.imports.length }}</p>
                <div class="tooltip-text tooltip-bottom">Imports</div>
            </div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container float-right text-right px-3 cursor-pointer">
            <img src="../assets/icon/culture.png" class="w-10">
            <div class="select-none">{{ store.state.user?.cultureCards.length }}</div>
            <div class="tooltip-text tooltip-bottom">Culture Cards</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { USER_STATUS } from '@/scripts/interface';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class TeacherView extends Vue {
        store = useStore(key);

        USER_STATUS = USER_STATUS;
    }
</script>

<style lang="scss">
    .userbox {
        @apply w-11/12 border-black border-2 m-auto h-16 flex items-center mb-5;
    }
</style>