<script>
    import "../global.css";
    import { onNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Analytics from "../lib/analytics.svelte";

    // Track page navigation and view transitions
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        if (typeof window !== 'undefined' && window.trackAction) {
            // Track navigation with view transitions
            window.trackAction('view_transition', 'navigation', `${$page.url.pathname} → ${navigation.to.url.pathname}`);
        }

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
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
    <title>Owen Mitchell</title>
</svelte:head>

<Analytics />

<slot />

<style>
    :global(html, body) {
        margin: 0;
        height: 100%;
        /* overflow: hidden; */
    }

    :root {
        --text-color: #000;
    }
</style>
