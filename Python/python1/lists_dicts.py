name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def listtodict(i1,i2):
    ziplist = zip(i1,i2)
    dicts = dict(ziplist)
    print dicts

listtodict(name,favorite_animal)
