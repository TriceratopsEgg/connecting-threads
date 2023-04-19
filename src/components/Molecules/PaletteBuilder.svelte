<script lang="ts">
	import { Button, Card, Chevron, Dropdown, Label } from "flowbite-svelte";
import ColorPickerInput from "../Atoms/ColorPickerInput.svelte";
	import Input from "../Atoms/Input.svelte";

    export let label = '';
    export let colorPalette: string[] = [];
    let hex: string;

    function handleRemove(color: string) {
        if (colorPalette.length === 1) {
            colorPalette = [];
        }
        const index = colorPalette.indexOf(color);
        colorPalette = [...colorPalette.slice(0, index),...colorPalette.slice(index + 1)];
    }

    function handleAdd(){
        colorPalette = [...colorPalette, hex];
    }
</script>


<Label for="input-group-1" class="block mb-2">{label}</Label>

{#if (colorPalette)}
    {#each colorPalette as color}
        <Card style="background:{color}" class="inline-flex" >
            <Label>{color}</Label>
            <button on:click={() => handleRemove(color)} type="button" class="inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" aria-label="Remove">
                <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Remove color</span>
            </button>
        </Card>
    {/each}
{/if}

<div class="mb-6">
    <Button><Chevron>Add color to palette</Chevron></Button>
    <Dropdown class="p-3 space-y-1">
        <ColorPickerInput bind:hex={hex}></ColorPickerInput>
        <Button on:click={handleAdd}>Select color</Button>
    </Dropdown>
</div>

<!-- Styling To Do: 
- The exit buttons on the color palette cards is ick ^.^ -->