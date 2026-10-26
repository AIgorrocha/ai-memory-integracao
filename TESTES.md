# Testes do kit de memória

Verificação em 26/10/2026. Foram usados perfis isolados e informações fictícias, sem dados de clientes. O servidor de memória ficou local, sem publicação na internet.

## Resultado observado

| Ferramenta e ambiente | Etapa | Resultado |
|---|---|---|
| Claude Code no Windows | Configurar o perfil de teste | Passou. Instruções, Project Brain e conexão foram instalados no perfil isolado, depois de o preparador instalar o executável oficial do AI Memory 3.2.0 em um destino vazio e verificar sua integridade. |
| Claude Code no Windows | Encontrar e carregar Project Brain | Passou. Uma nova execução encontrou o procedimento e o carregou do caminho instalado. A cópia era idêntica à fonte do kit. |
| Claude Code no Windows | Pedir “encerrar sessão” com uma decisão nova | Passou. Duas páginas foram gravadas pela conexão de memória e lidas de volta, com referências de ida e volta. |
| Claude Code no Windows | Continuar em uma nova sessão | Passou. Busca e leitura recuperaram a decisão, seu identificador e a pendência anterior. |
| Claude Code no Windows | Pedir “finalizar por hoje” sem novidade | Passou. Nenhuma página foi gravada; a pendência anterior permaneceu aberta e não foi aceita nem cancelada. |
| Codex no Windows | Instalar pelo cliente | Bloqueado em duas tentativas pela política de execução do ambiente. O resultado não demonstra falha do kit nem instalação bem-sucedida. |
| Codex no Windows | Confirmar isolamento do catálogo | Não passou como ensaio isolado: o catálogo mostrou o Project Brain pessoal do Windows apesar das pastas de teste. Não usar essa descoberta como prova da cópia do kit. |
| Codex no Linux isolado | Encontrar a skill do kit | Passou. O catálogo continha o Project Brain do kit e cinco procedimentos do próprio Codex, sem a skill pessoal do Windows. |
| Codex no Linux isolado | Executar a instalação pelo modelo | Bloqueado antes do trabalho: `workspace routing discovery failed`. Instalação, fechamento e retomada pelo Codex continuam pendentes. |

## Como a prova foi conferida

No Claude, foram conferidos resultados das ferramentas, não apenas a resposta final da conversa: gravação com identificação da página e revisão, leitura posterior, busca na nova sessão e conteúdo recuperado. O identificador sintético foi `CURSO-CLAUDE-26B`; a pendência era revisar três solicitações incompletas antes de responder.

O programa de teste inicia um processo novo para cada etapa, e os logs têm sessões distintas. O pedido de retomada contém apenas o projeto e uma solicitação genérica para recuperar o fechamento: não fornece o identificador, a decisão nem a pendência esperados. Na retomada observada, a ferramenta não leu logs, o programa do ensaio ou arquivos diretos da memória. Os identificadores dos processos do sistema não foram registrados.

Uma conferência adicional com `claude mcp list`, sem indicar arquivo específico nem usar configuração estrita, confirmou o ai-memory local como `Connected` pela configuração registrada para o usuário. Isso comprova que a conexão também foi encontrada fora do comando específico usado no ensaio.

No caso sem novidade, os resultados mostram duas páginas existentes e a mesma pendência aberta, com conteúdo idêntico ao observado na retomada. Não houve chamadas para gravar páginas, aceitar ou cancelar a pendência.

No Linux, o manifesto registra a imagem oficial Node 22 fixada por digest, Codex 0.162.1 e AI Memory 3.2.0. O catálogo e a falha de execução foram conferidos. A memória ainda não estava conectada nesse ensaio. Uma sondagem sem autenticação, informada pelo responsável pelo teste, recebeu HTTP 200 do GitHub e 403 do ChatGPT. Isso não identifica a causa da falha de roteamento nem permite concluir algo sobre a conta ou assinatura.

As duas tentativas e o catálogo do Codex no Windows foram informados pelo responsável pelo ensaio; esta conferência independente leu o programa de teste, os resultados do Claude e os registros autorizados do Linux. O resumo de auditoria fica guardado com o ensaio, sem distribuir logs brutos ou configurações pessoais neste kit.

## Limites

O resultado do Claude vale para o perfil isolado e o fechamento solicitado durante uma sessão ativa. O perfil era novo, e o binário oficial foi instalado e teve sua integridade verificada antes da configuração pelo agente. O teste usou memória local e não equivale a testar a instalação em todo computador de aluno. Não comprova funcionamento em todos os computadores, captura automática de conversas, execução após fechar o aplicativo, reinício do computador, acesso remoto ou uso em equipe.

A instalação do aluno deve repetir as verificações do [pedido de instalação](PROMPT-INSTALAR.md). Se uma etapa não puder ser executada, ela continua pendente, mesmo que as etapas anteriores tenham passado.
