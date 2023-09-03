<template>
    <div v-if="isLeader">
        <div class="w-screen h-32 flex items-center text-4xl font-mono py-10">
            <div class="grow px-5 text-ellipsis overflow-hidden whitespace-nowrap">{{ currentGame?.name }}</div>
            <div class="px-5">{{ currentGame?.code }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    import { isLeader, currentGame, currentUser } from '@/client/current';
    import clientSocket, { createSocket } from '@/client/socket';

    export default class MainPage extends Vue {
        isLeader = isLeader;
        currentGame = currentGame;
        currentUser = currentUser;

        mounted(): void {
            createSocket();
            clientSocket();
        }
    }
</script>