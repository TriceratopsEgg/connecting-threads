<script lang="ts">
	import { Table, TableBodyCell, TableBodyRow } from "flowbite-svelte";
	import { TieUpTypes } from "../../lib/weaving";

    export let shaftCount = 4;
    export let treadleCount = 4;
    export let tieUpPattern = TieUpTypes.Default;

    let tieUpDraft: boolean[][] = [];

    if (tieUpPattern === TieUpTypes.Default) {
        let midPoint = shaftCount / 2;
        for(let i = 0; i < shaftCount; i++) {
            let tieUpRow: boolean[] = [];
            for (let j = 0; j < treadleCount; j++) {
                let comparison = shaftCount - i - midPoint;
                if (j - comparison >= shaftCount) {
                    tieUpRow.push(false);
                } else {
                    tieUpRow.push((j < comparison) || (j - comparison >= midPoint));
                }
            }
            tieUpDraft.push(tieUpRow);
        }
    }
</script>

<table>
    {#each tieUpDraft as [], i}
        <tr>
            {#each tieUpDraft[i] as block}
                <td>{block ? "x" : "o"}</td>           
            {/each}
        </tr>            
    {/each}
</table>

<!-- Styling To Do: 
- it would be great if the table could be styled to show with solid blocks as per the picture at https://weavingspace.co.uk/wp-content/uploads/2017/10/tie-up-plain.png 
- the x's and o's is a temporary stop gap and the boolean values can be use to set the cell colours instead <3 -->