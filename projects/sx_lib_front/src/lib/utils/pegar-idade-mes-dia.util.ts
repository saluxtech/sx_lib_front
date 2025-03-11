import { IdadeModel } from "./idade.model";
import { PacienteModel } from "./paciente.model";

export function pegarIdadeMesesDias(): IdadeModel | null {
  const paciente: PacienteModel = JSON.parse(sessionStorage.getItem("CD_PACIENTE")!) || null;
  if (!paciente) return null;
  if (!paciente.IDADE) return null;
  const partes = paciente.IDADE.match(/(\d+)\s+ano(s)?\s+(\d+)\s+mes(es)?\s+(\d+)\s+dia(s)?/);
  if (!partes) throw new Error('Formato de string inválido');
  const anos = Number(partes[1]);
  const meses = Number(partes[3]);
  const dias = Number(partes[5]);
  return {anos, meses, dias}
}

export function pegarQuantidadeDeMeses(): number | null {
  const idade = pegarIdadeMesesDias();
  if (!idade) return null;
  return idade.meses + (idade.anos * 12);
}

export function pegarIdade(): number | null {
  const idade = pegarIdadeMesesDias();
  if (!idade) return null;
  return idade.anos;
}

export function pegarIdadeMesesDiasComparar(dataComparar: string): IdadeModel | null {
  const paciente: PacienteModel = JSON.parse(sessionStorage.getItem("CD_PACIENTE")!);
  if (!paciente) return null;
  if (!paciente.DT_NASCIMENTO) return null;
  const dataNascimento = new Date(paciente.DT_NASCIMENTO);
  const dia = Number(dataComparar.substring(0, 2));
  const mes = Number(dataComparar.substring(2, 4)) - 1;
  const ano = Number(dataComparar.substring(4, 8));
  const dataPreNatal = new Date(ano, mes, dia);
  let anos = dataPreNatal.getFullYear() - dataNascimento.getFullYear();
  let meses = dataPreNatal.getMonth() - dataNascimento.getMonth();
  let dias = dataPreNatal.getDate() - dataNascimento.getDate();
  if (dias < 0) {
    meses--;
    const ultimoDiaDoMesAnterior = new Date(dataPreNatal.getFullYear(), dataPreNatal.getMonth(), 0).getDate();
    dias += ultimoDiaDoMesAnterior;
  }
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  return { anos, meses, dias };
}
