l = ['magical unicorns',19,'hello',98.98,'world']
a = [2,3,1,7,4,12]

def type_List(item):
    countstr = 0
    countind = 0
    string = ""
    sum = 0
    for index in item:
        if type(index) == str:
            string += index + " "
            countstr += 1
        elif type(index) == int:
            sum += index
            countind += 1
    if countind > 0 and countstr > 0:
        print "mixed type"
        print string
        print sum
    elif countstr > 0:
        print "string type"
        print string
    elif countind > 0:
        print "int type"
        print sum



type_List(a)
