<template>
    <div v-if="isLeader">
        <div class="w-screen h-32 flex items-center text-4xl font-mono py-10">
            <div class="grow px-5 text-ellipsis overflow-hidden whitespace-nowrap">{{ currentGame?.name }}</div>
            <div class="px-5">{{ currentGame?.code }}</div>
        </div><hr><br>
        <div class="flex flex-wrap gap-2">
            <div v-for="p in thisCurrentPlayers" :key="p.id" class="border-2 border-black p-1">
                {{ p.name }}
            </div>
        </div>
    </div>
    <div v-else>
        {{currentGame?.name}}
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import { Watch } from 'vue-property-decorator';

    import { isLeader, currentGame, currentUser, currentPlayers } from '@/client/current';
    import { createSocket } from '@/client/socket';
    import { User } from '@/client/sql';

    export default class MainPage extends Vue {
        isLeader = isLeader;
        currentGame = currentGame;
        currentUser = currentUser;
        thisCurrentPlayers = currentPlayers;

        @Watch("currentPlayers")
        watchPlayers(newValue: User[]) {
            this.thisCurrentPlayers = newValue;
        }

        mounted(): void {
            createSocket();
        }
    }
</script>