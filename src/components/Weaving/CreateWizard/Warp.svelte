<script lang='ts'>    
    import { Label, Button, Radio, Chevron, Dropdown, Helper } from 'flowbite-svelte';
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';

    let warpThreadCount: number;

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.warpThreadCount = warpThreadCount;
            return store;
        });
    }
</script>

<div class="">
    <NumericalInput labelValue="Amount of warp threads" bind:inputValue={warpThreadCount}></NumericalInput>

    <StepperButtons additionalLogic={moveNextStep} />
</div>