#define the menu of restourant
menu = {
    "pizza":100,
    "pasta":50,
    "burger":70,
    "salad":60,
    "coffee":80    
}

print("wellcome to python restaurant")
print("pizza:Rs100\npasta:Rs50\nburger:Rs70\nsalad:Rs60\ncoffee:Rs80")

order_total = 0
#80 + 70 = 150     

item1 = input("enter the name of item you want to order = ")
if item1 in menu:
    order_total += menu[item1] #0 + 50
    print(f"your item {item1} has been added to your order")

else:
    print(f"ordered item {item1} is not avaialable yet")

anotherorder = input("do you want to add another item?(yes/no )") 
if anotherorder == "yes":
    item2 = input("enter the name of second item =")
    if item2 in menu:
        order_total += menu[item2]
        print(f"item {item2} has been added to order")
    else:
        print(f"oredered item{item2} is not available!")  


#bill print karvane ke liye 

order_list = {}

# item1 ke liye
if item1 in menu:
    order_list[item1] = 1   # default quantity 1

# item2 ke liye
if anotherorder == "yes":
    if item2 in menu:
        order_list[item2] = 1

        
print("\n--- BILL ---")

item = 0
qty = 0
    
for item, qty in order_list.items():
    print(item, "x", qty, "=", menu[item]*qty)        
  

print(f"the total amount of items to pay this {order_total}")  