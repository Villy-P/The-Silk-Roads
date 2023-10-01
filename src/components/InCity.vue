<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        {{ getCityName() }}
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="enterMarket">
        <p>Enter the Market</p>
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="goToTrade">
        <p>Trade with ({{ getOtherPlayersAtLocation() - 1 }}) other players</p>
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500" style="font-variant: small-caps;" @click="leaveCity">
        <p>Leave City</p>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityName } from '@/data/city';
    import { GAME_STATE } from '@/scripts/state';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class InCity extends Vue {
        store = useStore(key);

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        enterMarket() {
            this.store.state.user!.state = GAME_STATE.MARKET;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        goToTrade() {
            this.store.state.user!.state = GAME_STATE.TRADE_PLAYERS;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        leaveCity() {
            this.store.state.user!.state = GAME_STATE.LEAVING;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        getOtherPlayersAtLocation() {
            const players = this.store.state.users.filter((u) => u.currentCity == this.store.state.user?.currentCity);
            return players.length;
        }
    }
</script>