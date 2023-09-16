<template>
    <div class="absolute w-full h-screen bg-slate-900 opacity-60 flex items-center justify-center">
        <div class="bg-white w-3/4 h-2/3 rounded-2xl text-center overflow-auto text-black">
            <p class="font-bold text-2xl p-3 px-6 opacity-100">{{ getMerchantName() }} Merchant</p>
            <p class="p-4 opacity-100">{{ getMerchantDescription() }}</p>
            <p class="p-4 pt-0">Below are the items that you have to trade (export) and the items you wish to buy (import)</p>
            <div class="w-11/12 border-2 border-black flex m-auto">
                <p class="w-1/2 p-2">Exports</p>
                <div class="w-0.5 bg-black"></div>
                <p class="w-1/2 p-2">Imports</p>
            </div>
            <div class="w-11/12 border-2 border-t-0 border-black flex m-auto mb-7">
                <div class="h-full w-1/2 text-left pl-2 py-2">
                    <div v-for="item in store.state.user?.items" :key="item" class="flex gap-2 items-center">
                        <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                        <p>{{ getItemName(item) }}</p>
                    </div>
                </div>
                <div class="w-0.5 bg-black"></div>
                <div class="h-full w-1/2 text-left pl-2 py-2">
                    <div v-for="item in store.state.user?.imports" :key="item" class="flex gap-2 items-center">
                        <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                        <p>{{ getItemName(item) }}</p>
                    </div>
                </div>
            </div>
            <div v-if="getMerchantStartingCities().length == 1" class="pb-4">
                Since you are an {{ getMerchantName() }} Merchant, you start your journey in {{ getMerchantStartingCities()[0] }}
            </div>
            <div v-else class="pb-4">
                <p class="pb-4">Since you are an {{ getMerchantName() }} Merchant, you can choose where you start your journey:</p>
                <div class="flex items-center flex-wrap justify-center">
                    <div v-for="city in getMerchantStartingCities()" :key="city" @click="moveToCity(city)">
                        <div class="m-1 p-1 cursor-pointer border-2 border-black bg-blue-400 w-fit">Start in {{ getCityName(city) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getMerchantName, getMerchantDescription, getMerchantStartingCities } from '@/data/merchant';
    import { ITEMS, getItemName, getItemAsset } from '@/data/items';
    import { CITIES, getCityName } from '@/data/city';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';
    import { GAME_STATE } from '@/scripts/state';

    export default class OpeningData extends Vue {
        store = useStore(key);

        getMerchantName() {
            return getMerchantName(this.store.state.user?.merchantType || 0)
        }

        getMerchantDescription() {
            return getMerchantDescription(this.store.state.user?.merchantType || 0);
        }

        getMerchantStartingCities() {
            return getMerchantStartingCities(this.store.state.user?.merchantType || 0);
        }

        getItemName(i: ITEMS) {
            return getItemName(i);
        }

        getItemAsset(i: ITEMS) {
            return getItemAsset(i);
        }

        getCityName(i: CITIES) {
            return getCityName(i);
        }

        moveToCity(i: CITIES) {
            this.store.state.user!.currentCity = i;
            this.store.state.user!.state = GAME_STATE.MAIN;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>