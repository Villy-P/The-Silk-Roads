<template>
    <div class="absolute w-full h-screen bg-slate-900 opacity-60 flex items-center justify-center">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer">
			<img src="../assets/x.svg">
		</div>
        <div class="bg-white w-3/4 h-2/3 rounded-2xl text-center overflow-auto text-black">
            <p class="font-bold text-2xl p-3 px-6 opacity-100">{{ getMerchantName() }} Merchant</p>
            <p class="p-4 opacity-100">{{ getMerchantDescription() }}</p>
            <p class="p-4 pt-0">Below are the items that you have to trade (export) and the items you wish to buy (import)</p>
            <div class="w-11/12 border-2 border-black flex m-auto">
                <p class="w-1/2 p-2">Exports</p>
                <div class="w-0.5 bg-black"></div>
                <p class="w-1/2 p-2">Imports</p>
            </div>
            <div class="w-11/12 border-2 border-t-0 border-black flex m-auto mb-7">
                <div class="h-full w-1/2 text-left pl-2 py-2">
                    <div v-for="item in store.state.user!.items" :key="item" class="flex gap-2 items-center">
                        <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                        <p>{{ getItemName(item) }}</p>
                    </div>
                </div>
                <div class="w-0.5 bg-black"></div>
                <div class="h-full w-1/2 text-left pl-2 py-2">
                    <div v-for="item in store.state.user!.imports" :key="item" class="flex gap-2 items-center">
                        <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                        <p>{{ getItemName(item) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getMerchantName, getMerchantDescription } from '@/data/merchant';
    import { ITEMS, getItemName, getItemAsset } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class PlayPage extends Vue {
        store = useStore(key);
        
        mounted() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
            // socketSetup(this.store, this.$router);
            // clientSocket.emit('joined', username);
            console.log(this.store.state.user?.imports);
        }

        getMerchantName() {
            return getMerchantName(this.store.state.user!.merchantType!)
        }

        getMerchantDescription() {
            return getMerchantDescription(this.store.state.user!.merchantType!);
        }

        getItemName(i: ITEMS) {
            return getItemName(i);
        }

        getItemAsset(i: ITEMS) {
            return getItemAsset(i);
        }
    }
</script>