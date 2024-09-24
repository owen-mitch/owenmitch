<footer>
    <p>© 2024 Owen Mitchell</p>
    <div class="button-tray">
        <a href="https://linkedin.com/in/owen-mitch">
            <img src="./linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/owen-mitch">
            <img src="./github.svg" alt="Github"/>
        </a>
        <a href="mailto:mail@owenmit.ch">
            <img src="./email.svg" alt="Email"/>
        </a>
    </div>
</footer>

<style>
    footer {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5em;
        bottom: 0;
        z-index: 1;
    }

    p {
        color: var(--text-color);
        margin-bottom: 0.5em;
        padding: 0 1em 0 1em;
    }

    .button-tray {
        padding: 0 1em 0 1em;
    }

    .button-tray a img {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 600px) {
        p {
            font-size: 0.9rem;
        }

        a {
            padding: 9px 12px;
        }
    }

</style>
