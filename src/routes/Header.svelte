<script>
    export let title;
</script>

<div class="wrapper">
    <h1>{title}</h1>
</div>

<style>
    .wrapper {
        position: relative;
        z-index: 2;
    }

    h1 {
        padding: 0 1em;
        animation: textIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.08s forwards;
        opacity: 0;
        transform: translateY(6px);
    }

    @keyframes textIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
