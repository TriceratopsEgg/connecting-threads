<!-- <script>
	import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { Label, Input, Button, Card } from 'flowbite-svelte';
	import { getFirebaseAuth } from '../../../firebase_setup/firebase';
	import { authStore } from '../../../stores/authStore';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';

    function onRegister() {
        createUserWithEmailAndPassword(getFirebaseAuth(), email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            authStore.set({
                isLoggedIn: user !== null,
                user: user,
                firebaseControlled: true,
            });
            goto("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            if (errorCode === "auth/email-already-in-use"){
                //setError("This email is already in use, try logging in.");
            }
        });
       
    }
  </script>
  
  <Card class="m-auto">
    <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Your Email</Label>
        <Input id="email" type="email" bind:value={email}>
        <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </Input>
    </div>

    <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Password</Label>
        <Input id="password" type="password" bind:value={password}>
            <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"/> </g> </svg>
        </Input>
    </div>

    <Button on:click={onRegister}>
        Register <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </Button>
</Card> -->

<script lang="ts">
    import { goto } from '$app/navigation';
 
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { firebaseAuth } from '$lib/firebase';
	import { Button, Card, Input, Label } from 'flowbite-svelte';

    let email: string;
    let password: string;

    let success: boolean | undefined = undefined;
    
    const register = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => {
        goto('/authentication/login');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        success = false;
        });
    };
  </script>
<Card class="m-auto">
  <form
    on:submit|preventDefault={register}
  >
    <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Your Email</Label>
        <Input id="email" type="email" bind:value={email}>
        <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </Input>
    </div>

    <div class="mb-6">
        <Label for="input-group-1" class="block mb-2">Password</Label>
        <Input id="password" type="password" bind:value={password}>
            <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"/> </g> </svg>
        </Input>
    </div>

    <Button type="submit" class="default-action">
        Register <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </Button>
  </form>
</Card>