<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
    import "../isometric.css";
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="About" />
    <div class="about-content">
        <div class="bio-container isometric-container">
            <div class="isometric-title">
                <h2>Welcome to owenmit.ch</h2>
            </div>
            <p>
                This is a personal website created from scratch by myself, Owen
                Mitchell. My vision for this project is to be an interactive resume,
                which doesn't just list my skills but demonstrates them in a
                creative, visually appealing way.
            </p>
        </div>
        
        <div class="bio-container isometric-container" style="animation-delay: 0.5s">
            <div class="isometric-title">
                <h2>About me</h2>
            </div>
            <div class="about-grid">
                <div class="skills-card isometric-card">
                    <h3>Education</h3>
                    <p>BS Computer Science at Saint Joseph's University</p>
                </div>
                <div class="skills-card isometric-card">
                    <h3>Work</h3>
                    <p>Software Engineer at SJU Haub Innovation Center</p>
                </div>
                <div class="skills-card isometric-card">
                    <h3>Passion</h3>
                    <p>Building performant and beautiful things</p>
                </div>
            </div>
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

    .about-content {
        padding: 0 2em;
    }

    .bio-container {
        background-color: white;
        padding: 2em;
        margin: 2em 0;
    }

    .about-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    h3 {
        margin: 0.5rem 0;
        color: #0a1e8d;
    }

    p {
        font-size: medium;
        line-height: 1.6;
    }
</style>
