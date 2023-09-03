<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <div class="text-xl pb-3">- Join a Game -</div>
        <div class="flex border-black border-2">
            <input type="text" class="border-r-2 border-r-gray-300 pl-2" placeholder="Code">
            <div class="p-2 cursor-pointer"><img src="../assets/right-arrow.svg"></div>
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

    import socket from '../client/socket'
    import { getResponse } from '@/client/response';
    import { setCurrent } from '@/client/current';

    socket();

    export default class MainPage extends Vue {
        declare $refs: {
            createGameInput: HTMLInputElement
        }

        async createNewGame() {
            if (this.$refs.createGameInput.value.length == 0)
                return;
            const res = await getResponse(`/startNewGame/${this.$refs.createGameInput.value}`);
            const data = await res.json();
            setCurrent(data.game, data.user, data.isleader);
            this.$router.push('/lobby')
        }
    }
</script>