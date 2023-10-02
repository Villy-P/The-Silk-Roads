<template>
    <TeacherView v-if="store.state.user?.status == USER_STATUS.LEADER"/>
    <div v-else>
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
                <div class="w-5/6 h-4/6 font-extrabold text-xl sm:text-3xl overflow-y-auto scroll" style="font-family: allura;">
                    <p class="indent-8 pb-3 px-3 select-none" v-for="text in store.state.user?.journal" :key="text">{{ text }}</p>
                </div>
            </div>
        </div>
        <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.showInstructions">
            <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.showInstructions = false">
                <img src="../assets/x.svg">
            </div>
            <div class="w-3/4 max-h-3/4 bg-white rounded-xl py-4 h-3/4 overflow-auto"><InstructionsView/></div>
        </div>
        <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.showDebtMenu">
            <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.showDebtMenu = false">
                <img src="../assets/x.svg">
            </div>
            <div class="w-3/4 max-h-3/4 bg-white rounded-xl py-4 h-3/4 overflow-auto"><DebtMenu/></div>
        </div>
        <div class="w-full h-screen absolute z-50 flex items-center justify-center" style="background-color: rgba(0, 0, 0, .6);" v-if="store.state.user?.showDemandDebt">
            <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="store.state.user!.showDemandDebt = false">
                <img src="../assets/x.svg">
            </div>
            <div class="w-3/4 max-h-3/4 bg-white rounded-xl py-4 h-3/4 overflow-auto flex items-center justify-center">
                Your debt has been forcefully collected!
            </div>
        </div>
        <OpeningData v-if="store.state.user?.state === GAME_STATE.OPENING"/>
        <MainView v-else/>
        <div class="absolute bottom-3 left-3">
            <div class="w-80 h-fit bg-white rounded-2xl mt-4 border-2 border-black" v-for="u in getTradeRequests()" :key="u">
                <div class="text-center p-3">{{ u }} wants to trade</div>
                <div class="flex items-center justify-center w-full gap-3 pb-4">
                    <div class="w-fit p-2 bg-cyan-400 text-center cursor-pointer" @click="acceptDeal(u)">Accept</div>
                    <div class="w-fit p-2 bg-red-600 text-center cursor-pointer" @click="refuseDeal(u)">Refuse</div>
                </div>
            </div>
        </div>
    </div>
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
    import InstructionsView from '@/components/InstructionsView.vue';
    import { GAME_STATE } from '@/scripts/state';
    import { USER_STATUS } from '@/scripts/interface';
    import TeacherView from '@/components/TeacherView.vue';
    import DebtMenu from '@/components/DebtMenu.vue';

    @Options({
        components: {
            OpeningData,
            MainView,
            InventoryPage,
            CultureCards,
            InstructionsView,
            TeacherView,
            DebtMenu
        }
    })
    export default class PlayPage extends Vue {
        store = useStore(key);

        GAME_STATE = GAME_STATE;
        USER_STATUS = USER_STATUS;
        
        beforeMount() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
            socketSetup(this.store, this.$router);
            this.store.state.socket?.emit('joined', username);
        }

        getTradeRequests() {
            // const users = this.store.state.users;
            return this.store.state.tradeRequests;
        }

        acceptDeal(u: string) {
            this.store.state.tradeRequests = [];
            this.store.state.user!.tradingWith = u;
            this.store.state.user!.isMainTrader = false;
            this.store.state.user!.state = GAME_STATE.TRADING;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
            this.store.state.socket?.emit('beginTrade', this.store.state.user?.username, u);
        }

        refuseDeal(u: string) {
            this.store.state.tradeRequests = this.store.state.tradeRequests.filter((i) => i != u);
            this.store.state.socket?.emit('refuseTrade', this.store.state.user?.username, u);
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
        width: 700px;
        aspect-ratio: 1 / 1;

        @apply bg-no-repeat bg-contain
    }

    .scroll::-webkit-scrollbar {
        width: 0px;
    }

    .scroll {
        word-wrap: break-word;
    }
</style>