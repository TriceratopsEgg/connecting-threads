<script>    
    import { Label, Button, Card, Radio, Chevron, Dropdown, Helper } from 'flowbite-svelte';
    import Input from '../../Atoms/Input.svelte';
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { FieldValue } from 'firebase/firestore';
	import { weavingPatternStore, weavingStepsStore } from '../../../stores/weavingPatternStore';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import { TieUpTypes } from '../../../lib/weaving';

    let shaftCount = 4;
    let treadleCount = 4;
    let tieUpStyle = 'Default';

    function moveNextStep() {
        weavingPatternStore.set({
            numberOfShafts: shaftCount,
            tieUpPattern: tieUpStyle,
        });
        weavingStepsStore.set({ currentStep: 2 });
    }
</script>

<div class="">
    <NumericalInput labelValue="Number of Shafts" bind:inputValue={shaftCount}></NumericalInput>
    <NumericalInput labelValue="Number of Treadles" bind:inputValue={treadleCount}></NumericalInput>

    <div class="mb-6">
        <Button><Chevron>Tie-up Pattern</Chevron></Button>
        <Dropdown class="w-60 p-3 space-y-1">
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpStyle} value={TieUpTypes.Default}>{TieUpTypes.Default}</Radio>
                <Helper class="pl-6"><TieUpRepresentation {shaftCount} {treadleCount} /></Helper>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpStyle} value={TieUpTypes.Alternative}>{TieUpTypes.Alternative}</Radio>
                <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpStyle} value={TieUpTypes.Custom}>{TieUpTypes.Custom}</Radio>
                <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
            </li>
        </Dropdown>
    </div>

    <Button on:click={moveNextStep}>
        Next Step
    </Button>
</div>
