<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";

    let isPressed = false;

    function copyToClipboard() {
        navigator.clipboard.writeText("mail@owenmit.ch");

        // Allows the copy button animation to fully play out
        isPressed = true;

        setTimeout(() => {
            isPressed = false;
        }, 200);
    }
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="Contact" />
    <div class="bio-container">
        <p>
            To get in contact with me, please send me an email:
        </p>
        <div class="email">
            <h2>mail@owenmit.ch</h2>
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a class="copyButton" class:pressed={isPressed} on:click={copyToClipboard}>
                <img src="./copy2.svg" alt="Copy to Clipboard" />
            </a>
        </div>
    </div>
    <ButtonTray />
    <Footer />
</div>

<style>
    .container {
        background-color: #43b4d8;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .bio-container {
        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        padding: 1em 2em;
        margin: 2em 4em 4em 4em;
    }

    .email {
        display: flex;
        justify-content: center;
        align-items: center;
    }

@keyframes press {
    0% {
        transform: translate(-4px, -4px);
        box-shadow: 4px 4px 0 #000;
    }
    50% {
        transform: translate(0px, 0px);
        box-shadow: 0px 0px 0 #000;
    }
    100% {
        transform: translate(-4px, -4px);
        box-shadow: 4px 4px 0 #000;
    }
}

    .copyButton {
        width: auto;
    }

    .copyButton.pressed {
        animation: press 0.2s ease-out;
    }

    h2 {
        text-align: center;
        padding: 0 0.5em 0 0;
    }

    p {
        font-size: medium;
        text-align: center;
    }

    a {
        width: 15vw;
    }
</style>
