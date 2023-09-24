<template>
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
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityInnovationCard } from '@/data/city';
    import { getInnovationCardSpecialText } from '@/data/innovation';
    import { ITEMS, getInnovationDescription, getItemAsset, getItemName } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class CollectInnovation extends Vue {
        store = useStore(key);

        currentInnovation = ITEMS.TEXTS;

        getInnovationCardName() {
            return getItemName(this.currentInnovation);
        }

        getItemAsset() {
            return getItemAsset(this.currentInnovation);
        }

        getInnovationDescription() {
            return getInnovationDescription(this.currentInnovation);
        }

        getInnovationCardSpecialText() {
            return getInnovationCardSpecialText(this.store.state.user!.currentCity!);
        }

        getCityInnovationCard() {
            return getCityInnovationCard(this.store.state.user!.currentCity!);
        }

        changeInnovationCard(amount: number) {
            this.currentInnovation += amount;
            if (this.currentInnovation < 0)
                this.currentInnovation = ITEMS.PAPER_MAKING;
            if (this.currentInnovation > ITEMS.PAPER_MAKING)
                this.currentInnovation = ITEMS.TEXTS;
        }

        selectInnovation() {
            if (this.store.state.user?.imports.includes(this.currentInnovation))
                this.store.state.user?.imports.splice(this.store.state.user?.imports.indexOf(this.currentInnovation), 1);
            else
                this.store.state.user?.items.push(this.currentInnovation);
            this.store.state.user!.journal.push(`I have collected a ${this.getInnovationCardName()}.`);
            this.store.state.user?.cityInnovations.push(this.store.state.user!.currentCity!);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>