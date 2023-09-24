<template>
    <div v-if="canBuyBill() && hasBill()">
        <p class="w-11/12 m-auto indent-8 pb-3">{{ bill.replace('{}', getCityName()) }}</p>
        <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="exchangeBills(true)">
            Exchange Bills for {{20 * getBillAmount()}} silver
        </div>
        <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="exchangeBills(false)">
            Exchange Bills for {{15 * getBillAmount()}} gold
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { bill, canBuyBill } from '@/data/bills';
    import { getCityName } from '@/data/city';
    import { ITEMS } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class PayBills extends Vue {
        store = useStore(key);

        bill = bill;

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        hasBill() {
            return this.store.state.user?.items.includes(ITEMS.BANK_NOTES);
        }

        canBuyBill() {
            return canBuyBill(this.store.state.user!.currentCity!);
        }

        getBillAmount() {
            return this.store.state.user!.items.filter((i) => i == ITEMS.BANK_NOTES).length;
        }

        exchangeBills(silver: boolean) {
            this.store.state.user!.items = this.store.state.user!.items.filter((i) => i != ITEMS.BANK_NOTES);
            if (silver)
                this.store.state.user!.silver += 20;
            else
                this.store.state.user!.gold += 15;
        }
    }
</script>