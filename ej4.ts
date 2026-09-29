interface Inventario {
    agregarEquipo(nombre: string, tipo: string, estado: "disponible" | "en reparación") : void;
    listarEquipos(): void;
}


class InventarioViejo {
     items: string[] = [];

    agregarItem(item: string) {
        this.items.push(item);
    }
}

class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: "disponible" | "en reparación"): void {
        this.inventarioViejo.agregarItem(`nombre: "${nombre}," tipo: "${tipo}", estado: "${estado}"`)
    }

    public listarEquipos(): void {
        console.log(this.inventarioViejo.items);
    }
}


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]