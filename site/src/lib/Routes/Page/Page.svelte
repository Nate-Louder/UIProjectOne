<script>
    import { entries } from '../../../stores';
    import PreviousEntry from '../../Components/PreviousEntry/PreviousEntry.svelte';

    function handleDeleteEntry(e) {
        entries.removeEntry(e.detail);
    }
</script>

<div class="previous-entries">
    <div class="header">
        <h2>Previous Entries</h2>
        <h3>Click on an entry to edit it</h3>
    </div>
    {#each $entries as entry}
        <PreviousEntry {entry} on:delete={handleDeleteEntry}></PreviousEntry>
    {/each}
</div>

<style lang="css">
    .previous-entries {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        width: 100%;
        margin: 32px 0;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    h3 {
        color: var(--primary-color);
        font-size: 130%;
    }

    h2 {
        color: white;
        font-size: 300%;
    }
</style>
