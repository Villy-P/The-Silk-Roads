<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Trading
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="goBack">
        <p>Back</p>
    </div>
    <div v-if="store.state.user?.tradingWith">
        <div class="m-auto w-11/12 text-center">You requested a trade with {{ store.state.user.tradingWith }}</div>
        <div class="w-fit bg-red-600 m-auto mt-3 border-2 border-black py-2 px-4 cursor-pointer hover:bg-red-500 mb-5" style="font-variant: small-caps;" @click="cancelTrade">
            <p>Cancel Request</p>
        </div>
    </div>
    <div v-else-if="getOtherPlayersAtLocation().length === 0" class="text-center p-3">There's nobody here</div>
    <div v-else v-for="u in getOtherPlayersAtLocation()" :key="u.username" class="w-10/12 border-black border-2 mx-auto my-5 h-10 flex items-center relative cursor-pointer" @click="requestTrade(u)">
        <div class="px-3" v-if="!u.tradingWith">Request Trade with {{ u.username }}</div>
        <div class="px-3" v-else>{{ u.username }} (Already Trading)</div>
        <div class="citywelcome-warning tooltip-container" v-if="u.items.some(i => store.state.user?.imports.includes(i))">
            <p>!</p><div class="tooltip-text tooltip-left">This person has something you need!</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { User } from '@/scripts/interface';
    import { GAME_STATE } from '@/scripts/state';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class TradePlayers extends Vue {
        store = useStore(key);

        goBack() {
            this.store.state.user!.state = GAME_STATE.IN_CITY;
            this.store.state.socket?.emit('cancelRequestTrade', this.store.state.user?.username, this.store.state.user?.tradingWith);
            this.store.state.user!.tradingWith = undefined;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        getOtherPlayersAtLocation() {
            return this.store.state.users.filter((u) => 
                u.currentCity == this.store.state.user?.currentCity && 
                u.username != this.store.state.user?.username
            );
        }

        requestTrade(user: User) {
            if (user.tradingWith)
                return;
            this.store.state.user!.tradingWith = user.username;
            this.store.state.socket?.emit('requestTrade', this.store.state.user?.username, this.store.state.user?.tradingWith);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        cancelTrade() {
            this.store.state.socket?.emit('cancelRequestTrade', this.store.state.user?.username, this.store.state.user?.tradingWith);
            this.store.state.user!.tradingWith = undefined;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>