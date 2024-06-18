let pacientes = carregarPacientes();
let agendamentos = carregarAgendamentos();

function carregarPacientes() {
  const pacientesString = localStorage.getItem("pacientes");
  return pacientesString ? JSON.parse(pacientesString) : [];
}

function salvarPacientes() {
  const pacientesString = JSON.stringify(pacientes);
  localStorage.setItem("pacientes", pacientesString);
}

function carregarAgendamentos() {
  const agendamentosString = localStorage.getItem("agendamentos");
  return agendamentosString ? JSON.parse(agendamentosString) : [];
}

function salvarAgendamentos() {
  const agendamentosString = JSON.stringify(agendamentos);
  localStorage.setItem("agendamentos", agendamentosString);
}

function cadastrarPaciente() {
  const nome = prompt("Digite o nome do paciente:");
  const telefone = prompt("Digite o telefone do paciente:");

  const pacienteJaCadastrado = pacientes.find(
    (paciente) => paciente.telefone === telefone
  );

  if (pacienteJaCadastrado) {
    alert("Paciente já cadastrado!");
    return;
  }

  pacientes.push({ nome, telefone });
  alert("Paciente cadastrado com sucesso!");
  salvarPacientes();
}

function exibirListaPacientes() {
  if (pacientes.length === 0) {
    console.log("Não há pacientes cadastrados.");
    return;
  }

  console.clear();
  console.log("**Lista de Pacientes**");

  pacientes.forEach((paciente, indice) => {
    console.log(`${indice + 1}. ${paciente.nome} - ${paciente.telefone}`);
  });
}

function marcarConsulta() {
  exibirListaPacientes();

  const numeroPaciente = parseInt(prompt("Escolha o número do paciente:"));
  const paciente = pacientes[numeroPaciente - 1];

  if (!paciente) {
    alert("Paciente inválido!");
    return;
  }

  const data = prompt("Digite a data da consulta (AAAA-MM-DD):");
  const hora = prompt("Digite a hora da consulta (HH:MM):");
  const especialidade = prompt("Digite a especialidade da consulta:");

  const agendamentoExistente = agendamentos.find(
    (agendamento) => agendamento.data === data && agendamento.hora === hora
  );

  if (agendamentoExistente) {
    alert("Data e hora já agendadas!");
    return;
  }

  const dataAtual = new Date();
  const dataConsulta = new Date(`${data}T${hora}:00`);

  if (dataConsulta < dataAtual) {
    alert("Não é possível agendar consultas no passado!");
    return;
  }

  agendamentos.push({ paciente, data, hora, especialidade });
  alert("Consulta agendada com sucesso!");
  salvarAgendamentos();
}

function exibirListaAgendamentos() {
  if (agendamentos.length === 0) {
    console.log("Não há agendamentos para exibir.");
    return;
  }

  console.clear();
  console.log("**Lista de Agendamentos**");

  agendamentos.forEach((agendamento, indice) => {
    console.log(
      `${indice + 1}. ${agendamento.paciente.nome} - ${agendamento.data} às ${
        agendamento.hora
      } - ${agendamento.especialidade}`
    );
  });
}

function cancelarConsulta() {
  exibirListaAgendamentos();

  const numeroAgendamento = parseInt(
    prompt("Escolha o número do agendamento:")
  );
  const agendamento = agendamentos[numeroAgendamento - 1];

  if (!agendamento) {
    alert("Agendamento inválido!");
    return;
  }

  const confirmarCancelamento = confirm(
    `Deseja cancelar a consulta de ${agendamento.paciente.nome} em ${agendamento.data} às ${agendamento.hora} para ${agendamento.especialidade}?`
  );

  if (confirmarCancelamento) {
    agendamentos.splice(numeroAgendamento - 1, 1);
    alert("Consulta cancelada com sucesso!");
    salvarAgendamentos();
  } else {
    alert("Cancelamento da consulta cancelado.");
  }
}

function menu() {
  let opcao;
  do {
    console.clear();
    console.log("Menu:");
    console.log("1. Cadastrar Paciente");
    console.log("2. Marcar Consulta");
    console.log("3. Cancelar Consulta");
    console.log("4. Sair");
    opcao = parseInt(prompt("Escolha uma opção:"));

    switch (opcao) {
      case 1:
        cadastrarPaciente();
        break;
      case 2:
        marcarConsulta();
        break;
      case 3:
        cancelarConsulta();
        break;
      case 4:
        console.log("Saindo do sistema...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== 4);
}

menu();
