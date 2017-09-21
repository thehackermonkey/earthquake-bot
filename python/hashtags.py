from textblob import TextBlob


file = open("../csv/tweets.csv","r")
print(file.read())

blob = TextBlob(file.read())

print(blob.words)
