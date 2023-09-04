<template>
    <div v-if="store.state.isLeader">
        <div class="w-screen h-32 flex items-center text-4xl font-mono py-10">
            <div class="grow px-5 text-ellipsis overflow-hidden whitespace-nowrap">{{ store.state.currentGame?.name }}</div>
            <div class="px-5 flex flex-col justify-center">
                <div class="text-sm text-center">Join Code:</div>
                <div class="px-5">{{ store.state.currentGame?.code }}</div>
            </div>
        </div><hr><br>
        <div class="flex flex-wrap gap-1 justify-center">
            <div 
                v-for="(p, i) in store.state.currentPlayers" 
                :key="p ? p.id : ''" 
                class="border-2 border-black p-1 py-2 my-1 w-96 max-w-96 text-center mx-auto"
                :class="i == 0 ? 'bg-cyan-400 cursor-pointer hover:bg-cyan-500' : ''">
                {{ p ? (i == 0 ? 'Start Game' : p.name) : '' }}
            </div>
        </div>
    </div>
    <div v-else>
        <div class="text-center text-5xl py-5 px-3">
            Welcome to {{ store.state.currentGame?.name }}
        </div>
        <div class="text-center text-lg px-3">
            Edit your name and see if it shows up on your teachers screen.
        </div>
        <div class="my-5 text-center">
            <input placeholder="Name" value="New Player" class="mx-auto pl-2 border-2 border-black py-1" minlength="1" maxlength="50">
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'

    import { createSocket } from '@/client/socket';
    import { useStore } from 'vuex';
    import { key } from '@/store';

    export default class MainPage extends Vue {
        store = useStore(key);

        mounted(): void {
            createSocket(this.store);
        }

        beforeUnmount(): void {
            this.store.state.currentGame = null;
            this.store.state.currentUser = null;
            this.store.state.isLeader = false;
        }
    }
</script>