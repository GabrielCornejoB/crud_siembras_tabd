import eel
import os
import json
import sqlite3 as sql

path_web = os.path.dirname(os.path.realpath(__file__)) + "\\web"
eel.init(path_web)

@eel.expose       # en cada def
def select():
    conn = sql.connect("siembras_db.db")
    cursor = conn.cursor()
    l_ans = []
    for row in cursor.execute("SELECT * FROM municipios;"):
        l_ans.append(row)
    conn.close()

    encoded = json.dumps(l_ans, ensure_ascii=False).encode('utf8')
    decoded = encoded.decode()
    return decoded

eel.start("index.html")