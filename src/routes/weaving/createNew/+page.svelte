<script>
    import { StepIndicator } from 'flowbite-svelte'
	import ShaftsAndTieUp from '../../../components/Weaving/CreateWizard/ShaftsAndTieUp.svelte';
	import Warp from '../../../components/Weaving/CreateWizard/Warp.svelte';
	import { stepsStore } from '../../../stores/generalStore';
	import Weft from '../../../components/Weaving/CreateWizard/Weft.svelte';
	import FullDesign from '../../../components/Weaving/CreateWizard/FullDesign.svelte';
    let steps = ['Shafts and Tie-up', 'Warp', 'Weft', 'Confirm'];

    let currentStep = 1;
    stepsStore.subscribe((store) => {
        currentStep = store.currentStep;
    });

    stepsStore.set({
        currentStep: 1,
        maxSteps: steps.length,
    });

</script>

<div>
    <StepIndicator {currentStep} {steps} glow />

    {#if currentStep === 1 }
        <ShaftsAndTieUp></ShaftsAndTieUp>
    {:else if currentStep == 2}
        <Warp></Warp>
    {:else if currentStep == 3}
        <Weft></Weft>
    {:else if currentStep == 4}
        <FullDesign></FullDesign>
    {/if}
</div>