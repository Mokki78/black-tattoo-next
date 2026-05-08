import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/booking">Booking</Link>
                <Link href="/priser">Priser</Link>
                <Link href="/om">Om oss</Link>
                <Link href="/kontakt">Kontakt</Link>
              
            </nav>
        </header>
    )
}