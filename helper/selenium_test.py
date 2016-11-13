import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
import sys
import random

sys.path.insert(1, "../bin")

def init_driver():
    driver = webdriver.Firefox()
    driver.wait = WebDriverWait(driver, 5)
    return driver
 
 
def lookup(driver, query):
    driver.get("http://localhost:9000")
    try:
        user = driver.wait.until(EC.presence_of_element_located((By.ID, "un")))
        user.send_keys(query)
        user.send_keys(Keys.RETURN)
        chat = driver.wait.until(EC.presence_of_element_located((By.ID, "box")))
        for i in range(0, 5):
            chat.send_keys("sometext"+str(random.random()))
            chat.send_keys(Keys.RETURN)
        # assert "Chocks" in driver.page_source
    except TimeoutException:
        print("Elements not found..")

if __name__ == "__main__":
    driver = init_driver()
    lookup(driver, "user"+str(random.random()))
    time.sleep(5)
    driver.quit()
