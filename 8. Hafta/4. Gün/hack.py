import pyautogui
import time 

time.sleep(5)


def mesaf():
    pyautogui.moveTo(x=1820,y=13)
    time.sleep(1)
    pyautogui.click()
    time.sleep(1)
    pyautogui.moveTo(x=1269, y=1050)
    time.sleep(1)
    pyautogui.click()
    time.sleep(1)
    pyautogui.moveTo(x=542, y=747)
    time.sleep(1)
    pyautogui.click()
    time.sleep(1)
    pyautogui.write("deneme")
    time.sleep(1)
    pyautogui.moveTo(x=566, y=897)
    time.sleep(1)
    pyautogui.click()
    time.sleep(1)
    pyautogui.moveTo(x=1011, y=310)
    
    
while True:
    mesaf()    
    time.sleep(100)