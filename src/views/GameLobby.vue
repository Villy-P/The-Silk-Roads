<template>
    <div v-if="store.state.isLeader">
        <div class="w-screen h-32 flex items-center text-4xl font-mono py-10">
            <div class="grow px-5 text-ellipsis overflow-hidden whitespace-nowrap">{{ store.state.currentGame?.name }}</div>
            <div class="px-5">{{ store.state.currentGame?.code }}</div>
        </div><hr><br>
        <div class="flex flex-wrap gap-2">
            <div v-for="p in store.state.currentPlayers" :key="p ? p.id : ''" class="border-2 border-black p-1">
                {{ p ? p.name : '' }}
            </div>
        </div>
    </div>
    <div v-else>
        {{store.state.currentGame?.name}}
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