<script>
    import Router from 'svelte-spa-router';
    import { preDefinedAnswers } from './assets/answers';
    import PageWrapper from './lib/PageWrapper/PageWrapper.svelte';
    import Home from './lib/Routes/Home/Home.svelte';
    import NewEntry from './lib/Routes/NewEntry/NewEntry.svelte';
    import Page from './lib/Routes/Page/Page.svelte';
    import { entries } from './stores';

    const routes = {
        '/': Home,
        '/entry-history': Page,
        '/new-entry': NewEntry,
    };

    preDefinedAnswers.forEach((entry) => {
        entries.addEntry(entry);
    });
</script>

<PageWrapper>
    <Router {routes} />
</PageWrapper>

<style>
</style>
