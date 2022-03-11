import React from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
        <footer class="amazon-footer">
            <div class="amazon-footer-container">
                <div class="amazon-footer-lists">
                    <div class="amazon-row">
                        <div class="amazon-col  amazon-col--30">
                            <a href="/" class="amazon-footer-logo"><img src="https://s26.postimg.org/4hy4ykkjd/amazon_author_logo.png" alt="Amazon Logo" class="amazon-footer-logo-image" /></a>
                        </div>
                        <div class="amazon-col  amazon-col--20">
                            <h4 class="amazon-footer-title">Our Products</h4>
                            <ul class="amazon-footer-list">
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Product One</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Product Two</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Product Three</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Product Four</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Product Five</a></li>
                            </ul>
                        </div>
                        <div class="amazon-col  amazon-col--20">
                            <h4 class="amazon-footer-title">Other Services</h4>
                            <ul class="amazon-footer-list">
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Service One</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Service Two</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Service Three</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Service Four</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Service Five</a></li>
                            </ul>
                        </div>
                        <div class="amazon-col  amazon-col--30">
                            <h4 class="amazon-footer-title">Amazon.author</h4>
                            <p class="amazon-footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in tellus ipsum. Pellentesque.</p>
                        </div>
                    </div>
                </div>
                <div class="amazon-sub-footer">
                    <div class="amazon-row">
                        <div class="amazon-col  amazon-col--50">
                            <p class="amazon-footer-text">Copyright © </p>
                        </div>
                        <div class="amazon-col  amazon-col--50">
                            <ul class="amazon-footer-list">
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Terms &amp; Conditions</a></li>
                                <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Cookies &amp; Internet Advertising</a></li>
                                    <li class="amazon-footer-list-item"><a href="#" class="amazon-footer-link">Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer