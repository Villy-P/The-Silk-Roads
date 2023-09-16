<template>
    <OpeningData v-if="store.state.user?.state === GAME_STATE.OPENING"/>
    <MainView v-if="store.state.user?.state === GAME_STATE.MAIN"/>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import socketSetup from '@/client/socket';
    import OpeningData from '@/components/OpeningData.vue';
    import MainView from '@/components/MainView.vue';
    import { GAME_STATE } from '@/scripts/state';

    @Options({
        components: {
            OpeningData,
            MainView,
        }
    })
    export default class PlayPage extends Vue {
        store = useStore(key);

        GAME_STATE = GAME_STATE;
        
        mounted() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
            socketSetup(this.store, this.$router);
            this.store.state.socket?.emit('joined', username);
        }
    }
</script>