from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
import string
import sklearn as sk
from sklearn.utils import shuffle
import nltk
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