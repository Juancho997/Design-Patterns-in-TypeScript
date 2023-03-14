# InversifyJS

- Container que permite utilizar DI/IoC en TS.

- Inicialización :

1° Intalación de dependencias

```cmd
npm i inversify reflect-metadata
```

2° Habilitar decorators en tsconfig.json

```javascript
    "lib" : ["es6"],
    "types" : ["reflect-metadata", "node"]
```

3° Creamos el archivo types.ts para habilitar las referencias a implementaciones a inyectar.
4° Crear archivo inversify.config.ts, donde creamos el container y bindeamos interfaces y referencias con la implementación deseada.

## Dependency Scopes

- La mayoría de Containers soportan tres tipos de dependencies scopes:

- Singleton (cada vez que requerimos una instancia del container devuelve siempre la misma)
- Transient (cada vez que requerimos una instancia del container devuelve una nueva)
- Request   (Apuntado al BackEnd : Es un Singleton solo en el scope de una petición HTTP)

-Con InversifyJS podemos, en el inversify.config.ts, especificar el scope a través de métodos invocados luego de cada implementacion bindeada. Por defecto es Transient. Podemos cambiarlo a través de un objeto de opciones al instanciar el Container.
