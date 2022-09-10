import eel
import os

path_web = os.path.dirname(os.path.realpath(__file__)) + "\\web"

eel.init(path_web)

@eel.expose

def add(num1, num2):
    output = int(num1) + int(num2)
    return output

eel.start("index.html")