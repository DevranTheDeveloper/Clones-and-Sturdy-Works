import pyautogui
import time 

time.sleep(5)

def mesaf():
    pyautogui.write("N")
    time.sleep(2)
    pyautogui.write("A")
    time.sleep(2)
    pyautogui.write("B")
    time.sleep(2)
    pyautogui.write("E")
    time.sleep(2)
    pyautogui.write("R")
    pyautogui.press("enter")
    
    
while True:
    mesaf()    
    time.sleep(0)