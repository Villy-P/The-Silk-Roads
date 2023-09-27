<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Leaving {{ getCityName() }}
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="goBack">
        <p>Go Back Inside</p>
    </div>
    <div v-for="city in getCityConnections()" 
         :key="city" 
         class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" 
         style="font-variant: small-caps;" 
         @click="goToCity(city)">
        <p>Travel to {{ getCityNameWithI(city) }}</p>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { CITIES, getCityName } from '@/data/city';
    import { GAME_STATE } from '@/scripts/state';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';
    import { getCityConnections } from '@/data/city';

    export default class LeavingCity extends Vue {
        store = useStore(key);

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityNameWithI(i: CITIES) {
            return getCityName(i);
        }

        goBack() {
            this.store.state.user!.state = GAME_STATE.IN_CITY;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        goToCity(city: CITIES) {
            this.store.state.user!.state = GAME_STATE.WELCOME_TO_CITY;
            this.store.state.user!.hasMarketTransactions = false;
            this.store.state.user!.hasMarketTransactions = false;
            this.store.state.user!.currentCity = city;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        leaveCity() {
            this.store.state.user!.state = GAME_STATE.LEAVING;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        getCityConnections() {
            return getCityConnections(this.store.state.user!.currentCity!);
        }
    }
</script>