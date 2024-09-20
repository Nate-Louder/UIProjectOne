<script lang="js">
    import Button from '../Button/Button.svelte';

    export let choices = [];
    export let selection = '';
</script>

<div class="multiple-choice">
    {#each choices as choice}
        <div class="multiple-choice__choice">
            <Button label={choice} type={choice === selection ? 'selected' : 'primary'} onClick={() => (selection = choice)}></Button>
        </div>
    {/each}
</div>

<style lang="css">
    .multiple-choice {
        display: flex;
        gap: 8px;
    }

    .multiple-choice__choice {
        display: flex;
        justify-content: center;
    }
</style>
