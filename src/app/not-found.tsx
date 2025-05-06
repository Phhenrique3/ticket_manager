import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1>Page not found</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>

            <Link href="/">
                <button className="bg-blue-500 text-white px-4 py-2  rounded-2xl

">
                    Voltar para a página inicial
                </button>
            </Link>
        </div>



    )
}