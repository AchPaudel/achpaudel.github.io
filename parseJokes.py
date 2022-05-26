jokes = open("jokesUnformatted.txt")

jokesArr = list()

for joke in jokes:
    jokesArr.append(joke)

jokeDict = dict()

for x in jokesArr:
    splitJoke = x.split('?', 1)
    if(len(splitJoke) > 1):
        q = splitJoke[0]
        result = ''.join([i for i in q if not i.isdigit()])
        a = splitJoke[1]
        jokeDict[result[2:]] = a[1:]

iter = 1
for x in jokeDict:
    print("joke#" + str(iter) + ": " + x)
    print("ans#" + str(iter) + ": " + jokeDict.get(x))
    iter+=1
