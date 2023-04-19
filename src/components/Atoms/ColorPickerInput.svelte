
<script lang='ts'>
    import { Label, Input, Button } from 'flowbite-svelte';
    import ColorPicker, { ChromeVariant }  from 'svelte-awesome-color-picker';

    let label = 'Select a color';
    export let hex = '';

    export function addColor() {
    }
    
</script>

<div class="mb-6">
    <Label for="input-group-1" class="block mb-2">{label}</Label>
    <ColorPicker bind:hex isInput={false} />
</div>