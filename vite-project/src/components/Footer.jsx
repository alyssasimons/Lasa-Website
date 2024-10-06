import React from "react"

export default function Footer() {
    return (
        <section id="indexfooter">
          <footer>
            <div class="container">
              <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                  <li class="nav-item"><a href="index.html" class="nav-link px-2 text-body-secondary fs-5">Home</a></li>
                  <li class="nav-item"><a href="public/about.html" class="nav-link px-2 text-body-secondary fs-5">About</a></li>
                  <li class="nav-item"><a href="public/recipes.html" class="nav-link px-2 text-body-secondary fs-5">Recipes</a></li>
                </ul>
                <p class="text-center text-body-secondary  fs-5">© 2023 Lasa <br /> Jersey City, New Jersey </p>
              </footer>
            </div>
          </footer>
        </section>
    )
}