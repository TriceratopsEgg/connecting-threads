
<script>
    import { Label, Checkbox } from 'flowbite-svelte';

    export let label = '';
    export let inputValue = false;
</script>

<style>
    .input-wrapper{
        --width-max: 24rem;
    }
</style>

<div class="mb-6 input-wrapper">
    <Checkbox bind:checked={inputValue}></Checkbox>
    <Label for="input-group-1" class="block mb-2">{label}</Label>
</div>