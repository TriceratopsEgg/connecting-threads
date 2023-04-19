<script lang='ts'>    
    import { Label, Button, Radio, Chevron, Dropdown, Helper } from 'flowbite-svelte';
    import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import { TieUpTypes } from '../../../lib/weaving';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';

    let shaftCount = 4;
    let treadleCount = 4;
    let tieUpPattern: TieUpTypes = TieUpTypes.Default;

    function moveNextStep() {
        weavingPatternStore.update((store) => {
            store.shaftCount = shaftCount;
            store.treadleCount = treadleCount;
            store.tieUpPattern = tieUpPattern;
            return store;
        });
    }
</script>

<div class="">
    <NumericalInput labelValue="Number of Shafts" bind:inputValue={shaftCount}></NumericalInput>
    <NumericalInput labelValue="Number of Treadles" bind:inputValue={treadleCount}></NumericalInput>

    <div class="mb-6">
        <Button><Chevron>Tie-up Pattern</Chevron></Button>
        <Dropdown class="w-60 p-3 space-y-1">
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Default}>{TieUpTypes.Default}</Radio>
                <Helper class="pl-6"><TieUpRepresentation {shaftCount} {treadleCount} tieUpPattern={TieUpTypes.Default} /></Helper>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Alternative}>{TieUpTypes.Alternative}</Radio>
                <Helper class="pl-6"><TieUpRepresentation {shaftCount} {treadleCount} tieUpPattern={TieUpTypes.Alternative} /></Helper>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Custom}>{TieUpTypes.Custom}</Radio>
                <Helper class="pl-6">You will be able to adjust this on the final step.</Helper>
            </li>
        </Dropdown>
        <Label for="input-group-1" class="block mb-2">Selected tie up pattern: {tieUpPattern}</Label>
        <TieUpRepresentation bind:shaftCount={shaftCount} bind:treadleCount={treadleCount} bind:tieUpPattern={tieUpPattern} printLogs={true}  />
    </div>

    <StepperButtons additionalLogic={moveNextStep} />
</div>
