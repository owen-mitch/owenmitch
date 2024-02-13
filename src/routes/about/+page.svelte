<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
</script>

<div class="container">
    <HeaderAnimation />
    <h1>About</h1>
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
            I am a junior Computer Science major at Saint Joseph's University. I
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
        margin: 4em;
    }

    h1 {
        padding: 0 1em;
    }

    p {
        font-size: medium;
    }
</style>
