import * as React from 'react';
import { Link } from 'gatsby';
import { container, navLinkText } from './layout.module.css';

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
    return (
        <div className={container}>
            <nav>
                <ul>
                    <li>
                        <Link className={navLinkText} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={navLinkText} to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
