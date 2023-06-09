<script lang="ts">
	import { Button, Chevron, Dropdown, Radio } from "flowbite-svelte";

    export let label: string;
    export let options : any[];
    export let groupName: string;

</script>

<div class="mb-6">
    <Button><Chevron>{label}</Chevron></Button>
    <Dropdown class="w-60 p-3 space-y-1">    
        {#each options as option}
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Radio name="group3" bind:group={groupName} value={option}
                    >{option}</Radio
                >
            </li>
        {/each}
    </Dropdown>
</div>