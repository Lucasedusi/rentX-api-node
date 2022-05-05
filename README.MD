**REQUISITOS FUNCIONAIS, NÃO FUNCIONAIS E REGRAS DE NEGÓCIO (RENTX)**

# Cadastro de carro
  **REQUISITOS FUNCIONAIS** <br>
    - Deve ser possível cadastrar um novo carro <br>

  **REGRA DE NEGÓCIO**<br>
    - Não deve ser possível cadastrar um carro com uma placa já existente.<br>
    - Não deve ser possível alterar a placa de um carro já cadastrado.<br>
    - O carro deve ser cadastrado, por padrão, disponibilidade.<br>
    - O usuário responsável pelo cadastro deve ser um usuário administrador.<br>

# Listagem de carros
  **REQUISITOS FUNCIONAIS**<br>
    - Deve ser possível listar todos os carros disponíveis. <br>
    - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br>
    - Deve ser possível listar todos os carros disponíveis pelo nome da marca.<br>
    - Deve ser possível listar todos os carros disponíveis pelo nome do carro.<br>

**REGRA DE NEGÓCIO**<br>
    - O usuário não precisa estar logado no sistema.<br>

# Cadastro de especificação do carro
  **REQUISITOS FUNCIONAIS**<br>
    - Deve ser possível cadastrar uma especificação para um carro.<br>

**REGRA DE NEGÓCIO**<br>
    - Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
    - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br>
    - O usuário responsável pelo cadastro deve ser um usuário administrador.<br>

# Cadastro de imagens do carro
  **REQUISITOS FUNCIONAIS**<br>
    - Deve ser possível cadastrar a imagem do carro.<br>
    - Deve ser possivel listar todos os carros.<br>

**REQUISITO NÃO FUNCIONAL**<br>
    - Utilizar o multer para upload dos arquivos<br>

**REGRA DE NEGÓCIO**<br>
    - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.<br>
    - O usuário responsável pelo cadastro deve ser um usuário administrador.<br>

# Aluguel de carro
**REQUISITOS FUNCIONAIS**<br>
    - Deve ser possível cadastrar um aluguel.<br>

**REGRA DE NEGÓCIO**<br>
    - O aluguel deve ter duração mínima de 24 horas.<br>
    - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário. <br>
    - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro. <br>
