<script lang="ts">
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import ThreadSideBar from '../../Molecules/ThreadSideBar.svelte';
	import type { ColorPattern, TieUpTypes } from '$lib/weaving';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import DrawDown from '../../Organisms/DrawDown.svelte';
	import { DetermineTieUpDraft } from '$lib/weaving/helpers/weavingMaths';
	import Input from '../../Atoms/Input.svelte';
	import Checkbox from '../../Atoms/Checkbox.svelte';

	let designName: string;
	let sharePublic: boolean;
	let shaftCount: number;
	let treadleCount: number;
	let tieUpPattern: TieUpTypes;
	let warpThreadCount: number;
	let warpColorPalette: string[] = ['#FFFFFF'];
	let warpColorPattern: ColorPattern;
	let warpColorOrder: string[];
	let threadingPattern: number[];
	let weftThreadCount: number;
	let weftColorPalette: string[] = ['#FFFFFF'];
	let weftColorPattern: ColorPattern;
	let weftColorOrder: string[];
	let treadlingPattern: number[];
	let tieUpDraft: boolean[][];

	weavingPatternStore.subscribe((store) => {
		designName = store.designName;
		sharePublic = store.sharePublic;
		shaftCount = store.shaftCount;
		treadleCount = store.treadleCount;
		tieUpPattern = store.tieUpPattern;
		warpThreadCount = store.warpThreadCount;
		warpColorPalette = store.warpColorPalette;
		warpColorOrder = store.warpColorOrder;
		warpColorPattern = store.warpColorPattern;
		threadingPattern = store.threadingPattern;
		weftThreadCount = store.weftThreadCount;
		weftColorPalette = store.weftColorPalette;
		weftColorOrder = store.weftColorOrder;
		weftColorPattern = store.weftColorPattern;
		treadlingPattern = store.treadlingPattern;
		tieUpDraft = store.tieUp;
	});

	function moveNextStep() {
		// weavingPatternStore.update((store) => {
		//     store.warpThreadCount = warpThreadCount;
		//     store.warpColorPalette = colorPalette;
		//     store.warpColorOrder = colorOrder;
		//     return store;
		// });
		// save pattern
	}
</script>

<Input label="Name of Design" bind:inputValue={designName} />
<Checkbox label="Share publicly" bind:inputValue={sharePublic} />

<div class="graph-wrapper" style="grid-template-columns: {2.5*warpThreadCount}rem 1fr;">
	<div class="graph-row">
		<ThreadSideBar
			threadTreadLabel={'threading'}
			colorOrder={warpColorOrder}
			numberPattern={threadingPattern}
			shaftTreadCount={shaftCount}
			verticalOrientation={true}
		/>
	</div>
	<div class="tie-up-represenation-wrapper">
		<TieUpRepresentation bind:shaftCount bind:treadleCount bind:tieUpPattern />
	</div>
	<div class="graph-row">
		<DrawDown
			{warpColorOrder}
			threadPattern={threadingPattern}
			{weftColorOrder}
			treadPattern={treadlingPattern}
			{tieUpDraft}
		/>
	</div>
	<div>
		<ThreadSideBar
			threadTreadLabel={'treadling'}
			colorOrder={weftColorOrder}
			numberPattern={treadlingPattern}
			shaftTreadCount={treadleCount}
			verticalOrientation={false}
		/>
	</div>
	<StepperButtons on:move={moveNextStep} />
</div>

<style>
	.graph-wrapper {
		display: grid;
		
	}

	.graph-row {
	}
</style>
