l = ['hello','world','my','name','is','Anna']
char = 'o'
List = []
def find(item):
    for idx in item:
    	if idx.count(char):
    		List.append(idx)
    	else:
    		continue
    print List
find(l)
