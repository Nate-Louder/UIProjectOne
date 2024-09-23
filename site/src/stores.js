import { writable } from 'svelte/store';

function createEntriesStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addEntry: (entry) => update(entries => [entry, ...entries]),
        removeEntry: (entry) => update(entries => entries.filter(e => e !== entry)),
        editEntry: (entry, newEntry) => update(entries => entries.map(e => e === entry ? { ...newEntry, date: e.date } : e))
    };
}

function createSelectedEntryStore() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        selectEntry: (entry) => set(entry),
        clearSelection: () => set(null)
    };
}

export const entries = createEntriesStore();
export const selectedEntry = createSelectedEntryStore();