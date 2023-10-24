<script lang="ts">

    export let threadTreadLabel: string;
    export let colorOrder: string[];
    export let numberPattern: number[];
    export let shaftTreadCount: number;
    export let verticalOrientation: boolean;

</script>

{#if colorOrder.length == 0 || numberPattern.length === 0 }
	<p>The {threadTreadLabel} pattern still need to be determined. Please use the floating button controls to set this up.</p>
{:else}
<div class="graph-wrapper">
    {#each {length: shaftTreadCount} as _, i}
            <div class="graph-row" style="flex-direction:{verticalOrientation ? "row" : "column"}">
                {#each colorOrder as colour, index}
                    <div class="graph-block">
                        <div class="graph-indicator" style:background-color={numberPattern[index] === i + 1 ? colour : ""}>{numberPattern[index] === i + 1 ? numberPattern[index] : ""}</div>
                    </div>
                {/each}
            </div>
    {/each}
</div>
{/if}

<!-- Styling to do: spacing above button and between blocks is weird -->
<style>
	.graph-wrapper {
		display: flex;
        flex-wrap: wrap;
	}

	.graph-row {
		display: flex;
	}

    .graph-block{
        position: relative;
        isolation: isolate;
    }
    .graph-indicator {
		width: 2.5rem;
		height: 2.5rem;
		background-color:var(--background-colour-neutral, #f7f7f7);
        box-shadow: inset var(--default-background-colour, #fff) 0 0 0 1px;
	}
</style>