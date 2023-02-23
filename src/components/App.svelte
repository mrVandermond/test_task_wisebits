<div class="wrapper">
    <CoffeeList
        list={list}
    />

    <Button
        on:click={fetchCoffeeItem}
        class="wrapper__button"
    />
</div>

<script lang="ts">
import Button from '@/components/Button.svelte';
import CoffeeList from '@/components/CoffeeList.svelte';
import type { CardCoffee, FormattedCoffee } from '@/types';
import { onMount } from 'svelte';
import { fetchKindOfCoffee, fetchPicture } from '@/api';

let list: CardCoffee[] = [];

onMount(() => {
    fetchCoffeeItem();
});

async function fetchCoffeeItem(): Promise<CardCoffee> {
  const [coffee, picture]: [FormattedCoffee, string] = await Promise.all([
    fetchKindOfCoffee(),
    fetchPicture(),
  ]);

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
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      &__button {
        margin-top: 15px;
      }
    }
</style>
