# odd and even numbers function
'''def oddeven():
    for val in range(10):
        if val % 2 != 0:
            print "Number is " + str(val) + "." + " This is an odd number."
        elif val % 2 == 0 and val != 0:
            print "Number is " + str(val) + "." + " This is an even number."
        else:
            print "The number is " + str(val) + "."

oddeven()'''

# function that multiplies a given list of integer values by 5
a = [10,2,6,8,6,4]
def multiply(lists,num):
    for x in range(len(lists)):
        lists[x] *= num
    return lists

def layered_arr(arr):
    val_arr = []
    for x in arr:
        in_arr = []
        for i in range(x):
            in_arr.append(1)
        val_arr.append(in_arr)
    print val_arr

layered_arr(multiply(a,2))
