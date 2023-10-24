<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { signOut } from 'firebase/auth';
    import { firebaseAuth } from '$lib/firebase';
    import { authUser } from '$lib/authStore';
	import { Button, Card } from 'flowbite-svelte';
  
    const handleLogout = () => {
      signOut(firebaseAuth)
        .then(() => {
          $authUser = undefined;
          goto('/');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  </script>
  
<Card class="m-auto">
    {#if $authUser}
        <Button class="hover:underline" on:click={handleLogout}>Logout</Button>
    {:else}
        <a href="/register" class="hover:underline" class:active={$page.url.pathname === '/authentication/register'}
            >Register</a
        >
        <a href="/login" class="hover:underline" class:active={$page.url.pathname === '/authentication/login'}
            >Login</a
        >
    {/if}
</Card>