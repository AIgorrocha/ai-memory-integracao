# AI Memory: arquitetura e evidências para a Aula 2.4

Verificação documental: 26/10/2026. Escopo somente leitura, exceto este relatório. Sem instalação, alteração de infraestrutura, publicação, credenciais, backups ou conteúdo privado de memória.

## Separação confirmada

- **Conselho de IA:** método de orquestração, papéis, delegação, revisão e passagem de trabalho.
- **AI Memory:** projeto open source de Fabio Akita, acrescido da nossa camada de integração, políticas e operação. Não foi comprovado um fork nosso do código do servidor. Não apresentar um repositório próprio de AI Memory como existente.

Original fixado em [v3.2.0](https://github.com/akitaonrails/ai-memory/tree/v3.2.0), commit `1c86aebc14addccc7ac875913d565c681bfa4a50`, resolvido pela API GitHub a partir da tag anotada. Referências abaixo usam esse commit, não `main` ou `latest`.

## Original e nossa camada

| Parte original do Akita | Nossa camada verificada | Fonte primária, arquivo e linha |
|---|---|---|
| Binário Rust, ferramentas MCP e memória entre agentes | Adoção e conexão de Codex e Claude à mesma base | [ARCHITECTURE.md:9](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md#L9); `~/.ia/ai-memory-routing.md:8` |
| Wiki Markdown versionada em Git; SQLite derivado para busca e eventos | Política de guardar decisões, procedimentos, referências e aprendizados com links | [ARCHITECTURE.md:535](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md#L535); `~/.ia/regras-duras.md:27-33` |
| Hooks capturam eventos; consulta recupera páginas | Memória obrigatória e consulta antes de decisões; verificação da captura por cliente | [ARCHITECTURE.md:55](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md#L55); `~/.ia/infra-memoria.md:7,26`; `~/.ia/codex.md:11` |
| Roteamento gerenciado em instruções e skills | Política local de persistência durável sobre o padrão de gravação apenas mediante pedido explícito | `~/.ia/ai-memory-routing.md:1-5,26-30,48-57` |
| Servidor HTTP acessível por clientes autorizados | Operação documentada em VM Linux no PC, com repasse local Windows | [install.md:366](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/install.md#L366); `~/.ia/infra-memoria.md:5-14` |
| Instaladores e `setup` oficiais | Launcher que fixa versão/checksum e teste confinado no kit atual | `conselho-de-ia/scripts/Preparar-Memoria.ps1:1-31,44-58`; `conselho-de-ia/memoria/aula-2-4.md:78-89` |

O kit público lido está no commit local `f5d8b925a584008a6d5b8776a99b90cb1dde4c11`. Não há AGENTS.md na raiz; o inventário Git localizou instruções apenas sob `regras/` e `exemplos/curso-agentes-skills/`. Nenhum arquivo desses diretórios foi executado.

## Mapa técnico para os diagramas

**Fluxo original:** cliente e hooks; entrada sanitizada; observações; página de sessão e passagem; wiki; índice; consulta pelo MCP. Consolidação generativa e vetores são capacidades opcionais. [Arquitetura:55-185](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md#L55).

Árvore real de módulos: `core` (tipos), `store` (SQLite), `wiki` (arquivos/Git), `mcp` (ferramentas), `hooks` (captura), `llm` (provedores), `consolidate` (compilação/manutenção), `web`, `workstream` e `cli`. São crates do original, não componentes criados por nós. [Arquitetura:689-707](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md#L689).

**Nosso desenho:** Codex e Claude; AGENTS.md/CLAUDE.md e skills orientam consulta; MCP conecta ambos ao serviço compartilhado; páginas relacionadas preservam conhecimento; código/testes/banco continuam sendo a fonte técnica atual. A política não é um hook que executa o método automaticamente. Evidências: `~/.ia/ai-memory-routing.md:16-18,34-48`; `~/.ia/roteamento-trabalho.md:39-68`.

A Wiki de Karpathy é uma inspiração declarada do próprio original, não uma invenção da adaptação: [README:202-210](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/README.md#L202). Explicar como páginas relacionadas, compiladas e revisáveis. Não equiparar wiki a transcrição integral ou CRM.

## Equipe, Windows e VPS

- Um servidor comum pode atender vários agentes e pessoas. Identificar usuários e escopos; não distribuir a credencial administrativa. A versão documenta projetos `open`/`restricted` e concessões por projeto, mas não RBAC por página. A seção introdutória de `users.md` conserva linguagem antiga de compartilhamento amplo; a seção específica de acesso por projeto é mais precisa. [users.md:742-802](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/users.md#L742).
- Namespace e nome do projeto não bastam para isolar clientes. Para a aula, usar base autorizada e sanitizada. Não afirmar que todos sempre leem tudo nem que o nome do projeto garante segurança.
- Windows nativo é classificado como experimental no [README:134](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/README.md#L134). O início padrão no logon depende de sessão aberta; serviço Windows é outra opção. WSL requer caminhos e hooks Linux. [windows.md:6-24,355-407](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/windows.md#L355).
- Se o serviço mora no PC, esse PC/VM e a rede precisam estar disponíveis para os clientes. VPS é alternativa de hospedagem, não obrigação do produto nem descrição do nosso runtime atual. Servidor remoto requer autenticação e transporte protegido; token não cifra HTTP. [install.md:366-394](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/install.md#L366).

## Understand Anything, capacidade e limite

Instalação local identificada: `~/.claude/plugins/cache/understand-anything/understand-anything/2.9.7`. `package.json:2-3` declara versão 2.9.7.

- `skills/understand/SKILL.md:8` define geração de `.ua/knowledge-graph.json`, ou caminho legado. As fases analisam arquivos, agrupam relações e montam arquitetura/tour. O fluxo despacha subagentes; não é simples exportação determinística sem modelo. `SKILL.md:483-561,643-811`.
- `packages/viewer/README.md:3-17` permite visualizar um grafo já gerado, localmente, com Node, sem LLM. Isso não gera o grafo ausente.
- `packages/dashboard/src/components/ExportMenu.tsx:104-210` implementa PNG, SVG e JSON. JSON respeita filtros/persona. Preservar o grafo completo ao exportar a base para revisão.
- Não foi executado `/understand`, build, hook, instalação ou export. Na auditoria inicial, os dois mapas ainda precisavam ser gerados e conferidos: original no commit fixo; integração em pasta pública sanitizada. Um grafo do repositório original não prova nossa operação, e um grafo do Conselho não substitui o mapa de AI Memory.

Para mapas curados compatíveis, o contrato está em `packages/core/src/types.ts:54-115`, com validador pronto `packages/core/dist/schema.js`, exportação `KnowledgeGraphSchema`. Raiz: `version`, `project`, `nodes`, `edges`, `layers`, `tour`; `kind` opcional. Cada nó exige `id`, `type`, `name`, `summary`, `tags`, `complexity`; cada aresta exige `source`, `target`, `type`, `direction`, `weight`. Todos os IDs referidos precisam existir. Rotular como mapa curado de fontes, não análise executada pelo plugin. Destinos sugeridos no pacote separado: `KIT-AI-MEMORY/mapas/original/.ua/knowledge-graph.json` e `KIT-AI-MEMORY/mapas/integracao/.ua/knowledge-graph.json`, criados na etapa seguinte, com validação estrutural.

O launcher do viewer está em `packages/viewer/bin/viewer.mjs`, mas `packages/viewer/dist` está ausente nesta instalação inspecionada. Não prometer abertura operacional até preparar/verificar o viewer completo. PNG/SVG/JSON existem no código do dashboard, não foram exportados nesta rodada.

## Prática e encerramento da aula

Sequência proposta: origem Akita; nossa integração; troca Codex/Claude no mesmo escopo; uso em equipe; disponibilidade PC/VPS; instruções orientando consulta; decisão/procedimento/referência ligados na wiki; dois mapas; GitHub e prompt de instalação.

O upstream já publica [INSTALL_FOR_AGENTS.md](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/INSTALL_FOR_AGENTS.md#L1), com binário, setup por agente, reinício e tratamento de falha. Portanto, um prompt pode conduzir a instalação global do usuário. Ele não elimina reinício, confiança de hooks ou conflitos de configuração. A nossa regra exige revisar o plano e o instalador antes de aplicar.

Prompt-base para revisar e depois distribuir, ainda sem apontar um repositório próprio inexistente:

> Leia o projeto oficial https://github.com/akitaonrails/ai-memory na versão v3.2.0 e INSTALL_FOR_AGENTS.md. Prepare a instalação global para meu usuário, conectando Codex e Claude Code à mesma base. Preserve minhas configurações existentes. Mostre versão, origem, checksum, destino, política de captura e plano do setup antes de aplicar. Não use credenciais no chat. Depois da aplicação autorizada, indique o reinício e a confiança dos hooks. Comprove status, gravação/leitura de uma página autorizada, consulta no mesmo escopo pelos dois agentes e persistência após reiniciar o serviço. Reporte cada lacuna sem simular sucesso.

Qualidade entra dentro dessa sequência: consultar a fonte; registrar com links; ler a página inteira; confrontar com código atual; demonstrar recuperação no outro agente. Não criar bloco teórico separado. O teste isolado registrado no kit não comprova a instalação do aluno ou a captura real dos agentes.

## Lacunas e provas desta rodada

Confirmados: resposta de `memory_status` no escopo explícito do projeto; consulta de memória; documentos oficiais v3.2.0; camada local; capacidades declaradas do Understand Anything; launcher e teste existentes, apenas lidos.

Integridade da fonte: `git hash-object --no-filters` do documento de arquitetura baixado retornou `7244bbcc0e80bb97b87ac5d8c820390712708a50`, igual ao blob consultado pela API no commit fixado. `git diff --check` do relatório não apresentou erro. Busca de endereços internos e padrões de credencial no relatório não retornou ocorrência.

Documentado em 22/10, sem nova prova operacional nesta rodada: versão do runtime, busca híbrida, hooks Codex e backend LLM desativado. Claude possui opt-out de captura de prompts documentado. Não declarar aprendizado generativo automático ou transcrição integral. Fonte: `~/.ia/infra-memoria.md:7,15-31`.

Pendentes: destino público independente da adaptação; instalação global por prompt no ambiente do aluno; revisão no viewer completo; teste real de equipe/permissões. Nenhum fork criado, nenhuma infraestrutura alterada, nenhum teste de instalação repetido.

## Mapas entregues após a auditoria

Dois mapas curados compatíveis com Understand Anything 2.9.7 foram validados no KnowledgeGraphSchema: original com 8 nós/12 relações; integração com 8 nós/10 relações. Diagramas HTML/SVG e prévias foram produzidos separadamente. Não houve execução de /understand nem abertura do viewer local.
