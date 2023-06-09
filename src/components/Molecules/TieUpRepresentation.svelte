<script lang="ts">
	import { TieUpTypes } from '../../lib/weaving';

    export let shaftCount: number;
    export let treadleCount: number;
    export let tieUpPattern: TieUpTypes;

	let tieUpDraft: boolean[][] = [];

	$: {
		tieUpDraft = [];
		if (tieUpPattern === TieUpTypes.Default || tieUpPattern === TieUpTypes.Alternative) {
			let midPoint = shaftCount / 2;
			for (let i = 0; i < shaftCount; i++) {
				let tieUpRow: boolean[] = [];
				for (let j = 0; j < treadleCount; j++) {
					let comparison = shaftCount - i - midPoint;
					if (j - comparison >= shaftCount) {
						tieUpRow = [...tieUpRow, tieUpPattern === TieUpTypes.Default ? true : false];
					} else {
						tieUpRow = [
							...tieUpRow,
							tieUpPattern === TieUpTypes.Default
								? !(j < comparison || j - comparison >= midPoint)
								: j < comparison || j - comparison >= midPoint
						];
					}
				}
				tieUpDraft = [...tieUpDraft, tieUpRow];
			}
		}
	}
</script>

{#if tieUpPattern === TieUpTypes.Custom}
	<p>The tie up pattern will be determined at a later stage.</p>
{:else}
	<div class="graph-wrapper">
		{#each tieUpDraft as [], i}
			<div class="graph-row">
				{#each tieUpDraft[i] as block}
					<div class="graph-block">
						<input type="checkbox" checked={block} />
						<div class="graph-indicator" />
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}
<!-- Styling To Do: 
- it would be great if the table could be styled to show with solid blocks as per the picture at https://weavingspace.co.uk/wp-content/uploads/2017/10/tie-up-plain.png 
- the x's and o's is a temporary stop gap and the boolean values can be use to set the cell colours instead <3 

NOTE: Default and Alternative pattern types are mirror images of each other - so what is light becomes dark and what is dark becomes light-->

<style>
	.graph-wrapper {
		display: flex;
		flex-direction: column;
	}

	.graph-row {
		display: flex;
	}

    .graph-block{
        position: relative;
        isolation: isolate;
    }
	input[type='checkbox'] {
		position: absolute;
		inset: 0;
		opacity: 0;
	}
    .graph-indicator {
		width: 2.5rem;
		height: 2.5rem;
		background-color:var(--background-colour-neutral, #f7f7f7);
        box-shadow: inset var(--default-background-colour, #fff) 0 0 0 1px;
	}

	input[type='checkbox']:checked ~ .graph-indicator {
		background-color: var(--theme-colour-primary, #888);
	}
</style>
