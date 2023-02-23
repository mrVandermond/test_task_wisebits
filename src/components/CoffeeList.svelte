<div>
    {#each list as item, index (item.id)}
        <CoffeeItem
            coffee={item}
        />
    {/each}
</div>

<script lang="ts">
    import type { CardCoffee } from '@/types';
    import CoffeeItem from '@/components/CoffeeItem.svelte';

    export let list: CardCoffee[] = [];
</script>
