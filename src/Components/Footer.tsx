import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <nav className="mt-2">
                    <Link href="#hero" className="mx-2 text-white hover:text-gray-400">Home
                    </Link>
                    <Link href="#about" className="mx-2 text-white hover:text-gray-400">About
                    </Link>
                    <Link href="#contact" className="mx-2 text-white hover:text-gray-400">Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
