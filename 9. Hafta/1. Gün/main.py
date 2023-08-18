# text = "python öğrenmek çok zevkli react ondan güzel"
# text = text.replace("çok", "az")

# text2 = "NEOS Yazılım akademi bünyesinde yazılım uzmanlığı eğitimi alyorum"
# print(text2.find("yazılım"))

# text = "elma", "armut", "kiraz"
# x = "_".join(text)
# print(x)

# text = "Buranın havası çok güzel"
# print(text.startswith("Buranın")) #! Başladığı elemanı kontrol eder
# print(text.endswith("zel")) #! bittiği elemanı kontrol eder

# # ! strip() silmek istediğin ifadeleri siler

# text = "    Selam python öğreniyorum    "
# print(text.strip()) 

# text = "/*!.Merhaba, python öğreniyorum **/.,"
# son = text.strip("/.,!* ")
# print(son)

# text = "4 sayısı 8 e eşittir ve 4 2 nin kübüdür"
# son = text.replace("8", "4")
# sonson = son.replace("e 4", "e 8")
# print(sonson)

# text = "Selam python öğreniyorum, ingilizce de öğrenmek istiyorum."
# son = text.replace("python", "DJango")
# print(son.replace("öğrenmek", "ÖĞRENMEK"))

# text = "   *   BUGÜN HAVA SICAK   ..,"

# print(text.strip(" *.,"))

# text = "Benim para sayan pahalı Mackbook'um"
# strip = text.replace("pahalı", "")
# cptlz = strip.title()
# print(cptlz.split())

# text = "buradaki 2 manavda 2 elma, 4 armut, 4 kiraz yok"

# elma= input("Elma sayısı")
# armut= input("Armut sayısı")
# kiraz= input("Kiraz sayısı")

# print("Buradaki 2 Manavda {} elma, {} armut ve {} kiraz var".format(elma, armut, kiraz))


a = "Merhaba ben devran"

print(a.split())


list1 = [ "elma", "armut", "kivi", "kiraz", "muz" ]

print( list1[1::2] )

listem = [1,2,3,4,5,7]
listem.insert(5, 6)
print(listem)



list1 = [ "java", "javascript", [ "dart", "jinja" ],["python","c++"]]
print( list1[ 3][ 0 ] )