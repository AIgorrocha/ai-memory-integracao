# Mapas de AI Memory para entender o negócio

Duas visões mostram como a memória ajuda a continuar o trabalho. Foram derivadas dos mapas existentes e das fontes verificadas, usando recursos reais do Understand Anything 2.9.7 em 26/10/2026.

| Visão de negócio | Arquivo | O que mostra |
|---|---|---|
| Projeto original de Fabio Akita | [original/.ua/domain-graph.json](original/.ua/domain-graph.json) | Pessoa pede, ferramenta busca, sistema consulta o que foi guardado e informação retorna. Quatro passos. |
| Nossa integração | [integracao/.ua/domain-graph.json](integracao/.ua/domain-graph.json) | Pedido no Codex ou Claude, regras, Project Brain, conexão, memória no seu servidor e conferência para continuar depois. Seis passos. |

O projeto original é do Akita. O servidor e a memória são administrados pela pessoa ou empresa que usa a instalação. Os mapas não representam um servidor central do Akita ou nosso recebendo os dados dos alunos.

## O que foi feito

O trabalho seguiu o caminho de derivação de mapas existentes do procedimento `understand-domain`. A análise desta sessão organizou as informações em áreas, processos e passos. Os módulos do plugin leram os mapas anteriores, conferiram os identificadores, validaram as relações, gravaram os novos arquivos e os leram de volta. Nenhum problema foi apontado pelo validador.

Não foi executado `/understand` completo nem aberto o visualizador. A análise não percorreu todo o código do projeto original. Gravar e reler os arquivos comprova sua estrutura, não sua aparência na tela ou o funcionamento da memória do aluno.

O [relatório de execução](EVIDENCIA-UNDERSTAND-ANYTHING.md) registra recursos, comandos, conferências e códigos de integridade dos arquivos.

## Mapas estruturais preservados

Os mapas anteriores continuam disponíveis, sem alteração:

- [Original: knowledge-graph.json](original/.ua/knowledge-graph.json), com 8 componentes e 12 relações.
- [Integração: knowledge-graph.json](integracao/.ua/knowledge-graph.json), com 8 componentes e 10 relações.

Eles foram organizados a partir de fontes verificadas e validados pelo formato do plugin. Não são resultado de uma análise automática completa. As visões de negócio acrescentam uma leitura mais simples, sem substituir esses registros.

## Origem e limites

- Original: [akitaonrails/ai-memory, versão 3.2.0](https://github.com/akitaonrails/ai-memory/tree/1c86aebc14addccc7ac875913d565c681bfa4a50).
- Estrutura e funcionamento: [documentação oficial](https://github.com/akitaonrails/ai-memory/blob/1c86aebc14addccc7ac875913d565c681bfa4a50/docs/ARCHITECTURE.md).
- Integração: [relatório das fontes verificadas](../fontes/arquitetura-ai-memory-2026-10-26.md), instruções do kit e Project Brain. As referências de revisão identificam a documentação do curso, não um servidor modificado por nós.

Conectar a memória e registrar atividades são ajustes separados. Os mapas não comprovam que toda conversa é guardada, que o encerramento funciona depois de fechar o aplicativo ou que a instalação do aluno já passou nos testes.

O visualizador do Understand Anything pode ler as pastas `mapas/original` e `mapas/integracao` quando estiver completo. A instalação inspecionada não tinha todos os arquivos necessários para abri-lo; não foi instalada ou recompilada nesta rodada. Nenhuma imagem foi exportada pelo plugin.
