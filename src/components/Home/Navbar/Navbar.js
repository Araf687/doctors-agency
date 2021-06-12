import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-5">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item me-5">
                        <a class="nav-link" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item me-5">
                        <a class="nav-link  text-white" aria-current="page" href="#">Reviews</a>
                        </li>
                        <li class="nav-item me-5">
                        <a class="nav-link text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item me-5">
                        <a class="nav-link text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;