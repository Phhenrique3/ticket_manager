import { Metadata } from "next"

export const metadata: Metadata = {

  title: "Aula de nextjs",
  description: "Descrição de aula de nextjs",
  icons: "./favicon.ico"

}



export default function Home() {
  return (
    <div>
      <h1>Tela home </h1>
    </div>
  )
}