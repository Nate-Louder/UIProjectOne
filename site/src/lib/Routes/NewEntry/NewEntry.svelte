<script lang="js">
    import { entries } from '../../../stores';
    import Button from '../../Components/Button/Button.svelte';
    import Question from '../../Components/Question/Question.svelte';

    const questions = [
        {
            type: 'text',
            question: 'Give your accomplishment a fun and remeberable title',
        },
        {
            type: 'multiple-choice',
            question: 'What time of day did this accomplishment take place?',
            choices: ['Morning', 'Afternoon', 'Evening', 'Night'],
        },
        {
            type: 'multiple-choice',
            question: 'What category would you say this accomplishment made an imporvement in your life?',
            choices: ['Learning', 'Fitness', 'Work', 'Personal', 'Lifestyle', 'Other'],
        },
        {
            type: 'text',
            question: 'Were others involved in this accomplishment? If so add their names to rember this moment together',
        },
        {
            type: 'text',
            question: 'Add a description of the accomplishment',
        },
    ];

    let currentQuestion = 0;
    let answers = {};
    let currentAnswer = '';

    function nextQuestion() {
        switch (currentQuestion) {
            case 0:
                answers.title = currentAnswer;
                break;
            case 1:
                answers.timeOfDay = currentAnswer;
                break;
            case 2:
                answers.category = currentAnswer;
                break;
            case 3:
                answers.people = currentAnswer;
                break;
            case 4:
                answers.description = currentAnswer;
                break;
        }
        if (currentQuestion >= questions.length - 1) {
            entries.addEntry(answers);
            window.location.href = '#/entry-history';
        } else {
            currentQuestion += 1;
        }

        currentAnswer = '';
    }
</script>

<div class="new-entry">
    <Question
        question={questions[currentQuestion]?.question}
        choices={questions[currentQuestion]?.choices}
        type={questions[currentQuestion]?.type}
        bind:answer={currentAnswer}
    />
    <div class="next-button">
        <Button label="Next" onClick={nextQuestion} />
    </div>
</div>

<style lang="css">
    @import '../../../variables.css';

    .new-entry {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 128px auto;
    }

    .next-button {
        display: flex;
        justify-content: flex-end;
        max-width: 1280px;
        width: 100%;
        align-items: center;
    }
</style>
