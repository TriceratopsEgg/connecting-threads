<script lang='ts'>    
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';
	import ColourVisualizer from '../../Molecules/ColourVisualizer.svelte';
	import ThreadingTreadlingVizualizer from '../../Molecules/ThreadingTreadlingVizualizer.svelte';
	import { ColorPattern, ThreadTreadOrder } from '$lib/weaving';

    let warpThreadCount: number;
    let colorPalette: string[];
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

    //TODO: clear defaults
    colorPalette = ["#FFFFFF"];
    colorPattern = ColorPattern.TwoByTwo;
    threadOrder = ThreadTreadOrder.StraightDrawForward;
    
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
    <ColourVisualizer threadCount={warpThreadCount} colorPalette={colorPalette} bind:colorOrder={colorOrder} bind:colorPattern={colorPattern}></ColourVisualizer>
    <ThreadingTreadlingVizualizer threadTreadLabel={"Threading"} shaftTreadCount={numberOfShafts} threadCount={warpThreadCount} bind:threadTreadOrder={threadOrder} bind:threadingPattern={threadingPattern} ></ThreadingTreadlingVizualizer>
    <StepperButtons on:move={moveNextStep} />
</div>