# Kodis - Backend

API REST feita em **Java + Spring Boot** para autenticação de usuários (login e cadastro). Projeto de estudo, focado em praticar a arquitetura em camadas do Spring (Controller → Service → Repository → Entity).

## Tecnologias

- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

## Como rodar

1. Clone o repositório
2. Crie um banco PostgreSQL chamado `kodis`
3. Configure as credenciais do banco em `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/kodis
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA
```

4. Rode o projeto:

```bash
./mvnw spring-boot:run
```

A aplicação sobe em `http://localhost:8080`.

## Endpoints

### Cadastrar usuário

```
POST /api/usuarios
Content-Type: application/json

{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

- `201 Created` — usuário cadastrado
- `409 Conflict` — email já cadastrado

### Login

```
POST /login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

- `200 OK` — login realizado com sucesso
- `401 Unauthorized` — email ou senha incorretos

## Estrutura do projeto

```
src/main/java/com/example/demo/
├── Controller/    -> recebe as requisições HTTP
├── Service/       -> regras de negócio (validações, decisões)
├── Repository/    -> acesso ao banco de dados (Spring Data JPA)
├── Entity/        -> representação das tabelas do banco
└── Dto/           -> objetos usados para receber/enviar dados nas requisições
```

## Observações

Projeto criado para fins de aprendizado de Spring Boot e construção de APIs REST. A senha é armazenada sem criptografia — não recomendado para uso em produção.
