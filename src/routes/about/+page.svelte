<script>
    import "../isometric.css";
</script>

<div class="container">
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
                    <p>B.S. Computer Science — Saint Joseph's University</p>
                </div>
                <div class="skills-card isometric-card">
                    <h3>Work</h3>
                    <p>R&D Engineer — Feith Systems and Software, Inc.</p>
                </div>
                <div class="skills-card isometric-card">
                    <h3>Passion</h3>
                    <p>Building useful and beautiful things</p>
                </div>
            </div>
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
        padding-bottom: 2em;
        box-sizing: border-box;
    }

    .about-content {
        padding: 0 2em;
    }

    .bio-container {
        background-color: var(--color-bg);
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
        color: var(--color-primary);
    }

    p {
        font-size: medium;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .container {
            padding-top: 0;
            padding-bottom: 5em;
        }
    }
</style>
