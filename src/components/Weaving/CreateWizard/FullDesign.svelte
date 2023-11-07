<script lang="ts">
	import { weavingPatternStore } from '../../../stores/weavingPatternStore';
	import StepperButtons from '../../Molecules/StepperButtons.svelte';
	import ThreadSideBar from '../../Molecules/ThreadSideBar.svelte';
	import type { ColorPattern, TieUpTypes } from '$lib/weaving';
	import TieUpRepresentation from '../../Molecules/TieUpRepresentation.svelte';
	import DrawDown from '../../Organisms/DrawDown.svelte';
	import Input from '../../Atoms/Input.svelte';
	import Checkbox from '../../Atoms/Checkbox.svelte';
	import { addWeavingPattern } from '$lib/firebase';
    import { authUser } from '$lib/authStore';
	import { FlattenTieUpDraftFromStore } from '$lib/weaving/helpers/weavingMaths';

	let designName: string;
	let sharePublic: boolean;
	let shaftCount: number;
	let treadleCount: number;
	let tieUpPattern: TieUpTypes;
	let warpThreadCount: number;
	let warpColorOrder: string[];
	let threadingPattern: number[];
	let weftThreadCount: number;
	let weftColorPalette: string[];
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
		warpColorOrder = store.warpColorOrder;
		threadingPattern = store.threadingPattern;
		weftThreadCount = store.weftThreadCount;
		weftColorPalette = store.weftColorPalette;
		weftColorOrder = store.weftColorOrder;
		weftColorPattern = store.weftColorPattern;
		treadlingPattern = store.treadlingPattern;
		tieUpDraft = FlattenTieUpDraftFromStore(store.tieUp);
	});

	function moveNextStep() {
		weavingPatternStore.update((store) => {
            store.designName = designName;
			store.sharePublic = sharePublic;
			addWeavingPattern($authUser ? $authUser.uid : '', store);
            return store;
        });
		
	}
</script>

<Input label="Name of Design" bind:inputValue={designName} />
<Checkbox label="Share publicly" bind:inputValue={sharePublic} />

<div class="graph-wrapper" style="grid-template-columns: {2.5*warpThreadCount}rem 1fr;">
	<div>
		<ThreadSideBar
			threadTreadLabel={'threading'}
			colorOrder={warpColorOrder}
			numberPattern={threadingPattern}
			shaftTreadCount={shaftCount}
			verticalOrientation={true}
		/>
	</div>
	<div>
		<TieUpRepresentation bind:shaftCount bind:treadleCount bind:tieUpPattern />
	</div>
	<div>
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
</style>
