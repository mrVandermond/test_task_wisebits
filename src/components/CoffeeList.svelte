<div class="coffee-list">
    {#each list as item (item.id)}
        <CoffeeItem
            bind:coffee={item}
            class="coffee-list__item"
        />
    {/each}
</div>

<script lang="ts">
    import type { CardCoffee } from '@/types';
    import CoffeeItem from '@/components/CoffeeItem.svelte';

    export let list: CardCoffee[] = [];
</script>

<style lang="less">
.coffee-list__item {
  margin-top: 15px;
}
</style>
