# x = int(input("Sınav 1 giriniz: "))
# y = int(input("Sınav 2 giriniz: "))
# z = int(input("Sınav 3 giriniz: "))

# print(f"Sınav ortalamanız: {(x+y+z)/3}")

# ? dışaırdan pi sayısını girilerek yarı çapı 5 daire alan

# pi = float(input("Pi değerini giriniz: "))
# r = 5
# print(f"Dairenizin alanı: {round(pi*(r**2), 2)}") 

# ! string parçalama 

# text = "Merhaba benim adım emre sarigül"

# adSoyad = text[19:]
# soyad = text[24:]
# ad = text[19:23]

# print(adSoyad)
# print(soyad)
# print(ad)

# # ! ikişer atlama 

# text = "Bugün hava yanıyor"

# print(text[7:12:2])

# text = "Kış aylarını özedim"

# print(text[:9])

# text = "Benim adım Devran soyadım Sever"
# ad = text[11:17]
# soyad = text[26:]

# print("Merhaba benim adım {} soyadım {}".format(ad,soyad))

# text = "4 sayısı 8 e eşittir ve 4 2 nin kübüdür"

# s1 = text[9] 
# s2 = text[24]

# print("4 sayısı {}'e eşittir ve {} 2'nin kübüdür".format(s2,s1))

# text = "Arabanmın markası Renoult modleli Clio ve 2020 modeldir."

# marka = text[-37,-30]
# model = text[-22,-18]
# yil = text[-14,-11]

# print(marka,model,yil)

# text = "Hava gerçekten çok soğuk dikat edin"
# sıcak = "sıcak"
# print(text[:19]+ sıcak + text[24:])

text = "Onun arabası var güzel mi güzel"

var = text[13:16].upper

print(text[:12] + var + text[16:])

