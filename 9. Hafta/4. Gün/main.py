# for sayi in range(1, 11, 2):




#     print(sayi)

# sayi = int(input("Sayı Gir: "))
# toplam = 0 
# while sayi > 0:
#     toplam += sayi 
#     sayi -= 1
# print(toplam)


# tr = []
# toplam = 0
# while True:
#     sayi = int(input("Sayı Gir: "))
#     tr.insert(0, sayi)
#     toplam += sayi
#     if sayi == 0:
#         break
# print(toplam)
# print(tr)

# text = "Bugün python tekrar yapıyoz"
# print (f"Bu textte {text.count('a')} tane a, {text.count('e')} tane e vardır.")

text = "Her defasında ekileri biçenler ekmek için yemek yemeye geldiler."
list = text.split()
for eleman in list:
    e = eleman.count("e")
    print(f"{eleman} kelimede {e} tane e var.")