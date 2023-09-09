<template>
    <div></div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { clientSocket } from '../client/socket';
    import { key } from '@/store/store';
    import { useStore } from 'vuex';

    export default class LobbyPage extends Vue {
        store = useStore(key);

        mounted(): void {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
        }
    }
</script>