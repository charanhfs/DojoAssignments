class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12

    def display_all(self):
        print "Price:", self.price
        print "Speed:", self.speed
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax

frontier = Car(10000,"100MPH", "Diesel", 15000)
suzuki = Car(12000,"200MPH", "Gasoline", 115000)
elantra = Car(9000,"120MPH", "Gasoline", 1000)
lancer_evolution = Car(16000,"300MPH", "Gasoline", 117000)
corolla = Car(7000,"150MPH", "Gasoline", 5000)
cruze = Car(6000,"110MPH", "Gasoline", 14000)
print frontier.display_all()
print suzuki.display_all()
print elantra.display_all()
print lancer_evolution.display_all()
print corolla.display_all()
print cruze.display_all()
