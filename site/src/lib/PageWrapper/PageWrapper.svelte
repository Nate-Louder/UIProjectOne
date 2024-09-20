<script lang="js">
    import Header from '../Components/Header/Header.svelte';
</script>

<div class="page-wrapper">
    <Header />
    <div class="page-content">
        <slot></slot>
    </div>
</div>

<style lang="css">
    .page-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100vh;
        background: radial-gradient(163.57% 95.64% at 75.94% 46.09%, #eeb0fe 0%, #c36ed9 24%, #9c31b7 43.8%, #9425b0 69.15%, #6f6ac5 99.5%);
        padding: 0 16px;
    }

    .page-wrapper::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: radial-gradient(
            80.38% 45.72% at 73.89% 44.82%,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(85, 229, 255, 0.15) 46.5%,
            rgba(70, 207, 232, 0.15) 100%
        );
    }

    .page-content {
        overflow-y: auto;
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 100;
        max-width: 1000px;
        scrollbar-width: none;
    }
</style>
