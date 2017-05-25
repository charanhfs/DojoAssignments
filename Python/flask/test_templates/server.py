from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html", phrase="Hello", times=5)
@app.route('/ninjas')
def ninjas():
    return render_template("ninjas.html")
@app.route('/dojos/new', methods=['POST'])
def new():
    random = "Hello me"
    return render_template("dojos.html", random=random)

app.run(debug=True)
