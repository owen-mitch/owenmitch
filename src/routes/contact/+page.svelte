<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
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
    <HeaderAnimation />
    <Header title="Contact" />
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
    <ButtonTray />
    <Footer />
</div>

<style>
    .container {
        background-color: #A6BFFD;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: scroll;
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
        color: #0a1e8d;
    }

    .copy-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-left: 1rem;
        cursor: pointer;
        position: relative;
        background-color: #A6BFFD;
        color: #000;
        border: 1px solid #000;
        border-radius: 4px;
        transition: all 0.14s ease-out;
    }

    .copy-button:hover {
        box-shadow: 4px 4px 0 #000;
        transform: translate(-4px, -4px);
    }

    .copy-button img {
        width: 20px;
        height: 20px;
    }
    
    .copy-success {
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0a1e8d;
        color: #A6BFFD;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 0.9rem;
        font-weight: 500;
    }
</style>
