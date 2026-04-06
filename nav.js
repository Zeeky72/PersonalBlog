document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
        <nav>
            <div class="logo"><strong>PRAYASH</strong>.DEV</div>
            <div class="nav-links">
                <a href="index.html" id="nav-index">About</a>
                <a href="resume.html" id="nav-resume">Resume</a>
                <a href="projects.html" id="nav-projects">Projects</a>
                <a href="arcade.html" id="nav-arcade">Arcade</a>
            </div>
        </nav>
    `;

    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navHTML;
        
        // Highlight active page
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const activeLink = document.getElementById(`nav-${currentPage.split(".")[0]}`);
        if (activeLink) activeLink.classList.add("active");
    }
});