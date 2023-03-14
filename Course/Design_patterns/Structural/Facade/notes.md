# Facade

- Su objetivo es simplificar una interfaz compleja
- Es la aplicación del Principio del Menor Conocimiento (Ley de Demeter) :
Cada componente debe tener poco conocimiento de como los demás componentes funcionan
y solo comunicarse con algunos contados "amigos" cercanos.
- Su enunciado básico es:

    A method of an object should invoke only the methods of the following kinds of objects:
        1. itself
        2. its parameters
        3. any objects it creates/instantiates
        4. its direct component objects

- Una forma de comprender mejor esta ley es dar la vuelta al enunciado y enumerar los casos prohibidos: no se debe llamar a métodos de los objetos devueltos por otros métodos.
- Comunmente se utiliza al consumir API's externas.

                                        MyApp
                                          |
                                      HTTP Client
                                          |                                       
                                        Facade
                                          |
                                        Service
                                          |
                                    Service RESTful API