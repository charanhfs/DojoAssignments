me = {"name":"Charan", "age":22, "country":"Trinidad", "favourite language":"Python"}

def dictionary(item):
    for keys,values in item.iteritems():
        if keys == "name":
            print "My name is " + values
        elif keys == "age":
            print "My age is " + str(values)
        elif keys == "country":
            print "My country of birth is " + values
        elif keys == "favourite language":
            print "My favourite language is " + values


dictionary(me)
