
<script>
    import { Label, Input, Button, Card } from 'flowbite-svelte';

    export let label = '';
    export let inputValue = '';
</script>

<style>
    .input-wrapper{
        --width-max: 24rem;
    }
</style>

<div class="mb-6 input-wrapper">
    <Input type="text" bind:value={inputValue}></Input>
    <Label for="input-group-1" class="block mb-2">{label}</Label>
</div>