<template>
    <div class="w-2/3" ref="worldcontainer">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-full h-full" ref="worldmap">
            <image :x="imageX" :y="imageY" :width="imageW" :height="imageH" xlink:href="../assets/world.jpg" ref="worldimage"/>
            <image 
                v-for="(city, index) in cityPoints" 
                :key="city.x" 
                :x="(city.x / (imageWidth / 5)) * imageW - 15 + imageX" 
                :y="(city.y / (imageHeight / 5)) * imageH - 30 + imageY" 
                width="30" 
                height="30" 
                :xlink:href="require(`../assets/icon/${index == store.state.user?.currentCity ? 'current' : ''}tack.png`)">
            </image>
            <text 
                v-for="(city, index) in cityPoints" 
                :key="city.x"
                ref="rects"
                fill="white"
                class="select-none"
                :x="(city.x / (imageWidth / 5)) * imageW + 15 + imageX"
                :y="(city.y / (imageHeight / 5)) * imageH - 12.5 + imageY">
                {{ getCityNameWithI(index) }}
            </text>
        </svg>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { CITIES, getCityName } from '@/data/city';
    import { Point } from '@/scripts/interface';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class WorldMap extends Vue {
        declare $refs: {
            worldmap: SVGElement,
            worldimage: SVGImageElement,
            worldcontainer: HTMLDivElement,
            rects: SVGRectElement[],
        }

        cityPoints: Point[] = [
            {x: 733, y: 546},
            {x: 1732, y: 445},
            {x: 188, y: 313},
            {x: 1155, y: 817},
            {x: 535, y: 445},
            {x: 1429, y: 439},
            {x: 1178, y: 442},
            {x: 1042, y: 468},
            {x: 769, y: 476},
            {x: 313, y: 387},
        ]
        
        store = useStore(key);

        imageWidth = 9821;
        imageHeight = 4577;

        imageW = this.imageWidth / 5;
        imageH = this.imageHeight / 5;

        imageX = 0;
        imageY = 0;

        lastDragged: Point | null = null;

        mounted(): void {
            this.$refs.worldmap.onwheel = (evt: WheelEvent) => {
                if (evt.deltaY < 0) {
                    this.imageW *= 2;
                    this.imageH *= 2;
                } else {
                    this.imageW /= 2;
                    this.imageH /= 2;
                }
                if (this.imageH < this.$refs.worldcontainer.clientHeight) {
                    this.imageW = this.$refs.worldcontainer.clientHeight * (this.imageWidth / this.imageHeight)
                    this.imageH = this.$refs.worldcontainer.clientHeight;
                }
                this.checkImageBounds();
            };
            this.$refs.worldmap.onmousedown = (evt: MouseEvent) => {
                this.lastDragged = { x: evt.offsetX, y: evt.offsetY };
            };
            this.$refs.worldmap.onmousemove = (evt: MouseEvent) => {
                if (!this.lastDragged)
                    return;
                const distanceX = this.lastDragged.x - evt.offsetX;
                const distanceY = this.lastDragged.y - evt.offsetY;
                this.imageX = this.imageX - distanceX;
                this.imageY = this.imageY - distanceY;
                this.lastDragged = { x: evt.offsetX, y: evt.offsetY };
                this.checkImageBounds();
            };
            this.$refs.worldmap.onmouseup = () => {
                this.lastDragged = null;
            };
            this.$refs.worldmap.onmouseleave = () => {
                this.lastDragged = null;
            };
            for (const rect of this.$refs.rects)
                this.cropSVG(rect);
        }

        getCityNameWithI(i: CITIES) {
            return getCityName(i);
        }

        checkImageBounds() {
            if (this.imageX > 0)
                this.imageX = 0;
            if (this.imageY > 0)
                this.imageY = 0;
            if (Math.abs(this.imageX) + this.$refs.worldcontainer.clientWidth > this.imageW)
                this.imageX = this.$refs.worldcontainer.clientWidth - this.imageW;
            if (Math.abs(this.imageY) + this.$refs.worldcontainer.clientHeight > this.imageH)
                this.imageY = this.$refs.worldcontainer.clientHeight - this.imageH;
        }

        cropSVG(rect: SVGRectElement) {
            const bbox = rect.getBBox();
            rect.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        }
    }
</script>