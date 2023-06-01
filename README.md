# DOCUMENTAÇÃO

Esta é a documentação do teste técnico.

## Como Rodar o APP

<b>IMPORTANTE: Aqui estarão os passos para rodar o frontend e o backend.</b>

### Backend

Primeiramente, configure as variáveis de ambiente, criando uma cópia de .env.example e seguindo as instruções.

```
# O padrão de URL apresentado abaixo deve ser seguido para conexão com o banco de dados
# Exemplo: mysql://root:1234@localhost:3306/teste-tecnico

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
SECRET_KEY="BolodeTomate"
```

Para baixar as dependências utilize o seguinte comando:

```
npm install
```

Agora utilize o comando do prisma para criar as tabelas no banco de dados automaticamente: 

```
npx prisma migrate dev
```

O ultimo passo para rodar a aplicação é utilizar o seguinte comando:

```
npm run start
```

Tudo pronto! Backend rodando! Agora vamos para o front!

### Frontend

Para baixar as dependências utilize o seguinte comando:

```
npm install
```

Para rodar a aplicação utilize esse último comando:

```
npm run dev
```

# TESTE TÉCNICO

## Bem vindo!

### A seguir será passado as instruções para criação do projeto técnico, para vaga de desenvolvimento da Softline Sistemas.

### Todos os cadastros devem conter as operações básicas.
    - Inserir; 
    - Editar; 
    - Visualizar; 
    - Deletar;


# LINGUAGENS

    Front End
        Utilizar as linguagens:
            - Javascript ou frameworks, ex. JQuery;
            - CSS;
            - HTML;
        
    Back end
        - Preferencialmente utilizar o C#;
        - Mas pode utilizar outras;

    Banco de Dados
        - Preferencialmente utilizar o SQL Server;
        - Mas pode utilizar outras como MySql, MariaDB etc...


#### A aplicação deverá ter 5 paginas no mínimo que são:
    - Login
    - Lista de Produtos
    - Cadastro de Produtos
    - Lista de Cliente
    - Cadastro de Cliente

## LOGIN
    Na tela de login deverá ter os campos de usuário, senha e o confirmar;
    Fazer as validações básicas para logar;
    Ao efetuar o login redirecionar para a tela que deve conter a opção de ir para a tela de produto e de cliente;
    
    
## LISTA DE PRODUTOS 
    Ao direcionar para a tela de lista produto.
        - Mostrar a lista com os produtos adicionados;
        - Ter a opção para adicionar um novo produto;
        - Ter a opção de editar;
        - Ter a opção de deletar;
        - Ter a opção de visualizar;
        
 
## CADASTRO DE PRODUTO
    Ao abrir a tela de cadastro de produto deverá ter os seguintes campos:
        - Código            - Inteiro
        - Descrição         - Texto
        - Código de barras  - Texto
        - Valor de Venda    - Numérico com casas decimais
        - Peso Bruto        - Numérico com casas decimais
        - Peso Líquido      - Numérico com casas decimais
            
            
## LISTA DE CLIENTES
    Ao direcionar para a tela de lista clientes.
        - Mostrar a lista com os produtos adicionados;
        - Ter a opção para adicionar um novo cliente;
        - Ter a opção de editar;
        - Ter a opção de deletar;
        - Ter a opção de visualizar;
        
        
## CADASTRO DE CLIENTE
    Ao abrir a tela de cadastro de cliente deverá ter os seguintes campos:
        - Código          - Inteiro
        - Nome            - Texto
        - Fantasia        - Texto
        - Documento       - Texto
        - Endereço        - Texto
            

# **_IMPORTANTE_**
    - Mandar junto ao subir o projeto os Scripts utilizados para criação das tabelas.
    - Se for criado procedures, funções ou qualquer outro tipo de script de manipulação do banco subir no projeto.
    
    
    
### Após finalizar o projeto subir nesse repositório.
#### Para subir o projeto, pode ser usado o Git Desktop, Git Console ou na página principal do projeto vai em addFile(Adicionar arquivo) e clique em uploadfile (subir arquivo), após adicionar o arquivo clicar em commit changes.
### Após o envio do link, terá **até o dia 31/05** para ser entregue;


# BOA SORTE
