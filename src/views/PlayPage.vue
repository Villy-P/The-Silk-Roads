<template>
    <div></div>
</template>

<script lang="ts">
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class PlayPage extends Vue {
        store = useStore(key);
        
        mounted() {
            const username = localStorage.getItem("username");
            if (username == null) {
                this.$router.push("/");
                return;
            }
            this.store.state.username = username;
        }
    }
</script>