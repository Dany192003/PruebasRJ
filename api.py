bucle=int(input("Ingrese un numero entero positivo: "))



if bucle<=0 :
    print("numero no es entero positivo")
else:
    for i in range(bucle):
        if not i%2==0:
            print(i, end=",")