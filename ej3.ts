interface Observador {
    notificar(nombre: string, estado: "disponible" | "en reparación"): void;
}

class Soporte implements Observador {

    public notificar(nombre: string, estado: "disponible" | "en reparación"): void {
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}.`)
    }
}

class Equipo {
    private nombre: string;
    private tipo: string;
    private estado: "disponible" | "en reparación"
    private observadores : Observador[] = [];

    constructor(nombre: string, tipo: string, estado: "disponible" | "en reparación") {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    public agregarObservador(observador: Observador) {
        this.observadores.push(observador);
    }

    public cambiarEstado(estado: "disponible" | "en reparación") {
        this.estado = estado;
        this.observadores.forEach((obs) => obs.notificar(this.nombre, this.estado))
    }
}



const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.