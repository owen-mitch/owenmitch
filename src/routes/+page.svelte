<script>
  import "./button.css";
  import Footer from "./Footer.svelte";
</script>

<div class="container">
  <div class="blue-square"></div>

  <div class="header-blocker"></div>
  <div class="square-blocker-left"></div>
  <div class="subheader-blocker"></div>

  <div class="header">
    <h1>Owen Mitchell</h1>
    <h2>Software Engineer, Computer Science Undergrad</h2>
  </div>

  <div class="main-blocker"></div>

  <div class="buttons" id="buttons-toprow">
    <a href="/about">About</a>
    <a href="/skills">Skills</a>
  </div>
  <div class="buttons">
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
  <Footer --text-color="#43B4D8"/>
</div>

<style>
  a {
    width: 20vw;
    height: 15vh;
  }

  .container {
    background-color: #dffef0;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .blue-square {
    position: absolute;
    right: 0;
    width: 5em;
    height: 5em;
    background-color: #0a1e8d;
    animation: moveSquare 5s forwards;
    z-index: 1;
  }

  .header {
    position: relative;
    z-index: 2;
    color: #43b4d8;
    padding: 0 1em;
  }

  .header-blocker {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 5em);
    height: 5em;
    background-color: white;
    z-index: 3;
    animation: moveRectangle 5s forwards;
  }

  .square-blocker-left {
    position: absolute;
    top: 5em;
    left: 0;
    width: 5em;
    height: 5em;
    background-color: white;
    z-index: 3;
    animation: moveSquareDown 5s forwards;
    animation-delay: 1.25s;
  }

  .subheader-blocker {
    position: absolute;
    top: 5em;
    left: 5em;
    width: calc(100% - 5em);
    height: 5em;
    background-color: white;
    z-index: 3;
    animation: moveSecondRectangle 5s forwards;
    animation-delay: 2.5s;
  }

  .main-blocker {
    position: absolute;
    top: 10em;
    left: 0;
    width: 100%;
    height: calc(100% - 10em);
    background-color: white;
    z-index: 3;
    animation: moveMainBlocker 5s forwards;
    animation-delay: 3.75s;
  }

  @keyframes moveSquare {
    0% {
      transform: translateX(0) translateY(0);
    }
    25% {
      transform: translateX(calc(-100vw + 5em)) translateY(0);
      width: calc(100% - 5em);
    }
    50% {
      transform: translateX(calc(-100vw + 5em)) translateY(5em);
      width: calc(100% - 5em);
    }
    75% {
      transform: translateX(0) translateY(5em);
      width: 100%;
      height: 5em;
    }
    100% {
      transform: translateX(0) translateY(0);
      width: 100%;
      height: 100%;
    }
  }

  @keyframes moveRectangle {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(calc(-100vw + 5em));
      opacity: 1;
    }
    100% {
      transform: translateX(calc(-100vw + 5em));
      opacity: 0;
    }
  }

  @keyframes moveSquareDown {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(5em);
    }
    50% {
      transform: translateX(-5em) translateY(5em);
    }
    100% {
      transform: translateX(-5em) translateY(5em);
      opacity: 0;
    }
  }

  @keyframes moveSecondRectangle {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(calc(100vw - 5em));
    }
    100% {
      transform: translateX(calc(100vw - 5em));
      opacity: 0;
    }
  }

  @keyframes moveMainBlocker {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateY(calc(100vh - 10em));
      opacity: 1;
    }
    100% {
      transform: translateY(calc(100vh - 10em));
      opacity: 0;
    }
  }

  .buttons {
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  #buttons-toprow {
    padding: 4em 0 0 0;
  }
</style>
