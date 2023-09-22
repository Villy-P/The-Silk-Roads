<template>
    <div class="absolute w-full h-screen bg-slate-900 opacity-60 flex items-center justify-center">
        <div class="bg-white w-3/4 h-2/3 rounded-2xl text-center overflow-auto text-black">
            <p class="font-bold text-2xl p-3 px-6 opacity-100">{{ getMerchantName() }} Merchant</p>
            <p class="p-4 opacity-100">{{ getMerchantDescription() }}</p>
            <p class="p-4 pt-0">Below are the items that you have to trade (export) and the items you wish to buy (import)</p>
            <InventoryPage/>
            <div v-if="getMerchantStartingCities().length == 1" class="pb-4 mt-7">
                Since you are an {{ getMerchantName() }} Merchant, you start your journey in {{ getCityName(getMerchantStartingCities()[0]) }}
                <div @click="moveToCity(getMerchantStartingCities()[0])" class="m-auto w-fit pt-4">
                    <div class="m-1 p-1 cursor-pointer border-2 border-black bg-blue-400 w-fit">Start in {{ getCityName(getMerchantStartingCities()[0]) }}</div>
                </div>
            </div>
            <div v-else class="pb-4 mt-7">
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
    import { CITIES, getCityName } from '@/data/city';
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import { GAME_STATE } from '@/scripts/state';
    import InventoryPage from '@/components/InventoryPage.vue'

    @Options({
        components: {
            InventoryPage
        }
    })
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