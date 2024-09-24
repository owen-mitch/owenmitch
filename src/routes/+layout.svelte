<script>
    import "../global.css";
    import { onNavigate } from "$app/navigation";

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
    <title>Owen Mitchell</title>
</svelte:head>
<slot />

<style>
    :global(html, body) {
        margin: 0;
        height: 100%;
        overflow: hidden;
    }

    :root {
        --text-color: #000;
    }
</style>
