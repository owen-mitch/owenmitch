<script>
    import { page } from '$app/stores';
    import "./isometric.css";

    function handleButtonClick(buttonName) {
        if (typeof window !== 'undefined' && window.trackButtonClick) {
            window.trackButtonClick(buttonName, 'navigation_tray');
        }
    }
</script>

<div class="button-tray-wrapper">
    <div class="button-tray">
        <a href="/" class="nav-button" class:active={$page.url.pathname === '/'} on:click={() => handleButtonClick('Home')}>Home</a>
        <a href="/about" class="nav-button" class:active={$page.url.pathname === '/about'} on:click={() => handleButtonClick('About')}>About</a>
        <a href="/skills" class="nav-button" class:active={$page.url.pathname === '/skills'} on:click={() => handleButtonClick('Skills')}>Skills</a>
        <a href="/projects" class="nav-button" class:active={$page.url.pathname === '/projects'} on:click={() => handleButtonClick('Projects')}>Projects</a>
        <a href="/contact" class="nav-button" class:active={$page.url.pathname === '/contact'} on:click={() => handleButtonClick('Contact')}>Contact</a>
    </div>
</div>

<style>
    .button-tray-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--nav-height);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        background-color: var(--color-primary-light);
        box-sizing: border-box;
    }

    .button-tray {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    .nav-button {
        background-color: var(--color-primary-light);
        color: var(--color-text);
        border: 1px solid var(--color-text);
        border-radius: var(--border-radius);
        padding: 8px 16px;
        font-weight: 500;
        text-decoration: none;
        transition: all var(--transition-speed) var(--transition-ease);
        text-align: center;
        min-width: 60px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .nav-button:hover {
        box-shadow: var(--iso-offset-sm) var(--iso-offset-sm) 0 var(--color-text);
        transform: translate(calc(-1 * var(--iso-offset-sm)), calc(-1 * var(--iso-offset-sm)));
    }

    .nav-button.active {
        background-color: var(--color-primary);
        color: var(--color-primary-light);
        border-color: var(--color-text);
    }

    @media (max-width: 768px) {
        .button-tray-wrapper {
            top: auto;
            bottom: 3.7em;
            height: auto;
            background-color: transparent;
        }

        .button-tray {
            gap: 8px;
        }

        .nav-button {
            padding: 6px 8px;
            font-size: 0.9rem;
            min-width: 50px;
        }
    }

    @media (max-width: 480px) {
        .button-tray-wrapper {
            bottom: 3.5em;
        }

        .button-tray {
            flex-wrap: wrap;
            gap: 6px;
            padding: 0 8px;
        }

        .nav-button {
            padding: 5px 6px;
            font-size: 0.8rem;
            min-width: 40px;
        }
    }
</style>
