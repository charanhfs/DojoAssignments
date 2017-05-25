# str = "It's thanksgiving day. It's my birthday,too!"
# print str
# print str.find("day")
# str = str.replace("day", "month")
# print str

# x = [2,54,-2,7,12,98]
# print x
# print min(x)
# print max(x)

# x = ["hello",2,54,-2,7,12,98,"world"]
# print x[0], x[len(x) - 1]

x = [19,2,54,-2,7,12,98,32,10,-3,6]
# print x
x.sort()
print x

first_list = x[0:len(x)/2]
print first_list
second_list = x[len(x)/2:len(x)]
print "first list", first_list
print "second_list", second_list
second_list.insert(0,first_list)
print second_list
