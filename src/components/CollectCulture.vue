<template>
    <div v-if="getCultureCard() && !store.state.user?.cultureCards?.includes(store.state.user!.currentCity!)">
        <hr><br>
        <div class="text-center pb-2">You got a culture card!</div>
        <div class="w-11/12 m-auto indent-8 pb-3">{{ getCultureCard() }}</div>
        <div class="flex flex-wrap items-center jusitfy-center w-full text-center gap-3 py-2">
            <div class="w-8/12 m-auto tooltip-container" v-for="image in getCultureCardImages()?.items" :key="image.name">
                <img :alt="image.name" :src="require(`@/assets/culture/${image.src}`)">
                <div class="tooltip-text tooltip-top">{{ image.name }}</div>
            </div>
        </div>
        <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="selectCultureCard">
            Collect Culture Card
        </div>
        <hr class="pb-5">
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCultureCard, getCultureCardImages } from '@/data/culture';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class CollectCulture extends Vue {
        store = useStore(key);

        getCultureCard() {
            return getCultureCard(this.store.state.user!.currentCity!);
        }

        getCultureCardImages() {
            return getCultureCardImages(this.store.state.user!.currentCity!);
        }

        selectCultureCard() {
            this.store.state.user?.cultureCards.push(this.store.state.user!.currentCity!);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>