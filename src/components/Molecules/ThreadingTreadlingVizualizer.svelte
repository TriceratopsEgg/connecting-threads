<script lang="ts">
	import { ThreadTreadOrder } from "$lib/weaving";
	import { RepeatThreadOrder } from "$lib/weaving/helpers/weavingMaths";
	import DropDown from "../Atoms/DropDown.svelte";

    export let threadTreadLabel: string;
    export let threadTreadOrder: ThreadTreadOrder = ThreadTreadOrder.Custom;
    export let threadingPattern: number[];
    export let shaftTreadCount: number;
    export let threadCount: number;

    $: {
        let basePattern: number[] = [];
        if (threadTreadOrder === ThreadTreadOrder.StraightDrawForward) {
            for (let i = 1; i <= shaftTreadCount; i++) {
                basePattern = [...basePattern, i];
            }
            threadingPattern = RepeatThreadOrder(threadCount, basePattern);
        } else if (threadTreadOrder === ThreadTreadOrder.StraightDrawBackward) {
            for (let i = shaftTreadCount; i > 0; i--) {
                basePattern = [...basePattern, i];
            }
            threadingPattern = RepeatThreadOrder(threadCount, basePattern);
        // TODO: add other patterns in
        } else if (threadTreadOrder === ThreadTreadOrder.PointTwill) {
            for (let i = 1; i <= (shaftTreadCount * 2) - 2; i++) {
                if (i <= shaftTreadCount) {
                    basePattern = [...basePattern, i];
                } else {
                    basePattern = [...basePattern, shaftTreadCount - (i - shaftTreadCount)];
                }
            }
            threadingPattern = RepeatThreadOrder(threadCount, basePattern);
        } else if (threadTreadOrder === ThreadTreadOrder.M) {
            for (let i = 1; i <= (shaftTreadCount * 2) - (shaftTreadCount / 2); i++) {
                if (i <= shaftTreadCount) {
                    basePattern = [...basePattern, i];
                } else {
                    basePattern = [...basePattern, shaftTreadCount - (i - shaftTreadCount)];
                }
            }
            let reverse = [...basePattern];
            reverse.shift();
            reverse.pop();
            basePattern = basePattern.concat(reverse.reverse());
            threadingPattern = RepeatThreadOrder(threadCount, basePattern);
        } else if (threadTreadOrder === ThreadTreadOrder.W) {
            for (let i = (shaftTreadCount * 2) - (shaftTreadCount / 2); i > 0 ; i--) {
                if (i <= shaftTreadCount) {
                    basePattern = [...basePattern, i];
                } else {
                    basePattern = [...basePattern, shaftTreadCount - (i - shaftTreadCount)];
                }
            }
            basePattern = basePattern.slice(shaftTreadCount / 2, basePattern.length).concat(basePattern.slice(0, shaftTreadCount / 2));
                console.log(basePattern);
            let reverse = [...basePattern];
            reverse.shift();
            reverse.pop();
            basePattern = basePattern.concat(reverse.reverse());
            threadingPattern = RepeatThreadOrder(threadCount, basePattern);
        } else if (threadTreadOrder === ThreadTreadOrder.Custom) {
            threadingPattern = [];
        }
    }
</script>

<DropDown label={threadTreadLabel + ' Pattern'} options={Object.values(ThreadTreadOrder)} bind:groupName={threadTreadOrder} />
{#if threadTreadOrder === ThreadTreadOrder.Custom}
	<p>The {threadTreadLabel} pattern will be determined at a later stage.</p>
{:else}
    <div class="graph-wrapper">
        <div class="graph-row">
            {#each threadingPattern as thread}
                <div class="graph-block">
                    <div class="graph-indicator">{thread}</div>
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