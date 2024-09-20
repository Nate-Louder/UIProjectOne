<script lang="ts">
    export let value = '';
    export let placeholder = '';
    export let label = 'Text Input';
</script>

<div class="text-input">
    <span class="text-input__label">{label}</span>
    <input type="text" {placeholder} bind:value />
</div>

<style>
    @import '../../../variables.css';
    .text-input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        gap: 8px;
    }
    .text-input__label {
        color: white;
        margin-right: 16px;
        width: 100%;
        font-weight: 500;
    }
    input {
        border: 2px solid var(--primary-color);
        border-radius: 8px;
        height: 30px;
        font-size: 130%;
        width: 100%;
    }

    input:focus {
        outline: 2px solid white;
    }
</style>
