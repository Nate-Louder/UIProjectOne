<script>
    import MultipleChoice from '../MultipleChoice/MultipleChoice.svelte';
    import TextInput from '../TextInput/TextInput.svelte';

    export let question = '';
    export let choices = [];
    export let answer = '';
    export let type = '';
</script>

<div class="question">
    <div class="question__header">
        <h2>{question}</h2>
    </div>

    <div class="question__body">
        {#if type === 'text'}
            <TextInput bind:value={answer} />
        {:else}
            <MultipleChoice {choices} bind:selection={answer} />
        {/if}
    </div>
</div>

<style>
    @import '../../../variables.css';

    .question {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        max-width: 1280px;
    }

    .question__header {
        display: flex;
        justify-content: center;
        color: white;
        font-size: 300%;
        word-break: keep-all;

        /* Add the animation */
        animation: float 5s ease-in-out infinite;
    }

    .question__body {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    @keyframes float {
        0% {
            transform: translate(0%, 0);
        }
        25% {
            transform: translate(0, -5px);
        }
        50% {
            transform: translate(0, 3px);
        }
        75% {
            transform: translate(0, -2px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>
