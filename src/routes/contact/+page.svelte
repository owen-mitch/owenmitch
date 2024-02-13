<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";

    function copyToClipboard() {
        navigator.clipboard.writeText("mail@owenmit.ch")
    }
</script>

<div class="container">
    <HeaderAnimation />
    <h1>Contact</h1>
    <div class="bio-container">
        <p>
            To get in contact with me, please send me an email:
        </p>
        <div class="email">
            <h2>mail@owenmit.ch</h2>
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a class="copyButton" on:click={copyToClipboard}>
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
        margin: 4em;
    }

    .email {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .copyButton {
        width: auto;
    }

    h1 {
        padding: 0 1em;
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
