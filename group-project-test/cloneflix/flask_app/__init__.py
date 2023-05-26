from flask import Flask

app = Flask(__name__)

app.secret_key = "123456"

# flash utilizes session; secret key is required for flash to work; flash exists for one redirect