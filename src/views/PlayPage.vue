<template>
    <div class="absolute w-full h-screen bg-slate-900 opacity-60 flex items-center justify-center">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer">
			<img src="../assets/x.svg">
		</div>
        <div class="bg-white w-1/2 h-2/3 rounded-2xl text-center overflow-auto">
            <p class="text-black font-bold text-2xl p-3 px-6">{{ store.state.user!.merchantType || "UHOH" }}</p>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import socketSetup, { clientSocket } from '@/client/socket';
    import { getMerchantName } from '@/data/merchant';
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
            console.log(this.store.state);
        }

        getMerchantName(){
            getMerchantName(this.store.state.user!.merchantType!)
        }
    }
</script>