<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <div class="text-xl pb-3">- Join a Game -</div>
        <div class="flex border-black border-2">
            <input type="text" class="border-r-2 border-r-gray-300 placeholder:pl-2" placeholder="Code">
            <div class="p-2 cursor-pointer"><img src="../assets/right-arrow.svg"></div>
        </div>
        <div class="text-xl py-3">- Create a Game -</div>
        <div class="flex border-black border-2">
            <input type="text" class="border-r-2 border-r-gray-300 placeholder:pl-2" placeholder="Name">
            <div class="p-2 cursor-pointer"><img src="../assets/right-arrow.svg"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    import socket from '../client/socket'

    socket();

    export default class MainPage extends Vue {}
</script>