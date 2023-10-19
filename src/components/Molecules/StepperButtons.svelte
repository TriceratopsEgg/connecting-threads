<script lang="ts">
	import { Button } from "flowbite-svelte";
	import { stepsStore, type StepsStoreInterface } from "../../stores/generalStore";
    import { createEventDispatcher } from 'svelte';

    let currentStep = 1;
    let maxSteps = 1;
    stepsStore.subscribe((store) => {
        currentStep = store.currentStep;
        maxSteps = store.maxSteps;
    });

    const dispatch = createEventDispatcher();

    function moveNextStep() {
        stepsStore.update((step: StepsStoreInterface) => {
            step.currentStep = step.currentStep + 1;
            return step;
        });
        dispatch('move', {});
    }

    function moveBackStep() {
        stepsStore.update((step: StepsStoreInterface) => {
            step.currentStep = step.currentStep - 1;
            return step;
        });
        dispatch('move', {});
    }

</script>


<div>
    {#if currentStep != 1}
    <Button on:click={moveBackStep}>
        Back
    </Button>
    {/if}
    <Button on:click={moveNextStep}>
        {currentStep === maxSteps? "Finish" : "Next Step"}
    </Button>
</div>

<!-- Styling To Do: Make buttons go to either side | Maybe a divider or something? | Next always in the same location -->