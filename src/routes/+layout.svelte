<script>
    import "../global.css";
    import { onNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Analytics from "../lib/analytics.svelte";

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

    // Track page navigation
    onNavigate((navigation) => {
        if (typeof window !== 'undefined' && window.trackAction) {
            window.trackAction('view_transition', 'navigation', `${$page.url.pathname} → ${navigation.to.url.pathname}`);
        }
    });

    onMount(() => {
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

<slot />

<style>
    :global(html, body) {
        margin: 0;
        height: 100%;
        /* overflow: hidden; */
    }
</style>
