# Tabacaria Agni

Instruções para manter o projeto organizado e padronizado!


1. Língua utilizada no projeto: Inglês.

2. Nomenclatura de variáveis, funções, States, classes: utilizar camelCase com nomes descritivos e simplificados (utilizar arrow function nas funções).
  Por exemplo:
    função que faz a requisição para efetuar o login ---> const loginSubmit = () => {}
    função que faz um get na api buscando produtos ---> const getAllProducts = () => {}
    State que armazena o informações do usuário ---> const [ user, setUser ] = useState([])

3. Nomenclatura de interfaces: utilizar o "I" como primeira letra, sendo as duas primeiras letras em maiúsculo + camelCase com nomes descritivos e simplificados.
  Por exemplo: 
    interface IUser{}, interface IUserLoginResponse{} ...
    
4. Nomenclatura de dados armazenados no localStorage: utilizar o "@" + nome em maiúsculo.
  Por exemplo:
    "@TOKEN", "@USERID".
 
5. Nomenclatura para typar schemas: utilizar o "T" como primeira letra, sendo as duas primeiras letras em maiúsculo + camelCase com nomes descritivos e simplificados.
  Por exemplo: 
  export type TRegisterFormValue = z.infer<typeof RegisterSchema>
 
6. Padronização das pastas: a nomenclatura para as pastas deve ser em camelCase com a primeira letra minúscula. Cada componente deve possui uma pasta com dois arquivos, sendo um o tsx(lógica) e o outro ts(estilo), a regra de nomclatura deve ser seguida nesses arquivos também.

7. Nomenclatura de componentes: deve seguir o padrão de primeira letra maiúscula e o restante em camlCase.

8. Tipo de função: arrow function !

9. Padronização dos commits: 
  <tipo>[escopo opcional]: descrição

    [corpo opcional]

    [rodapé opcional]

<tipo>: Indica o tipo de alteração feita. Pode ser um dos seguintes valores:

    feat: para uma nova funcionalidade
    fix: para uma correção de bug
    docs: para uma mudança na documentação
    style: para uma mudança de estilo que não afeta o código (espaços em branco, formatação, etc.)
    refactor: para uma alteração no código que não corrige um bug ou adiciona uma funcionalidade
    test: para a adição ou alteração de testes
    chore: para uma mudança em arquivos de configuração, scripts, etc.
    
    [escopo opcional]: Indica o escopo da alteração. Pode ser qualquer coisa que ajude a identificar a área do código que foi modificada.

    descrição: Uma descrição curta e objetiva da alteração.

    [corpo opcional]: Uma descrição mais detalhada da alteração. Pode ser omitida se a descrição for suficiente.

    [rodapé opcional]: Informações adicionais, como referência a uma tarefa do sistema de controle de problemas, mudanças de quebra de linha, etc.
    
    Por exemplo: 
      feat: add login page 

      Adiciona a página de login para que os usuários possam acessar a plataforma.

      Closes #123
      (Esse commit indica que uma nova funcionalidade foi adicionada (login) e que a alteração fecha o problema #123.)
     
