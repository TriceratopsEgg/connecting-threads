<script lang='ts'>   
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import ThreadsVisualizer from '../../Molecules/ThreadVisualizer.svelte';
	import type { ColorPattern, TieUpTypes } from '$lib/weaving';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import DrawDown from '../../Organisms/DrawDown.svelte';

    let shaftCount: number;
    let treadleCount: number;
    let tieUpPattern: TieUpTypes;
    let warpThreadCount: number;
    let warpColorPalette: string[] = ["#FFFFFF"];
    let warpColorPattern: ColorPattern;
    let warpColorOrder: string[];
    let weftThreadCount: number;
    let weftColorPalette: string[] = ["#FFFFFF"];
    let weftColorPattern: ColorPattern;
    let weftColorOrder: string[];

    weavingPatternStore.subscribe((store) => {
        shaftCount = store.shaftCount;
        treadleCount = store.treadleCount;
        tieUpPattern = store.tieUpPattern;
        warpThreadCount = store.warpThreadCount;
        warpColorPalette = store.warpColorPalette;
        warpColorOrder = store.warpColorOrder;
        warpColorPattern = store.warpColorPattern;
        weftThreadCount = store.weftThreadCount;
        weftColorPalette = store.weftColorPalette;
        weftColorOrder = store.weftColorOrder;
        weftColorPattern = store.weftColorPattern;
    });

    function moveNextStep() {
        // weavingPatternStore.update((store) => {
        //     store.warpThreadCount = warpThreadCount;
        //     store.warpColorPalette = colorPalette;
        //     store.warpColorOrder = colorOrder;
        //     return store;
        // });

        // save pattern
    }

</script>
    
    <div class="graph-wrapper">
        <div class="graph-row">
            <ThreadsVisualizer threadCount={warpThreadCount} colorPalette={warpColorPalette} bind:colorOrder={warpColorOrder} bind:colorPattern={warpColorPattern}></ThreadsVisualizer>
            <TieUpRepresentation bind:shaftCount bind:treadleCount bind:tieUpPattern />
        </div>
        <div class="graph-row">

            <DrawDown></DrawDown>
            <ThreadsVisualizer threadCount={weftThreadCount} colorPalette={weftColorPalette} bind:colorOrder={weftColorOrder} bind:colorPattern={weftColorPattern}></ThreadsVisualizer>
        </div>
    <StepperButtons on:move={moveNextStep} />
</div>

<style>
	.graph-wrapper {
		display: flex;
		flex-direction: column;
	}

	.graph-row {
		display: flex;
	}
</style>