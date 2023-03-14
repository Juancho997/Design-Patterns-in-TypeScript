# Decorator

- Respeta el ppio. Open/Close.
- Nos permite agregar dinámicamente responsabilidades a un objeto durante la ejecución del código.
- Resuelve el problema de crear un objeto distinto por cada responsabilidad nueva, más allá del uso que le demos.
- Creamos la clase y dos tipos de subclases : 
    - classComponent (feauture que se puede agregar a la clase. Contiene una referencia a la clase ppal)
    - concreteClass

(DualMonitor ( Gpu ( Printer ( Mic ( Computer

Agregamos un decorator (classComponent) a la clase, el cual tiene una referencia al objeto Computer.
Dejamos lista este decorator para ser consumido por otro decorator.
La idea es agregar capas de features listas para ser consumidas.
