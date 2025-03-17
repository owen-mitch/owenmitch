<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
    import "../isometric.css";
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="Skills" />
    <div class="skills-content">
        <div class="skills-section isometric-container">
            <div class="isometric-title">
                <h2>Programming Languages</h2>
            </div>

            <div class="isometric-grid languages-grid">
                <div class="language-card isometric-card">
                    <img
                        src="/logos/javascript.svg"
                        alt="JavaScript"
                        class="language-icon"
                    />
                    <h3 class="language-name">JavaScript</h3>
                </div>

                <div class="language-card isometric-card">
                    <img
                        src="/logos/typescript.svg"
                        alt="TypeScript"
                        class="language-icon"
                    />
                    <h3 class="language-name">TypeScript</h3>
                </div>

                <div class="language-card isometric-card">
                    <img
                        src="/logos/html.svg"
                        alt="HTML"
                        class="language-icon"
                    />
                    <h3 class="language-name">HTML</h3>
                </div>

                <div class="language-card isometric-card">
                    <img src="/logos/css.svg" alt="CSS" class="language-icon" />
                    <h3 class="language-name">CSS</h3>
                </div>

                <div class="language-card isometric-card">
                    <img
                        src="/logos/python.svg"
                        alt="Python"
                        class="language-icon"
                    />
                    <h3 class="language-name">Python</h3>
                </div>

                <div class="language-card isometric-card">
                    <img
                        src="/logos/java.svg"
                        alt="Java"
                        class="language-icon"
                    />
                    <h3 class="language-name">Java</h3>
                </div>

                <div class="language-card isometric-card">
                    <img src="/logos/c.svg" alt="C/C++" class="language-icon" />
                    <h3 class="language-name">C/C++</h3>
                </div>

                <div class="language-card isometric-card">
                    <img src="/logos/sql.svg" alt="SQL" class="language-icon" />
                    <h3 class="language-name">SQL</h3>
                </div>
            </div>
        </div>

        <div class="isometric-grid">
            <div class="skills-card isometric-card">
                <h3>JavaScript Frameworks</h3>
                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Svelte</li>
                </ul>
            </div>

            <div class="skills-card isometric-card">
                <h3>Software</h3>
                <ul>
                    <li>AWS (S3, DynamoDB)</li>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>Tableau</li>
                </ul>
            </div>

            <div class="skills-card isometric-card">
                <h3>DevOps</h3>
                <ul>
                    <li>Nginx</li>
                    <li>MySQL Workbench</li>
                    <li>MariaDB</li>
                </ul>
            </div>
        </div>

        <div class="skills-section isometric-container">
            <div class="isometric-title">
                <h2>Certifications</h2>
            </div>
            <div class="certifications">
                <div class="certification isometric-card">
                    <span class="cert-logo">in</span>
                    <p>LinkedIn React.js Skill Assessment</p>
                </div>
            </div>
        </div>
    </div>
    <div class="additional-footer-helper"></div>
    <ButtonTray />
    <Footer />
</div>

<style>
    .container {
        background-color: #a6bffd;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .skills-content {
        padding: 0 2em;
    }

    .skills-section {
        background-color: white;
        padding: 2em;
        margin: 2em 0;
    }

    .additional-footer-helper {
        width: 100%;
        height: 2em;
    }

    .languages-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
    }

    .language-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 100px;
        height: 100px;
        text-align: center;
    }

    .language-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 1rem;
    }

    .language-name {
        margin: 0;
        color: #0a1e8d;
        font-weight: 600;
    }

    .certification {
        display: flex;
        align-items: center;
    }

    .cert-logo {
        font-size: 2rem;
        font-weight: bold;
        background-color: #0077b5;
        color: white;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-right: 1rem;
    }

    .certification p {
        margin: 0;
    }

    p {
        font-size: medium;
        line-height: 1.6;
    }

    @media (max-width: 600px) {
        .language-card {
            padding: 0.4rem;
        }
    }
</style>
