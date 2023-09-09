<template>
    <div v-for="item in store.state.users" :key="item.socketID">
        {{ item.username }}
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { clientSocket } from '../client/socket';
    import { key } from '@/store/store';
    import { useStore } from 'vuex';
    import socketSetup from '../client/socket';

    export default class LobbyPage extends Vue {
        store = useStore(key);

        mounted(): void {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;

            socketSetup(this.store);

            clientSocket.emit('joined', username);
        }
    }
</script>