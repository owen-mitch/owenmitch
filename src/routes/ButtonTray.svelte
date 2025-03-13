<script>
    import { page } from '$app/stores';
    import "./isometric.css";
</script>

<div class="button-tray-wrapper">
    <div class="button-tray">
        <a href="/" class="nav-button" class:active={$page.url.pathname === '/'}>Home</a>
        <a href="/about" class="nav-button" class:active={$page.url.pathname === '/about'}>About</a>
        <a href="/skills" class="nav-button" class:active={$page.url.pathname === '/skills'}>Skills</a>
        <a href="/projects" class="nav-button" class:active={$page.url.pathname === '/projects'}>Projects</a>
        <a href="/contact" class="nav-button" class:active={$page.url.pathname === '/contact'}>Contact</a>
    </div>
</div>
<div class="footer-helper"></div>

<style>
    .button-tray-wrapper {
        position: fixed;
        bottom: 3.7em;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 10;
    }

    .button-tray {
        display: flex;
        justify-content: center;
        gap: 12px;
        padding: 12px 24px;
        border-radius: 16px;
        max-width: 95%;
        width: fit-content;
        transition: all 0.3s ease;
    }

    .footer-helper {
        width: 100%;
        height: 3em;
    }

    .nav-button {
        background-color: #A6BFFD;
        color: #000;
        border: 1px solid #000;
        border-radius: 4px;
        padding: 8px 16px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.14s ease-out;
        text-align: center;
        min-width: 60px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .nav-button:hover {
        box-shadow: 4px 4px 0 #000;
        transform: translate(-4px, -4px);
    }

    .nav-button.active {
        background-color: #0a1e8d;
        color: #A6BFFD;
        border-color: #000;
    }

    /* Responsive scaling for small screens */
    @media (max-width: 768px) {
        .button-tray {
            padding: 8px 12px;
            gap: 8px;
            max-width: 98%;
        }
        
        .nav-button {
            padding: 6px 8px;
            font-size: 0.9rem;
            min-width: 50px;
        }
    }
    
    /* Even smaller screens */
    @media (max-width: 480px) {
        .button-tray-wrapper {
            bottom: 3.5em;
        }
        
        .button-tray {
            flex-wrap: wrap;
            gap: 6px;
            padding: 8px;
        }
        
        .nav-button {
            padding: 5px 6px;
            font-size: 0.8rem;
            min-width: 40px;
        }
        
        .footer-helper {
            height: 2.8em;
        }
    }
</style>
