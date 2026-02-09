import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/services">Tjenester</Link>
                <Link href="/om">Om oss</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/priser">Priser</Link>
            </nav>
        </header>
    )
}