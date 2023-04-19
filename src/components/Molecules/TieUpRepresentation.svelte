<script lang="ts">
	import { TieUpTypes } from "../../lib/weaving";

    export let shaftCount: number;
    export let treadleCount: number;
    export let tieUpPattern: TieUpTypes;
    export let printLogs = false;
    if (printLogs) {
        console.log(tieUpPattern);
    }

    
    let tieUpDraft: boolean[][] = [];

    $: {
        tieUpDraft = [];
        if (tieUpPattern === TieUpTypes.Default || tieUpPattern === TieUpTypes.Alternative) {
            let midPoint = shaftCount / 2;
            for(let i = 0; i < shaftCount; i++) {
                let tieUpRow: boolean[] = [];
                for (let j = 0; j < treadleCount; j++) {
                    let comparison = shaftCount - i - midPoint;
                    if (j - comparison >= shaftCount) {
                        tieUpRow = [...tieUpRow, (tieUpPattern === TieUpTypes.Default ? false : true)];
                    } else {
                        tieUpRow = [... tieUpRow, (tieUpPattern === TieUpTypes.Default ? 
                            (j < comparison || j - comparison >= midPoint) :
                            !(j < comparison || j - comparison >= midPoint))];
                    }
                }
                tieUpDraft = [...tieUpDraft, (tieUpRow)];
            }
        } 
    }
</script>

{#if tieUpPattern === TieUpTypes.Custom}
    <p>The tie up pattern will be determined at a later stage.</p>
{:else}
    <table>
        {#each tieUpDraft as [], i}
            <tr>
                {#each tieUpDraft[i] as block}
                    <td>{block ? "x" : "o"}</td>           
                {/each}
            </tr>            
        {/each}
    </table>
{/if}
<!-- Styling To Do: 
- it would be great if the table could be styled to show with solid blocks as per the picture at https://weavingspace.co.uk/wp-content/uploads/2017/10/tie-up-plain.png 
- the x's and o's is a temporary stop gap and the boolean values can be use to set the cell colours instead <3 

NOTE: Default and Alternative pattern types are mirror images of each other - so what is light becomes dark and what is dark becomes light-->