<template>
    <div class="w-11/12 border-2 border-black flex m-auto h-full flex-col justify-center" v-if="store.state.user!.silverDebt > 0 || store.state.user!.goldDebt > 0">
        <div class="text-center pt-4 w-full">You are in debt. You owe:</div>
        <div class="mx-auto py-4">{{ store.state.user!.silverDebt }} Silver</div>
        <div class="mx-auto">{{ store.state.user!.goldDebt }} Gold</div>
        <div class="w-fit mt-5 bg-cyan-400 border-2 border-black py-2 px-4 cursor-pointer mx-auto" @click="collectDebt">
            <p>Pay off debt</p>
        </div>
    </div>
    <div class="w-11/12 border-2 border-black flex items-center justify-center m-auto text-center h-full flex-col" v-else>
        You are not in debt
        <div class="w-fit mt-5 bg-cyan-400 border-2 border-black py-2 px-4 cursor-pointer mx-auto" v-if="!store.state.user!.items.includes(ITEMS.BANK_NOTES)" @click="collectBankNote">
            <p>Get Bank Note</p>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { ITEMS } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class DebtMenu extends Vue {
        store = useStore(key);

        ITEMS = ITEMS;

        collectDebt() {
            this.store.state.user!.silver -= this.store.state.user!.silverDebt;
            this.store.state.user!.gold -= this.store.state.user!.goldDebt;
            this.store.state.user!.silverDebt = 0;
            this.store.state.user!.goldDebt = 0;
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }

        collectBankNote() {
            this.store.state.user!.items.push(ITEMS.BANK_NOTES);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>