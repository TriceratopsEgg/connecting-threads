<script lang="ts">
	import { ColorPattern } from "$lib/weaving";
	import { RepeatColorPattern } from "$lib/weaving/helpers/weavingMaths";
	import DropDown from "../Atoms/DropDown.svelte";

    let colorPattern: ColorPattern = ColorPattern.Custom;
    export let colorPalette: string[];
    export let colorOrder: string[];
    export let threadCount: number;

    $: {
        if (colorPattern === ColorPattern.LogCabin) {
            const basePattern = colorPalette;
            colorOrder = RepeatColorPattern(threadCount, basePattern);
        } else if (colorPattern === ColorPattern.TwoByTwo) {
            let basePattern: string[] = [];
            for (let i = 0; i < colorPalette.length; i++) {
                basePattern = [...basePattern, colorPalette[i], colorPalette[i]];
            }
            colorOrder = RepeatColorPattern(threadCount, basePattern);
        } else if (colorPattern === ColorPattern.Custom) {
            colorOrder = [];
        }
    }
</script>

<DropDown label={'Color Pattern'} options={Object.values(ColorPattern)} bind:groupName={colorPattern} />
{#if colorPattern === ColorPattern.Custom}
	<p>The colouring pattern will be determined at a later stage.</p>
{:else}
    <div class="graph-wrapper">
        <div class="graph-row">
            {#each colorOrder as colour}
                <div class="graph-block">
                    <div class="graph-indicator" style:background-color={colour} />
                </div>
            {/each}
        </div>
    </div>
{/if}

<!-- Styling to do: spacing above button and between blocks is weird -->
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
    .graph-indicator {
		width: 2.5rem;
		height: 2.5rem;
		background-color:var(--background-colour-neutral, #f7f7f7);
        box-shadow: inset var(--default-background-colour, #fff) 0 0 0 1px;
	}
</style>