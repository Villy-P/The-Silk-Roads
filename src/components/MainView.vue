<template>
    <div class="flex flex-col h-screen w-full overflow-clip">
        <NavBar/>
        <div class="flex w-full" style="height: calc(100% - 56px);">
            <WorldMap/>
            <div class="bg-white w-1/3 border-l-2 border-l-black overflow-y-auto">
                <WelcomeView v-if="store.state.user?.state == GAME_STATE.WELCOME_TO_CITY"/>
                <InCity v-else-if="store.state.user?.state == GAME_STATE.IN_CITY"/>
                <MarketView v-else-if="store.state.user?.state == GAME_STATE.MARKET"/>
                <LeavingCity v-else-if="store.state.user?.state == GAME_STATE.LEAVING"/>
                <TradePlayers v-else-if="store.state.user?.state == GAME_STATE.TRADE_PLAYERS"/>
                <TradingView v-else-if="store.state.user?.state == GAME_STATE.TRADING"/>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { Vue, Options } from 'vue-class-component';
    import WelcomeView from './WelcomeView.vue';
    import WorldMap from './WorldMap.vue';
    import NavBar from './NavBar.vue';
    import InCity from './InCity.vue';
    import MarketView from './MarketView.vue';
    import { useStore } from 'vuex';
    import { key } from '@/store/store';
    import { GAME_STATE } from '@/scripts/state';
    import LeavingCity from './LeavingCity.vue';
    import TradePlayers from './TradePlayers.vue';
    import TradingView from './TradingView.vue';

    @Options({
        components: {
            WelcomeView,
            WorldMap,
            NavBar,
            InCity,
            MarketView,
            LeavingCity,
            TradePlayers,
            TradingView
        }
    })
    export default class MainView extends Vue {
        store = useStore(key);

        GAME_STATE = GAME_STATE;
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>
<style lang="scss" src="../styles/citywelcome.scss"></style>