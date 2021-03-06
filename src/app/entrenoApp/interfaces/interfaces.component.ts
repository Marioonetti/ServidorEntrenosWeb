
export interface Entrenamiento{
  id?: number,
  titulo:string,
  comentario: string,
  idcliente?: number,
  series: Serie[]
}

export interface Serie{
  id?: number,
  rir: number,
  seriesRepeticiones: string,
  enfoque:string,
  idEjercicio:number
}

export interface Ejercicio{
    id?: number,
    nombre: string,
    intensidad: string,
    grupoMuscular:string,
    img:string,
    descripcion:string
  }

export interface Entrenador{
  id?: number,
  username : string,
  password : string,
  nombre : string,
  apellidos : string,
  edad : number,
  descripcion?:string,
  imagen : string
}


export interface Cliente{
  id?: number,
  nombre : string,
  apellidos : string,
}
