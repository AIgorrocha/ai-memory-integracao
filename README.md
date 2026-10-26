# AI Memory: memória para continuar o trabalho

Guarde decisões, procedimentos e pendências para continuar o trabalho com o Codex ou Claude Code, sem explicar tudo de novo. O kit inclui o Project Brain, procedimento que organiza o que vale preservar quando você pede para encerrar a sessão.

## Começar

Clone o [kit de integração](https://github.com/AIgorrocha/ai-memory-integracao) em uma pasta nova:

```powershell
git clone https://github.com/AIgorrocha/ai-memory-integracao.git
Set-Location .\ai-memory-integracao
```

Abra essa pasta no Codex ou Claude Code e use o [pedido de instalação](PROMPT-INSTALAR.md). A ferramenta confere seu computador e o que já existe, apresenta o plano e pede uma confirmação. Depois executa o trabalho autorizado e informa o que conseguiu verificar. A versão de referência do ai-memory é 3.2.0.

O programa original é de [Fabio Akita](https://github.com/akitaonrails/ai-memory). Este kit acrescenta nossas instruções de uso, o procedimento de encerramento e a preparação da instalação. Não é uma cópia modificada do servidor original. O Conselho de IA, que organiza o trabalho entre ferramentas e modelos, é um material separado.

## Encerrar e continuar

Após a instalação e a confirmação de que a ferramenta encontrou o [Project Brain](skills/project-brain/SKILL.md), diga **“encerrar sessão”**, **“finalizar por hoje”**, **“preparar continuidade”** ou `/project-brain`.

O procedimento confere o que aconteceu, guarda apenas decisões, aprendizados e pendências importantes, com origem, data e referências, e lê o registro para conferir. Sem mudança importante nem nova pendência, informa a ausência e não cria registro. Pendências anteriores são preservadas.

O plano preserva suas configurações e instruções existentes. Se já houver um Project Brain diferente, mostra a diferença e exige autorização específica antes de substituí-lo. Os modelos de `integracao/` são mesclados e seus caminhos são ajustados à instalação real; não substituem arquivos inteiros nem criam cópias duplicadas do procedimento.

O OK inicial autoriza guardar as informações pertinentes ao encerramento solicitado, sem repetir a mesma confirmação. Não autoriza dados sensíveis, acesso novo, envio de alterações ou publicação. Documentos continuam no local já adotado pelo projeto; alterações salvas no Git dependem das regras desse projeto. Obsidian só participa se já estiver configurado.

## Onde a memória fica

O servidor é administrado pela pessoa ou empresa. Pode ficar em um computador disponível ou em um servidor contratado. Codex e Claude Code acessam essa mesma memória quando conectados e autorizados.

As instruções AGENTS.md e CLAUDE.md orientam quando consultar e guardar informações. **Conectar a memória e registrar atividades são ajustes separados.** Ter uma conexão funcionando não comprova que todas as conversas foram guardadas.

Em equipe, compartilhe apenas informações apropriadas a quem pode acessar a base. Configure as permissões da versão instalada: nome de pasta não protege os dados e não há permissão individual por página. O kit não contém memória privada, credenciais ou dados de clientes.

## Conferir antes de usar

No ensaio de 26/10/2026, o Claude Code em um perfil isolado do Windows encontrou o Project Brain, gravou o fechamento, recuperou a informação em nova sessão e preservou as pendências quando não havia novidade. No Codex, houve bloqueios de execução; no Linux isolado, a descoberta do procedimento passou, mas instalação e continuidade pelo modelo ficaram pendentes. Veja [resultados e limites dos testes](TESTES.md). Isso não garante o mesmo resultado em todo computador.

A instalação precisa mostrar a versão, confirmar o acesso à memória e localizar e ler uma informação identificada no projeto autorizado. Se a base estiver vazia, deve informar isso, sem inventar um resultado.

Depois, em um projeto de teste autorizado, confira se a ferramenta encontra o Project Brain. Peça o encerramento com uma pequena decisão de teste, leia o que foi guardado e recupere esse registro em uma nova sessão. Uma base vazia deve receber páginas realmente relacionadas, sem referências a páginas inexistentes. Sem ambiente ou autorização para o teste, essa verificação fica pendente.

O encerramento depende da sessão ativa. Não é prometido após fechar o aplicativo, interromper o trabalho ou atingir o limite de uso. Instalação no computador do aluno, acesso remoto, registro de atividades e funcionamento após sair da conta ou reiniciar o computador precisam ser testados no ambiente real. Windows nativo é experimental na versão 3.2.0.

## Ver os mapas e consultar os detalhes

Abra os diagramas: [projeto original](diagramas/arquitetura-original.html) e [nossa integração](diagramas/nossa-camada.html). Foram criadas duas visões de negócio com recursos reais do Understand Anything 2.9.7, que gravaram, validaram e releram os mapas. Os mapas estruturais anteriores foram preservados. Veja [mapas/LEIA-ME.md](mapas/LEIA-ME.md) para arquivos, origem e limites. Não foi executada a análise completa `/understand` nem aberto o visualizador local do plugin.

[Apresentar a Aula 2.4 no navegador](https://aigorrocha.github.io/ai-memory-integracao/aula/), com 11 slides, setas para navegar e F para tela cheia.

O [pedido de instalação](PROMPT-INSTALAR.md) e o [Project Brain](skills/project-brain/SKILL.md) contêm as instruções técnicas. Baixar o código não instala o programa. O preparador `scripts/Preparar-Memoria.ps1` confere a versão e a integridade do instalador oficial antes de executá-lo.

Fontes oficiais: [Windows](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/windows.md), [instalação](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/install.md), [conexão MCP](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/mcp-install.md) e [usuários](https://github.com/akitaonrails/ai-memory/blob/v3.2.0/docs/users.md).

Como as ferramentas encontram e acionam procedimentos: [Codex](https://developers.openai.com/codex/skills) e [Claude Code](https://code.claude.com/docs/en/skills).
