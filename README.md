CommonJS => require
ESModules => import/export

Por padrão o nodejs não entende o padrão ESModule, para que isso seja possivel é necessario adicionar no package.json:
```JSON
"type": "module"
```
Obs: Nas novas versões do nodejs para diferenciar modulos internos importados é necessario adicionar o prefixo node:
```JS
import http from 'node:http'
```