# def multiply(arr,num):
#     lists = []
#     for x in range(len(arr)):
#         arr[x] *= num
#     return arr
#
#
# a = [2,4,10,16]
# b = multiply(a,2)
# print b

# max min function for a tuple
# tuple_data = ('physics', 'chemistry', 'x-ray', 'python')
# tuple_num = (67, 89, 31, 15)
# print max(tuple_data)
# print max(tuple_num)

# enumerate function for a tuple
# num = (1, 5, 7, 3, 8)
# for index, item in enumerate(num):
#     print(str(index)+ " = "+str(item))

# revered function for a tuple
# num = (9, 1, 8, 2, 7, 3)
# print tuple(reversed(num))


dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
countries = ["Italy", "Germany", "Spain", "USA"]


country_specialities = zip(countries, dishes)

country_specialities_dict = dict(country_specialities)
print country_specialities_dict
