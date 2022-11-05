function SSG({times}){
    return(
        <div>
            <h1>Times -  CSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map(obj=>(
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cidade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SSG;

export async function getStaticProps(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/times`);
    const times = await res.json();

    return {
        props: {
            times
        }
    }
}