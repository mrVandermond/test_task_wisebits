<div class="wrapper">
    <CoffeeList list={list} />

    {#if loading}
        <CoffeeStub />
    {/if}

    <Button
        disabled={loading}
        on:click={fetchCoffeeItem}
    />
</div>

<script lang="ts">
import type { CardCoffee, FormattedCoffee } from '@/types';
import { onMount } from 'svelte';
import { fetchKindOfCoffee, fetchPicture } from '@/api';

import Button from '@/components/Button.svelte';
import CoffeeList from '@/components/CoffeeList.svelte';
import CoffeeStub from '@/components/CoffeeStub.svelte';

let list: CardCoffee[] = [];
let loading = false;

onMount(() => {
    fetchCoffeeItem();
});

async function fetchCoffeeItem(): Promise<CardCoffee> {
  loading = true;

  const [coffee, picture]: [FormattedCoffee, string] = await Promise.all([
    fetchKindOfCoffee(),
    fetchPicture(),
  ]);

  loading = false;

  list.push({
    ...coffee,
    pictureUrl: picture,
  });
  list = list;
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
