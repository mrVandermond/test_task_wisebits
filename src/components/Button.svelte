<button
    on:click
    class="button"
    disabled={disabled}
>+</button>

<script lang="ts">
import { loadingState } from '@/stores';

let disabled = false;

loadingState.subscribe((state) => {
  disabled = state.cardLoading || state.pictureLoading;
})
</script>

<style lang="less">
.button {
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: rgb(235, 48, 30);
  font-size: 20px;
  user-select: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: rgb(148, 31, 18);
  }
}
</style>
