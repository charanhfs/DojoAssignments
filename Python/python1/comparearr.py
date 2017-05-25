list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

def compare(p1,p2):
    if p1 == p2:
        print "identical"
    elif p1 != p2:
        print "not identical"


compare(list_one, list_two)
