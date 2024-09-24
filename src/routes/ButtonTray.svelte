<div class="button-tray">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
</div>
<div class="footer-helper"></div>

<style>
    .button-tray {
        position: fixed;
        bottom: 4em;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: flex-end;
        padding: 0.5em 0;
        z-index: 2;
    }

    .footer-helper {
        width: 100%;
        height: 4em;
    }

    a {
        width: 12vw;
        min-width: 60px;
        text-align: center;
        padding: 0.5em;
        text-decoration: none;
        border-radius: 4px;
    }

    /* Responsive scaling for small screens */
    @media (max-width: 600px) {
        a {
            width: 10vw;
            font-size: 0.9rem; /* Slightly smaller font on mobile */
        }
    }
</style>
