
<script>
    import { Label, Input, Button, Card } from 'flowbite-svelte';

    export let label = '';
    export let inputValue = '';
</script>

<div class="mb-6">
    <Label for="input-group-1" class="block mb-2">{label}</Label>
    <Input type="text" bind:value={inputValue}></Input>
</div>