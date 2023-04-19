<script lang='ts'>    
    import { Label, Button, Radio, Chevron, Dropdown, Helper, Input } from 'flowbite-svelte';
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import PaletteBuilder from '../../Molecules/PaletteBuilder.svelte';

    let warpThreadCount: number;
    let colorPalette: string[] = ["#FFFFFF"];

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.warpThreadCount = warpThreadCount;
            store.warpColourPalette = colorPalette;
            return store;
        });
    }

</script>

<div class="">
    <NumericalInput labelValue="Amount of warp threads" bind:inputValue={warpThreadCount}></NumericalInput>
    <PaletteBuilder label="Warp Color Palette" bind:colorPalette={colorPalette}></PaletteBuilder>
    <StepperButtons additionalLogic={moveNextStep} />
</div>