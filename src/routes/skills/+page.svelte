<script>
    import Footer from "../Footer.svelte";
    import ButtonTray from "../ButtonTray.svelte";
    import HeaderAnimation from "../HeaderAnimation.svelte";
    import Header from "../Header.svelte";
</script>

<div class="container">
    <HeaderAnimation />
    <Header title="Skills" />
    <div class="bio-container">
        <h2>Programming Languages</h2>
        <p>Javascript/Typescript, HTML/CSS/Sass, Java, Python, C/C++, SQL</p>
        <h2>JavaScript Frameworks</h2>
        <p>React, Next.js, Svelte</p>
    </div>
    <div class="bio-container">
        <h2>Software</h2>
        <p>AWS (S3, DynamoDB), Linux, Docker, Firebase, Tableau, Nginx, MySQL Workbench, MariaDB</p>
    </div>
    <div class="bio-container">
        <h2>Soft Skills</h2>
        <p>Communication, creativity, problem solving, strong work ethic</p>
    </div>
    <div class="bio-container">
        <h2>Certifications</h2>
        <p>LinkedIn React.js Skill Assessment</p>
    </div>
    <div class="additional-footer-helper"></div>
    <ButtonTray />
    <Footer />
</div>

<style>
    .container {
        background-color: #43b4d8;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .bio-container {
        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        padding: 1em 2em;
        margin: 2em 4em 4em 4em;
    }

    .additional-footer-helper {
        width: 100%;
        height: 2em;
    }

    p {
        font-size: medium;
    }
</style>
