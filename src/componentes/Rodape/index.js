import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="linkedin.com" target="_blank">
                        <img src="/imagens/linkedin.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="github.com" target="_blank">
                        <img src="/imagens/github.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Marsia Luckner.
            </p>
        </section>
    </footer>)
}

export default Rodape