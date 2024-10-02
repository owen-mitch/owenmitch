<script>
    import { page } from "$app/stores";

    $: {
        if (typeof gtag !== "undefined") {
            gtag("config", "G-1W69GQGS0C", {
                page_title: document.title,
                page_path: $page.url.pathname,
            });
        }
    }
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1W69GQGS0C"></script>

    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", "G-1W69GQGS0C");
    </script>
</svelte:head>
