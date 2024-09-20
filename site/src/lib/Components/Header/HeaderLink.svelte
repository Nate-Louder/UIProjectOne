<script lang="js">
    export let href = '';
    export let label = '';
    export let activeHref = '';

    let active = false;

    const checkIfActive = () => {
        if (window.location.href.split('/').pop() === href.substring(1).split('/').pop()) {
            active = true;
        } else {
            active = false;
        }
    };
    $: activeHref, checkIfActive();
</script>

<div class="header-link" class:active>
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
    }

    .header-link.active {
        border-bottom: 4px solid white;
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
