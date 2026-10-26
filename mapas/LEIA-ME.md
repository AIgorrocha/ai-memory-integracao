# Mapas curados de AI Memory

Dois mapas em formato compatível com Understand Anything 2.9.7, preparados em 26/10/2026 a partir de documentação e código verificados.

**São mapas curados de fontes. `/understand` não foi executado.** Não representam análise automática completa dos repositórios, execução dos componentes ou teste operacional da infraestrutura.

## Arquivos

| Mapa | Arquivo | Cobertura |
|---|---|---|
| Original do Akita | [original/.ua/knowledge-graph.json](original/.ua/knowledge-graph.json) | 8 componentes, 12 relações, 3 camadas e 4 passos de leitura |
| Nossa integração | [integracao/.ua/knowledge-graph.json](integracao/.ua/knowledge-graph.json) | 8 componentes, 10 relações, 3 camadas e 4 passos de leitura |

O mapa original mostra CLI, hooks, MCP, tipos de domínio, wiki Markdown/Git, índice SQLite, compilação e provedores opcionais.

O mapa de integração mostra Codex, Claude Code, instruções, conexão MCP, servidor original, função da configuração privada, operação e conhecimento compartilhado. Não contém valores de configuração, endereços internos, credenciais, backups ou dados pessoais de memória. O método de orquestração do Conselho de IA é outro material.

## Origem e leitura correta

- Original: [akitaonrails/ai-memory, v3.2.0](https://github.com/akitaonrails/ai-memory/tree/1c86aebc14addccc7ac875913d565c681bfa4a50), commit `1c86aebc14addccc7ac875913d565c681bfa4a50`.
- Estrutura e fluxo: [docs/ARCHITECTURE.md](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md), especialmente linhas 55-185, 535-550 e 689-729.
- Integração: políticas locais verificadas em 26/10/2026, referenciadas no [relatório de arquitetura](../fontes/arquitetura-ai-memory-2026-10-26.md). Os nomes lógicos `.ia/...` nos resumos identificam fontes de política, não arquivos privados distribuídos neste pacote.
- O `gitCommitHash` do mapa de integração é `aa19067aeb025d112d2c029ac414bdc09b9a0999`, revisão local do repositório do curso no momento da preparação. Não identifica um fork próprio ou novo repositório de AI Memory.
- Cada relação é uma seleção documental do fluxo. Não é um grafo exaustivo de imports ou chamadas de função. A versão `1.0.0` no JSON identifica o formato do grafo, não a versão do ai-memory ou do plugin.

A wiki Markdown é a fonte canônica das páginas. SQLite mantém índices e eventos derivados para recuperação e continuidade. Hooks capturam eventos sanitizados e limitados, não garantem uma transcrição integral. Resumos por regras funcionam sem LLM; consolidação generativa, vetores e outras funções dependem de configuração. Os mapas não demonstram economia de tokens nem aprendizado automático ativo.

## Validação realizada

Ambos os arquivos passaram pelo `KnowledgeGraphSchema` existente em `packages/core/dist/schema.js` do Understand Anything 2.9.7. A validação foi executada com Node, importação via URI de arquivo, sem LLM ou navegador.

Verificações adicionais: no máximo 8 nós, IDs únicos, origem e destino de todas as relações existentes, referências de camadas e passos existentes, ausência de URLs com endereços internos. As contagens acima correspondem aos arquivos validados.

SHA-256 dos arquivos UTF-8:

```text
original/.ua/knowledge-graph.json
b7dd4088beff2f9c31fc67b55f3ad98b09d4d7857f10f0ead1ee0632fb7426c5

integracao/.ua/knowledge-graph.json
aa7e161ab9a1c96ca6d927018a72750086827b1865d492b6d6ae2787f7d78b22
```

## Visualização

O viewer do Understand Anything lê uma pasta de projeto contendo `.ua/knowledge-graph.json`. Aponte um viewer completo para `mapas/original` ou `mapas/integracao`.

A instalação inspecionada possui `packages/viewer/bin/viewer.mjs`, mas não possui `packages/viewer/dist`. O viewer não foi aberto, instalado ou recompilado nesta rodada. A validação estrutural não comprova renderização visual. O código do dashboard suporta exportação PNG, SVG e JSON; nenhuma exportação foi executada aqui.
