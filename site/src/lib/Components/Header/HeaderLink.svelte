<script lang="js">
    export let href = '';
    export let label = '';
</script>

<div class="header-link">
    <a {href}>{label}</a>
</div>

<style lang="css">
    .header-link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        height: 66px;
        flex-shrink: 1;
        font-size: 150%;
        color: white;
        font-family: 'Inter', 'Roboto', sans-serif;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        border-bottom: 4px solid transparent;
        width: 200px;
    }

    .header-link:hover {
        background-color: #9d78a550;
    }

    .header-link a {
        text-decoration: none;
        color: inherit;
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
