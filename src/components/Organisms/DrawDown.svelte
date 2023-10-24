<script lang="ts">

    export let warpColorOrder: string[];
    export let threadPattern: number[];
    export let weftColorOrder: string[];
    export let treadPattern: number[];
    export let tieUpDraft: boolean[][];

</script>

{#if warpColorOrder.length == 0 || threadPattern.length === 0 || weftColorOrder.length == 0 || treadPattern.length == 0 || tieUpDraft.length == 0 }
	<p>There are missing elements in the warp or the weft. Please set this up first before the drawdown can be visualized.</p>
{:else}
    {#each treadPattern as treadle, treadleIndex}
        <div class="graph-wrapper">
            <div class="graph-row">
                {#each threadPattern as thread, threadIndex}
                    <div class="graph-block">
                        <div class="graph-indicator" style:background-color={tieUpDraft[treadle - 1][thread - 1] ? weftColorOrder[treadleIndex] : warpColorOrder[threadIndex]} />
                    </div>
                {/each}
            </div>
        </div>
    {/each}
{/if}

<!-- Styling to do: spacing above button and between blocks is weird -->
<style>
	.graph-wrapper {
		display: flex;
        flex-direction: row;	
	}

	.graph-row {
		display: flex;
        flex-wrap: wrap;		
	}

    .graph-block{
        position: relative;
        isolation: isolate;
    }
    .graph-indicator {
		width: 2.5rem;
		height: 2.5rem;
		background-color:var(--background-colour-neutral, #f7f7f7);
        box-shadow: inset var(--default-background-colour, #fff) 0 1px 0 0;
	}
</style>