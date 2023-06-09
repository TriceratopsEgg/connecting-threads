<script lang='ts'>    
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';
	import ThreadsVisualizer from '../../Molecules/ThreadsVisualizer.svelte';
	import type { ColorPattern } from '$lib/weaving';

    let warpThreadCount: number;
    let colorPalette: string[] = ["#FFFFFF"];
    let colorPattern: ColorPattern;
    let colorOrder: string[];

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.warpThreadCount = warpThreadCount;
            store.warpColorPalette = colorPalette;
            store.warpColorOrder = colorOrder;
            return store;
        });
    }

</script>

<div class="">
    <NumericalInput labelValue="Amount of warp threads" bind:inputValue={warpThreadCount}></NumericalInput>
    <PaletteBuilder label="Warp Color Palette" bind:colorPalette={colorPalette}></PaletteBuilder>
    <ThreadsVisualizer threadCount={warpThreadCount} colorPalette={colorPalette} bind:colorOrder={colorOrder}></ThreadsVisualizer>
    <StepperButtons additionalLogic={moveNextStep} />
</div>