<template>
    <div class="flex flex-col h-screen w-full overflow-clip">
        <NavBar/>
        <div class="flex w-full" style="height: calc(100% - 56px);">
            <WorldMap/>
            <div class="bg-white w-1/3 border-l-2 border-l-black overflow-y-auto">
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
                <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer">
                    Enter the City
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityDescription, getCityImages, getCityInnovationCard, getCityName } from '@/data/city';
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import NavBar from './NavBar.vue';
    import WorldMap from './WorldMap.vue';
    import CollectCulture from './CollectCulture.vue';
    import PayBills from './PayBills.vue';
    import CollectInnovation from './CollectInnovation.vue';

    @Options({
        components: {
            NavBar,
            WorldMap,
            CollectCulture,
            PayBills,
            CollectInnovation
        }
    })
    export default class MainView extends Vue {
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

        canEnter() {
            //
        }
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>
<style lang="scss" src="../styles/citywelcome.scss"></style>