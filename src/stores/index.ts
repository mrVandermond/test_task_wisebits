import { writable } from 'svelte/store';
import type { LoadingState } from '@/types';

export const loadingState = writable<LoadingState>({
  cardLoading: false,
  pictureLoading: false,
});
