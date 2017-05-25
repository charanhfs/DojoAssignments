class Product(object):
    def __init__(self,price,name,weight,brand,cost):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"

    def sell(self):
        self.status = "Sold"
        return self

    def add_tax(self,tax):
        sales_tax = self.price * tax
        tax_price = self.price + sales_tax
        print "Price after tax:",tax_price, "Tax:", sales_tax
        return self

    def returns(self,reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "new":
            self.status = "for sale"
        elif reason == "used":
            self.status = "Used"
            self.price = self.price * 0.8
        return self
    def display(self):
        print "Price:", self.price, "Name:", self.name, "Weight:", self.weight, "Brand:", self.brand, "Cost:", self.cost, "Status:", self.status

milk = Product(100,"Nestle full cream","250ml","Nestle",110)
print milk.add_tax(.14).returns("used").display()
