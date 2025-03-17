<script>
    import { page } from '$app/stores';
    import "./isometric.css";

    function handleSocialClick(platform, url) {
        if (typeof window !== 'undefined' && window.trackLinkClick) {
            window.trackLinkClick(platform, url);
        }
    }
</script>

<footer class:home-footer={$page.url.pathname === '/'}>
    <p>© 2025 Owen Mitchell</p>
    <div class="button-tray">
        <a href="https://linkedin.com/in/owen-mitch" target="_blank" on:click={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/owen-mitch')}>
            <img src="./linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/owen-mitch" target="_blank" on:click={() => handleSocialClick('GitHub', 'https://github.com/owen-mitch')}>
            <img src="./github.svg" alt="Github"/>
        </a>
        <a href="mailto:mail@owenmit.ch" target="_blank" on:click={() => handleSocialClick('Email', 'mailto:mail@owenmit.ch')}>
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
        padding: 0.6em 1.5em;
        bottom: 0;
        z-index: 1;
        box-sizing: border-box;
        height: 3.2em;
        background-color: #A6BFFD;
    }

    .home-footer {
        background-color: #0a1e8d;
    }

    p {
        color: black;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .home-footer p {
        color: #A6BFFD;
    }

    .button-tray {
        display: flex;
        gap: 1.2em;
        margin-right: 6px;
    }

    .button-tray a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 4px;
    }

    .button-tray a img {
        width: 24px;
        height: 24px;
        min-width: 24px;
        min-height: 24px;
    }

    @media (max-width: 600px) {
        footer {
            padding: 0.5em 1.2em;
            height: 3em;
        }
        
        .button-tray {
            gap: 1em;
            margin-right: 5px;
        }
        
        .button-tray a {
            width: 28px;
            height: 28px;
            padding: 3px;
        }
        
        p {
            font-size: 0.85rem;
            margin-right: 5px;
        }
        
        .button-tray a img {
            width: 22px;
            height: 22px;
            min-width: 22px;
            min-height: 22px;
        }
    }
    
    @media (max-width: 360px) {
        footer {
            padding: 0.4em 0.8em;
            height: 2.8em;
        }
        
        .button-tray {
            gap: 0.8em;
        }
        
        .button-tray a {
            width: 26px;
            height: 26px;
            padding: 3px;
        }
        
        .button-tray a img {
            width: 20px;
            height: 20px;
            min-width: 20px;
            min-height: 20px;
        }
        
        p {
            font-size: 0.8rem;
            max-width: 45%;
        }
    }
</style>
