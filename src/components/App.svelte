<div class="wrapper">
    <CoffeeList list={list} />

    <Button
        on:click={fetchCoffeeItem}
    />
</div>

<script lang="ts">
import type { FormattedCoffee } from '@/types';
import { onMount } from 'svelte';
import { fetchKindOfCoffee } from '@/api';

import Button from '@/components/Button.svelte';
import CoffeeList from '@/components/CoffeeList.svelte';
import { loadingState } from '@/stores';

let list: FormattedCoffee[] = [];
let timerId = null;

onMount(() => {
    fetchCoffeeItem();
    planFetch();
});

function resetTimeout(): void {
  if (!timerId) return;

  clearTimeout(timerId);
  timerId = null;
}

function planFetch(): void {
  if (timerId) return;

  timerId = setTimeout(fetchCoffeeItem, 30000);
}

function updateLoadingState(value: boolean) {
  loadingState.update(state => ({
    cardLoading: value,
    pictureLoading: state.pictureLoading,
  }));
}

async function fetchCoffeeItem(): Promise<void> {
  resetTimeout();

  updateLoadingState(true);

  const coffee = await fetchKindOfCoffee();

  updateLoadingState(false);

  list.push(coffee);
  list = list;

  planFetch();
}
</script>

<style lang="less">
.wrapper {
  width: 320px;
  margin: auto;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
