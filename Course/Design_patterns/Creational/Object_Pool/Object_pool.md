# Un compendio de objetos preinicializados cuya inicialización es muy pesada

- Cada vez que necesitamos un objeto, lo tomamos del compendio, de la 'piscina'.
- Cuando terminamos de usarlo, lo devolvemos o destruimos.
- La idea es no inicializar una y otra vez objectos que sabemos son utilizados muchas veces (desarrollo de videojuegos : enemigos, balas, items, etc)
- Se puede implementar en combinación con Factory
