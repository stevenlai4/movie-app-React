import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import '../styles/global/footer.scss';

export default function Footer() {
    return (
        <footer className="bg-dark">
            <ul>
                <li>
                    <a href="#">
                        <GrFacebook />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
