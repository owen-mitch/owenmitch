<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    // Track page views when the page changes
    $: {
        if (typeof gtag !== "undefined") {
            gtag("config", "G-1W69GQGS0C", {
                page_title: document.title,
                page_path: $page.url.pathname,
            });
        }
    }

    // Safe wrapper for gtag to prevent errors
    function safeGtag(command, action, params) {
        try {
            if (
                typeof window !== "undefined" &&
                typeof window.gtag !== "undefined"
            ) {
                window.gtag(command, action, params);
            }
        } catch (err) {
            console.warn("Analytics tracking error:", err);
        }
    }

    export function trackButtonClick(buttonName, location) {
        safeGtag("event", "button_click", {
            button_name: buttonName,
            location: location,
        });
    }

    export function trackLinkClick(linkName, destination) {
        safeGtag("event", "link_click", {
            link_name: linkName,
            destination: destination,
        });
    }

    export function trackAction(actionName, category, label = null) {
        const eventParams = {
            event_category: category,
        };

        if (label) {
            eventParams.event_label = label;
        }

        safeGtag("event", actionName, eventParams);
    }

    // Make tracking functions available globally
    onMount(() => {
        if (typeof window !== "undefined") {
            window.trackButtonClick = trackButtonClick;
            window.trackLinkClick = trackLinkClick;
            window.trackAction = trackAction;
        }
    });
</script>

<svelte:head>
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1W69GQGS0C"
    ></script>

    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", "G-1W69GQGS0C", {
            send_page_view: false,
            anonymize_ip: true,
            cookie_flags: "SameSite=None;Secure",
        });
    </script>
</svelte:head>
