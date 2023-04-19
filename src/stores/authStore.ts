import { writable } from "svelte/store";
import type { UserInfo } from 'firebase/auth';

export const authStore = writable<{
  isLoggedIn: boolean;
  user?: UserInfo;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  user: undefined,
  firebaseControlled: false,
});