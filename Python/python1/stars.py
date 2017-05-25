import string

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_Stars(item):
    for i in item:
        if type(i) == int:
            print "*" * i
        elif type(i) == str:
            length = len(i)
            first = i[0].lower()
            print first * length

draw_Stars(x)
