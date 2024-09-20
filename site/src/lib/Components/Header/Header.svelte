<script lang="js">
    import HeaderLink from './HeaderLink.svelte';
</script>

<div class="header">
    <HeaderLink href="#/" label="Home" activeHref={window.location.href} />
    <h1>ReLive</h1>
    <HeaderLink href="#/entry-history" label="Entry History" activeHref={window.location.href} />
</div>

<style lang="css">
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        background: #3f3242;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        overflow: visible;
        z-index: 100;
        border-radius: 16px;
        width: 100%;
        max-width: 1200px;
        margin: 16px auto 0 auto;
        gap: 64px;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 8px 12px;
        border-radius: 32px;
        font-size: 200%;
        color: #3f3242;
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 700;
    }
</style>
