<script lang='ts'>    
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';
	import ColourVisualizer from '../../Molecules/ColourVisualizer.svelte';
	import { ColorPattern, ThreadTreadOrder } from '$lib/weaving';
	import ThreadingTreadlingVizualizer from '../../Molecules/ThreadingTreadlingVizualizer.svelte';

    let weftThreadCount: number;
    let colorPalette: string[] = ["#FFFFFF", "#000000"];
    let colorPattern: ColorPattern;
    let colorOrder: string[];
    let treadleOrder: ThreadTreadOrder;
    let treadlingPattern: number[];
    let numberOfTreadles: number;

    weavingPatternStore.subscribe((store) => {
        weftThreadCount = store.weftThreadCount;
        colorPalette = store.weftColorPalette;
        colorOrder = store.weftColorOrder;
        colorPattern = store.weftColorPattern;
        treadleOrder = store.treadleOrder;
        treadlingPattern = store.treadlingPattern;
        numberOfTreadles = store.treadleCount;
    });

    //TODO: clear defaults
    colorPalette = ["#5D5D5D"];
    colorPattern = ColorPattern.TwoByTwo;
    treadleOrder = ThreadTreadOrder.StraightDrawForward;

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.weftThreadCount = weftThreadCount;
            store.weftColorPalette = colorPalette;
            store.weftColorOrder = colorOrder;
            store.weftColorPattern = colorPattern;
            store.treadleOrder = treadleOrder;
            store.treadlingPattern = treadlingPattern;
            return store;
        });
    }

</script>

<div class="">
    <NumericalInput labelValue="Amount of weft threads" bind:inputValue={weftThreadCount}></NumericalInput>
    <PaletteBuilder label="Weft Color Palette" bind:colorPalette={colorPalette}></PaletteBuilder>
    <ColourVisualizer threadCount={weftThreadCount} colorPalette={colorPalette} bind:colorOrder={colorOrder} bind:colorPattern={colorPattern}></ColourVisualizer>
    <ThreadingTreadlingVizualizer threadTreadLabel={"Treadling"} shaftTreadCount={numberOfTreadles} threadCount={weftThreadCount} bind:threadTreadOrder={treadleOrder} bind:threadingPattern={treadlingPattern} ></ThreadingTreadlingVizualizer>
    <StepperButtons on:move={moveNextStep} />
</div>