import eel
import os
import json
import sqlite3 as sql

path_web = os.path.dirname(os.path.realpath(__file__)) + "\\web"
eel.init(path_web)

@eel.expose       
def select(table_name):
    conn = sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    l_ans = []
    for row in cursor.execute("SELECT * FROM " + table_name):
        l_ans.append(row)
    conn.close()
    encoded = json.dumps(l_ans, ensure_ascii=False).encode('utf8')
    decoded = encoded.decode()
    return decoded


@eel.expose
def create(table_name, args):
    conn = sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    if table_name == "municipios":
        query = "INSERT INTO municipios (nombre) VALUES ('" + args + "');"
        cursor.execute(query)
        conn.commit()
    conn.close()


@eel.expose
def update(table_name, args):
    conn =  sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    if table_name == "municipios":
        query = "UPDATE municipios SET nombre='" + args[1] + "' WHERE codigo=" + args[0] + ";"
        cursor.execute(query)
        conn.commit()
    conn.close()


@eel.expose
def delete(table_name, entry_id):
    conn = sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    if (table_name == "municipios"):
        query = "DELETE FROM municipios WHERE codigo=" + entry_id + ";"
        cursor.execute(query)
        conn.commit()
    conn.close()


eel.start("index.html")