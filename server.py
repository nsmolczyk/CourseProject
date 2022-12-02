import joblib
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

classifier = joblib.load('./model.joblib')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/classify')
@cross_origin()
def my_route():
  text = request.args.get('review')
  rating = classifier.predict([text])
  return str(rating[0])