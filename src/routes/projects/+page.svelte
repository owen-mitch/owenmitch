<script lang="ts">
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
    import "../isometric.css";
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="Projects" />
    <div class="projects-content">
        <div class="project-card isometric-container">
            <div class="project-title">
                <h2>Personal Website</h2>
                <span class="project-date">February 2024</span>
            </div>
            <div class="project-content">
                <div class="project-description">
                    <p>A creative personal website that showcases my skills and experience in an interactive way.</p>
                    <ul>
                        <li>Written in the Svelte framework using SvelteKit</li>
                        <li>Hosted on custom domain with Github Pages</li>
                        <li>
                            Automated recompilation and site redeployment when updates are
                            pushed to Github
                        </li>
                        <li>Learned the process of graphic design and CSS keyframing</li>
                    </ul>
                </div>
                <div class="project-showcase">
                    <div class="tech-stack">
                        <span class="tech-tag">Svelte</span>
                        <span class="tech-tag">SvelteKit</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">GitHub Pages</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="project-card isometric-container" style="animation-delay: 0.3s">
            <div class="project-title">
                <h2>AI Writing Tool</h2>
                <span class="project-date">March 2022</span>
            </div>
            <div class="project-content">
                <div class="project-description">
                    <p>A web app that generates high-quality, novel text based on user prompts.</p>
                    <ul>
                        <li>
                            Created a full-stack web app that generates completely novel,
                            high-quality text based on a user provided prompt
                        </li>
                        <li>Powered by GPT-3 using the OpenAI API</li>
                        <li>
                            Originally written in vanilla JavaScript, fully redesigned and
                            rewritten in React/NextJS as of April 2022
                        </li>
                        <li>
                            Web hosting, database, and cloud functions from Google Firebase
                        </li>
                    </ul>
                </div>
                <div class="project-showcase">
                    <div class="tech-stack">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">OpenAI API</span>
                        <span class="tech-tag">Firebase</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="project-card isometric-container" style="animation-delay: 0.6s">
            <div class="project-title">
                <h2>Home Server</h2>
                <span class="project-date">February 2021</span>
            </div>
            <div class="project-content">
                <div class="project-description">
                    <p>A self-hosted server solution for cloud storage and other services.</p>
                    <ul>
                        <li>Self-hosted server using enterprise equipment (HP DL380 G7)</li>
                        <li>Runs in an Ubuntu Server 20.04 instance on Proxmox VE</li>
                        <li>
                            Remotely accessible cloud storage via Filerun and Nginx (secured
                            with 2FA)
                        </li>
                        <li>Automatically renewing SSL certification via LetsEncrypt</li>
                        <li>All services run in their own Docker containers</li>
                    </ul>
                </div>
                <div class="project-showcase">
                    <div class="tech-stack">
                        <span class="tech-tag">Ubuntu</span>
                        <span class="tech-tag">Proxmox</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">Nginx</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="project-card isometric-container" style="animation-delay: 0.9s">
            <div class="project-title">
                <h2>Building a PC</h2>
                <span class="project-date">June 2018</span>
            </div>
            <div class="project-content">
                <div class="project-description">
                    <p>A hands-on project to learn about computer hardware by building a PC from scratch.</p>
                    <ul>
                        <li>Learned the components of a PC and each of their functions</li>
                        <li>
                            Learned proper safety precautions for handling PC hardware
                            (avoiding carpet/other static generating surfaces, staying
                            grounded, etc.)
                        </li>
                        <li>
                            Created an avenue for my interest in computers to grow and
                            expand, gaining valuable knowledge along the way
                        </li>
                    </ul>
                </div>
                <div class="project-showcase">
                    <div class="tech-stack">
                        <span class="tech-tag">Hardware</span>
                        <span class="tech-tag">PC Building</span>
                        <span class="tech-tag">System Assembly</span>
                    </div>
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
        background-color: #43b4d8;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .projects-content {
        padding: 0 2em;
    }

    .project-card {
        background-color: white;
        margin: 2em 0;
        padding: 0;
    }

    .project-title {
        background-color: #0a1e8d;
        color: white;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .project-title h2 {
        margin: 0;
    }

    .project-date {
        font-size: 0.9rem;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 0.3rem 0.6rem;
        border-radius: 4px;
    }

    .project-content {
        padding: 1.5rem 2rem;
    }

    .project-description {
        margin-bottom: 1.5rem;
    }

    .project-description p {
        font-size: 1.1rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .tech-tag {
        background-color: #eef;
        color: #0a1e8d;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.85rem;
        border: 1px solid #0a1e8d;
    }

    ul {
        padding-left: 1.5rem;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .additional-footer-helper {
        width: 100%;
        height: 2em;
    }
</style>
