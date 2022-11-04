import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mostrando dados da tabela times de varias formas</title>
      </Head>
      <h3>Eescolha uma forma: </h3>
      <Link href="/CSR">CSR</Link>
      <Link href="/SSR">SSR</Link>
      <Link href="/SSG">SSG</Link>
      <Link href="/ISR">ISR</Link>
    </div>
  )
}
