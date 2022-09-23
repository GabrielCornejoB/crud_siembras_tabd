# **CRUD Siembras Corantioquia**

Aplicación Web de escritorio para aprender a usar SQLite, realizada para el curso Tópicos Avanzados en Bases de Datos 2022-2.

El dominio del problema fue tomado de: [Datos Abiertos Colombia](https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Siembras/4wun-xk5g). Contiene el reporte de siembras reportadas en el aplicativo Sembraton sobre la jurisdicción de Corantioquia. Además de las tablas obtenidas en el Dataset, se crearon tablas adicionales.

A continuación se encuentran vinculos que te desplazarán a las diferentes secciones de este README:

[Implementación](#implementación)

[Tablas del dominio]()

---

## **Implementación**
En la clase se realizó/está realizando el ejercicio en una aplicación de Windows Forms en .NET usando C# ([Repo de proyecto original](https://github.com/jdrodas/SiembrasCorantioquia)). Pero se nos otorgó la opción de realizarlo en Python, recomendandonos Django, Flask, PyQt y Tkinter. Pero para esta solución decidí usar una librería llamada [eel](https://github.com/ChrisKnott/Eel), esta librería permite realizar aplicaciones tipo 'electron' con Python. 

Esta librería si nos permite realizar una aplicación tipo ejecutable (se recomienda usar PyInstaller), pero en este momento del desarrollo funciona abriendo el navegador de Google Chrome. Cuando la aplicación esté finalizada se tiene pensado realizar el ejecutable.

### **¿Cómo funciona eel?**
Esta librería permite realizar un sitio web con código HTML, CSS y JS, y además permite conectar este sitio web con Python. Donde el código en JavaScript se encarga de llamar las funciones de Python y pasarles los valores de los inputs, labels, etc que se encuentran en el HTML.

### **¿Cómo lo estoy usado en la aplicación?**
En esta aplicación tengo un inicialmente un archivo **"main.py"**, este se encarga de conectarse a la base de datos SQLite y realizar las Querys que sean necesarias, por cada tipo de operación hay una función, a la cual se le coloca el 'decorador' @eel.expose para que puedan ser reconocidos por JS.

Luego hay un archivo **"crud_tabla.js"** para cada tabla, en estos archivos se encuentran métodos que se encargan de obtener los valores de los inputs, y pasar esos valores como argumentos a los métodos en el main.py.

---

## **Dominio del problema**

En este dominio del problema hay actualmente 5 tablas:

* **Siembras:** Esta es la tabla principal, contiene el registro de las siembras realizadas, con fecha, vereda, tipo de arbol plantado y contratista.
* **Veredas:** Tabla que contiene las veredas disponibles y el municipio en el que se encuentran.
* **Municipios:** Tabla con los municipios de Antioquia.
* **Contratistas:** Tabla con los contratistas que realizan los trabajos de siembras.
* **Árboles:** Tabla con las variedades de árboles a sembrar.

Este es el diagrama relacional del problema:

(Aquí iría la imagen del diagrama, si tuviera una :c)

