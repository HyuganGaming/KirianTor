document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("navID").innerHTML =
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-darker">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                Houses Ranking
            </a>
                
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="lastBattles.html">
                            Last Battles
                        </a>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100">
                    <li class="nav-item col active d-flex align-items-center justify-content-center">
                        <a class="nav-link" href="result.html">
                            Upload result
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    `
    document.getElementById("navID").classList.add("nav-sticky");
});