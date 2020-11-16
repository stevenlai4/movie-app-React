import React from 'react';
import {
    GrFacebook,
    GrInstagram,
    GrTwitter,
    GrPinterest,
} from 'react-icons/gr';
import '../styles/global/footer.scss';

export default function Footer() {
    return (
        <footer className="bg-dark">
            <p class="footer-title">Movie App</p>
            <ul>
                <li>
                    <a href="#">
                        <GrFacebook />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <GrInstagram />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <GrTwitter />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <GrPinterest />
                    </a>
                </li>
            </ul>

            <p class="copyright">Copyright &#169; 2020 Chao Chun Lai</p>
        </footer>
    );
}
