import React from "react"

export default function Header() {
    return (
        <section class="header">
          <nav class="navbar navbar-expand-md fixed-top border-bottom bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand text-black fs-3 fw-bolder" href="index.html"> LASA </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                  <li class="nav-item">
                    <a class="nav-link fs-4 text-black" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-4 text-black" href="public/about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fs-4 text-black" href="public/recipes.html">Recipes</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
    )
}