<template>
	<div class="w-screen h-screen flex items-center justify-center flex-col gap-3 flex-container-centered py-10">
        <div class="text-5xl text-center">{{ APP_NAME }}</div>
        <div class="text-xl py-3">by {{ CREATOR_NAME }}</div>
        <div class="">How to Join:</div>
        <ul class="text-left list-item list-disc w-80">
            <li>Go to 
                <a :href="`https://${IP_ADDRESS}:${SERVER_PORT}`" target="_blank" class="text-blue-500 hover:text-blue-600">
                    https://{{ IP_ADDRESS }}:{{ SERVER_PORT }}
                </a>
            </li>
            <li>
                When prompted with "Your connection is not private", click "Advanced," and then "proceed to ..."
            </li>
            <li>Follow Instructions on that screen</li>
        </ul>
        <div class="text-lg">Pick a Username</div>
        <div class="border-2 border-black flex py-1">
            <input type="text" class="px-2" placeholder="Username" ref="input" @keydown.enter="moveTo">
            <div class="w-14 h-full flex items-center justify-center">
                <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center cursor-pointer" @click="moveTo">
                    <img src="../assets/enter.svg" class="w-4 h-4">
                </div>
            </div>
        </div>
        <div v-if="badUsername" class="text-red-700 flex">
            <div class="bg-red-700 text-white rounded-full flex items-center justify-center w-6 h-6 mr-1">!</div>
            <p>Username already exists</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
	import { key } from '../store/store';
    import { useStore } from 'vuex';
    import { IP_ADDRESS, SERVER_PORT, CREATOR_NAME, APP_NAME } from '@/data/data';

	export default class HomeView extends Vue {
		declare $refs: {
			input: HTMLInputElement
		}

        IP_ADDRESS = IP_ADDRESS
        SERVER_PORT = SERVER_PORT
        CREATOR_NAME = CREATOR_NAME
        APP_NAME = APP_NAME

        store = useStore(key);

        badUsername = false;

        async moveTo() {
            const username = this.$refs.input.value.trim();
            const res = await fetch(`https://${IP_ADDRESS}:${SERVER_PORT}/usernameexists/${username}`);
            const data = await res.text();
            if (data == "true") {
                this.badUsername = true;
                return;
            }
            this.store.state.username = this.$refs.input.value.trim();
            localStorage.setItem("username", this.store.state.username);
            this.$router.push("/lobby");
        }

        async mounted() {
            const username = localStorage.getItem("username");
            const res = await fetch(`https://${IP_ADDRESS}:${SERVER_PORT}/usernameexists/${username}`);
            const data = await res.text();
            if (username != null && data === "true") {
                this.$router.push("/lobby");
                return;
            }
            localStorage.removeItem("username");
        }
	}
</script>