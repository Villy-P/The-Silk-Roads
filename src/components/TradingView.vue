<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        Trading
    </div>
    <div class="w-10/12 bg-red-600 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-red-500 mb-5" style="font-variant: small-caps;" @click="goBack">
        <p>Stop Trading</p>
    </div>
    <div v-if="store.state.user?.tradingStage === TRADING_STATE.WAITING" class="text-center">
        <p>Waiting for {{ store.state.user?.tradingWith }} to send a trade...</p>
    </div>
    <div  v-else-if="store.state.user?.tradingStage === TRADING_STATE.WAITING_FOR_RESPONSE" class="text-center">
        <p>Waiting for {{ store.state.user?.tradingWith }} to respond...</p>
    </div>
    <div  v-else-if="store.state.user?.tradingStage === TRADING_STATE.TRADE_ACCEPTED" class="text-center">
        <p>{{ store.state.user?.tradingWith }} has accepted your trade</p>
    </div>
    <div  v-else-if="store.state.user?.tradingStage === TRADING_STATE.EVAL_TRADE" class="text-center">
        <p>{{ store.state.user?.tradingWith }} has offered this trade:</p>
        <div class="flex border-2 w-11/12 m-auto mt-2 border-black h-fit">
            <div class="w-1/2 border-r-2 border-r-black p-1">Recieve</div>
            <div class="w-1/2 p-1">Give</div>
        </div>
        <div class="flex border-2 w-11/12 m-auto border-black h-fit">
            <div class="border-r-black border-r-2 w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ store.state.user.currentTrade?.giveSilver }}</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ store.state.user.currentTrade?.giveGold }}</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in store.state.user.currentTrade?.give" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer">
                        <div class="tooltip-text tooltip-right">{{ getItemName(i) }}</div>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ store.state.user.currentTrade?.recieveSilver }}</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ store.state.user.currentTrade?.recieveGold }}</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in store.state.user.currentTrade?.recieve" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer">
                        <div class="tooltip-text tooltip-left">{{ getItemName(i) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div v-else-if="store.state.user?.tradingStage === TRADING_STATE.MANAGING">
        <div class="flex border-2 w-11/12 m-auto border-black h-fit">
            <div class="w-1/2 border-r-2 border-r-black p-1">Give</div>
            <div class="w-1/2 p-1">Recieve</div>
        </div>
        <div class="flex border-2 w-11/12 m-auto border-black h-fit">
            <div class="border-r-black border-r-2 w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="removeGiveSilver">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ tradeGiveSilver }}</div>
                        <div class="tooltip-text tooltip-right">Remove 1 Silver from trade</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="removeGiveGold">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ tradeGiveGold }}</div>
                        <div class="tooltip-text tooltip-right">Remove 1 Gold from Trade</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in tradeGive" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer" @click="removeGiveItem(i)">
                        <div class="tooltip-text tooltip-right">Remove {{ getItemName(i) }} from trade</div>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="removeRecieveSilver">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ tradeRecieveSilver }}</div>
                        <div class="tooltip-text tooltip-left">Remove 1 Silver from trade</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="removeRecieveGold">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ tradeRecieveGold }}</div>
                        <div class="tooltip-text tooltip-left">Remove 1 Gold from Trade</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in tradeRecieve" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer" @click="removeRecieveItem(i)">
                        <div v-if="i in store.state.user!.imports" class="citywelcome-warning tooltip-container -bottom-1.5 -left-1.5 w-4 h-4">!</div>
                        <div class="tooltip-text tooltip-left">Remove {{ getItemName(i) }} from trade</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex border-2 w-11/12 m-auto border-black h-fit">
            <div class="border-r-black border-r-2 w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="addGiveSilver">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ store.state.user!.silver - tradeGiveSilver }}</div>
                        <div class="tooltip-text tooltip-right">Add 1 Silver to trade</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="addGiveGold">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ store.state.user!.gold - tradeGiveGold }}</div>
                        <div class="tooltip-text tooltip-right">Add 1 Gold to Trade</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in currentTradeGiveItems" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer" @click="clickGiveItem(i)">
                        <div class="tooltip-text tooltip-right">Add {{ getItemName(i) }} to trade</div>
                    </div>
                </div>
            </div>
            <div class="border-r-black border-r-2 w-1/2">
                <div class="flex flex-wrap">
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="addRecieveSilver">
                        <img src="../assets/items/silver.jpg" class="w-8 h-8">
                        <div class="select-none pr-1">{{ getTradePartnerInfo()!.silver - tradeRecieveSilver }}</div>
                        <div class="tooltip-text tooltip-left">Add 1 Silver to trade</div>
                    </div><br>
                    <div class="flex items-center justify-center w-fit tooltip-container border-2 border-black h-10 m-1 rounded-md cursor-pointer" @click="addRecieveGold">
                        <img src="../assets/items/gold.jpg" class="w-10">
                        <div class="select-none pr-1">{{ getTradePartnerInfo()!.gold - tradeRecieveGold }}</div>
                        <div class="tooltip-text tooltip-left">Add 1 Gold to Trade</div>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="i in currentTradeRecieveItems" :key="i" class="w-10 h-10 m-1 border-black border-2 rounded-md flex items-center justify-center tooltip-container">
                        <img :src="require(`@/assets/items/${getItemAsset(i)}`)" class="w-8 h-8 cursor-pointer" @click="clickRecieveItem(i)">
                        <div v-if="i in store.state.user!.imports" class="citywelcome-warning tooltip-container -bottom-1.5 -left-1.5 w-4 h-4">!</div>
                        <div class="tooltip-text tooltip-left">Add {{ getItemName(i) }} to trade</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-auto mt-3 px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="sendTrade">
            Send Trade
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { GAME_STATE, TRADING_STATE } from '@/scripts/state';
    import { Trade } from '@/scripts/interface';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';
    import { ITEMS, getItemAsset, getItemName } from '@/data/items';

    export default class TradingView extends Vue {
        store = useStore(key);

        TRADING_STATE = TRADING_STATE;

        tradeGive: ITEMS[] = [];
        tradeGiveSilver = 0;
        tradeGiveGold = 0;
        tradeRecieve: ITEMS[] = [];
        tradeRecieveSilver = 0;
        tradeRecieveGold = 0;

        currentTradeGiveItems: ITEMS[] = JSON.parse(JSON.stringify(this.store.state.user?.items));
        currentTradeRecieveItems: ITEMS[] = JSON.parse(JSON.stringify(this.getTradePartnerInfo()?.items));

        goBack() {
            this.store.state.socket?.emit('endTrade', this.store.state.user?.username, this.store.state.user?.tradingWith);
            this.store.state.user!.tradingWith = undefined;
            this.store.state.user!.requestTradeWith = undefined;
            this.store.state.user!.state = GAME_STATE.IN_CITY;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        getItemAsset(item: ITEMS) {
            return getItemAsset(item);
        }

        getItemName(item: ITEMS) {
            return getItemName(item);
        }

        getTradePartnerInfo() {
            return this.store.state.users.find((u) => u.username == this.store.state.user?.tradingWith);
        }

        clickGiveItem(item: ITEMS) {
            this.tradeGive.push(item);
            this.currentTradeGiveItems.splice(this.currentTradeGiveItems.indexOf(item), 1);
        }

        clickRecieveItem(item: ITEMS) {
            this.tradeRecieve.push(item);
            this.currentTradeRecieveItems.splice(this.currentTradeRecieveItems.indexOf(item), 1);
        }

        removeGiveItem(item: ITEMS) {
            this.currentTradeGiveItems.push(item);
            this.tradeGive.splice(this.tradeGive.indexOf(item), 1);
        }

        removeRecieveItem(item: ITEMS) {
            this.currentTradeRecieveItems.push(item);
            this.tradeRecieve.splice(this.tradeRecieve.indexOf(item), 1);
        }

        addGiveSilver() {
            if (this.store.state.user!.silver - this.tradeGiveSilver <= 0)
                return;
            this.tradeGiveSilver++;
        }

        addGiveGold() {
            if (this.store.state.user!.gold - this.tradeGiveGold <= 0)
                return;
            this.tradeGiveGold++;
        }

        addRecieveSilver() {
            if (this.getTradePartnerInfo()!.silver - this.tradeRecieveSilver <= 0)
                return;
            this.tradeRecieveSilver++;
        }

        addRecieveGold() {
            if (this.getTradePartnerInfo()!.gold - this.tradeRecieveGold <= 0)
                return;
            this.tradeRecieveGold++;
        }

        removeGiveSilver() {
            if (this.tradeGiveSilver <= 0)
                return;
            this.tradeGiveSilver--;
        }

        removeGiveGold() {
            if (this.tradeGiveGold <= 0)
                return;
            this.tradeGiveGold--;
        }

        removeRecieveSilver() {
            if (this.tradeRecieveSilver <= 0)
                return;
            this.tradeRecieveSilver--;
        }

        removeRecieveGold() {
            if (this.tradeRecieveGold <= 0)
                return;
            this.tradeRecieveGold--;
        }

        getTrade(): Trade {
            return {
                give: this.tradeGive,
                giveSilver: this.tradeGiveSilver,
                giveGold: this.tradeGiveGold,
                recieve: this.tradeRecieve,
                recieveSilver: this.tradeRecieveSilver,
                recieveGold: this.tradeRecieveGold
            };
        }

        sendTrade() {
            this.store.state.user!.tradingStage = TRADING_STATE.WAITING_FOR_RESPONSE;
            this.store.state.user!.currentTrade = this.getTrade();
            this.store.state.socket?.emit('sendTrade', JSON.stringify(this.getTrade()), this.store.state.user?.tradingWith);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>