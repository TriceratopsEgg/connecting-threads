<script lang='ts'>    
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';
	import ThreadVisualizer from '../../Molecules/ThreadVisualizer.svelte';
	import type { ColorPattern, ThreadTreadOrder } from '$lib/weaving';
	import ThreadingTreadlingVizualizer from '../../Molecules/ThreadingTreadlingVizualizer.svelte';

    let warpThreadCount: number;
    let colorPalette: string[] = ["#FFFFFF"];
    let colorPattern: ColorPattern;
    let colorOrder: string[];
    let threadOrder: ThreadTreadOrder;
    let threadingPattern: number[];
    let numberOfShafts: number;

    weavingPatternStore.subscribe((store) => {
        warpThreadCount = store.warpThreadCount;
        colorPalette = store.warpColorPalette;
        colorOrder = store.warpColorOrder;
        colorPattern = store.warpColorPattern;
        threadOrder = store.threadingOrder;
        threadingPattern = store.threadingPattern;
        numberOfShafts = store.shaftCount;
    });

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.warpThreadCount = warpThreadCount;
            store.warpColorPalette = colorPalette;
            store.warpColorOrder = colorOrder;
            store.warpColorPattern = colorPattern;
            store.threadingOrder = threadOrder;
            store.threadingPattern = threadingPattern;
            return store;
        });
    }

</script>

<div class="">
    <NumericalInput labelValue="Amount of warp threads" bind:inputValue={warpThreadCount}></NumericalInput>
    <PaletteBuilder label="Warp Color Palette" bind:colorPalette={colorPalette}></PaletteBuilder>
    <ThreadVisualizer threadCount={warpThreadCount} colorPalette={colorPalette} bind:colorOrder={colorOrder} bind:colorPattern={colorPattern}></ThreadVisualizer>
    <ThreadingTreadlingVizualizer threadTreadLabel={"Threading"} shaftTreadCount={numberOfShafts} threadCount={warpThreadCount} bind:threadTreadOrder={threadOrder} bind:threadingPattern={threadingPattern} ></ThreadingTreadlingVizualizer>
    <StepperButtons on:move={moveNextStep} />
</div>