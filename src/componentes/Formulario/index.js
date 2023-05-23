import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

        const aoSalvar = (evento) => {
            evento.preventDefault()
            props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem,
                time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        }
        return(
            <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Monte seu time de futebol</h2>
                <CampoTexto obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome"
                value={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true} label="Time" 
                placeholder="Digite o time"
                value={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da sua imagem"
                value={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true} label="Posições" 
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario