# PI

### Telas:

#### Cadastro:

#### Página de perfil da conta:
- informações pessoais (nome, telefone, foto, idade)
- produtos cadastrados para trocar
- aceite de troca de produto
- lances de troca recebido
#### Página principal:
- barra de pesquisa
- produtos mais próximos e de valor semelhante ao produto cadastrado paratrocar. `raio de 25km por padrão`

#### Página do produto:
- Produto:
  - foto
  - valor
  - distância
  - status
- Anunciador:
  - foto
  - nome
- opção para dar um lance de troca com base no seu produto cadastrado

#### Admin:


### Regras de negócio:
- Caso dois usuários concordem com a troca dos produtos, ambos produtos terão
seu status para `EM NEGOCIAÇÃO`, informando no menu principal e na página
dos produtos seu status.
- O cadastro de usuário somente é possível a partir de `18 anos`.
- Caso alguém de um lance de troca para seu produto, é notificado no perfil do
usuário.
- Somente `UM LANCE DE TROCA POR PRODUTO`
- Validar se o usuário ta logado

#### Classes:

- Usuario
  - id
  - nome
  - email
  - cpf
  - foto
  - telefone
  - idade
- Conta
  - id
  - usuario_id
  - tipo
  - produtos_cadastrados_id
- Produto
  - id
  - nome
  - valor
  - imagem_id
  - descrição
  - status (`disponível`, `em lance`, `em negociação`)
- Imagem
  - id
  - url