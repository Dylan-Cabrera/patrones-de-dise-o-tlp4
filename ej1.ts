interface Equipo {
    nombre: string;
    tipo: string;
    estado: "disponible" | "en reparacion";
}

class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo[] = [];

    private constructor() {};

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario;
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo:string, estado: Equipo["estado"]) {
        this.equipos.push({
            "nombre": nombre,
            "tipo": tipo,
            "estado": estado,
        });
    }

    public listarEquipos(): Equipo[] {
        return this.equipos;
    }

}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());