<script>
    import "../isometric.css";
    import { fade } from 'svelte/transition';

    let isPressed = false;
    let copySuccess = false;

    function copyToClipboard() {
        navigator.clipboard.writeText("mail@owenmit.ch");

        // Hopefully people click the button!
        if (typeof window !== 'undefined' && window.trackAction) {
            window.trackAction('copy_email', 'contact', 'mail@owenmit.ch');
        }

        // Allows the copy button animation to fully play out
        isPressed = true;
        copySuccess = true;

        setTimeout(() => {
            isPressed = false;
        }, 200);

        setTimeout(() => {
            copySuccess = false;
        }, 2000);
    }
</script>

<div class="container">
    <div class="contact-content">
            <div class="email-container isometric-email">
                <div class="email-address">mail@owenmit.ch</div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a class="copy-button" class:isometric-press={isPressed} on:click={copyToClipboard}>
                    <img src="./copy2.svg" alt="Copy to Clipboard" />
                </a>
                {#if copySuccess}
                <div class="copy-success" transition:fade>
                    Copied to clipboard!
                </div>
                {/if}
            </div>
    </div>
</div>

<style>
    .container {
        background-color: var(--color-primary-light);
        position: relative;
        width: 100%;
        height: calc(100% - var(--footer-height));
        overflow: auto;
        padding-top: var(--nav-height);
        box-sizing: border-box;
    }

    .contact-content {
        padding: 0 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
    }

    .email-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        margin: 2rem auto;
        position: relative;
    }

    .email-address {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .copy-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-left: 1rem;
        cursor: pointer;
        position: relative;
        background-color: var(--color-primary-light);
        color: var(--color-text);
        border: 1px solid var(--color-text);
        border-radius: var(--border-radius);
        transition: all var(--transition-speed) var(--transition-ease);
    }

    .copy-button:hover {
        box-shadow: var(--iso-offset-sm) var(--iso-offset-sm) 0 var(--color-text);
        transform: translate(calc(-1 * var(--iso-offset-sm)), calc(-1 * var(--iso-offset-sm)));
    }

    .copy-button img {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        .container {
            padding-top: 0;
            padding-bottom: 5em;
        }
    }

    .copy-success {
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--color-primary);
        color: var(--color-primary-light);
        padding: 8px 16px;
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        font-weight: 500;
    }
</style>
