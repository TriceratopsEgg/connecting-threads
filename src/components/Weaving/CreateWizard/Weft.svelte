<script lang='ts'>    
    import { Label, Button, Radio, Chevron, Dropdown, Helper, Input } from 'flowbite-svelte';
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';
	import ThreadsVisualizer from '../../Molecules/ThreadsVisualizer.svelte';

    let weftThreadCount: number;
    let colorPalette: string[] = ["#FFFFFF"];
    let colorOrder: string[];

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.weftThreadCount = weftThreadCount;
            store.weftColorPalette = colorPalette;
            store.weftColorOrder = colorOrder;
            return store;
        });
    }

</script>

<div class="">
    <NumericalInput labelValue="Amount of weft threads" bind:inputValue={weftThreadCount}></NumericalInput>
    <PaletteBuilder label="Weft Color Palette" bind:colorPalette={colorPalette}></PaletteBuilder>
    <ThreadsVisualizer threadCount={weftThreadCount} colorPalette={colorPalette} bind:colorOrder={colorOrder}></ThreadsVisualizer>
    <StepperButtons additionalLogic={moveNextStep} />
</div>