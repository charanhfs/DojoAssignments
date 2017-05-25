#names part 1
'''students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def names(item):
    for x in item:
        for keys in x.iterkeys():
            first = x['first_name']
            last = x['last_name']
        print first +" "+ last
names(students)'''

#names part 2
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def unpack(item):
    for key,val in item.iteritems():
        print key
        counter = 0
        for x in val:
            counter += 1
            first = x['first_name']
            last = x['last_name']
            characters = len(first) + len(last)
            print counter,"-", first, last, "-", characters
unpack(users)
