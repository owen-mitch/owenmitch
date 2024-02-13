<div class="blue-square"></div>
<div class="header-blocker"></div>

<style>
    .blue-square {
        position: absolute;
        right: 0;
        width: 5em; /* Adjusted width */
        height: 5em; /* Adjusted height */
        background-color: #0a1e8d;
        animation: moveSquare 5s forwards; /* Added 'forwards' */
        z-index: 1;
    }

    .header-blocker {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 5em);
        height: 5em;
        background-color: #dffef0;
        z-index: 3;
        animation: moveSquare 5s forwards;
    }

    @keyframes moveSquare {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-100vw);
            opacity: 1;
        }
        100% {
            transform: translateX(-100vw);
            opacity: 0;
        }
    }
</style>
