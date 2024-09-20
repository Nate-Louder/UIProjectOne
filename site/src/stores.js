import { writable } from 'svelte/store';

function createEntriesStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        addEntry: (entry) => update(entries => [entry, ...entries]),
        removeEntry: (entry) => update(entries => entries.filter(e => e !== entry)),
    };
}

export const entries = createEntriesStore();