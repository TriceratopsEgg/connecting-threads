
<script>
    import { Label, NumberInput} from 'flowbite-svelte';

    export let labelValue = '';
    export let inputValue = 0;
</script>

<div class="mb-6 input-wrapper">
    <NumberInput type="num" bind:value={inputValue}></NumberInput>
    <Label for="input-group-1" class="block mb-2">{labelValue}</Label>
</div>