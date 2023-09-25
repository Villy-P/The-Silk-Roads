<template>
    <div class="flex flex-col h-screen w-full overflow-clip">
        <NavBar/>
        <div class="flex w-full" style="height: calc(100% - 56px);">
            <WorldMap/>
            <div class="bg-white w-1/3 border-l-2 border-l-black overflow-y-auto">
                <WelcomeView/>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { Vue, Options } from 'vue-class-component';
    import WelcomeView from './WelcomeView.vue';
    import WorldMap from './WorldMap.vue';
    import NavBar from './NavBar.vue';

    @Options({
        components: {
            WelcomeView,
            WorldMap,
            NavBar
        }
    })
    export default class MainView extends Vue {}
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>
<style lang="scss" src="../styles/citywelcome.scss"></style>