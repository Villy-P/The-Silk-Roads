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
                <div v-if="getCityInnovationCard() && !store.state.user?.cityInnovations.includes(store.state.user!.currentCity!)">
                    <div class="w-11/12 m-auto text-center py-5">{{ getInnovationCardSpecialText() }}</div>
                    <div class="w-full flex h-fit m-auto items-center">
                        <div class="h-full w-1/12 flex items-center cursor-pointer" @click="changeInnovationCard(-1)">
                            <img src="../assets/icon/leftarrow.svg">
                        </div>
                        <div class="rounded-xl relative w-10/12 mx-3 border-2 border-black h-fit">
                            <div class="citywelcome-warning tooltip-container tooltip-container-abs" v-if="store.state.user?.imports.includes(currentInnovation)">
                                <p>!</p>
                                <div class="tooltip-text tooltip-left">You need this item</div>
                            </div>
                            <div class="flex gap-2 items-center w-fit m-auto p-2">
                                <img :src="require(`@/assets/items/${getItemAsset()}`)" class="w-6 h-6">
                                <p>{{ getInnovationCardName() }}</p>
                            </div>
                            <div class="p-3 indent-8 overflow-auto h-fit">{{ getInnovationDescription() }}</div>
                            <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="selectInnovation">
                                Select this Innovation
                            </div>
                        </div>
                        <div class="h-full w-1/12 flex items-center cursor-pointer" @click="changeInnovationCard(1)">
                            <img src="../assets/icon/rightarrow.svg">
                        </div>
                    </div>
                </div>
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
                <div v-if="canBuyBill() && hasBill()">
                    <p class="w-11/12 m-auto indent-8 pb-3">{{ bill.replace('{}', getCityName()) }}</p>
                    <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="exchangeBills(true)">
                        Exchange Bills for {{20 * getBillAmount()}} silver
                    </div>
                    <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="exchangeBills(false)">
                        Exchange Bills for {{15 * getBillAmount()}} gold
                    </div>
                </div>
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
    import { getCultureCard, getCultureCardImages } from '@/data/culture';
    import { getInnovationCardSpecialText } from '@/data/innovation';
    import { ITEMS, getItemAsset, getItemName, getInnovationDescription } from '@/data/items';
    import { bill, canBuyBill } from '@/data/bills'
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import NavBar from './NavBar.vue';
    import WorldMap from './WorldMap.vue';

    @Options({
        components: {
            NavBar,
            WorldMap
        }
    })
    export default class MainView extends Vue {
        store = useStore(key);

        currentInnovation = ITEMS.TEXTS;
        bill = bill;

        hasBill() {
            return this.store.state.user?.items.includes(ITEMS.BANK_NOTES);
        }

        canBuyBill() {
            return canBuyBill(this.store.state.user!.currentCity!);
        }

        getBillAmount() {
            return this.store.state.user!.items.filter((i) => i == ITEMS.BANK_NOTES).length;
        }

        exchangeBills(silver: boolean) {
            this.store.state.user!.items = this.store.state.user!.items.filter((i) => i != ITEMS.BANK_NOTES);
            if (silver)
                this.store.state.user!.silver += 20;
            else
                this.store.state.user!.gold += 15;
        }

        getCultureCard() {
            return getCultureCard(this.store.state.user!.currentCity!);
        }

        getCultureCardImages() {
            return getCultureCardImages(this.store.state.user!.currentCity!);
        }

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityDescription() {
            return getCityDescription(this.store.state.user!.currentCity!);
        }

        getInnovationCardSpecialText() {
            return getInnovationCardSpecialText(this.store.state.user!.currentCity!);
        }

        getCityInnovationCard() {
            return getCityInnovationCard(this.store.state.user!.currentCity!);
        }

        getInnovationCardName() {
            return getItemName(this.currentInnovation);
        }

        getItemAsset() {
            return getItemAsset(this.currentInnovation);
        }

        getInnovationDescription() {
            return getInnovationDescription(this.currentInnovation);
        }

        changeInnovationCard(amount: number) {
            this.currentInnovation += amount;
            if (this.currentInnovation < 0)
                this.currentInnovation = ITEMS.PAPER_MAKING;
            if (this.currentInnovation > ITEMS.PAPER_MAKING)
                this.currentInnovation = ITEMS.TEXTS;
        }

        getCityImages() {
            return getCityImages(this.store.state.user!.currentCity!);
        }

        selectInnovation() {
            this.store.state.user?.items.push(this.currentInnovation);
            this.store.state.user?.cityInnovations.push(this.store.state.user!.currentCity!);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        selectCultureCard() {
            this.store.state.user?.cultureCards.push(this.store.state.user!.currentCity!);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>
<style lang="scss" src="../styles/citywelcome.scss"></style>