abstract class Equipo {
    public tipo: string;
    public nombre: string;
    public ram: string;
    public procesador: string;

  
    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
  }

    abstract detalles(): string;
}

class Notebook extends Equipo {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Notebook", nombre, ram, procesador);
  }

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop extends Equipo {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Desktop", nombre, ram, procesador);
  }

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends Equipo {
  constructor(nombre: string, ram: string, procesador: string) {
    super("Servidor", nombre, ram, procesador);
  }

  public detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  public crearEquipo(
    tipo: "Notebook" | "Desktop" | "Servidor",
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error(`El tipo de equipo "${tipo}" no está soportado.`);
    }
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());

