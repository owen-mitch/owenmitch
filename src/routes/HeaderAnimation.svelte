<script>
    export let title;
    let headerWidth;
</script>

<div class="header-area" bind:clientWidth={headerWidth}>
    <h1 class="title">{title}</h1>

    <div class="cover"></div>

    <div class="blue-square">
        <div class="inverted-text" style="width: {headerWidth ? headerWidth + 'px' : '100vw'}">
            <h1 aria-hidden="true">{title}</h1>
        </div>
    </div>
</div>

<style>
    .header-area {
        position: relative;
        display: flow-root;
    }

    h1 {
        padding: 0 1em;
        margin-bottom: 0;
    }

    .title {
        position: relative;
        z-index: 1;
        transform: translateY(5px);
        animation: textIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards;
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 5em);
        height: 5em;
        background-color: var(--color-primary-light);
        z-index: 2;
        animation: slideOut 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .blue-square {
        position: absolute;
        top: 0;
        right: 0;
        width: 5em;
        height: 5em;
        background-color: var(--color-primary);
        z-index: 3;
        overflow: hidden;
        animation: slideOut 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .inverted-text {
        position: absolute;
        top: 0;
        right: 0;
        height: 5em;
        animation: counterSlide 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .inverted-text h1 {
        color: var(--color-bg);
        transform: translateY(5px);
        animation: textIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards;
    }

    @keyframes slideOut {
        to {
            transform: translateX(calc(-100vw - 5em));
        }
    }

    @keyframes counterSlide {
        to {
            transform: translateX(calc(100vw + 5em));
        }
    }

    @keyframes textIn {
        to {
            transform: translateY(0);
        }
    }
</style>
