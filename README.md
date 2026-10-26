# AI Memory: kit da Aula 2.4

O ai-memory é o projeto de código aberto de [Fabio Akita](https://github.com/akitaonrails/ai-memory). Este kit reúne nossa camada de instruções, integração, operação e preparação da instalação. Não é um fork do código original. O Conselho de IA, dedicado à arquitetura multimodelo, é um material separado.

## Começar

Abra o Codex ou Claude Code na pasta deste kit e use o [pedido de instalação](PROMPT-INSTALAR.md). A versão de referência é 3.2.0. A ferramenta primeiro identifica seu ambiente e a instalação existente, mostra as mudanças e pede uma confirmação. Depois executa a instalação e verifica a conexão.

Se quiser acompanhar o código original, clone-o em pasta nova:

```powershell
git clone --branch v3.2.0 --depth 1 https://github.com/akitaonrails/ai-memory.git ai-memory-original
```

Clonar o código não instala o programa. A prática usa a distribuição oficial pronta, sem exigir compilação. O arquivo `scripts/Preparar-Memoria.ps1` do kit confere a versão e o checksum do instalador antes de executá-lo.

## Arquivos do kit

```text
ai-memory/
  README.md
  PROMPT-INSTALAR.md
  LICENSE
  scripts/
    Preparar-Memoria.ps1
  integracao/
    MEMORIA.md
    AGENTS.md
    CLAUDE.md
  mapas/
    LEIA-ME.md
    original/.ua/knowledge-graph.json
    integracao/.ua/knowledge-graph.json
```

Os arquivos de `integracao/` são modelos para mesclagem. A instalação copia ou mescla a política `MEMORIA.md` em um caminho global adequado ao cliente e acrescenta a referência no AGENTS.md ou CLAUDE.md existente, sem substituí-lo. `CAMINHO_GLOBAL_MEMORIA.md` é um marcador do modelo, que precisa virar o caminho real antes da gravação do arquivo instalado.

## Como as partes se ligam

- O cliente de IA consulta e registra pela conexão MCP, quando compatível e autorizado.
- O servidor mantém a memória. Pode ficar no computador ou numa VPS (servidor virtual privado).
- AGENTS.md e CLAUDE.md orientam o uso. Hooks são gatilhos separados, com configuração e autorização próprias.
- Decisões, procedimentos e referências formam uma wiki em Markdown com links, origem e data. O SQLite é um índice derivado da wiki.

No uso pessoal, seus clientes podem acessar a mesma memória. Em equipe, a base comum recebe apenas informação apropriada a seus usuários autorizados. Configure os controles oficiais de acesso da versão instalada, incluindo acesso por projeto quando disponível. Nome de pasta não autoriza acesso e não há permissão por página.

Os mapas do original e da integração ficam em `mapas/`, com orientação em `mapas/LEIA-ME.md`. São mapas curados de fontes, compatíveis com Understand-Anything. Os diagramas HTML/SVG da aula permitem explorar as estruturas; a geração por `/understand` e a abertura do visualizador local do plugin não foram executadas.

## Conferir o resultado

A instalação precisa mostrar a versão, a conexão em `memory_status` e uma busca seguida da leitura de uma página identificada, no mesmo workspace/projeto autorizado. Se a base estiver vazia, a ferramenta deve informar isso, sem inventar um resultado. Acesso remoto e captura de hooks só contam como validados quando testados separadamente.

Este kit não contém memória privada, credenciais nem dados de clientes. A instalação global no computador do aluno e o comportamento após logoff/reboot precisam ser conferidos no ambiente real. Windows nativo é experimental na versão 3.2.0.

Fontes oficiais: [Windows](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/windows.md), [instalação](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/install.md), [MCP](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/mcp-install.md) e [usuários](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/users.md).
