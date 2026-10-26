# AI Memory: kit da Aula 2.4

[Apresentar a Aula 2.4 no navegador](https://aigorrocha.github.io/ai-memory-integracao/aula/) · 11 slides, setas para navegar e F para tela cheia.

O ai-memory é o projeto de código aberto de [Fabio Akita](https://github.com/akitaonrails/ai-memory). Este kit reúne nossa camada de instruções, integração, operação e preparação da instalação. Não é um fork do código original. O Conselho de IA, dedicado à arquitetura multimodelo, é um material separado.

## Começar

Clone o [kit de integração](https://github.com/AIgorrocha/ai-memory-integracao) em uma pasta nova:

```powershell
git clone https://github.com/AIgorrocha/ai-memory-integracao.git
Set-Location .\ai-memory-integracao
```

Abra essa pasta no Codex ou Claude Code e use o [pedido de instalação](PROMPT-INSTALAR.md). A versão de referência do ai-memory é 3.2.0. A ferramenta primeiro identifica seu ambiente e a instalação existente, mostra as mudanças e pede uma confirmação. Depois executa a instalação e verifica a conexão.

Opcional, para inspecionar o código original do Akita, clone-o em outra pasta:

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
  skills/
    project-brain/SKILL.md
  integracao/
    MEMORIA.md
    AGENTS.md
    CLAUDE.md
  diagramas/
    arquitetura-original.html
    nossa-camada.html
  mapas/
    LEIA-ME.md
    original/.ua/knowledge-graph.json
    integracao/.ua/knowledge-graph.json
```

Os arquivos de `integracao/` são modelos para mesclagem. A instalação copia ou mescla a política `MEMORIA.md` em um caminho global adequado ao cliente e acrescenta a referência no AGENTS.md ou CLAUDE.md existente, sem substituí-lo. `CAMINHO_GLOBAL_MEMORIA.md` e `CAMINHO_GLOBAL_PROJECT_BRAIN_SKILL.md` são marcadores dos modelos, substituídos pelos caminhos reais antes de salvar os arquivos instalados.

## Encerrar e continuar uma sessão

O kit inclui a skill portátil [Project Brain](skills/project-brain/SKILL.md). Após instalação e descoberta confirmadas no cliente, diga **“encerrar sessão”**, **“finalizar por hoje”**, **“preparar continuidade”** ou `/project-brain`. O fechamento confere a memória, salva só decisões, aprendizados, estado durável e continuidade pertinente, com fonte, data e links, e lê de volta. Sem delta, não inventa registro. Pendências anteriores são preservadas.

O plano instala a skill normalmente em `~/.agents/skills/project-brain/SKILL.md` no Codex ou `~/.claude/skills/project-brain/SKILL.md` no Claude Code, conferindo os roots e a configuração efetivos, inclusive `CODEX_HOME` quando aplicável. Se já houver uma skill com esse nome, a instalação compara e pede autorização específica antes de substituir conteúdo diferente; não duplica a skill nos roots do mesmo cliente.

O OK inicial instala a política de persistência pertinente ao fechamento, sem outro OK redundante. Não autoriza dados sensíveis, acesso novo, push ou publicação. Mudanças necessárias ficam na fonte canônica; commit local seletivo só quando permitido pelas regras do projeto. Obsidian só entra quando já configurado, sem criar memória paralela.

A instalação deve verificar descoberta real e testar a frase de fechamento em escopo sintético autorizado, ler o resultado e recuperá-lo numa nova sessão. Base vazia com delta exige índice inicial e primeira página ligados de verdade. Se não houver ambiente ou autorização para esse teste, a validação fica pendente. Fechamento depende da sessão ativa: não é prometido após fechar o aplicativo, interromper ou atingir quota.

## Como as partes se ligam

- O cliente de IA consulta e registra pela conexão MCP, quando compatível e autorizado.
- O servidor mantém a memória. Pode ficar no computador ou numa VPS (servidor virtual privado).
- AGENTS.md e CLAUDE.md orientam o uso. Hooks são gatilhos separados, com configuração e autorização próprias.
- Decisões, procedimentos e referências formam uma wiki em Markdown com links, origem e data. O SQLite é um índice derivado da wiki.

No uso pessoal, seus clientes podem acessar a mesma memória. Em equipe, a base comum recebe apenas informação apropriada a seus usuários autorizados. Configure os controles oficiais de acesso da versão instalada, incluindo acesso por projeto quando disponível. Nome de pasta não autoriza acesso e não há permissão por página.

Abra os diagramas interativos: [arquitetura original](diagramas/arquitetura-original.html) e [nossa camada de integração](diagramas/nossa-camada.html). Os mapas do original e da integração ficam em `mapas/`, com orientação em `mapas/LEIA-ME.md`. São mapas curados de fontes, compatíveis com Understand-Anything. Os diagramas HTML/SVG da aula permitem explorar as estruturas; a geração por `/understand` e a abertura do visualizador local do plugin não foram executadas.

## Conferir o resultado

A instalação precisa mostrar a versão, a conexão em `memory_status` e uma busca seguida da leitura de uma página identificada, no mesmo workspace/projeto autorizado. Se a base estiver vazia, a ferramenta deve informar isso, sem inventar um resultado. Acesso remoto e captura de hooks só contam como validados quando testados separadamente.

Este kit não contém memória privada, credenciais nem dados de clientes. A instalação global no computador do aluno e o comportamento após logoff/reboot precisam ser conferidos no ambiente real. Windows nativo é experimental na versão 3.2.0.

Fontes oficiais: [Windows](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/windows.md), [instalação](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/install.md), [MCP](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/mcp-install.md) e [usuários](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/users.md).

Descoberta e acionamento de skills: [Codex](https://developers.openai.com/codex/skills) e [Claude Code](https://code.claude.com/docs/en/skills).
