<div class="coffee">
    <div class="coffee__picture-wrapper">
        <img
            class="coffee__picture"
            src="{coffee.pictureUrl}"
            alt="coffee card"
        >
    </div>

    <div class="coffee__intensifier">{coffee.intensifier}</div>

    <div class="info">
        <div class="info__origin">{coffee.origin}</div>
        <div class="info__name">{coffee.blend_name}</div>
        <div class="info__variety">{coffee.variety}</div>

        <div class="info__notes">
            <div class="notes">
                {#each coffee.notes as note}
                    <div class="notes__item">{note}</div>
                {/each}
            </div>
        </div>
    </div>
</div>

<script lang="ts">
  import type { CardCoffee } from '@/types';

    export let coffee: CardCoffee;
</script>

<style lang="less">
    .coffee {
      width: 320px;
      height: 400px;
      overflow: hidden;
      position: relative;

      &__picture-wrapper {
        position: relative;
        width: 100%;
        height: 60%;
      }

      &__picture {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }

      &__intensifier {
        position: absolute;
        top: 15px;
        right: 15px;
        color: white;
        text-shadow: 1px 1px 2px black;
      }
    }

    .info {
      background-color: white;
      padding: 15px;
      height: 40%;

      &__origin,
      &__variety {
        font-size: 14px;
      }

      &__name,
      &__variety {
        margin-top: 10px;
      }

      &__origin {
        color: rgb(154, 154, 154);
      }

      &__name {
        font-size: 16px;
        color: black;
      }

      &__variety {
        color: black;
      }

      &__notes {
        position: relative;
        height: 100%;
        overflow-x: scroll;
      }
    }

    .notes {
      position: absolute;
      display: flex;
      gap: 5px;

      &__item {
        display: inline-block;
        width: 120px;
        border-radius: 5px;
        font-size: 14px;
        padding: 5px 0;
        background-color: orange;
        text-align: center;
      }
    }
</style>
