import eel
import os

path_web = os.path.dirname(os.path.realpath(__file__)) + "\\web"
eel.init(path_web)

# @eel.expose       # en cada def

eel.start("index.html")