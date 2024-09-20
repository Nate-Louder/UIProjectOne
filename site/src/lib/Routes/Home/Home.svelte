<script lang="js">
    import Button from '../../Components/Button/Button.svelte';

    function handleClick() {
        window.location.href = '#/new-entry';
    }
</script>

<div class="home">
    <div class="header">
        <h1>Welcome to <strong>ReLive</strong></h1>
        <h2>Fill out your entry for today, or view previous entries.</h2>
    </div>
    <div class="actions">
        <Button label="Create Entry" onClick={handleClick} />
        <Button label="Previous Entries" type="secondary" />
    </div>
</div>

<style lang="css">
    .home {
        display: flex;
        align-items: center;
        gap: 32px;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 64px;
        margin: 0 auto;
        width: fit-content;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;
        font-family: 'Inter', 'Roboto', sans-serif;
        color: white;
    }

    h1 {
        font-weight: 700;
        font-size: 700%;

        animation: float 5s ease-in-out infinite;
    }

    h1 strong {
        color: #3f3242;
    }

    h2 {
        font-weight: 600;
        font-size: 200%;
    }

    .actions {
        display: flex;
        gap: 16px;
        align-items: end;
        justify-content: end;
        width: 100%;
    }

    @keyframes float {
        0% {
            transform: translate(0%, 0);
        }
        25% {
            transform: translate(4px, -5px);
        }
        50% {
            transform: translate(3px, 3px);
        }
        75% {
            transform: translate(-5px, 2px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>
