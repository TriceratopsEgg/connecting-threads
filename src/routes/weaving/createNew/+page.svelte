<script>
    import { Steps } from 'svelte-steps';import { StepIndicator } from 'flowbite-svelte'
	import ShaftsAndTieUp from '../../../components/Weaving/CreateWizard/ShaftsAndTieUp.svelte';
	import { weavingStepsStore } from '../../../stores/weavingPatternStore';
    let wer = [
        { text: 'Shafts and Tie-up' },
        { text: 'Warp' },
        { text: 'Weft' },
        { text: 'Confirm' }
    ];
    let steps = ['Shafts and Tie-up', 'Warp', 'Weft', 'Confirm'];

    let currentStep = 1;
    weavingStepsStore.subscribe((store) => {
        currentStep = store.currentStep;
    });
</script>

<div>
    <StepIndicator {currentStep} {steps} glow />

    <ShaftsAndTieUp></ShaftsAndTieUp>
</div>