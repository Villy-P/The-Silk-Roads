<template>
    <div class="h-14 flex border-b-black border-b-2">
        <div class="flex items-center justify-center w-fit">
            <img src="../assets/items/silver.jpg" class="w-10">
            <div>{{ store.state.user?.silver }}</div>
        </div>
        <div class="flex items-center justify-center w-fit">
            <img src="../assets/items/gold.jpg" class="w-10">
            <div>{{ store.state.user?.gold }}</div>
        </div>
        <div class="flex items-center justify-center w-fit pl-5">
            <div>{{ store.state.user?.items.length }}</div>
            <img src="../assets/economic.png" class="w-10">
            <div>{{ store.state.user?.imports.length }}</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MainView extends Vue {
        store = useStore(key);
    }
</script>