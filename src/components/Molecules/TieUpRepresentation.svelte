<script lang="ts">
	import { Table, TableBodyCell, TableBodyRow } from "flowbite-svelte";

    export let shaftCount = 4;
    export let tieUpCount = 4;
    export let tieUpPattern = "Default";

    let tieUpDraft: boolean[][] = [];

    if (tieUpPattern === "Default") {
        let midPoint = shaftCount / 2;
        for(let i = 0; i < shaftCount; i++) {
            let tieUpRow: boolean[] = [];
            for (let j = 0; j < tieUpCount; j++) {
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

<Table noborder={true}>
    {#each tieUpDraft as [], i}
        <TableBodyRow>
            {#each tieUpDraft[i] as block}
                <TableBodyCell>{block ? "x" : "o"}</TableBodyCell>           
            {/each}
        </TableBodyRow>            
    {/each}
</Table>