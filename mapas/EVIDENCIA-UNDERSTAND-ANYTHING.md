# Understand Anything: visões de negócio executadas

Data: 26/10/2026. Público: empresários. Alteração limitada aos dois novos `domain-graph.json` abaixo e a este relatório. Os `knowledge-graph.json` existentes foram preservados, inclusive por comparação de SHA-256 antes e depois.

## Recurso utilizado de fato

Plugin [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything), versão instalada 2.9.7. Foram lidos `skills/understand-domain/SKILL.md` e `agents/domain-analyzer.md` da instalação local.

Foi aplicado o caminho de derivação de mapas existentes, descrito nas fases 1 e 3 do workflow `understand-domain`. A análise de negócio seguiu o contrato do `domain-analyzer`: domínio, fluxo e passos; relações `contains_flow` e `flow_step`; pesos crescentes para ordenar os passos; sem camadas ou tour nessa visualização.

A análise foi feita nesta sessão a partir dos mapas e das fontes atuais, sem despachar o subagente previsto na fase 4: esta execução era uma tarefa folha sem delegação. Não foi invocado o comando completo `/understand-domain` nem `/understand`. Não houve análise integral do código Rust, chamada a API paga ou abertura do viewer.

Na fase de validação e gravação foram executados módulos reais do core instalado, não apenas conferido um formato compatível:

- `persistence/index.js`: `loadGraph`, para ler os dois mapas estruturais existentes.
- `analyzer/normalize-graph.js`: `normalizeNodeId`, conferindo os identificadores.
- `schema.js`: `validateGraph` e `KnowledgeGraphSchema.parse`.
- `persistence/index.js`: `saveDomainGraph`, para gravar os arquivos no local oficial do plugin.
- `persistence/index.js`: `loadDomainGraph`, para reler com validação e comparar o resultado integralmente.

Os módulos usados ficam em `~/.claude/plugins/cache/understand-anything/understand-anything/2.9.7/packages/core/dist/`. A localização da instalação é evidência desta máquina, não requisito a copiar para o aluno.

## Comando e materiais da execução

Um script Python preparou o contexto de negócio e gravou dois arquivos temporários: `domain-analysis.json` e `validar-salvar.mjs`. Em seguida executou, por `subprocess.run`, o comando Node abaixo, com os caminhos absolutos resolvidos. O diretório temporário desta rodada foi `ua-negocio-20261026-2x7ps0w3` dentro da pasta temporária do usuário.

```powershell
$UA = Join-Path $env:USERPROFILE '.claude/plugins/cache/understand-anything/understand-anything/2.9.7'
$TRABALHO = Join-Path $env:TEMP 'ua-negocio-20261026-2x7ps0w3'
node (Join-Path $TRABALHO 'validar-salvar.mjs') $UA (Join-Path $TRABALHO 'domain-analysis.json')
```

O Node importou os módulos do plugin por `pathToFileURL`. Além das validações oficiais, conferiu IDs únicos, todas as pontas das relações existentes, ausência de autorrelações, vínculo de cada fluxo ao domínio e de cada passo ao fluxo, pesos estritamente crescentes e releitura idêntica ao conteúdo validado. Nenhum nó ou relação foi descartado pelo validador.

## Resultados

| Arquivo | Domínios | Fluxos | Passos | Relações | Problemas do validador |
|---|---:|---:|---:|---:|---:|
| [original/.ua/domain-graph.json](original/.ua/domain-graph.json) | 1 | 1 | 4 | 5 | 0 |
| [integracao/.ua/domain-graph.json](integracao/.ua/domain-graph.json) | 1 | 1 | 6 | 7 | 0 |

SHA-256:

```text
original/.ua/domain-graph.json
1850e80f36a9ebabe5d99c38228beee673d3ce499337c0f97ebb0d4f620614e3

integracao/.ua/domain-graph.json
9c9617e587039c7a2dd1d10406dd6c54083eb01954dcdbd0eb43fed5ea82c6ad
```

Fontes: mapas estruturais anteriores, relatório `fontes/arquitetura-ai-memory-2026-10-26.md`, `README.md`, `integracao/MEMORIA.md` e `skills/project-brain/SKILL.md` deste kit. Original do Akita fixado em `1c86aebc14addccc7ac875913d565c681bfa4a50`. A integração referencia a revisão local do curso `0bcda4ba94ce744d54f626413f426bbaed744af7`, sem alegar que esse commit representa um fork do servidor.

## Descrições recomendadas para os diagramas 8 e 9

**8, projeto original de Fabio Akita:** a pessoa faz um pedido; a ferramenta busca informações autorizadas; o sistema consulta o que foi guardado; as informações voltam para a ferramenta. O projeto é do Akita; a memória fica na instalação de cada pessoa ou empresa. Não desenhar um servidor central do Akita recebendo os dados dos alunos.

**9, nossa integração:** pedido no Codex ou Claude; regras orientam o uso; Project Brain seleciona o que preservar ao encerrar; a conexão leva ao servidor autorizado; o servidor administrado pela pessoa ou empresa guarda a memória do trabalho; a ferramenta confere o registro e permite continuar depois. Sem mudança durável, informa a ausência e não cria registro. Encerrar pelo pedido é diferente de fechar abruptamente o aplicativo.

Não houve edição de HTML, SVG, slides, configurações ou Git. A gravação e a releitura pelo core foram comprovadas; aparência, viewer e operação real da memória não foram testados nesta rodada.
