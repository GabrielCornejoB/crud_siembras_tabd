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
    if table_name == "municipios" or table_name == "arboles" or table_name == "contratistas":
        query = "INSERT INTO " + table_name + " (nombre) VALUES (?)"
        cursor.execute(query, [args])
        conn.commit()
    conn.close()

@eel.expose
def update(table_name, args):
    conn =  sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    if table_name == "municipios" or table_name == "arboles" or table_name == "contratistas":
        query = "UPDATE " + table_name + " SET nombre=(?) WHERE codigo=(?);"
        cursor.execute(query, [args[1], args[0]])
        conn.commit()
    conn.close()

@eel.expose
def delete(table_name, entry_id):
    conn = sql.connect("siembrasDB.sqlite")
    cursor = conn.cursor()
    if table_name == "municipios" or table_name == "arboles" or table_name == "contratistas":
        query = "DELETE FROM " + table_name + " WHERE codigo=(?);"
        cursor.execute(query, [entry_id])
        conn.commit()
    conn.close()

eel.start("index.html")