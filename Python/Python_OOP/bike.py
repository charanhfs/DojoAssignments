class bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "price is" , self.price , "Max Speed" , self.max_speed , "Miles" , self.miles


    def ride(self):
        print "Riding..."
        self.miles += 10
        return self


    def reverse(self):
        if self.miles < 5:
            self.miles = 0
            print "cannot reverse anymore!"
        else:
            print "Reversing..."
            self.miles -=5
        return self


bike1 = bike(1000,"25mph")
bike2 = bike(300, '30MPH')
bike3 = bike(1000, '25MPH')
# print bike1.ride().ride().ride().reverse().displayInfo()
# print bike2.ride().ride().reverse().reverse().displayInfo()
print bike3.reverse().reverse().reverse().displayInfo()
