<template>
    <div class="w-11/12 border-2 border-black flex m-auto h-full" v-if="store.state.user!.cultureCards.length > 0">
        <div class="w-1/12 flex items-center cursor-pointer" @click="changeCultureCard(-1)">
            <img src="../assets/icon/leftarrow.svg">
        </div>
        <div class="w-10/12 overflow-auto">
            <div class="w-11/12 m-auto py-3 text-center">{{ getCityName() }}</div>
            <div class="w-11/12 m-auto indent-8 pb-3">{{ getCultureCard() }}</div>
            <div class="flex flex-wrap items-center jusitfy-center w-full text-center gap-3 py-2">
                <div class="w-8/12 m-auto tooltip-container" v-for="image in getCultureCardImages()?.items" :key="image.name">
                    <img class="w-full" :alt="image.name" :src="require(`@/assets/culture/${image.src}`)">
                    <div class="tooltip-text tooltip-top">{{ image.name }}</div>
                </div>
            </div>
        </div>
        <div class="w-1/12 flex items-center cursor-pointer" @click="changeCultureCard(1)">
            <img src="../assets/icon/rightarrow.svg">
        </div>
    </div>
    <div class="w-11/12 border-2 border-black flex items-center justify-center m-auto text-center h-full" v-else>
        You have no culture cards
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityName } from '@/data/city';
    import { getCultureCard, getCultureCardImages } from '@/data/culture';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class CultureCards extends Vue {
        store = useStore(key);

        currentCultureCard = this.store.state.user!.cultureCards[0];
        currentCultureCardIndex = 0;

        getCultureCard() {
            return getCultureCard(this.currentCultureCard);
        }

        getCultureCardImages() {
            return getCultureCardImages(this.currentCultureCard);
        }

        getCityName() {
            return getCityName(this.currentCultureCard);
        }

        changeCultureCard(by: number) {
            this.currentCultureCardIndex += by;
            if (this.currentCultureCardIndex < 0)
                this.currentCultureCardIndex = this.store.state.user!.cultureCards.length - 1;
            if (this.store.state.user!.cultureCards.length == this.currentCultureCardIndex)
                this.currentCultureCardIndex = 0;
            this.currentCultureCard = this.store.state.user!.cultureCards[this.currentCultureCardIndex];
            
        }
    }
</script>