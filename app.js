var nNum;      	
function numGen(Words) {
	num = Math.floor((Math.random() * Words.length));
	nNum = num;
}

var eWords = ["Stapler", "Desk", "Pay cheque", "Work computer", "Fax machine", "Phone", "Paper", "Light", "Chair", "Desk lamp", "Notepad", "Paper clips", "Binder", "Calculator", "Calendar", "Sticky Notes", "Pens", "Pencils", "Notebook", "Book", "Chairs", "Coffee cup", "Chairs", "Coffee mug", "Thermos", "Hot cup", "Glue", "Clipboard", "Paperclips", "Chocolate", "Secretary", "Work", "Paperwork", "Workload", "Employee", "Boredom", "Coffee", "Golf", "Laptop", "Sandcastle", "Monday", "Vanilla", "Bamboo", "Sneeze", "Scratch", "Celery", "Hammer", "Frog", "Tennis", "Hot dog", "Pants", "Bridge", "Bubblegum", "Candy bar", "Bucket", "Skiing", "Sledding", "Snowboarding", "Snowman", "Polar bear", "Cream", "Waffle", "Pancakes", "Ice cream", "Sundae", "beach", "Sunglasses", "Surfboard", "Watermelon", "Baseball", "Bat", "Ball", "T-shirt", "Kiss", "Jellyfish", "Jelly", "Butterfly", "Spider", "Broom", "Spiderweb", "Mummy", "Candy", "Bays", "Squirrels", "Basketball", "Water Bottle", "Unicorn", "Dog leash", "Newspaper", "Hammock", "Video camera", "Money", "Smiley face", "Umbrella", "Picnic basket", "Teddy bear", "Ambulance", "Ancient Pyramids", "Bacteria", "Goosebumps", "Pizza", "Platypus", "Clam Chowder", "Goldfish bowl", "Skull", "Spiderweb", "Smoke", "Tree", "Ice", "Blanket", "Seaweed", "Flame", "Bubble", "Hair", "Tooth", "Leaf", "Worm", "Sky", "Apple", "Plane", "Cow", "House", "Dog", "Car", "Bed", "Furniture", "Train", "Rainbow", "Paintings", "Drawing", "Cup", "Plate", "Bowl", "Cushion", "Sofa", "Sheet", "Kitchen", "Table", "Candle", "Shirt", "Clothes", "Dress", "Pillow", "Home", "Toothpaste", "Guitar", "Schoolbag", "Pencil Case", "Glasses", "Towel", "Watch", "Piano", "Pen", "Hat", "Shoes", "Socks", "Jeans", "Hair Gel", "Keyboard", "Bra", "Jacket", "Tie", "Bandage", "Scarf", "Hair Brush", "Cell Phone"]
var zWords = ["冰箱", "油条", "餐巾纸", "绿色", "话剧", "眼镜", "乒乓球", "啤酒", "洗衣机", "面条", "超市", "黄色", "小品", "音响", "网球", "象棋", "电风扇", "蛋糕", "电话", "黑色", "相声", "电话", "羽毛球", "围棋", "自行车", "大米", "香水", "兰色", "评剧", "橡皮", "篮球", "牛奶", "电视机", "馒头", "雨伞", "红色", "京剧", "书包", "排球", "豆浆", "空调", "面粉", "口红", "白色", "皮影", "铅笔", "足球", "酱油", "饮水机", "苹果", "围裙", "紫色", "舞蹈", "风筝", "杂技", "军棋", "电脑", "香蕉", "手机", "灰色", "武术", "蜡烛", "魔术", "跳棋", "张牙舞爪", "金鸡独立", "嚎嚎大哭", "抓耳挠腮", "挥汗如雨", "手舞足蹈", "鸡犬不宁", "鸡飞狗跳", "三长二短", "一分为二", "虎头蛇尾", "纸上谈兵", "眉飞色舞", "五体投地", "心口如一", "牛头马面", "狐狸", "老虎", "大象", "海豚", "恐龙", "老鼠", "蟑螂", "蝴蝶", "北极熊", "熊猫", "长颈鹿", "蝎子", "鸭子", "金鱼", "蜈蚣", "狮子", "孔雀", "猩猩", "大灰狼", "勺子", "茶叶", "牙刷", "围巾", "毛巾", "脸盆", "打印机", "袜子"]
function write(Words) {
	var word = Words[nNum];
	document.getElementById("wordPlace").innerHTML = word;
}


function callFunc_en(){
	numGen(eWords);
	write(eWords);
}

function callFunc_zh(){
	numGen(zWords);
	write(zWords);
}