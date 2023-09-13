<template>
    <div v-if="showInstructions" class="absolute w-full h-screen bg-slate-900 opacity-60 flex items-center justify-center">
        <div class="absolute w-5 h-5 top-6 right-6 cursor-pointer" @click="showInstructions = false">
			<img src="../assets/x.svg">
		</div>
        <div class="bg-white h-fit rounded-2xl text-center">
            <p class="text-black font-bold text-2xl p-3 px-6">https://{{ IP_ADDRESS }}:{{ VUE_PORT }}/</p>
        </div>
    </div>
    <div v-if="store.state.user?.status == USER_STATUS.LEADER" class="flex h-20 w-full border-b-black border-b-2 justify-center items-center">
        <div class="cursor-pointer rounded-lg bg-slate-100 p-2 mx-2" @click="showInstructions = true">Show Link</div>
        <div class="cursor-pointer rounded-lg bg-cyan-300 p-2 mx-2" @click="play">Start Game</div>
    </div>
    <div class="flex w-fit m-auto items-center gap-3">
        <img class="w-14 my-5" src="../assets/users.svg">
        <p class="text-2xl text-black">{{ store.state.users.length - 1 }}</p>
    </div>
    <div class="flex flex-wrap justify-center items-center">
        <div v-for="item in store.state.users" :key="item.socketID" class="">
            <div v-if="item.status != USER_STATUS.LEADER" class="w-fit h-fit px-2 py-1 border-2 border-black">
                {{ item.username }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { key } from '@/store/store';
    import { useStore } from 'vuex';
    import { USER_STATUS } from '@/scripts/interface';
    import { IP_ADDRESS, VUE_PORT } from '@/data/data';
    import socketSetup from '@/client/socket';

    export default class LobbyPage extends Vue {
        store = useStore(key);

        USER_STATUS = USER_STATUS;
        IP_ADDRESS = IP_ADDRESS;
        VUE_PORT = VUE_PORT;

        showInstructions = false;

        async mounted() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            socketSetup(this.store, this.$router);
            this.store.state.socket?.emit('joined', username);
            this.store.state.username = username;
        }

        play() {
            this.store.state.socket?.emit("play", this.store.state.user?.username);
        }
    }
</script>