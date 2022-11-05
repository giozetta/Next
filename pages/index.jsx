import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mostrando dados da tabela times de varias formas</title>
      </Head>
      <h3>Escolha uma forma: </h3>
      <Link href="/CSR">CSR</Link><br/>
      <Link href="/SSR">SSR</Link><br/>
      <Link href="/SSG">SSG</Link><br/>
      <Link href="/ISR">ISR</Link><br/>
    </div>
  )
}
