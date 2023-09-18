// Import modules and components
import * as React from 'react';

export default function Navbar() {

  return (
    // Parent container
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
            {/* Logo link */}
            <a class="navbar-brand" href="#">
                <img src="HypeLightDark.png" className='logo'/>
            </a>

            {/* Responsive menu button */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* Link list */}
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Testimonal</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  );
}
