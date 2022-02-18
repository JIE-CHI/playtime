js_file = './app.js'
new_jsfile = './temp'
word_list = ['./wordlist_en.txt', './wordlist_ch.txt']

en_words = []
zh_words = []
with open (word_list[0]) as f:
    for line in f:
        en_words.append('"' + line.strip() + '"')
with open(word_list[1], encoding='utf-8') as f:
    for line in f:
        zh_words.append('"' + line.strip() + '"')
fout = open(new_jsfile, 'w')
with open(js_file) as f:
    for line in f:
        if line.startswith('var eWords'):
            fout.writelines(f"var eWords = [{(', ').join(en_words)}]\n")
        elif line.startswith('var zWords'):
            fout.writelines(f"var zWords = [{(', ').join(zh_words)}]\n")
        else:
            fout.writelines(line)

from hashlib import new
import os

os.system(f"mv {new_jsfile} {js_file}")