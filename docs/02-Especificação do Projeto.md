# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<table>
  <tr>
    <th>Foto</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  </tr>
  <tr>
    <td><img title="Ademário Barbosa" src="../docs/img/Ademário Barbosa.jpg"/></td>
    <td>
      <ul>
        <li>Ademário Barbosa</li>
        <li>43 anos.</li>
        <li>Técnico eletricista em grande empresa de Construção Civil.</li>
        <li>Mora em Juiz de Fora - MG.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Whatsapp</li>
        <li>Facebook</li>
        <li>Kwai</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Proteção para prevenir acidentes.</li>
        <li>Contribuir para a segurança no ambiente de trabalho.</li>
      </ul>
    </td>
    <td>
        Está preocupado com sua segurança e integridade física.
    </td>
    <td>
        Nasceu em Juiz de Fora - MG técnico em Elétrica predial com mais de 15 anos de experiência, é casado e têm dois filhos de 12 e 14 anos. Nas horas vagas adora passear com seus filhos em shoppings e parques, pratica pesca.
    </td>
  </tr>
  <tr>
    <td><img title="Fabiano Lopes" src="../docs/img/Fabiano Lopes.jpg"/>
    </td>
    <td>
      <ul>
        <li>Fabiano Lopes</li>
        <li>33 anos</li>
        <li>Gestor de Almoxarifado - Almoxarife</li>
        <li>Niterói - RJ</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Entusiasta de tecnologia, busca melhores ferramentas para ajudar no otimização do seu trabalho.</li>
        <li>Dedicado ao trabalho, visa ser reconhecido pela empresa em que trabalha. Busca ser promovido.</li>
      </ul>
    </td>
    <td>
        Se sente sobrecarregado com tantas tarefas e cobranças. Acredita que alguns processos podem ser otimizados através de soluções tecnológicas.</td>
    <td>
       Graduando de Administração pela UFF, 5 anos de experiência como almoxarife. Faz cursos intensivos online para se manter atualizado como Informática, Excel e Gestão de Estoque. 
    </td>
  </tr>
  <tr>
    <td><img title="Borges Zanotti" src="../docs/img/Borges Zanoti.jpg"/></td>
    <td>
      <ul>
        <li>Borges Zanotti</li>
        <li>41 anos</li>
        <li>Proprietário de empresa de médio porte na área Industrial</li>
        <li>São Paulo - SP</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>LinkedIn</li>
        <li>Whatsapp</li>
        <li>FaceApp</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Expandir seu empreendimento.</li>
        <li>Empreender e criar novos postos de trabalho. </li>
      </ul>
    </td>
    <td>
        Alvo de processos judicias na vara trabalhista, está preocupado em conseguir comprovar que sua empresa respeita a NR6 e a legislação.
    </td>
    <td>
        Formado em Engenharia pela USP. Sempre atendo as inovações do mercado e em busca de novas tecnologias. É casado, gosta de viajar com sua esposa.
    </td>
  </tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
