<script>
    import "../global.css";
    import { onNavigate, beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Analytics from "../lib/analytics.svelte";
    import ButtonTray from "./ButtonTray.svelte";
    import Footer from "./Footer.svelte";
    import { navDirection, getPageIndex } from "$lib/navigation";
    import { cubicOut } from 'svelte/easing';

    const siteUrl = 'https://owenmit.ch';

    const seo = {
        '/': {
            title: 'Owen Mitchell',
            description: 'Software engineer and undergraduate researcher. Interactive portfolio showcasing projects, skills, and experience.'
        },
        '/about': {
            title: 'About | Owen Mitchell',
            description: 'Learn about Owen Mitchell — BS Computer Science student at Saint Joseph\'s University and undergraduate researcher at the Haub Innovation Center.'
        },
        '/skills': {
            title: 'Skills | Owen Mitchell',
            description: 'Programming languages, frameworks, and tools — JavaScript, TypeScript, Python, React, Svelte, AWS, Docker, and more.'
        },
        '/projects': {
            title: 'Projects | Owen Mitchell',
            description: 'Featured projects including a personal website, AI writing tool, home server, and more.'
        },
        '/contact': {
            title: 'Contact | Owen Mitchell',
            description: 'Get in touch with Owen Mitchell.'
        }
    };

    $: currentSeo = seo[$page.url.pathname] || seo['/'];
    $: isHome = $page.url.pathname === '/';

    let ready = false;
    let currentDirection = 1;
    let skipTransition = false;

    beforeNavigate(({ from, to }) => {
        if (from && to) {
            const fromPath = from.url.pathname;
            const toPath = to.url.pathname;
            skipTransition = fromPath === '/' || toPath === '/';

            if (!skipTransition) {
                const fromIdx = getPageIndex(fromPath);
                const toIdx = getPageIndex(toPath);
                currentDirection = toIdx >= fromIdx ? 1 : -1;
                navDirection.set(currentDirection);
            }
        }
    });

    // Track page navigation
    onNavigate((navigation) => {
        if (typeof window !== 'undefined' && window.trackAction) {
            window.trackAction('view_transition', 'navigation', `${$page.url.pathname} → ${navigation.to.url.pathname}`);
        }
    });

    onMount(() => {
        ready = true;

        const waitForTracking = () => {
            if (typeof window !== 'undefined' && window.trackAction) {
                // Track the entry page
                window.trackAction('session_start', 'session', $page.url.pathname);

                // Track device information
                window.trackAction('device_info', 'session', {
                    screen_width: window.innerWidth,
                    screen_height: window.innerHeight,
                    is_mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                });

                // Track session duration when the user leaves
                const startTime = new Date();

                window.addEventListener('beforeunload', () => {
                    const duration = Math.round((new Date() - startTime) / 1000);
                    window.trackAction('session_duration', 'session', `${duration}s`);
                });
            } else {
                // Try again in a short while
                setTimeout(waitForTracking, 500);
            }
        };

        waitForTracking();
    });

    function slideIn(node) {
        if (!ready || skipTransition) return { duration: 0 };
        const d = currentDirection;
        return {
            duration: 400,
            easing: cubicOut,
            css: (t) => `transform: translateX(${(1 - t) * d * 100}%)`
        };
    }

    function slideOut(node) {
        if (!ready || skipTransition) return { duration: 0 };
        const d = currentDirection;
        return {
            duration: 400,
            easing: cubicOut,
            css: (t) => `transform: translateX(${(1 - t) * -d * 100}%)`
        };
    }
</script>

<svelte:head>
    <title>{currentSeo.title}</title>
    <meta name="description" content={currentSeo.description} />
    <meta property="og:title" content={currentSeo.title} />
    <meta property="og:description" content={currentSeo.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{siteUrl}{$page.url.pathname}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={currentSeo.title} />
    <meta name="twitter:description" content={currentSeo.description} />
</svelte:head>

<Analytics />

{#if !isHome}
    <ButtonTray />
{/if}

<div class="page-transition-container">
    {#key $page.url.pathname}
        <div class="page-slide" in:slideIn out:slideOut>
            <slot />
        </div>
    {/key}
</div>

{#if !isHome}
    <Footer />
{/if}

<style>
    :global(html, body) {
        margin: 0;
        height: 100%;
    }

    .page-transition-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    }

    .page-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
