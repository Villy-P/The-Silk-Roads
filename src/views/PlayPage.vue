<template>
    <OpeningData/>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue, Options } from 'vue-class-component';
    import { useStore } from 'vuex';
    import socketSetup from '@/client/socket';
    import OpeningData from '@/components/OpeningData.vue';

    @Options({
        components: {
            OpeningData
        }
    })
    export default class PlayPage extends Vue {
        store = useStore(key);
        
        mounted() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
            socketSetup(this.store, this.$router);
            this.store.state.socket?.emit('joined');
        }
    }
</script>