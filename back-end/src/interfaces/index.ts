export interface IPlans {
  id?: number,
  value: number,
  description: string,
  speed: number,
}

export interface IClients {
  id?: number,
  name: string,
  cpf: string,
  rg: string
  date_of_birth: string,
  tel: string,
  email: string,
  adress: string,
  number: number,
  district: string,
  city: string,
  cep: string
  plan_id: number,
}

export interface ICoverage {
  cep_true?: string,
  cep_false?: string
}