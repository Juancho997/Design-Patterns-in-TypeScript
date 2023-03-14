# Dependency Injection

- El uso de 'new' está restringido
- Aquellos objetos que no dependan de otras entidades pueden ser instanciadas ('Value Objects')
- Factories pueden usar 'new', para eso fueron creadas
- No se puede usar 'new' para instanciar dependencias en el constructor de una clase

! Para lograr esto en TS, necesitamos de un container de dependencias !

## Esquema ejemplo

             ____________________ProfileService_____________________
            |                           |                           |
     __UserService__                HttpClient                   Endpoints
    |               |                   |
HttpClient      AuthService         XHRBackEnd

## Sin inyeccion de dependencias

```javascript
export class ProfileService {
    private _usersService: UsersService;
    private _httpClient: HttpClient;
    private _endpoints: Endpoints;

    public constructor(){
        this._usersService = new UsersService();
        this._httpClient = new HttpClient();
        this._endpoints = new Endpoints();
    }    
}
```

- Si no sabemos como inicializar cada instancia, tendremos errores.
- En este caso, UsersService necesita de HttpClient() y AuthService() para funcionar.

## Inyección de dependencias

- Nos pide que "invirtamos" la inicialización de las clases necesarias (dependencias) en la clase objetivo.
- Pasamos las clases YA inicializadas como parámetos del contructor, y las definimos como propiedades a utilizar por la clase objetivo.
- De esta forma, ProfileService no es responsable de la inicialización de cada dependencia. No necesita saber como crear las instancias de sus dependencias, ya que las recibe en el constructor YA inicializadas.

```javascript
export class ProfileService {
    private _usersService: UsersService;
    private _httpClient: HttpClient;
    private _endpoints: Endpoints;

    public constructor(usersService: UsersService, httpClient: HttpClient, 
    endpoints: Endpoints) {
        this._usersService = usersService;
        this._httpClient = httpClient;
        this._endpoints = endpoints;
    }  

}
```


## Entonces, ¿quien sabe como inicilizar las dependencias?

### -> DI Container / IoC Container 

- IoC = Inversion of Control
- Es la entidad responsable de este paso previo
- Cada vez que creamos un componente en nuestra app, la 'registramos' en el Container.
- De esa forma, sabe cómo cada componente debe inicializarse. 
- El container provee una interfaz para obtener una instancia de cada componente donde todas sus dependencias se incluyen.
