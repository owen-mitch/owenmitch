<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="About" />
    <div class="bio-container">
        <h2>Welcome to owenmit.ch</h2>
        <p>
            This is a personal website created from scratch by myself, Owen
            Mitchell. My vision for this project is to be an interactive resume,
            which doesn't just list my skills but demonstrates them in a
            creative, visually appealing way.
        </p>
        <h2>About me</h2>
        <p>
            I am a senior Computer Science major at Saint Joseph's University. I
            am also a software engineer/undergraduate researcher at my school in
            the Haub Innovation Center.
        </p>
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

    p {
        font-size: medium;
    }
</style>
