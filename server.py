import joblib
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from flask import jsonify
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))
ps = PorterStemmer()

def cleanDocument(document):
    tokens = word_tokenize(document)
    tokens = [t for t in tokens if t.isalpha() ]
    tokens = [t.lower() for t in tokens ]
    tokens = [t for t in tokens if not t in stop_words]
    tokens = [t for t in tokens if len(t) > 2 and len(t) < 30]
    tokens = [ps.stem(t) for t in tokens ]
    return " ".join(tokens)

classifier = joblib.load('./model.joblib')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/classify')
@cross_origin()
def my_route():
  text = cleanDocument(request.args.get('review'))
  rating = classifier.predict([text])
  return jsonify(rating[0])