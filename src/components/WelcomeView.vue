<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Welcome To {{ getCityName() }}
    </div>
    <div class="w-11/12 m-auto indent-10" v-html="getCityDescription()"></div>
    <div class="flex flex-wrap items-center jusitfy-center w-full text-center gap-3 py-2">
        <div class="w-8/12 m-auto tooltip-container" v-for="image in getCityImages()?.items" :key="image.name">
            <img :alt="image.name" :src="require(`@/assets/cities/${image.src}`)">
            <div class="tooltip-text tooltip-top">{{ image.name }}</div>
        </div>
    </div>
    <CollectInnovation/>
    <CollectCulture/>
    <PayBills/>
    <div v-if="getTaxText()" class="m-auto w-10/12 text-center py-2">{{ getTaxText() }}</div>
    <div v-if="!getTaxText()" class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="enterCity">
        Enter the City
    </div>
    <div v-else>
        <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="taxCity(true)">
            Enter the City & Pay {{ getTaxAmount()?.silver }} Silver
        </div>
        <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="taxCity(false)">
            Enter the City & Pay {{ getTaxAmount()?.gold }} Gold
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityDescription, getCityImages, getCityName } from '@/data/city';
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import NavBar from './NavBar.vue';
    import WorldMap from './WorldMap.vue';
    import CollectCulture from './CollectCulture.vue';
    import PayBills from './PayBills.vue';
    import CollectInnovation from './CollectInnovation.vue';
    import { GAME_STATE } from '@/scripts/state';
    import { getTaxText, getTaxAmount } from '@/data/taxes';

    @Options({
        components: {
            NavBar,
            WorldMap,
            CollectCulture,
            PayBills,
            CollectInnovation
        }
    })
    export default class WelcomeView extends Vue {
        store = useStore(key);

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityDescription() {
            return getCityDescription(this.store.state.user!.currentCity!);
        }

        getCityImages() {
            return getCityImages(this.store.state.user!.currentCity!);
        }

        getTaxText() {
            return getTaxText(this.store.state.user!.currentCity!);
        }

        getTaxAmount() {
            return getTaxAmount(this.store.state.user!.currentCity!);
        }

        enterCity() {
            this.store.state.user!.state = GAME_STATE.IN_CITY;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        taxCity(silver: boolean) {
            if (silver)
                this.store.state.user!.silver -= this.getTaxAmount()?.silver || 0;
            else
                this.store.state.user!.gold -= this.getTaxAmount()?.gold || 0;
            this.enterCity();
        }
    }
</script>