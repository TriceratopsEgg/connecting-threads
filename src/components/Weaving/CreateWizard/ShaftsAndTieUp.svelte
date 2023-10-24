<script lang="ts">
	import { Label, Button, Radio, Chevron, Dropdown, Helper } from 'flowbite-svelte';
	import NumericalInput from '../../Atoms/NumericalInput.svelte';
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import { TieUpTypes } from '../../../lib/weaving';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import { DetermineTieUpDraft } from '$lib/weaving/helpers/weavingMaths';

    let shaftCount: number;
    let treadleCount: number;
    let tieUpPattern: TieUpTypes;

    weavingPatternStore.subscribe((store) => {
        shaftCount = store.shaftCount;
        treadleCount = store.treadleCount;
        tieUpPattern = store.tieUpPattern;
    });

	function moveNextStep() {
		weavingPatternStore.update((store) => {
			store.shaftCount = shaftCount;
			store.treadleCount = treadleCount;
			store.tieUpPattern = tieUpPattern;
			store.tieUp = DetermineTieUpDraft(tieUpPattern, shaftCount, treadleCount);
			return store;
		});
	}
</script>

<section class="section-wrapper">
	<NumericalInput labelValue="Number of Shafts" bind:inputValue={shaftCount} />
	<NumericalInput labelValue="Number of Treadles" bind:inputValue={treadleCount} />

	<div class="mb-6">
		<Button><Chevron>Tie-up Pattern</Chevron></Button>
		<Dropdown class="w-60 p-3 space-y-1">
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Default}
					>{TieUpTypes.Default}</Radio
				>
				<Helper class="pl-6"
					><TieUpRepresentation
						{shaftCount}
						{treadleCount}
						tieUpPattern={TieUpTypes.Default}
					/></Helper
				>
			</li>
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Alternative}
					>{TieUpTypes.Alternative}</Radio
				>
				<Helper class="pl-6"
					><TieUpRepresentation
						{shaftCount}
						{treadleCount}
						tieUpPattern={TieUpTypes.Alternative}
					/></Helper
				>
			</li>
			<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
				<Radio name="group3" bind:group={tieUpPattern} value={TieUpTypes.Custom}
					>{TieUpTypes.Custom}</Radio
				>
				<Helper class="pl-6">You will be able to adjust this on the final step.</Helper>
			</li>
		</Dropdown>
		<Label for="input-group-1" class="block my-4">Selected tie up pattern: {tieUpPattern}</Label>
		<TieUpRepresentation bind:shaftCount bind:treadleCount bind:tieUpPattern />
	</div>

	<StepperButtons on:move={moveNextStep} />
</section>

<style>
	.section-wrapper {
		margin: 2rem 0;
	}
</style>
