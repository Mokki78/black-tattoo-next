import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/om">Om oss</Link>
                <Link href="/kontakt">Kontakt</Link>
            </nav>
        </header>
    )
}