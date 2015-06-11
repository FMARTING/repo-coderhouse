El objetivo de este TP es afianzar los conocimientos de [GIT](https://git-scm.com) y el manejo de [Github](https://help.github.com). Para esto se pide que se realice lo siguiente, y se recomienda el [uso de consola](http://www.ubuntu-guia.com) (gitbash) por sobre el uso de alguna herramienta gráfica que permita hacer lo mismo.

Recuerden que la mayoría de los comandos al ejecutarlos con la opción **-h**, suelen darnos información de su uso, y que en el caso del comando **git**, pueden consultar la ayuda de este ejecutando: **git help** (ayuda general), o **git help comando** (ayuda particular del comando).

1. En el repositorio del curso, crear un directorio (carpeta), dentro de **tps**, llamado **2**. (hints: **mkdir** , **cd** , **ls**)
2. Pasar este archivo a [markdown](https://help.github.com/articles/markdown-basics/), o txt, y colocarlo dentro de este directorio con el nombre de README.md o README.txt respectivamente.
3. Agregar dentro de este directorio un archivo index.html, que contenga el esqueleto mínimo de HTML5, y dentro de la etiqueta body, colocar un div con id content. ( hints : abrir este directorio en sublime, y crear y editar este archivo desde aca)
4. Realizar un commit **solo** de este directorio. (hints : **git status**, **git add**, **git commit**)
5. Subir estos cambios al repositorio remoto (github). (hints : **git push -u**)
6. Crear un branch llamado **tp2-css**, y moverse a ese branch. (hints : **git checkout -b**, **git branch -av**)
7. Agregar dentro del directorio un archivo **main.css**, y modificar **index.html** (creado en 3) para que lo incluya.
8. Disponer dentro de **main.css**, las reglas de css necesarias para que:
  1. El body tenga [font size](https://developer.mozilla.org) de 20 pixels
  2. El div con id content tenga
    3. [width](https://developer.mozilla.org) de 20 em
    4. [height](https://developer.mozilla.org) de 10 em
    5. [background color](https://developer.mozilla.org) azul
    6. Este centrado horizontalmente (hints : margin auto)
9. Realizar un commit solo con los cambios realizados en 6 y 7. (hints : **git status**, **git add**, **git commit**)
10. Subir estos cambios al repositorio remoto (github). ( hints : **git push -u**)
11. En github realizar un PR ([pull request](https://help.github.com/articles/using-pull-requests/)) del branch creado en 6 y realizar el merge de este.
12. Enviar un mail a [fullstack@coderhouse.com](fullstack@coderhouse.com), avisando que se concluyo con la realizacion de este TP, con el link del repositorio.