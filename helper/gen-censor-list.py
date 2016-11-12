#!/usr/bin/python
# Python Version 2.7
import random
import json

word_file = "/usr/share/dict/words"
words = open(word_file).read().splitlines()
json_file = open("censor-list.json", "w")
censor_array = []
for x in range(0, 20000):
	censor_array.append(random.choice(words))
json_file.write(json.dumps(censor_array))
json_file.close()
