import pyautogui
import time

time.sleep(5)

def mesaf():
    target_color = (32, 245, 31)  # Hedef renk kodu
    screen_width, screen_height = pyautogui.size()  # Ekran boyutunu al
    
    # Ekrandaki taramayı belirli bir alanla sınırla
    x_range = range(0, screen_width, 10)  # Her 10 pikselde bir
    y_range = range(0, screen_height, 10)  # Her 10 pikselde bir

    for x in x_range:
        for y in y_range:
            pixel_color = pyautogui.pixel(x, y)
            if pixel_color == target_color:
                pyautogui.moveTo(x, y)
                return  # Hedef rengi bulduğunda fonksiyonu sonlandır

    print("Hedef renk bulunamadı.")

# Sonsuz bir döngü içinde koşullu ifadeyi çalıştır
while True:
    mesaf()
    time.sleep(0.5)  # Her döngüden sonra 0.5 saniye bekle
