<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <div class="text-xl pb-3">- Join a Game -</div>
        <div class="flex border-black border-2">
            <input type="text" class="border-r-2 border-r-gray-300 pl-2" placeholder="Code" ref="joinGameInput" minlength="1" maxlength="6">
            <div class="p-2 cursor-pointer" @click="joinNewGame()"><img src="../assets/right-arrow.svg"></div>
        </div>
        <div class="text-xl py-3">- Create a Game -</div>
        <div class="flex border-black border-2">
            <input type="text" class="border-r-2 border-r-gray-300 pl-2" placeholder="Game Name" ref="createGameInput" minlength="1" maxlength="50">
            <div class="p-2 cursor-pointer" @click="createNewGame()"><img src="../assets/right-arrow.svg"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    import { getResponse } from '@/client/response';
    import { useStore } from 'vuex';
    import { key } from '@/store';

    export default class MainPage extends Vue {
        declare $refs: {
            createGameInput: HTMLInputElement,
            joinGameInput: HTMLInputElement
        }

        store = useStore(key);

        async createNewGame() {
            if (this.$refs.createGameInput.value.length == 0)
                return;
            const res = await getResponse(`/startNewGame/${this.$refs.createGameInput.value}`);
            const data = await res.json();
            this.store.state.currentGame = data.game;
            this.store.state.currentUser = data.user;
            this.store.state.isLeader = true;
            this.$router.push('/lobby')
        }

        async joinNewGame() {
            if (this.$refs.joinGameInput.value.length == 0)
                return;
            const res = await getResponse(`/joinGame/${this.$refs.joinGameInput.value}`);
            const data = await res.json();
            if (data.game == undefined)
                return;
            this.store.state.currentGame = data.game;
            this.store.state.currentUser = data.user;
            this.store.state.isLeader = false;
            this.$router.push('/lobby');
        }
    }
</script>