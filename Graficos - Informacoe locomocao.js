import { getCSS, tickConfig } from "./common.js";

async function vizualizarInformacoesTransporte () {
    const url2 = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-numero-tipos-locomocao.json'


    const resposta2 = await fetch(url2)
    const dados2 = await resposta2.json()
    const nomeTransporte = Object.keys(dados2)
    const valoresTransporte = Object.values(dados2)
    console.log(dados2)

    const data = [
        {x: nomeTransporte,y: valoresTransporte,type: 'bar',marker: {
        color: getCSS('--primary-color')
      }
    }
]
    const grafico = document.createElement('div')

    const layout = {
        // plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Informações do transporte no mundo',
            x:2,
            font: {
                color: getCSS('--cor-texto'),
                family: getCSS ('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Opções de transporte mais utilizado',
                font: {
                    color: 'red' //usei a cor vermelha setada aqui, pois não tinha uma váriavel na root do style.
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidade de pessoas que usam o transporte',
                font: {
                    color: 'red', //usei a cor vermelha setada aqui, pois não tinha uma váriavel na root do style.
                }
            }
        }
    }

    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout) //layout -> não vou introduzir a troca de cor de fundo gráfico, pois as cores atualmente estão com uma leitura visual agradável.
}

vizualizarInformacoesTransporte()
