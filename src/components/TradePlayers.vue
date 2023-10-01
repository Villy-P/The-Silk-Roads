<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Trading
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="goBack">
        <p>Back</p>
    </div>
    <div v-if="getOtherPlayersAtLocation().length === 0" class="text-center p-3">There's nobody here</div>
    <div v-else v-for="u in getOtherPlayersAtLocation()" :key="u.username" class="w-10/12 border-black border-2 mx-auto my-5 h-10 flex items-center relative cursor-pointer">
        <div class="px-3">Request Trade with {{ u.username }}</div>
        <div class="citywelcome-warning tooltip-container" v-if="u.items.some(i => store.state.user?.imports.includes(i))">
            <p>!</p>
            <div class="tooltip-text tooltip-left">This person has something you need!</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { GAME_STATE } from '@/scripts/state';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class TradePlayers extends Vue {
        store = useStore(key);

        goBack() {
            this.store.state.user!.state = GAME_STATE.IN_CITY;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        getOtherPlayersAtLocation() {
            return this.store.state.users.filter((u) => 
                u.currentCity == this.store.state.user?.currentCity && 
                u.username != this.store.state.user?.username
            );
        }
    }
</script>