# for i in range(1,1000+1): #this for loop starts from an implicit value of 1 and an explicit value of 1000
#     if i%2 != 0: #this line checks to see that the remainder of 1 divided by 2 is not 0, meaning that the value is odd
#         print i
#
# for i in range(5,1000000+1): #similar to line 1
#     if i%5 == 0: # this checks to see that the value is divisable by 5
#         print i

a = [1, 2, 5, 10, 255, 3]
value = 0
for x in a:
    value += x
print value

print value/len(a)
