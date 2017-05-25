import random
def toss(num):
    head_toss = 0
    tail_toss = 0
    result = " "
    for x in range(0,num):
        attempt = x +1
        random_num = random.randint(0,1)
        if random_num == 0:
            head_toss += 1
            result = "It's a head!!!!"
        elif random_num == 1:
            tail_toss += 1
            result = "It's a tail!!!!"
        print "Attempt " + "#" + str(attempt) + " Throwing coin......." + result + " ..... " + "Got " + str(head_toss) + " head(s) " + "so far and " + str(tail_toss) + " tail(s) so far."


toss(12)
