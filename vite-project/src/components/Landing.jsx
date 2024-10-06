import React from "react"

export default function Landing() {
    return (
        <section class="landing-page">
            <div class="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 class="text-white text-uppercase text-center" id="welcome" style="letter-spacing: 1px; font-weight: 500;"> Welcome to Lasa </h1>
                <p class="col-lg-8 mx-auto text-white text-center" id="landing-p" style="font-size: 25px">
                A Filipino recipe website <br />
                Get a taste of the Philippines <img src="assets/filo.png" height="35px" />
                </p>
                <div class="d-inline-flex gap-2 mb-5">
                <button class="d-inline-flex align-items-center btn btn-success btn-lg px-4 square-pill" type="button">
                    <a href="public/recipes.html" class="text-white text-decoration-none" id="btnindex"> Let's eat! </a>
                </button>
                </div>
            </div>
        </section>
    )
}