<script lang="ts">
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
</script>

<div class="container">
    <HeaderAnimation />
    <h1>Projects</h1>
    <div class="bio-container">
        <h2>AI Writing Tool • March 2022</h2>
        <ul>
            <li>
                Created a full-stack web app that generates completely novel,
                high- quality text based on a user provided prompt
            </li>
            <li>Powered by GPT-3 using the OpenAI API</li>
            <li>
                Originally written in vanilla JavaScript, fully redesigned and
                rewritten in React/NextJS as of April 2022
            </li>
            <li>
                Web hosting, database, and cloud functions from Google Firebase
            </li>
            <li>
                Learned the CSS Flexbox layout model, JavaScript Fetch API, how
                to handle JSON data, and the process of programming in a
                component- based JavaScript framework
            </li>
        </ul>
    </div>
    <div class="bio-container">
        <h2>Home Server • February 2021</h2>
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
    <div class="bio-container">
        <h2>Building a PC • June 2018</h2>
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
    <div class="additional-footer-helper"></div>
    <ButtonTray />
    
</div>
<Footer />

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
        margin: 2em 4em;
    }

    .additional-footer-helper {
        width: 100%;
        height: 2em;
    }

    h1 {
        padding: 0 1em 1em;
    }
</style>
