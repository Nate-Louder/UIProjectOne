<script lang="js">
    export let label = '';
    export let type = 'primary';

    export let onClick = () => {};
</script>

<div
    class="button"
    class:primary={type === 'primary'}
    class:secondary={type === 'secondary'}
    class:selected={type === 'selected'}
    on:click={onClick}
>
    <span class="button-label"> {label} </span>
</div>

<style lang="css">
    @import '../../../variables.css';
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        padding: 8px 16px;
        width: fit-content;
        cursor: pointer;
        border: 3px solid var(--primary-color);
    }

    .button.primary {
        background: var(--primary-color);
        color: white;
        transition: all 0.2s;
    }

    .button.primary:hover {
        background: var(--primary-button-hover);
    }

    .button.secondary {
        background-color: transparent;
        color: var(--primary-color);

        transition: all 0.2s;
    }

    .button.secondary:hover {
        background-color: var(--secondary-button-hover);
    }

    .button.selected {
        background-color: white;
        color: var(--primary-color);
    }

    .button.selected:hover {
        background-color: #d2d2d2;
    }

    .button:focus {
        outline: 3px solid var(--primary-color) 70;
    }

    .button-label {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 120%;
    }
</style>
