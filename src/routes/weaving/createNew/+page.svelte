<script>
    import { StepIndicator } from 'flowbite-svelte'
	import ShaftsAndTieUp from '../../../components/Weaving/CreateWizard/ShaftsAndTieUp.svelte';
	import Warp from '../../../components/Weaving/CreateWizard/Warp.svelte';
	import { stepsStore } from '../../../stores/generalStore';
    let wer = [
        { text: 'Shafts and Tie-up' },
        { text: 'Warp' },
        { text: 'Weft' },
        { text: 'Confirm' }
    ];
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
    {/if}
</div>