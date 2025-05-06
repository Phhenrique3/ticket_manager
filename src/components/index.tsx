
import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                    NextJS
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/post">Post</Link>
                        </li>
                        <li>
                            <Link href="/deshboard">Deshboard</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 