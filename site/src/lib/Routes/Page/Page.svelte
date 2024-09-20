<script>
    import { entries } from '../../../stores';
    import PreviousEntry from '../../Components/PreviousEntry/PreviousEntry.svelte';
</script>

<div class="previous-entries">
    <h2>Previous Entries</h2>
    {#each $entries as entry}
        <PreviousEntry {entry}></PreviousEntry>
    {/each}
</div>

<style lang="css">
    .previous-entries {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        width: 100%;
        margin-top: 32px;
    }

    h2 {
        color: white;
        font-size: 225%;
    }
</style>
