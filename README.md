## Sistema de Clínica de Consultas - Exercício de Programação

Este é um sistema desenvolvido para uma clínica de consultas no bairro, permitindo aos usuários realizar o cadastro de pacientes, marcar consultas, cancelar consultas agendadas e sair do sistema. O sistema é executado através de um menu interativo via terminal.

### Funcionalidades

1. **Cadastrar um Paciente**
   - Permite o cadastro de novos pacientes fornecendo nome e telefone. Impede a duplicação de pacientes pelo número de telefone.
   
2. **Marcações de Consultas**
   - Exibe uma lista numerada dos pacientes cadastrados. Permite ao usuário selecionar um paciente e agendar uma consulta especificando dia, hora e especialidade. Verifica a disponibilidade da data e hora selecionadas.

3. **Cancelamento de Consultas**
   - Exibe uma lista numerada dos agendamentos existentes. Permite ao usuário selecionar um agendamento para visualizar detalhes (data, hora, especialidade) e cancelar a consulta agendada.

4. **Sair**
   - Encerra a execução do programa.

### Tratamento de Erros

- **Duplicidade de Pacientes:** Evita o cadastro duplicado de pacientes pelo número de telefone.
- **Conflito de Horários:** Impede que pacientes marquem consultas em horários já agendados por outros pacientes.
- **Consulta Retroativa:** Não permite o agendamento de consultas com datas anteriores à data atual.

### Persistência de Dados

Os dados dos pacientes e dos agendamentos são armazenados localmente usando `localStorage`, garantindo que as informações permaneçam mesmo após o usuário fechar o sistema.

### Como Executar

Para executar o sistema, é necessário ter um ambiente que suporte JavaScript (como Node.js) e seguir estes passos:

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/sistema-clinica-consultas.git
```

2. Navegue até o diretório do projeto:

```bash
cd sistema-clinica-consultas
```

3. Execute o programa:


```bash
node main.js
```


### Desenvolvimento

Este sistema foi desenvolvido como parte de um exercício de programação, utilizando JavaScript para funcionalidades básicas de cadastro, agendamento e cancelamento de consultas.

---


Este projeto foi desenvolvido como parte de um exercício acadêmico e visa simular um sistema básico para gestão de consultas em uma clínica local.
