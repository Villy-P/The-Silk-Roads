<template>
    <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.showInventory">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.showInventory = false">
			<img src="../assets/x.svg">
		</div>
        <div class="w-3/4 max-h-3/4 bg-white rounded-xl py-4"><InventoryPage/></div>
    </div>
    <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.showCultureCards">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.showCultureCards = false">
			<img src="../assets/x.svg">
		</div>
        <div class="w-3/4 max-h-3/4 bg-white rounded-xl py-4 h-3/4 overflow-auto"><CultureCards/></div>
    </div>
    <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.showJournal">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.showJournal = false">
			<img src="../assets/x.svg">
		</div>
        <div class="rounded-xl py-4 overflow-auto scrapbook flex items-center justify-center">
            <div class="w-5/6 h-4/6 font-extrabold text-3xl" style="font-family: allura;">
                asdfasdf
                <p class="indent-8" v-for="text in store.state.user?.journal" :key="text">{{ text }}</p>
            </div>
        </div>
    </div>
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
    import InventoryPage from '@/components/InventoryPage.vue';
    import CultureCards from '@/components/CultureCards.vue';
    import { GAME_STATE } from '@/scripts/state';

    @Options({
        components: {
            OpeningData,
            MainView,
            InventoryPage,
            CultureCards
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

<style lang="scss">
    @font-face {
        font-family: allura;
        src: url(../assets/fonts/Tangerine-Bold.ttf);
    }

    .scrapbook {
        background: url(../assets/scrapbook.jpg);
        max-width: 100%;
        max-height: 100%;
        width: 720px;
        aspect-ratio: 1 / 1;

        @apply bg-no-repeat bg-contain
    }
</style>