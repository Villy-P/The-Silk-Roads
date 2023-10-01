<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Trading
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500 mb-5" style="font-variant: small-caps;" @click="goBack">
        <p>Back</p>
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
    }
</script>