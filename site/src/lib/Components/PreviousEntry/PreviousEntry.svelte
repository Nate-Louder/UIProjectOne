<script>
    import { createEventDispatcher } from 'svelte';
    import { selectedEntry } from '../../../stores';
    import Button from '../Button/Button.svelte';

    export let entry = {
        title: 'Title',
        timeOfDay: 'Time of Day',
        category: 'Category',
        people: 'People',
        description: 'Description',
    };

    const dispatch = createEventDispatcher();

    function deleteEntry(event) {
        event.stopPropagation();
        dispatch('delete', entry);
    }

    function editEntry() {
        selectedEntry.selectEntry(entry);
        window.location.href = '#/new-entry';
    }
</script>

<div class="previous-entry">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="entry" on:click={editEntry}>
        <div class="header">
            <h2 class="date">{entry.date}</h2>
            <h2>{entry.title}</h2>
            <div class="button-wrapper"><Button label="Delete" type="secondary" onClick={deleteEntry} /></div>
        </div>
        <div class="top">
            <div class="wrapper">
                <h3>Time of Day</h3>
                <p>{entry.timeOfDay}</p>
            </div>

            <div class="category__wrapper">
                <h3>Category</h3>
                <p>{entry.category}</p>
            </div>

            <div class="wrapper">
                <h3>People Involved</h3>
                <p>{entry.people}</p>
            </div>
        </div>
        <div class="description__wrapper">
            <p>{entry.description}</p>
        </div>
    </div>
</div>

<style lang="css">
    @import '../../../variables.css';

    .previous-entry {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        border-bottom: 3px solid white;
        box-shadow: 0px 5px 5px 0px #f2c0ff88;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
        border-radius: 16px;
        background-color: white;
        align-items: center;
        height: 200px;
        width: 200px;
        padding: 8px;
    }

    .wrapper h3 {
        color: #ad77d9;
    }

    .wrapper p {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 6px solid #ad77d9;
        color: #ad77d9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 150%;
    }

    .category__wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
        border-radius: 16px;
        align-items: center;
        height: 196px;
        width: 196px;
        padding: 8px;
        border: 4px solid white;
    }

    .category__wrapper h3 {
        color: white;
    }

    .category__wrapper p {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 6px solid white;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 150%;
    }

    .description__wrapper {
        font-size: 130%;
    }

    .entry {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 18px;
        margin: 8px;
        color: white;
        width: 100%;
        padding: 8px;
        cursor: pointer;
    }

    .entry:hover {
        background: rgba(236, 151, 253, 0.168);
        border-radius: 16px;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .date {
        color: var(--primary-color);
        width: 200px;
    }

    h2 {
        font-size: 170%;
    }

    h3 {
        font-size: 150%;
    }

    p {
        display: flex;
        margin: 0;
        font-size: 120%;
        align-items: center;
    }

    .button-wrapper {
        width: 200px;
        display: flex;
        justify-content: flex-end;
    }
</style>
