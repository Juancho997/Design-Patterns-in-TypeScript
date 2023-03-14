// Solo se puede tener una instacia de la clase en toda la app
// No se usa la keyword 'new' para crear nuevas instancias

// - Se puede compartir el state de la app entre componentes.
// - Se evitan altos tiempos de inicialización (se evita instancar múltiples veces una clase compleja)
// - Permite comunicar clases de manera más eficiente.
// - Permite distinguir aquellos items que son únicos.



export class StatsTracker {
    buttonClicks: number = 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetViews: number = 0;

    // cada vez que se llama a new, se llama al constructor
    // Este verifica si ya existe una instancia (si ya se llamó a new previamente)
    // De ser la primera vez, es decir, al inicializarse la clase por ejecutarse por primera vez el código, 
    // asigna dicha instancia a la propiedad _instance de la clase
    // Caso contrario, lanza error por ya existir una instancia
    constructor() {
        if (StatsTracker._intance) {
            throw new Error('Cannot initialize singleton class using NEW')
        }
        StatsTracker._intance = this;
    }

    // al ser instanciada la clase por primera vez al arranque de la app, se llama a si misma 
    // y esa primer instancia es el valor de _instance
    private static _intance: StatsTracker = new StatsTracker();

    public static get instance(): StatsTracker {
        return StatsTracker._intance;
    }
}