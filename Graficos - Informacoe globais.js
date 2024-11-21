const url1='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'


async function vizualizarInformacoesGlobais() {
    const resposta1 = await fetch(url1)
    const dados1 = await resposta1.json()
    const totalTrabalhadoresMundo = (dados1.total_trabalhadores_mundo/ 1e9)
    const pessoasQueNecessitamTransporteParaTrabalho = (dados1.total_pessoas_que_necessitam_transporte_para_trabalho/ 1e9)
    const tempoMedioDeslocamento = Math.round((dados1.tempo_medio_deslocamento_para_trabalho*60))
    const totalPessoasMundo = (dados1.total_pessoas_mundo/ 1e9)
    const percentualPessoasTransportes = Math.round((pessoasQueNecessitamTransporteParaTrabalho/totalPessoasMundo)*100)
    console.log(dados1);

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('texto_graficos')
    paragrafo.innerHTML = ` Em um mundo onde temos  <span>${totalPessoasMundo} bilhões</span> de pessoas no mundo, aproximadamente <span>${totalTrabalhadoresMundo} bilhões</span> de pessoas estão ativas no mercado de trabalho, o transporte para o trabalho se torna parte essencial da rotina diária de <span>${pessoasQueNecessitamTransporteParaTrabalho} bilhões</span> dessas pessoas. Este deslocamento, em média, consome cerca de <span>${tempoMedioDeslocamento} minutos </span> de cada trabalhador. <br> Em uma escala global o transporte impacta <span>${percentualPessoasTransportes}%</span> da população mundial.`
    // Dentre os meios de transporte, o carro é o mais utilizado pelos trabalhadores com uma média de fluxo de 600.000.000 automóveis nas ruas por dia, seguido pelo Metrô e Ônibus  com uma média de fluxo de 300.000.000 de pessoas por dia cada um, Trem, Bicicleta e deslocamento a pé segue na terceira colocação com 200 .000.000 de fluxo de pessoas utilizado por dia cada um, e por último os carros de aplicativos e outros meios de transportes com o fluxo de 100.000.000 de pessoas por dia.No fim das contas, o transporte não é apenas um meio de chegar ao trabalho, mas um elo fundamental na conexão entre pessoas e oportunidades. Afinal, é essa rede de deslocamentos que permite o funcionamento contínuo das sociedades, movendo o mundo em direções que nos aproximam cada vez mais.
    console.log(paragrafo)

    const containerDados = document.getElementById('graficos-container');
    containerDados.appendChild(paragrafo);

}

vizualizarInformacoesGlobais()
