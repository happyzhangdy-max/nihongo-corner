/* Original practice dialogues. Sources document task context, not copied text. */
var SceneLessons = {
  "authorship": "original",
  "reviewedAt": "2026-09-05",
  "sources": [
    {
      "id": "irodori-a1",
      "title": "いろどり 入門（A1）",
      "url": "https://www.irodori.jpf.go.jp/starter/pdf.html"
    },
    {
      "id": "irodori-a2-1",
      "title": "いろどり 初級1（A2）",
      "url": "https://www.irodori.jpf.go.jp/elementary01/pdf.html"
    },
    {
      "id": "irodori-a2-2",
      "title": "いろどり 初級2（A2）",
      "url": "https://www.irodori.jpf.go.jp/elementary02/pdf.html"
    },
    {
      "id": "irodori-a2-b1",
      "title": "いろどり 初中級（A2/B1）",
      "url": "https://www.irodori.jpf.go.jp/pre-intermediate/pdf.html"
    },
    {
      "id": "tsunahiro",
      "title": "つながるひろがる にほんごでのくらし（つなひろ）",
      "url": "https://tsunagarujp.mext.go.jp/nihongo?lang_id=JA"
    },
    {
      "id": "marugoto-travel-notes",
      "title": "まるごと 初中級（A2/B1）教え方のポイント",
      "url": "https://marugoto.jpf.go.jp/assets/docs/teacher/resource/pre_intermediate/preintermediate_teachers_notes.pdf"
    },
    {
      "id": "tufs-dialog",
      "title": "TUFS日本語会話モジュール 学習者用",
      "url": "https://www.coelang.tufs.ac.jp/modules/ja/dmod/lp/"
    },
    {
      "id": "jees-jlpt",
      "title": "JEES 日本語能力試験",
      "url": "https://info.jees-jlpt.jp/"
    }
  ],
  "scenes": [
    {
      "id": "restaurant",
      "label": "餐厅点餐",
      "group": "餐饮与购物",
      "description": "订位、点单与结账，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第6课"
        },
        {
          "sourceId": "irodori-a2-2",
          "unit": "第3—4课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景6"
        }
      ],
      "dialogues": [
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-01",
          "task": "预订周五晚上的双人座",
          "situation": "顾客打电话订位；本例餐厅该时段还有空位。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "今週の金曜日、夜七時から二人で予約できますか。",
          "reading": "こんしゅうのきんようび、よるしちじからふたりでよやくできますか。",
          "cn": "这周五晚上七点，可以订两个人的座位吗？",
          "reply": {
            "jp": "七時でしたら空いておりますので、お名前をお願いします。",
            "reading": "しちじでしたらあいておりますので、おなまえをおねがいします。",
            "cn": "七点还有空位，请告诉我您的姓名。"
          },
          "keywords": [
            {
              "word": "予約",
              "reading": "よやく",
              "meaning": "预订"
            },
            {
              "word": "二人",
              "reading": "ふたり",
              "meaning": "两个人"
            }
          ],
          "note": "电话订位先说日期、时间和人数，随后等店员确认。",
          "id": "restaurant-01"
        },
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-02",
          "task": "询问能否安排窗边座位",
          "situation": "顾客到店入座；本例窗边已满，里面还有空位。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "できれば窓際に座りたいのですが、空いていますか。",
          "reading": "できればまどぎわにすわりたいのですが、あいていますか。",
          "cn": "如果可以，我想坐窗边，现在有空位吗？",
          "reply": {
            "jp": "窓際は満席ですが、奥のお席でしたらすぐにご案内できます。",
            "reading": "まどぎわはまんせきですが、おくのおせきでしたらすぐにごあんないできます。",
            "cn": "窗边已经坐满了，里面的座位现在就可以安排。"
          },
          "keywords": [
            {
              "word": "窓際",
              "reading": "まどぎわ",
              "meaning": "窗边"
            },
            {
              "word": "空く",
              "reading": "あく",
              "meaning": "空出来"
            }
          ],
          "note": "「できれば」表明这是偏好，方便对方提出替代安排。",
          "id": "restaurant-02"
        },
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-03",
          "task": "请店员推荐不辣的主菜",
          "situation": "顾客看不懂部分菜单，请店员按口味推荐。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "辛くない料理を頼みたいのですが、何がおすすめですか。",
          "reading": "からくないりょうりをたのみたいのですが、なにがおすすめですか。",
          "cn": "我想点不辣的菜，您推荐什么？",
          "reply": {
            "jp": "辛いものが苦手でしたら、鶏肉の塩焼きはいかがですか。",
            "reading": "からいものがにがてでしたら、とりにくのしおやきはいかがですか。",
            "cn": "如果不太能吃辣，盐烤鸡肉怎么样？"
          },
          "keywords": [
            {
              "word": "辛い",
              "reading": "からい",
              "meaning": "辣的"
            },
            {
              "word": "おすすめ",
              "reading": "おすすめ",
              "meaning": "推荐"
            }
          ],
          "note": "这是口味偏好；食物过敏应明确说明过敏对象，不能只说不喜欢。",
          "id": "restaurant-03"
        },
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-04",
          "task": "请求把沙拉酱单独放",
          "situation": "顾客点沙拉；本例沙拉尚未拌酱，可以调整。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "ドレッシングは、サラダにかけずに別のお皿でもらえますか。",
          "reading": "どれっしんぐは、さらだにかけずにべつのおさらでもらえますか。",
          "cn": "沙拉酱可以不要直接浇在沙拉上，而是另外装一小碟吗？",
          "reply": {
            "jp": "かしこまりました、ドレッシングは別にしてお持ちします。",
            "reading": "かしこまりました、どれっしんぐはべつにしておもちします。",
            "cn": "好的，我会把沙拉酱另外装好送来。"
          },
          "keywords": [
            {
              "word": "かける",
              "reading": "かける",
              "meaning": "浇上；淋上"
            },
            {
              "word": "別",
              "reading": "べつ",
              "meaning": "另外；分开"
            }
          ],
          "note": "「〜ずに」表示不做前项动作；也可以说「かけないで」。",
          "id": "restaurant-04"
        },
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-05",
          "task": "请求给全桌添水",
          "situation": "用餐中水杯空了，顾客叫住经过的店员。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "すみません、全員にお水をもう一杯ずついただけますか。",
          "reading": "すみません、ぜんいんにおみずをもういっぱいずついただけますか。",
          "cn": "不好意思，可以给我们每个人再添一杯水吗？",
          "reply": {
            "jp": "はい、お水をお持ちしますので、そのままお待ちください。",
            "reading": "はい、おみずをおもちしますので、そのままおまちください。",
            "cn": "好的，我去拿水，请稍等。"
          },
          "keywords": [
            {
              "word": "全員",
              "reading": "ぜんいん",
              "meaning": "所有人"
            },
            {
              "word": "ずつ",
              "reading": "ずつ",
              "meaning": "每人各；每次各"
            }
          ],
          "note": "「一杯ずつ」能说明分配数量。",
          "id": "restaurant-05"
        },
        {
          "sceneId": "restaurant",
          "taskId": "restaurant-06",
          "task": "确认能否按各自所点的餐分开结账",
          "situation": "两名顾客准备付款；本例餐厅可以分别计算。",
          "youRole": "顾客",
          "otherRole": "餐厅店员",
          "jp": "それぞれが頼んだ分を、別々に払ってもいいですか。",
          "reading": "それぞれがたのんだぶんを、べつべつにはらってもいいですか。",
          "cn": "我们可以各自支付自己点的餐吗？",
          "reply": {
            "jp": "はい、お一人ずつ計算しますので、順番にこちらへどうぞ。",
            "reading": "はい、おひとりずつけいさんしますので、じゅんばんにこちらへどうぞ。",
            "cn": "可以，我会分别计算，请依次到这边来。"
          },
          "keywords": [
            {
              "word": "それぞれ",
              "reading": "それぞれ",
              "meaning": "各自"
            },
            {
              "word": "別々",
              "reading": "べつべつ",
              "meaning": "分开"
            }
          ],
          "note": "先确认是否能分账，再分别付款。",
          "id": "restaurant-06"
        }
      ]
    },
    {
      "id": "cafe",
      "label": "咖啡店",
      "group": "餐饮与购物",
      "description": "饮品、定制与外带，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第6课：餐饮点单，咖啡细节由本站补写"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "便利短语场景3；A1场景5"
        }
      ],
      "dialogues": [
        {
          "sceneId": "cafe",
          "taskId": "cafe-01",
          "task": "点一杯热咖啡并说明外带",
          "situation": "顾客在咖啡店柜台下单。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "温かいコーヒーを一つ、持ち帰りでお願いしたいです。",
          "reading": "あたたかいこーひーをひとつ、もちかえりでおねがいしたいです。",
          "cn": "我想要一杯热咖啡，打包带走。",
          "reply": {
            "jp": "ホットコーヒーをお持ち帰りですね、サイズはいかがなさいますか。",
            "reading": "ほっとこーひーをおもちかえりですね、さいずはいかがなさいますか。",
            "cn": "一杯热咖啡外带，对吧？您要多大的？"
          },
          "keywords": [
            {
              "word": "温かい",
              "reading": "あたたかい",
              "meaning": "温热的"
            },
            {
              "word": "持ち帰り",
              "reading": "もちかえり",
              "meaning": "外带"
            }
          ],
          "note": "店员可能把「温かい」复述为「ホット」。",
          "id": "cafe-01"
        },
        {
          "sceneId": "cafe",
          "taskId": "cafe-02",
          "task": "确认菜单上的饮品是否只有冷饮",
          "situation": "顾客指着菜单上的饮品；本例也能做热饮。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "このラテは冷たいものだけですか、それとも温かいものもありますか。",
          "reading": "このらてはつめたいものだけですか、それともあたたかいものもありますか。",
          "cn": "这款拿铁只有冰的吗，还是也有热的？",
          "reply": {
            "jp": "温かいものもございますので、お好みのほうをお選びください。",
            "reading": "あたたかいものもございますので、おこのみのほうをおえらびください。",
            "cn": "也有热的，请选择您喜欢的。"
          },
          "keywords": [
            {
              "word": "それとも",
              "reading": "それとも",
              "meaning": "还是；或是"
            },
            {
              "word": "冷たい",
              "reading": "つめたい",
              "meaning": "冰凉的"
            }
          ],
          "note": "不确定菜单标识时，可把两个选项直接说出来确认。",
          "id": "cafe-02"
        },
        {
          "sceneId": "cafe",
          "taskId": "cafe-03",
          "task": "请求减少冰块和糖浆",
          "situation": "顾客点现调饮品；本例店员能分别调整冰量和糖浆量。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "氷を少なめにして、シロップも半分にしてもらえますか。",
          "reading": "こおりをすくなめにして、しろっぷもはんぶんにしてもらえますか。",
          "cn": "可以少放些冰，糖浆也减半吗？",
          "reply": {
            "jp": "氷は少なめ、シロップは通常の半分でお作りします。",
            "reading": "こおりはすくなめ、しろっぷはつうじょうのはんぶんでおつくりします。",
            "cn": "我会少放冰，糖浆按通常用量的一半来做。"
          },
          "keywords": [
            {
              "word": "少なめ",
              "reading": "すくなめ",
              "meaning": "偏少一些"
            },
            {
              "word": "半分",
              "reading": "はんぶん",
              "meaning": "一半"
            }
          ],
          "note": "一次说明两项调整，再听店员复述是否一致。",
          "id": "cafe-03"
        },
        {
          "sceneId": "cafe",
          "taskId": "cafe-04",
          "task": "询问是否能把牛奶改为豆奶",
          "situation": "顾客咨询饮品配料；本例豆奶当天已售完。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "この飲み物の牛乳を豆乳に替えることはできますか。",
          "reading": "こののみもののぎゅうにゅうをとうにゅうにかえることはできますか。",
          "cn": "这款饮品里的牛奶可以换成豆奶吗？",
          "reply": {
            "jp": "申し訳ありません、今日は豆乳が売り切れております。",
            "reading": "もうしわけありません、きょうはとうにゅうがうりきれております。",
            "cn": "非常抱歉，今天豆奶已经用完了。"
          },
          "keywords": [
            {
              "word": "豆乳",
              "reading": "とうにゅう",
              "meaning": "豆奶"
            },
            {
              "word": "替える",
              "reading": "かえる",
              "meaning": "更换"
            }
          ],
          "note": "这是配料替换请求，不能据此判断饮品是否完全不含某种过敏原。",
          "id": "cafe-04"
        },
        {
          "sceneId": "cafe",
          "taskId": "cafe-05",
          "task": "询问哪里能坐下给电脑充电",
          "situation": "顾客准备短暂使用电脑；本例柜台座位有可用电源。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "パソコンを充電したいのですが、電源が使える席はありますか。",
          "reading": "ぱそこんをじゅうでんしたいのですが、でんげんがつかえるせきはありますか。",
          "cn": "我想给电脑充电，有能用电源的座位吗？",
          "reply": {
            "jp": "カウンターのお席にございますので、空いているところをお使いください。",
            "reading": "かうんたーのおせきにございますので、あいているところをおつかいください。",
            "cn": "吧台座位有电源，请选一个空位使用。"
          },
          "keywords": [
            {
              "word": "充電",
              "reading": "じゅうでん",
              "meaning": "充电"
            },
            {
              "word": "電源",
              "reading": "でんげん",
              "meaning": "电源"
            }
          ],
          "note": "先询问再使用，店内座位与使用条件以现场答复为准。",
          "id": "cafe-05"
        },
        {
          "sceneId": "cafe",
          "taskId": "cafe-06",
          "task": "报号确认是不是自己的饮品",
          "situation": "顾客在取餐台看到两杯相似饮品，订单号为十二号。",
          "youRole": "顾客",
          "otherRole": "咖啡店店员",
          "jp": "十二番で呼ばれたのですが、こちらが私のカフェラテですか。",
          "reading": "じゅうにばんでよばれたのですが、こちらがわたしのかふぇらてですか。",
          "cn": "刚才叫了十二号，这杯是我的拿铁吗？",
          "reply": {
            "jp": "そちらは別のお客様の分ですので、隣のカップをお取りください。",
            "reading": "そちらはべつのおきゃくさまのぶんですので、となりのかっぷをおとりください。",
            "cn": "那杯是其他客人的，请拿旁边这一杯。"
          },
          "keywords": [
            {
              "word": "呼ばれる",
              "reading": "よばれる",
              "meaning": "被叫到"
            },
            {
              "word": "こちら",
              "reading": "こちら",
              "meaning": "这边；这个"
            }
          ],
          "note": "拿取前报号核对，比只指着杯子问更清楚。",
          "id": "cafe-06"
        }
      ]
    },
    {
      "id": "supermarket",
      "label": "超市采购",
      "group": "餐饮与购物",
      "description": "找商品、称量与付款，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景2—5"
        },
        {
          "sourceId": "irodori-a1",
          "unit": "第15—16课"
        }
      ],
      "dialogues": [
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-01",
          "task": "找到做汤用的味噌",
          "situation": "顾客在超市里找调味品。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "みそ汁を作りたいのですが、みそはどの売り場にありますか。",
          "reading": "みそしるをつくりたいのですが、みそはどのうりばにありますか。",
          "cn": "我想做味噌汤，味噌在哪个售卖区？",
          "reply": {
            "jp": "しょうゆと同じ棚にありますので、こちらへどうぞ。",
            "reading": "しょうゆとおなじたなにありますので、こちらへどうぞ。",
            "cn": "和酱油放在同一个货架上，请往这边走。"
          },
          "keywords": [
            {
              "word": "みそ",
              "reading": "みそ",
              "meaning": "味噌"
            },
            {
              "word": "売り場",
              "reading": "うりば",
              "meaning": "售卖区"
            }
          ],
          "note": "补充用途能帮助店员理解你在找什么。",
          "id": "supermarket-01"
        },
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-02",
          "task": "询问能否只买一根胡萝卜",
          "situation": "顾客看到整袋蔬菜，想买少量；本例另有散卖商品。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "一袋だと多いので、にんじんを一本だけ買えますか。",
          "reading": "ひとふくろだとおおいので、にんじんをいっぽんだけかえますか。",
          "cn": "一整袋太多了，胡萝卜可以只买一根吗？",
          "reply": {
            "jp": "一本ずつのものは、奥のかごに入っています。",
            "reading": "いっぽんずつのものは、おくのかごにはいっています。",
            "cn": "单根出售的放在里面的篮子里。"
          },
          "keywords": [
            {
              "word": "一袋",
              "reading": "ひとふくろ",
              "meaning": "一袋"
            },
            {
              "word": "一本",
              "reading": "いっぽん",
              "meaning": "一根"
            }
          ],
          "note": "胡萝卜等细长物通常用「本」计数。",
          "id": "supermarket-02"
        },
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-03",
          "task": "请店员指出便当的期限标注",
          "situation": "顾客看不清包装上的日期，不询问是否还能食用。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "このお弁当の消費期限は、どこに書いてありますか。",
          "reading": "このおべんとうのしょうひきげんは、どこにかいてありますか。",
          "cn": "这份便当的食用期限写在哪里？",
          "reply": {
            "jp": "ふたの端に貼ってあるシールをご覧ください。",
            "reading": "ふたのはしにはってあるしーるをごらんください。",
            "cn": "请看贴在盒盖边缘的标签。"
          },
          "keywords": [
            {
              "word": "消費期限",
              "reading": "しょうひきげん",
              "meaning": "食用期限"
            },
            {
              "word": "書いてある",
              "reading": "かいてある",
              "meaning": "写着"
            }
          ],
          "note": "「消費期限」与「賞味期限」不是同一概念，这里只练习寻找标注。",
          "id": "supermarket-03"
        },
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-04",
          "task": "确认价签是单个价还是两个价",
          "situation": "顾客看到两个水果旁的一张价签；本例价签对应两件合售。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "この値段は、一個分ですか、それとも二個でこの値段ですか。",
          "reading": "このねだんは、いっこぶんですか、それともにこでこのねだんですか。",
          "cn": "这个价格是一个的价格，还是两个一共这个价？",
          "reply": {
            "jp": "こちらは二個セットのお値段でございます。",
            "reading": "こちらはにこせっとのおねだんでございます。",
            "cn": "这是两个一组的价格。"
          },
          "keywords": [
            {
              "word": "値段",
              "reading": "ねだん",
              "meaning": "价格"
            },
            {
              "word": "一個分",
              "reading": "いっこぶん",
              "meaning": "一个的份量或金额"
            }
          ],
          "note": "把数量讲清楚，避免只问「多少钱」仍不清楚计价单位。",
          "id": "supermarket-04"
        },
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-05",
          "task": "请把生肉和即食食品分开装",
          "situation": "顾客在有人协助装袋的收银台结账。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "生のお肉とお総菜は、別の袋に入れてもらえますか。",
          "reading": "なまのおにくとおそうざいは、べつのふくろにいれてもらえますか。",
          "cn": "生肉和熟食可以帮我分开装袋吗？",
          "reply": {
            "jp": "承知しました、お肉はこちらの小さい袋にお入れします。",
            "reading": "しょうちしました、おにくはこちらのちいさいふくろにおいれします。",
            "cn": "好的，我把生肉装进这个小袋子里。"
          },
          "keywords": [
            {
              "word": "生",
              "reading": "なま",
              "meaning": "生的；未烹调的"
            },
            {
              "word": "お総菜",
              "reading": "おそうざい",
              "meaning": "熟食；配菜"
            }
          ],
          "note": "自助装袋的店里可以改问「小さい袋をもらえますか」。",
          "id": "supermarket-05"
        },
        {
          "sceneId": "supermarket",
          "taskId": "supermarket-06",
          "task": "发现小票上商品数量不对并请求核查",
          "situation": "顾客付款后发现只买了一瓶饮料，小票却显示两瓶。",
          "youRole": "顾客",
          "otherRole": "超市店员",
          "jp": "飲み物は一本しか買っていないのですが、レシートを確認してもらえますか。",
          "reading": "のみものはいっぽんしかかっていないのですが、れしーとをかくにんしてもらえますか。",
          "cn": "饮料我只买了一瓶，可以帮我核对一下小票吗？",
          "reply": {
            "jp": "失礼しました、商品とレシートをこちらで確認いたします。",
            "reading": "しつれいしました、しょうひんとれしーとをこちらでかくにんいたします。",
            "cn": "不好意思，我这边核对一下商品和小票。"
          },
          "keywords": [
            {
              "word": "しか",
              "reading": "しか",
              "meaning": "只；仅，与否定形式搭配"
            },
            {
              "word": "確認",
              "reading": "かくにん",
              "meaning": "核对；确认"
            }
          ],
          "note": "先说明发现的差异，请对方核查，避免直接断言对方故意多收。",
          "id": "supermarket-06"
        }
      ]
    },
    {
      "id": "shopping",
      "label": "购物退换",
      "group": "餐饮与购物",
      "description": "试穿、尺寸与退换货，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-2",
          "unit": "第11—12课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景2、5"
        }
      ],
      "dialogues": [
        {
          "sceneId": "shopping",
          "taskId": "shopping-01",
          "task": "请求试穿并询问试衣间位置",
          "situation": "顾客拿着一件外套询问店员。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "この上着を試着したいのですが、どこで着てみればいいですか。",
          "reading": "このうわぎをしちゃくしたいのですが、どこできてみればいいですか。",
          "cn": "我想试穿这件外套，应该到哪里试？",
          "reply": {
            "jp": "奥に試着室がございますので、ご案内します。",
            "reading": "おくにしちゃくしつがございますので、ごあんないします。",
            "cn": "里面有试衣间，我带您过去。"
          },
          "keywords": [
            {
              "word": "上着",
              "reading": "うわぎ",
              "meaning": "外套；上衣"
            },
            {
              "word": "試着",
              "reading": "しちゃく",
              "meaning": "试穿"
            }
          ],
          "note": "「着てみる」强调试着穿一下。",
          "id": "shopping-01"
        },
        {
          "sceneId": "shopping",
          "taskId": "shopping-02",
          "task": "说明肩部太紧并要大一码",
          "situation": "顾客试穿后觉得外套肩部紧；本例大一码有库存。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "肩の辺りがきついので、一つ大きいサイズを持ってきてもらえますか。",
          "reading": "かたのあたりがきついので、ひとつおおきいさいずをもってきてもらえますか。",
          "cn": "肩膀这一带有点紧，可以拿大一码给我吗？",
          "reply": {
            "jp": "かしこまりました、今お持ちしますので、そのままお待ちください。",
            "reading": "かしこまりました、いまおもちしますので、そのままおまちください。",
            "cn": "好的，我现在去拿，请在这里稍等。"
          },
          "keywords": [
            {
              "word": "肩",
              "reading": "かた",
              "meaning": "肩膀"
            },
            {
              "word": "きつい",
              "reading": "きつい",
              "meaning": "紧的"
            }
          ],
          "note": "说明具体哪里不合身，比只说「不行」更容易得到合适建议。",
          "id": "shopping-02"
        },
        {
          "sceneId": "shopping",
          "taskId": "shopping-03",
          "task": "询问同款是否还有黑色",
          "situation": "顾客喜欢款式但想换颜色；本例店内黑色售罄。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "この形で、黒いものはまだ残っていますか。",
          "reading": "このかたちで、くろいものはまだのこっていますか。",
          "cn": "这个款式还有黑色的吗？",
          "reply": {
            "jp": "黒は店頭にございませんが、ほかの店舗の在庫をお調べしましょうか。",
            "reading": "くろはてんとうにございませんが、ほかのてんぽのざいこをおしらべしましょうか。",
            "cn": "店里没有黑色了，要帮您查一下其他门店的库存吗？"
          },
          "keywords": [
            {
              "word": "残る",
              "reading": "のこる",
              "meaning": "剩下"
            },
            {
              "word": "形",
              "reading": "かたち",
              "meaning": "形状；款式"
            }
          ],
          "note": "对方提出查库存后，可回答「お願いします」。",
          "id": "shopping-03"
        },
        {
          "sceneId": "shopping",
          "taskId": "shopping-04",
          "task": "确认调货后的到货通知",
          "situation": "店员已提出可以调货，顾客希望确认后续安排。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "取り寄せをお願いした場合、届いたら連絡をもらえますか。",
          "reading": "とりよせをおねがいしたばあい、とどいたられんらくをもらえますか。",
          "cn": "如果请你们调货，到货后可以通知我吗？",
          "reply": {
            "jp": "はい、入荷したらお電話しますので、ご連絡先をお願いします。",
            "reading": "はい、にゅうかしたらおでんわしますので、ごれんらくさきをおねがいします。",
            "cn": "可以，到货后会给您打电话，请留下联系方式。"
          },
          "keywords": [
            {
              "word": "取り寄せ",
              "reading": "とりよせ",
              "meaning": "调货；订货"
            },
            {
              "word": "連絡",
              "reading": "れんらく",
              "meaning": "联系；通知"
            }
          ],
          "note": "店员的回应是本例安排，取货方式仍需按具体门店确认。",
          "id": "shopping-04"
        },
        {
          "sceneId": "shopping",
          "taskId": "shopping-05",
          "task": "说明拉链故障并询问换货",
          "situation": "顾客带着刚买的包和小票回店；是否可换货尚未确定。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "昨日買ったかばんのファスナーが閉まらないのですが、交換できますか。",
          "reading": "きのうかったかばんのふぁすなーがしまらないのですが、こうかんできますか。",
          "cn": "昨天买的包拉链拉不上，可以换货吗？",
          "reply": {
            "jp": "まず状態を確認しますので、かばんとレシートを見せていただけますか。",
            "reading": "まずじょうたいをかくにんしますので、かばんとれしーとをみせていただけますか。",
            "cn": "我先确认一下情况，可以给我看一下包和小票吗？"
          },
          "keywords": [
            {
              "word": "ファスナー",
              "reading": "ふぁすなー",
              "meaning": "拉链"
            },
            {
              "word": "交換",
              "reading": "こうかん",
              "meaning": "更换；换货"
            }
          ],
          "note": "描述实际故障，并询问可否处理；不把换货写成必然权利。",
          "id": "shopping-05"
        },
        {
          "sceneId": "shopping",
          "taskId": "shopping-06",
          "task": "询问故障时应到哪里申请保修",
          "situation": "顾客购买电器时向店员确认售后联系处。",
          "youRole": "顾客",
          "otherRole": "商店店员",
          "jp": "保証期間中に故障したら、どこに連絡すればいいですか。",
          "reading": "ほしょうきかんちゅうにこしょうしたら、どこにれんらくすればいいですか。",
          "cn": "保修期内如果出了故障，应该联系哪里？",
          "reply": {
            "jp": "保証書に窓口の番号がありますので、こちらをご確認ください。",
            "reading": "ほしょうしょにまどぐちのばんごうがありますので、こちらをごかくにんください。",
            "cn": "保修凭证上有服务窗口的电话，请看这里。"
          },
          "keywords": [
            {
              "word": "保証期間",
              "reading": "ほしょうきかん",
              "meaning": "保修期限"
            },
            {
              "word": "故障",
              "reading": "こしょう",
              "meaning": "故障"
            }
          ],
          "note": "保修范围和条件需要另行核对凭证，不能只凭「保修期内」判断。",
          "id": "shopping-06"
        }
      ]
    },
    {
      "id": "station",
      "label": "车站乘车",
      "group": "交通与旅行",
      "description": "买票、换乘与到站，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第13课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景8"
        }
      ],
      "dialogues": [
        {
          "sceneId": "station",
          "taskId": "station-01",
          "task": "询问去目的站该走哪个站台",
          "situation": "乘客指着路线图上的目的站；本例需从三号站台乘车。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "この駅まで行きたいのですが、どのホームから乗ればいいですか。",
          "reading": "このえきまでいきたいのですが、どのほーむからのればいいですか。",
          "cn": "我想去这个站，应该从哪个站台乘车？",
          "reply": {
            "jp": "三番ホームから出る電車に乗って、五つ目の駅で降りてください。",
            "reading": "さんばんほーむからでるでんしゃにのって、いつつめのえきでおりてください。",
            "cn": "请乘坐三号站台发车的电车，在第五站下车。"
          },
          "keywords": [
            {
              "word": "ホーム",
              "reading": "ほーむ",
              "meaning": "站台"
            },
            {
              "word": "降りる",
              "reading": "おりる",
              "meaning": "下车"
            }
          ],
          "note": "指着路线图询问时，「この駅」指的是目的站。",
          "id": "station-01"
        },
        {
          "sceneId": "station",
          "taskId": "station-02",
          "task": "核对快速列车是否停靠目的站",
          "situation": "乘客指着路线图中的目的站，下一班是快速列车。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "次の快速は、ここに止まりますか。",
          "reading": "つぎのかいそくは、ここにとまりますか。",
          "cn": "下一班快速列车停这里吗？",
          "reply": {
            "jp": "そこには止まりませんので、各駅停車をお待ちください。",
            "reading": "そこにはとまりませんので、かくえきていしゃをおまちください。",
            "cn": "不停那个站，请等各站停车的普通列车。"
          },
          "keywords": [
            {
              "word": "快速",
              "reading": "かいそく",
              "meaning": "快速列车"
            },
            {
              "word": "止まる",
              "reading": "とまる",
              "meaning": "停靠"
            }
          ],
          "note": "指站名比只说「ここ」更清楚，也可以直接用目的站名称替换。",
          "id": "station-02"
        },
        {
          "sceneId": "station",
          "taskId": "station-03",
          "task": "请站务员确认末班车时间",
          "situation": "乘客指着自己要去的方向；本例时刻表显示末班车为二十三点四十分。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "この方面の終電は、何時に出ますか。",
          "reading": "このほうめんのしゅうでんは、なんじにでますか。",
          "cn": "这个方向的末班电车几点发车？",
          "reply": {
            "jp": "本日の終電は、時刻表のこちらにある二十三時四十分です。",
            "reading": "ほんじつのしゅうでんは、じこくひょうのこちらにあるにじゅうさんじよんじゅっぷんです。",
            "cn": "今天的末班车是时刻表上这里写的二十三点四十分。"
          },
          "keywords": [
            {
              "word": "方面",
              "reading": "ほうめん",
              "meaning": "方向；一带"
            },
            {
              "word": "終電",
              "reading": "しゅうでん",
              "meaning": "末班电车"
            }
          ],
          "note": "时间仅为本对话示例，出行时需核对当天及行驶方向。",
          "id": "station-03"
        },
        {
          "sceneId": "station",
          "taskId": "station-04",
          "task": "询问是否能一起购买往返车票",
          "situation": "乘客向售票窗口出示目的站名称，尚未说明返回日期。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "この駅までの往復の切符を、一緒に買えますか。",
          "reading": "このえきまでのおうふくのきっぷを、いっしょにかえますか。",
          "cn": "到这个站的往返车票，可以一起买吗？",
          "reply": {
            "jp": "ご案内しますので、まずお帰りになる日を教えていただけますか。",
            "reading": "ごあんないしますので、まずおかえりになるひをおしえていただけますか。",
            "cn": "我来为您确认，先请告诉我您哪天返回，可以吗？"
          },
          "keywords": [
            {
              "word": "往復",
              "reading": "おうふく",
              "meaning": "往返"
            },
            {
              "word": "切符",
              "reading": "きっぷ",
              "meaning": "车票"
            }
          ],
          "note": "能否一起购买及适用票种由工作人员按具体行程确认。",
          "id": "station-04"
        },
        {
          "sceneId": "station",
          "taskId": "station-05",
          "task": "说明交通卡过不了闸机",
          "situation": "乘客刷交通卡时闸门未打开，向旁边站务员求助。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "このカードで改札を通れないのですが、見てもらえますか。",
          "reading": "このかーどでかいさつをとおれないのですが、みてもらえますか。",
          "cn": "这张卡过不了闸机，可以帮我看一下吗？",
          "reply": {
            "jp": "利用状況を確認しますので、最後に乗った駅を教えてください。",
            "reading": "りようじょうきょうをかくにんしますので、さいごにのったえきをおしえてください。",
            "cn": "我确认一下使用情况，请告诉我您最后一次从哪个站上车。"
          },
          "keywords": [
            {
              "word": "改札",
              "reading": "かいさつ",
              "meaning": "检票口；闸机口"
            },
            {
              "word": "通る",
              "reading": "とおる",
              "meaning": "通过"
            }
          ],
          "note": "先描述现象，余额不足或进出站记录等原因需由工作人员确认。",
          "id": "station-05"
        },
        {
          "sceneId": "station",
          "taskId": "station-06",
          "task": "列车停运后询问其他走法",
          "situation": "乘客看到停运提示，尚未向站务员说明目的地。",
          "youRole": "乘客",
          "otherRole": "车站工作人员",
          "jp": "電車が止まっているようですが、別の行き方を教えてもらえますか。",
          "reading": "でんしゃがとまっているようですが、べつのいきかたをおしえてもらえますか。",
          "cn": "电车好像停运了，可以告诉我其他走法吗？",
          "reply": {
            "jp": "別の路線をお調べしますので、どちらまで行かれるか教えてください。",
            "reading": "べつのろせんをおしらべしますので、どちらまでいかれるかおしえてください。",
            "cn": "我帮您查一下其他线路，请告诉我您要去哪里。"
          },
          "keywords": [
            {
              "word": "別",
              "reading": "べつ",
              "meaning": "其他；另外"
            },
            {
              "word": "行き方",
              "reading": "いきかた",
              "meaning": "走法；前往方式"
            }
          ],
          "note": "「〜ようですが」用于依据眼前信息提出确认。",
          "id": "station-06"
        }
      ]
    },
    {
      "id": "directions",
      "label": "问路出行",
      "group": "交通与旅行",
      "description": "位置、方向与步行路线，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-1",
          "unit": "第6—7课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景9；B1场景2"
        }
      ],
      "dialogues": [
        {
          "sceneId": "directions",
          "taskId": "directions-01",
          "task": "向路人询问附近邮局的位置",
          "situation": "问路者想找附近邮局；本例路人知道附近一家。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "すみません、この近くに郵便局はありますか。",
          "reading": "すみません、このちかくにゆうびんきょくはありますか。",
          "cn": "不好意思，请问这附近有邮局吗？",
          "reply": {
            "jp": "ありますよ、この道を少し行った右側です。",
            "reading": "ありますよ、このみちをすこしいったみぎがわです。",
            "cn": "有的，沿这条路走一小段，就在右边。"
          },
          "keywords": [
            {
              "word": "近く",
              "reading": "ちかく",
              "meaning": "附近"
            },
            {
              "word": "郵便局",
              "reading": "ゆうびんきょく",
              "meaning": "邮局"
            }
          ],
          "note": "对陌生人先说「すみません」，等对方注意到你再问。",
          "id": "directions-01"
        },
        {
          "sceneId": "directions",
          "taskId": "directions-02",
          "task": "出示地图请对方说明步行路线",
          "situation": "问路者在地图上指出图书馆；本例需要过前方桥梁。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "この図書館へは、ここからどう行けばいいですか。",
          "reading": "このとしょかんへは、ここからどういけばいいですか。",
          "cn": "从这里去这家图书馆应该怎么走？",
          "reply": {
            "jp": "前の橋を渡って、最初の角を左に曲がってください。",
            "reading": "まえのはしをわたって、さいしょのかどをひだりにまがってください。",
            "cn": "请过前面的桥，在第一个拐角左转。"
          },
          "keywords": [
            {
              "word": "どう行けばいい",
              "reading": "どういけばいい",
              "meaning": "应该怎么走"
            },
            {
              "word": "図書館",
              "reading": "としょかん",
              "meaning": "图书馆"
            }
          ],
          "note": "「へは」把目的地作为询问重点。",
          "id": "directions-02"
        },
        {
          "sceneId": "directions",
          "taskId": "directions-03",
          "task": "复述转弯位置以确认没听错",
          "situation": "路人刚说明路线，问路者复述自己的理解；本例方向听反了。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "確認ですが、二つ目の信号を右に曲がるんですね。",
          "reading": "かくにんですが、ふたつめのしんごうをみぎにまがるんですね。",
          "cn": "我确认一下，是在第二个红绿灯处右转，对吗？",
          "reply": {
            "jp": "二つ目で合っていますが、右ではなく左に曲がってください。",
            "reading": "ふたつめであっていますが、みぎではなくひだりにまがってください。",
            "cn": "第二个是对的，但请左转，不是右转。"
          },
          "keywords": [
            {
              "word": "二つ目",
              "reading": "ふたつめ",
              "meaning": "第二个"
            },
            {
              "word": "曲がる",
              "reading": "まがる",
              "meaning": "转弯"
            }
          ],
          "note": "复述位置和方向，能让对方及时纠正听错的部分。",
          "id": "directions-03"
        },
        {
          "sceneId": "directions",
          "taskId": "directions-04",
          "task": "询问步行到车站需要多久",
          "situation": "问路者准备步行；本例车站大约十五分钟路程。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "駅までは、歩くとどのくらいかかりますか。",
          "reading": "えきまでは、あるくとどのくらいかかりますか。",
          "cn": "步行到车站大概要多久？",
          "reply": {
            "jp": "普通に歩けば、十五分ぐらいで着くと思います。",
            "reading": "ふつうにあるけば、じゅうごふんぐらいでつくとおもいます。",
            "cn": "正常走路的话，我想大约十五分钟就能到。"
          },
          "keywords": [
            {
              "word": "歩く",
              "reading": "あるく",
              "meaning": "步行"
            },
            {
              "word": "どのくらい",
              "reading": "どのくらい",
              "meaning": "多少；多久"
            }
          ],
          "note": "路人的时间通常是估计，可以用来判断是否继续步行。",
          "id": "directions-04"
        },
        {
          "sceneId": "directions",
          "taskId": "directions-05",
          "task": "询问入口附近有什么容易认的标志",
          "situation": "问路者知道大致路线，但怕错过目的地入口。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "入口を見落としそうなので、何か目印はありますか。",
          "reading": "いりぐちをみおとしそうなので、なにかめじるしはありますか。",
          "cn": "我怕错过入口，附近有什么明显的标志吗？",
          "reply": {
            "jp": "入口の上に大きな黄色い看板があるので、すぐ分かると思います。",
            "reading": "いりぐちのうえにおおきなきいろいかんばんがあるので、すぐわかるとおもいます。",
            "cn": "入口上方有一块很大的黄色招牌，我想您一下就能看到。"
          },
          "keywords": [
            {
              "word": "見落とす",
              "reading": "みおとす",
              "meaning": "看漏；没注意到"
            },
            {
              "word": "目印",
              "reading": "めじるし",
              "meaning": "标志；参照物"
            }
          ],
          "note": "可请对方指出招牌颜色、建筑外观等容易识别的特征。",
          "id": "directions-05"
        },
        {
          "sceneId": "directions",
          "taskId": "directions-06",
          "task": "推行李时请求不走楼梯的路线",
          "situation": "问路者带着大行李，眼前路线有楼梯；本例侧面有坡道。",
          "youRole": "问路者",
          "otherRole": "路人",
          "jp": "荷物が重いのですが、階段を使わずに行ける道はありますか。",
          "reading": "にもつがおもいのですが、かいだんをつかわずにいけるみちはありますか。",
          "cn": "行李很重，有不用走楼梯的路线吗？",
          "reply": {
            "jp": "少し遠回りですが、建物の横に坂道があります。",
            "reading": "すこしとおまわりですが、たてもののよこにさかみちがあります。",
            "cn": "要稍微绕一点路，不过建筑旁边有一条坡道。"
          },
          "keywords": [
            {
              "word": "階段",
              "reading": "かいだん",
              "meaning": "楼梯"
            },
            {
              "word": "使わずに",
              "reading": "つかわずに",
              "meaning": "不使用而……"
            }
          ],
          "note": "先说明通行需要，对方更容易给出适合的路线。",
          "id": "directions-06"
        }
      ]
    },
    {
      "id": "airport",
      "label": "机场出入境",
      "group": "交通与旅行",
      "description": "值机、行李与入境，从开口到回应。",
      "references": [
        {
          "sourceId": "marugoto-travel-notes",
          "unit": "主题8，Can-do 35—38，PDF第32—34页"
        },
        {
          "sourceId": "irodori-a1",
          "unit": "第13课仅覆盖去机场交通"
        }
      ],
      "dialogues": [
        {
          "sceneId": "airport",
          "taskId": "airport-01",
          "task": "确认柜台并办理一件行李托运",
          "situation": "旅客来到航空公司柜台；本例这个柜台受理其航班。",
          "youRole": "旅客",
          "otherRole": "机场或航空公司工作人员",
          "jp": "ここでチェックインして、スーツケースを一つ預けたいのですが、お願いできますか。",
          "reading": "ここでちぇっくいんして、すーつけーすをひとつあずけたいのですが、おねがいできますか。",
          "cn": "我想在这里办理值机，并托运一个行李箱，可以吗？",
          "reply": {
            "jp": "こちらで承りますので、まずご予約を確認できるものを見せてください。",
            "reading": "こちらでうけたまわりますので、まずごよやくをかくにんできるものをみせてください。",
            "cn": "可以在这里办理，请先出示能确认您预订信息的材料。"
          },
          "keywords": [
            {
              "word": "チェックイン",
              "reading": "ちぇっくいん",
              "meaning": "值机；办理入住"
            },
            {
              "word": "預ける",
              "reading": "あずける",
              "meaning": "交给保管；托运"
            }
          ],
          "note": "托运条件与所需文件应由承运方按具体航班确认。",
          "id": "airport-01"
        },
        {
          "sceneId": "airport",
          "taskId": "airport-02",
          "task": "请工作人员确认随身包尺寸",
          "situation": "旅客把包展示给工作人员；是否符合要求尚未确定。",
          "youRole": "旅客",
          "otherRole": "机场或航空公司工作人员",
          "jp": "このかばんを機内に持ち込めるか、確認してもらえますか。",
          "reading": "このかばんをきないにもちこめるか、かくにんしてもらえますか。",
          "cn": "可以帮我确认一下这个包能不能带进机舱吗？",
          "reply": {
            "jp": "大きさを確認しますので、こちらの台に置いていただけますか。",
            "reading": "おおきさをかくにんしますので、こちらのだいにおいていただけますか。",
            "cn": "我确认一下尺寸，可以请您放在这个台子上吗？"
          },
          "keywords": [
            {
              "word": "機内",
              "reading": "きない",
              "meaning": "机舱内"
            },
            {
              "word": "持ち込む",
              "reading": "もちこむ",
              "meaning": "携带进入"
            }
          ],
          "note": "这里练习请求核查，不给出所有航班通用的尺寸标准。",
          "id": "airport-02"
        },
        {
          "sceneId": "airport",
          "taskId": "airport-03",
          "task": "没听清广播时确认登机口是否改变",
          "situation": "旅客听到广播后拿着登机牌询问；本例登机口改为八号。",
          "youRole": "旅客",
          "otherRole": "机场或航空公司工作人员",
          "jp": "今の放送がよく聞こえなかったのですが、搭乗口が変わったのですか。",
          "reading": "いまのほうそうがよくきこえなかったのですが、とうじょうぐちがかわったのですか。",
          "cn": "刚才的广播没听清，是登机口变了吗？",
          "reply": {
            "jp": "はい、この便は八番ゲートに変更になりました。",
            "reading": "はい、このびんははちばんげーとにへんこうになりました。",
            "cn": "是的，这个航班改到八号登机口了。"
          },
          "keywords": [
            {
              "word": "放送",
              "reading": "ほうそう",
              "meaning": "广播"
            },
            {
              "word": "搭乗口",
              "reading": "とうじょうぐち",
              "meaning": "登机口"
            }
          ],
          "note": "确认后还应查看现场显示屏与最新通知。",
          "id": "airport-03"
        },
        {
          "sceneId": "airport",
          "taskId": "airport-04",
          "task": "出示下一程登机牌询问转机办理处",
          "situation": "旅客抵达后需要转机，向机场工作人员求助。",
          "youRole": "旅客",
          "otherRole": "机场或航空公司工作人员",
          "jp": "乗り継ぎがあるのですが、この便の手続きはどこでできますか。",
          "reading": "のりつぎがあるのですが、このびんのてつづきはどこでできますか。",
          "cn": "我还要转机，这个航班的手续可以在哪里办？",
          "reply": {
            "jp": "乗り継ぎのカウンターで確認できますので、こちらの案内に沿ってお進みください。",
            "reading": "のりつぎのかうんたーでかくにんできますので、こちらのあんないにそっておすすみください。",
            "cn": "可以到转机柜台确认，请沿着这边的指示前往。"
          },
          "keywords": [
            {
              "word": "乗り継ぎ",
              "reading": "のりつぎ",
              "meaning": "转机；接续换乘"
            },
            {
              "word": "手続き",
              "reading": "てつづき",
              "meaning": "手续"
            }
          ],
          "note": "出示下一程航班信息，可以减少口头描述的歧义。",
          "id": "airport-04"
        },
        {
          "sceneId": "airport",
          "taskId": "airport-05",
          "task": "不知道物品是否要申报时找咨询处",
          "situation": "旅客拿着自己携带物品的照片，向机场引导人员询问咨询位置。",
          "youRole": "旅客",
          "otherRole": "机场引导人员",
          "jp": "この品物の申告について相談したいのですが、どこへ行けばいいですか。",
          "reading": "このしなもののしんこくについてそうだんしたいのですが、どこへいけばいいですか。",
          "cn": "我想咨询这件物品是否需要申报，应该去哪里？",
          "reply": {
            "jp": "税関の係員に確認できますので、あちらの窓口でお尋ねください。",
            "reading": "ぜいかんのかかりいんにかくにんできますので、あちらのまどぐちでおたずねください。",
            "cn": "可以向海关工作人员确认，请到那边的窗口询问。"
          },
          "keywords": [
            {
              "word": "品物",
              "reading": "しなもの",
              "meaning": "物品"
            },
            {
              "word": "申告",
              "reading": "しんこく",
              "meaning": "申报"
            }
          ],
          "note": "此句只用于寻找正式咨询渠道，不判断物品能否携带入境。",
          "id": "airport-05"
        },
        {
          "sceneId": "airport",
          "taskId": "airport-06",
          "task": "说明托运行李未出现并请求查询",
          "situation": "行李转盘已停止，旅客仍未找到自己的箱子。",
          "youRole": "旅客",
          "otherRole": "机场或航空公司工作人员",
          "jp": "荷物がまだ出てこないのですが、調べていただけますか。",
          "reading": "にもつがまだでてこないのですが、しらべていただけますか。",
          "cn": "我的行李还没出来，可以帮我查一下吗？",
          "reply": {
            "jp": "お調べしますので、お預けになったときの荷物の控えを見せてください。",
            "reading": "おしらべしますので、おあずけになったときのにもつのひかえをみせてください。",
            "cn": "我来查询，请出示托运行李时拿到的凭条。"
          },
          "keywords": [
            {
              "word": "出てくる",
              "reading": "でてくる",
              "meaning": "出现；出来"
            },
            {
              "word": "調べる",
              "reading": "しらべる",
              "meaning": "查询；调查"
            }
          ],
          "note": "保留行李凭条，说明问题时更容易让工作人员定位。",
          "id": "airport-06"
        }
      ]
    },
    {
      "id": "hotel",
      "label": "酒店入住",
      "group": "交通与旅行",
      "description": "预订、入住与客房需求，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-2",
          "unit": "第5课住宿计划与住宿术语，非完整入住教程"
        },
        {
          "sourceId": "marugoto-travel-notes",
          "unit": "主题8旅行中的机场/酒店麻烦"
        }
      ],
      "dialogues": [
        {
          "sceneId": "hotel",
          "taskId": "hotel-01",
          "task": "报姓名并确认两晚预订",
          "situation": "住客抵达前台，预订姓名为林；本例有相应预订记录。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "林の名前で、今日から二泊予約しているのですが、確認をお願いします。",
          "reading": "はやしのなまえで、きょうからにはくよやくしているのですが、かくにんをおねがいします。",
          "cn": "我用林的名字预订了从今天开始的两晚住宿，麻烦帮我确认一下。",
          "reply": {
            "jp": "林様、二泊で承っておりますので、こちらでお手続きをお願いします。",
            "reading": "はやしさま、にはくでうけたまわっておりますので、こちらでおてつづきをおねがいします。",
            "cn": "林先生／女士，您的预订是两晚，请在这里办理手续。"
          },
          "keywords": [
            {
              "word": "名前",
              "reading": "なまえ",
              "meaning": "姓名"
            },
            {
              "word": "二泊",
              "reading": "にはく",
              "meaning": "两晚住宿"
            }
          ],
          "note": "用自己的实际姓名替换「林」，姓名读音也应一并说明。",
          "id": "hotel-01"
        },
        {
          "sceneId": "hotel",
          "taskId": "hotel-02",
          "task": "核对预订是否含早餐",
          "situation": "住客记不清套餐内容；本例预订不含早餐。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "予約したプランに、朝食は含まれていますか。",
          "reading": "よやくしたぷらんに、ちょうしょくはふくまれていますか。",
          "cn": "我预订的套餐包含早餐吗？",
          "reply": {
            "jp": "今回は素泊まりですが、朝食を追加することもできます。",
            "reading": "こんかいはすどまりですが、ちょうしょくをついかすることもできます。",
            "cn": "您这次订的是不含餐的住宿，也可以另加早餐。"
          },
          "keywords": [
            {
              "word": "含まれる",
              "reading": "ふくまれる",
              "meaning": "包含在内"
            },
            {
              "word": "朝食",
              "reading": "ちょうしょく",
              "meaning": "早餐"
            }
          ],
          "note": "如果要追加，可接着询问价格和用餐时间。",
          "id": "hotel-02"
        },
        {
          "sceneId": "hotel",
          "taskId": "hotel-03",
          "task": "询问能否稍晚退房",
          "situation": "住客想延后退房；本例前台需要先核对客房安排。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "明日のチェックアウトを、少し遅くしてもらうことはできますか。",
          "reading": "あしたのちぇっくあうとを、すこしおそくしてもらうことはできますか。",
          "cn": "明天退房可以稍微晚一点吗？",
          "reply": {
            "jp": "お部屋の状況を確認しますので、何時ごろをご希望か教えてください。",
            "reading": "おへやのじょうきょうをかくにんしますので、なんじごろをごきぼうかおしえてください。",
            "cn": "我确认一下客房安排，请告诉我您希望几点左右退房。"
          },
          "keywords": [
            {
              "word": "チェックアウト",
              "reading": "ちぇっくあうと",
              "meaning": "退房"
            },
            {
              "word": "遅くする",
              "reading": "おそくする",
              "meaning": "推迟"
            }
          ],
          "note": "是否可延迟、是否收费都需前台进一步确认。",
          "id": "hotel-03"
        },
        {
          "sceneId": "hotel",
          "taskId": "hotel-04",
          "task": "房卡打不开门时请前台帮忙",
          "situation": "住客带着房卡回前台，房门无法打开。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "カードをかざしても部屋のドアが開かないのですが、確認してもらえますか。",
          "reading": "かーどをかざしてもへやのどあがあかないのですが、かくにんしてもらえますか。",
          "cn": "刷了房卡，房门还是打不开，可以帮我确认一下吗？",
          "reply": {
            "jp": "申し訳ございません、お部屋の番号とお名前を伺ってもよろしいですか。",
            "reading": "もうしわけございません、おへやのばんごうとおなまえをうかがってもよろしいですか。",
            "cn": "非常抱歉，可以请您告诉我房间号和姓名吗？"
          },
          "keywords": [
            {
              "word": "かざす",
              "reading": "かざす",
              "meaning": "将卡等靠近感应处"
            },
            {
              "word": "開く",
              "reading": "あく",
              "meaning": "打开"
            }
          ],
          "note": "「開かない」读「あかない」，表示门无法打开。",
          "id": "hotel-04"
        },
        {
          "sceneId": "hotel",
          "taskId": "hotel-05",
          "task": "询问退房后能否寄存到傍晚",
          "situation": "住客已退房，打算傍晚回来取箱子；本例酒店可以寄存。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "夕方に戻る予定なのですが、それまで荷物を預かってもらえますか。",
          "reading": "ゆうがたにもどるよていなのですが、それまでにもつをあずかってもらえますか。",
          "cn": "我打算傍晚回来，可以把行李寄存到那时吗？",
          "reply": {
            "jp": "はい、お預かりしますので、お戻りの際はこちらの札をお持ちください。",
            "reading": "はい、おあずかりしますので、おもどりのさいはこちらのふだをおもちください。",
            "cn": "可以帮您寄存，回来时请带上这张领取牌。"
          },
          "keywords": [
            {
              "word": "預かる",
              "reading": "あずかる",
              "meaning": "代为保管"
            },
            {
              "word": "戻る",
              "reading": "もどる",
              "meaning": "回来"
            }
          ],
          "note": "请别人代为保管用「預かってもらう」；自己寄存用「預ける」。",
          "id": "hotel-05"
        },
        {
          "sceneId": "hotel",
          "taskId": "hotel-06",
          "task": "请求公司抬头的住宿收据",
          "situation": "住客结账并提供公司名称；本例前台可以按该名称开具收据。",
          "youRole": "住客",
          "otherRole": "酒店前台",
          "jp": "宿泊代の領収書を、この会社名で出していただけますか。",
          "reading": "しゅくはくだいのりょうしゅうしょを、このかいしゃめいでだしていただけますか。",
          "cn": "住宿费收据可以用这个公司名称作抬头吗？",
          "reply": {
            "jp": "承知しました、こちらに正式な会社名をご記入ください。",
            "reading": "しょうちしました、こちらにせいしきなかいしゃめいをごきにゅうください。",
            "cn": "好的，请在这里填写公司的正式名称。"
          },
          "keywords": [
            {
              "word": "宿泊代",
              "reading": "しゅくはくだい",
              "meaning": "住宿费"
            },
            {
              "word": "領収書",
              "reading": "りょうしゅうしょ",
              "meaning": "收据"
            }
          ],
          "note": "出示书面的正式名称，避免店员听错公司名称。",
          "id": "hotel-06"
        }
      ]
    },
    {
      "id": "housing",
      "label": "租房搬家",
      "group": "在日生活",
      "description": "看房、签约与搬家，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "B1场景8—9"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第3—4课"
        }
      ],
      "dialogues": [
        {
          "sceneId": "housing",
          "taskId": "housing-01",
          "task": "预约周末看房",
          "situation": "看房者指着房源资料咨询中介；本例周六下午可以带看。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "この部屋を見てみたいのですが、土曜日の午後に内見できますか。",
          "reading": "このへやをみてみたいのですが、どようびのごごにないけんできますか。",
          "cn": "我想看看这套房，周六下午可以安排看房吗？",
          "reply": {
            "jp": "午後でしたらご案内できますので、ご都合のよい時間を教えてください。",
            "reading": "ごごでしたらごあんないできますので、ごつごうのよいじかんをおしえてください。",
            "cn": "下午可以带您看房，请告诉我您方便的时间。"
          },
          "keywords": [
            {
              "word": "内見",
              "reading": "ないけん",
              "meaning": "看房"
            },
            {
              "word": "都合",
              "reading": "つごう",
              "meaning": "时间安排；方便与否"
            }
          ],
          "note": "看房预约不等于承诺签约，可以先确认房源是否仍可看。",
          "id": "housing-01"
        },
        {
          "sceneId": "housing",
          "taskId": "housing-02",
          "task": "要求列明入住前全部费用",
          "situation": "看房者希望比较总成本，中介尚未制作费用表。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "入居までに必要な費用を、項目ごとに書いてもらえますか。",
          "reading": "にゅうきょまでにひつようなひようを、こうもくごとにかいてもらえますか。",
          "cn": "入住前需要支付的费用，可以按项目写给我吗？",
          "reply": {
            "jp": "初期費用の見積もりを作りますので、少々お待ちください。",
            "reading": "しょきひようのみつもりをつくりますので、しょうしょうおまちください。",
            "cn": "我来制作初期费用明细，请稍等。"
          },
          "keywords": [
            {
              "word": "項目ごと",
              "reading": "こうもくごと",
              "meaning": "按项目逐项"
            },
            {
              "word": "費用",
              "reading": "ひよう",
              "meaning": "费用"
            }
          ],
          "note": "口头总价容易遗漏项目，要求书面明细更便于核对。",
          "id": "housing-02"
        },
        {
          "sceneId": "housing",
          "taskId": "housing-03",
          "task": "确认下月中旬能否入住及所需材料",
          "situation": "看房者希望下月中旬入住；中介需要核对房东安排。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "来月の半ばに入居したいのですが、日程と必要な書類を確認できますか。",
          "reading": "らいげつのなかばににゅうきょしたいのですが、にっていとひつようなしょるいをかくにんできますか。",
          "cn": "我想下个月中旬入住，可以确认一下日期和所需材料吗？",
          "reply": {
            "jp": "大家さんに日程を確認してから、必要書類と併せてご案内します。",
            "reading": "おおやさんににっていをかくにんしてから、ひつようしょるいとあわせてごあんないします。",
            "cn": "我向房东确认日期后，会连同所需材料一起告知您。"
          },
          "keywords": [
            {
              "word": "入居",
              "reading": "にゅうきょ",
              "meaning": "入住"
            },
            {
              "word": "半ば",
              "reading": "なかば",
              "meaning": "中间；月中"
            }
          ],
          "note": "入住日期和材料按该房源的实际答复确认。",
          "id": "housing-03"
        },
        {
          "sceneId": "housing",
          "taskId": "housing-04",
          "task": "空调不制冷时预约检查",
          "situation": "租客致电物业，空调有风但没有冷风；还未确定故障原因。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "エアコンから冷たい風が出ないのですが、今週中に見に来てもらえますか。",
          "reading": "えあこんからつめたいかぜがでないのですが、こんしゅうちゅうにみにきてもらえますか。",
          "cn": "空调不出冷风，可以这周内来检查一下吗？",
          "reply": {
            "jp": "担当者の予定を確認しますので、ご在宅の時間帯を教えてください。",
            "reading": "たんとうしゃのよていをかくにんしますので、ございたくのじかんたいをおしえてください。",
            "cn": "我确认一下负责人员的安排，请告诉我您在家的时间段。"
          },
          "keywords": [
            {
              "word": "冷たい風",
              "reading": "つめたいかぜ",
              "meaning": "冷风"
            },
            {
              "word": "今週中",
              "reading": "こんしゅうちゅう",
              "meaning": "本周之内"
            }
          ],
          "note": "描述能观察到的故障现象，不必先判断机器哪里坏了。",
          "id": "housing-04"
        },
        {
          "sceneId": "housing",
          "taskId": "housing-05",
          "task": "告知计划搬离日期并询问办理方式",
          "situation": "租客计划下月底搬走，尚未确认合同中的通知手续。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "来月末に退去したいのですが、どのような手続きが必要ですか。",
          "reading": "らいげつまつにたいきょしたいのですが、どのようなてつづきがひつようですか。",
          "cn": "我想下个月底搬走，需要办理哪些手续？",
          "reply": {
            "jp": "契約内容を確認してご説明しますので、お部屋の番号を教えてください。",
            "reading": "けいやくないようをかくにんしてごせつめいしますので、おへやのばんごうをおしえてください。",
            "cn": "我确认合同内容后向您说明，请告诉我房间号。"
          },
          "keywords": [
            {
              "word": "退去",
              "reading": "たいきょ",
              "meaning": "搬离；退租"
            },
            {
              "word": "来月末",
              "reading": "らいげつまつ",
              "meaning": "下个月底"
            }
          ],
          "note": "这里是提出希望日期，是否满足通知期限须另核对合同。",
          "id": "housing-05"
        },
        {
          "sceneId": "housing",
          "taskId": "housing-06",
          "task": "看不懂押金结算单时请求逐项说明",
          "situation": "租客收到押金结算明细，但不清楚其中的扣费项目。",
          "youRole": "租客或看房者",
          "otherRole": "中介或物业工作人员",
          "jp": "敷金の精算書について、この費用が何の分か説明してもらえますか。",
          "reading": "しききんのせいさんしょについて、このひようがなんのぶんかせつめいしてもらえますか。",
          "cn": "关于这份押金结算单，可以解释一下这项费用是什么吗？",
          "reply": {
            "jp": "明細を一緒に確認しながら、項目ごとにご説明します。",
            "reading": "めいさいをいっしょにかくにんしながら、こうもくごとにごせつめいします。",
            "cn": "我会和您一起核对明细，逐项说明。"
          },
          "keywords": [
            {
              "word": "敷金",
              "reading": "しききん",
              "meaning": "租房押金"
            },
            {
              "word": "精算書",
              "reading": "せいさんしょ",
              "meaning": "结算单"
            }
          ],
          "note": "先询问具体费用依据；本例不判断扣款是否合理或必然应退。",
          "id": "housing-06"
        }
      ]
    },
    {
      "id": "cityhall",
      "label": "市役所办事",
      "group": "在日生活",
      "description": "窗口、证件与申请，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景10"
        },
        {
          "sourceId": "irodori-a2-2",
          "unit": "第13课公共服务"
        }
      ],
      "dialogues": [
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-01",
          "task": "询问地址变更该去哪个窗口",
          "situation": "居民来到市役所咨询地址变更；本例由一楼相关窗口接待。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "住所が変わったのですが、どの窓口で相談すればいいですか。",
          "reading": "じゅうしょがかわったのですが、どのまどぐちでそうだんすればいいですか。",
          "cn": "我的地址变了，应该在哪个窗口咨询？",
          "reply": {
            "jp": "一階の住所変更の窓口をご案内しますので、こちらへどうぞ。",
            "reading": "いっかいのじゅうしょへんこうのまどぐちをごあんないしますので、こちらへどうぞ。",
            "cn": "我带您去一楼办理地址变更的窗口，请往这边走。"
          },
          "keywords": [
            {
              "word": "住所",
              "reading": "じゅうしょ",
              "meaning": "地址"
            },
            {
              "word": "窓口",
              "reading": "まどぐち",
              "meaning": "办事窗口"
            }
          ],
          "note": "先说要办的事，再问窗口，通常比记窗口编号更实用。",
          "id": "cityhall-01"
        },
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-02",
          "task": "询问这次手续需要哪些证明材料",
          "situation": "居民已说明要办的事项，想一次带齐所需材料。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "この手続きには、本人確認の書類以外に何が必要ですか。",
          "reading": "このてつづきには、ほんにんかくにんのしょるいいがいになにがひつようですか。",
          "cn": "办这项手续，除了身份证明材料，还需要什么？",
          "reply": {
            "jp": "お客様の状況を伺ってから、必要なものをご案内します。",
            "reading": "おきゃくさまのじょうきょうをうかがってから、ひつようなものをごあんないします。",
            "cn": "我先了解您的情况，再告诉您需要准备哪些材料。"
          },
          "keywords": [
            {
              "word": "本人確認",
              "reading": "ほんにんかくにん",
              "meaning": "身份核验"
            },
            {
              "word": "以外",
              "reading": "いがい",
              "meaning": "除了……以外"
            }
          ],
          "note": "所需材料随办理事项和个人情况变化，不把示例当成材料清单。",
          "id": "cityhall-02"
        },
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-03",
          "task": "不确定地址栏该填新住址还是旧住址",
          "situation": "居民正在填表，指着表上不理解的一栏；本例该栏填写现住址。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "ここの住所の欄には、新しい住所を書けばいいですか。",
          "reading": "ここのじゅうしょのらんには、あたらしいじゅうしょをかけばいいですか。",
          "cn": "这里的地址栏填新地址就可以了吗？",
          "reply": {
            "jp": "はい、今お住まいの住所を、省略せずにご記入ください。",
            "reading": "はい、いまおすまいのじゅうしょを、しょうりゃくせずにごきにゅうください。",
            "cn": "是的，请完整填写您现在的住址，不要省略。"
          },
          "keywords": [
            {
              "word": "欄",
              "reading": "らん",
              "meaning": "栏；填写区域"
            },
            {
              "word": "書けばいい",
              "reading": "かけばいい",
              "meaning": "写……就可以"
            }
          ],
          "note": "一定指明哪一栏；不同表格可能同时要求旧址和新址。",
          "id": "cityhall-03"
        },
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-04",
          "task": "计划搬到另一座城市时询问迁出步骤",
          "situation": "居民准备跨市搬家，还未确定要办哪些事项。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "別の市に引っ越す予定なのですが、転出の手続きについて教えてください。",
          "reading": "べつのしにひっこすよていなのですが、てんしゅつのてつづきについておしえてください。",
          "cn": "我打算搬到另一个市，请告诉我迁出手续怎么办。",
          "reply": {
            "jp": "ご案内しますので、お引っ越しの予定日を教えていただけますか。",
            "reading": "ごあんないしますので、おひっこしのよていびをおしえていただけますか。",
            "cn": "我来为您说明，可以先告诉我预计搬家的日期吗？"
          },
          "keywords": [
            {
              "word": "転出",
              "reading": "てんしゅつ",
              "meaning": "迁出"
            },
            {
              "word": "予定",
              "reading": "よてい",
              "meaning": "计划；预定"
            }
          ],
          "note": "告知搬家计划后，由窗口按具体情况说明流程。",
          "id": "cityhall-04"
        },
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-05",
          "task": "申请两份住民票副本",
          "situation": "居民需要两份证明提交给不同机构，记载内容尚待核对。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "住民票の写しを二通、お願いできますか。",
          "reading": "じゅうみんひょうのうつしをにつう、おねがいできますか。",
          "cn": "可以帮我开两份住民票副本吗？",
          "reply": {
            "jp": "二通ですね、記載する内容を確認しますので、提出先を教えてください。",
            "reading": "につうですね、きさいするないようをかくにんしますので、ていしゅつさきをおしえてください。",
            "cn": "两份，对吧？我确认一下需要记载的内容，请告诉我提交给哪里。"
          },
          "keywords": [
            {
              "word": "住民票の写し",
              "reading": "じゅうみんひょうのうつし",
              "meaning": "住民票副本"
            },
            {
              "word": "二通",
              "reading": "につう",
              "meaning": "两份文书"
            }
          ],
          "note": "「写し」在这里是正式证明名称的一部分，不是请窗口随便复印。",
          "id": "cityhall-05"
        },
        {
          "sceneId": "cityhall",
          "taskId": "cityhall-06",
          "task": "申请后确认要在哪里等候领取",
          "situation": "居民刚交完申请，本例凭号码叫号领取。",
          "youRole": "办事居民",
          "otherRole": "市役所窗口工作人员",
          "jp": "申請は終わったのですが、書類はどこで受け取ればいいですか。",
          "reading": "しんせいはおわったのですが、しょるいはどこでうけとればいいですか。",
          "cn": "申请已经办完了，文件应该在哪里领取？",
          "reply": {
            "jp": "書類はこちらの窓口でお渡ししますので、番号をお呼びするまでそちらの席でお待ちください。",
            "reading": "しょるいはこちらのまどぐちでおわたししますので、ばんごうをおよびするまでそちらのせきでおまちください。",
            "cn": "文件会在这个窗口交给您，请在那边的座位等候叫号。"
          },
          "keywords": [
            {
              "word": "申請",
              "reading": "しんせい",
              "meaning": "申请"
            },
            {
              "word": "受け取る",
              "reading": "うけとる",
              "meaning": "领取；接收"
            }
          ],
          "note": "申请完成与文件可领取是两个环节，要确认后续通知方式。",
          "id": "cityhall-06"
        }
      ]
    },
    {
      "id": "bank",
      "label": "银行支付",
      "group": "在日生活",
      "description": "账户、汇款与支付，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景10"
        }
      ],
      "dialogues": [
        {
          "sceneId": "bank",
          "taskId": "bank-01",
          "task": "咨询收工资用账户及开户材料",
          "situation": "客户在银行咨询开户，尚未确认是否符合该行条件。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "給料を受け取る口座を作りたいのですが、何を準備すればいいですか。",
          "reading": "きゅうりょうをうけとるこうざをつくりたいのですが、なにをじゅんびすればいいですか。",
          "cn": "我想开一个收工资的账户，需要准备什么？",
          "reply": {
            "jp": "お手続きについてご案内しますので、まずいくつか確認させてください。",
            "reading": "おてつづきについてごあんないしますので、まずいくつかかくにんさせてください。",
            "cn": "我来说明办理方式，请先让我确认几项信息。"
          },
          "keywords": [
            {
              "word": "口座",
              "reading": "こうざ",
              "meaning": "银行账户"
            },
            {
              "word": "準備",
              "reading": "じゅんび",
              "meaning": "准备"
            }
          ],
          "note": "这是开户咨询，不代表任何银行都会当场受理或开户成功。",
          "id": "bank-01"
        },
        {
          "sceneId": "bank",
          "taskId": "bank-02",
          "task": "请工作人员指导查询余额",
          "situation": "客户不会使用银行里的设备，想先查余额。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "残高だけ確認したいのですが、操作の仕方を教えてもらえますか。",
          "reading": "ざんだかだけかくにんしたいのですが、そうさのしかたをおしえてもらえますか。",
          "cn": "我只想查一下余额，可以教我怎么操作吗？",
          "reply": {
            "jp": "こちらの画面から進めますので、順番にご案内します。",
            "reading": "こちらのがめんからすすめますので、じゅんばんにごあんないします。",
            "cn": "可以从这个画面开始操作，我会按步骤说明。"
          },
          "keywords": [
            {
              "word": "残高",
              "reading": "ざんだか",
              "meaning": "余额"
            },
            {
              "word": "操作",
              "reading": "そうさ",
              "meaning": "操作"
            }
          ],
          "note": "请对方说明操作步骤，密码等私密内容仍由本人输入。",
          "id": "bank-02"
        },
        {
          "sceneId": "bank",
          "taskId": "bank-03",
          "task": "转账确认前核对收款信息",
          "situation": "客户已填写转账信息，尚未点击最终确认。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "振込先を間違えていないか、確定する前に一緒に確認してもらえますか。",
          "reading": "ふりこみさきをまちがえていないか、かくていするまえにいっしょにかくにんしてもらえますか。",
          "cn": "可以在最终确认前，帮我一起核对收款信息有没有填错吗？",
          "reply": {
            "jp": "承知しました、お手元の情報と画面の口座番号やお名前を照らし合わせましょう。",
            "reading": "しょうちしました、おてもとのじょうほうとがめんのこうざばんごうやおなまえをてらしあわせましょう。",
            "cn": "好的，我们把您手头的信息与画面上的账号和姓名核对一下。"
          },
          "keywords": [
            {
              "word": "振込先",
              "reading": "ふりこみさき",
              "meaning": "转账收款方"
            },
            {
              "word": "確定",
              "reading": "かくてい",
              "meaning": "最终确认；确定"
            }
          ],
          "note": "「確定する前に」明确是在转账提交前核对。",
          "id": "bank-03"
        },
        {
          "sceneId": "bank",
          "taskId": "bank-04",
          "task": "办理前询问本次转账手续费及限额",
          "situation": "客户准备转账，尚未提供金额和操作方式。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "今回の振り込みの手数料と、送れる金額の上限を教えてください。",
          "reading": "こんかいのふりこみのてすうりょうと、おくれるきんがくのじょうげんをおしえてください。",
          "cn": "请告诉我这次转账的手续费，以及最多能转多少钱。",
          "reply": {
            "jp": "方法と金額を確認してお調べしますので、いくら送るご予定ですか。",
            "reading": "ほうほうときんがくをかくにんしておしらべしますので、いくらおくるごよていですか。",
            "cn": "我确认方式和金额后为您查询，您计划转多少钱？"
          },
          "keywords": [
            {
              "word": "手数料",
              "reading": "てすうりょう",
              "meaning": "手续费"
            },
            {
              "word": "上限",
              "reading": "じょうげん",
              "meaning": "上限"
            }
          ],
          "note": "只询问本次业务条件，不把某个数字写成通用银行规则。",
          "id": "bank-04"
        },
        {
          "sceneId": "bank",
          "taskId": "bank-05",
          "task": "发现不认识的扣款记录并请求核查",
          "situation": "客户在明细中看到一笔记不清的扣款，原因尚未确定。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "この引き落としに覚えがないのですが、内容を調べてもらえますか。",
          "reading": "このひきおとしにおぼえがないのですが、ないようをしらべてもらえますか。",
          "cn": "我不记得这笔扣款，可以帮我查一下具体内容吗？",
          "reply": {
            "jp": "確認いたしますので、明細の日付と金額を教えてください。",
            "reading": "かくにんいたしますので、めいさいのひづけときんがくをおしえてください。",
            "cn": "我来核查，请告诉我明细上的日期和金额。"
          },
          "keywords": [
            {
              "word": "引き落とし",
              "reading": "ひきおとし",
              "meaning": "自动扣款"
            },
            {
              "word": "覚えがない",
              "reading": "おぼえがない",
              "meaning": "没有印象；不记得"
            }
          ],
          "note": "「覚えがない」陈述自己的情况，不先断定扣款原因。",
          "id": "bank-05"
        },
        {
          "sceneId": "bank",
          "taskId": "bank-06",
          "task": "遗失银行卡后请求说明停用流程",
          "situation": "客户发现银行卡不见了，联系银行官方工作人员。",
          "youRole": "银行客户",
          "otherRole": "银行工作人员",
          "jp": "キャッシュカードをなくしたのですが、利用を止めるにはどうすればいいですか。",
          "reading": "きゃっしゅかーどをなくしたのですが、りようをとめるにはどうすればいいですか。",
          "cn": "我的银行卡丢了，应该怎么暂停使用？",
          "reply": {
            "jp": "紛失のお手続きをご案内しますので、ご本人の確認をさせてください。",
            "reading": "ふんしつのおてつづきをごあんないしますので、ごほんにんのかくにんをさせてください。",
            "cn": "我来说明遗失处理流程，请先让我核验您的身份。"
          },
          "keywords": [
            {
              "word": "なくす",
              "reading": "なくす",
              "meaning": "弄丢；遗失"
            },
            {
              "word": "利用を止める",
              "reading": "りようをとめる",
              "meaning": "暂停使用"
            }
          ],
          "note": "向银行官方渠道说明卡片遗失，并按其指引办理。",
          "id": "bank-06"
        }
      ]
    },
    {
      "id": "delivery",
      "label": "邮寄快递",
      "group": "在日生活",
      "description": "寄件、收件与再次配送，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A1场景7；A2场景12"
        }
      ],
      "dialogues": [
        {
          "sceneId": "delivery",
          "taskId": "delivery-01",
          "task": "确认运单上的寄件人栏怎么填",
          "situation": "顾客在快递受理点填运单，不清楚自己地址应填在哪里。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "送り先はこちらで、自分の住所は差出人の欄に書けばいいですか。",
          "reading": "おくりさきはこちらで、じぶんのじゅうしょはさしだしにんのらんにかけばいいですか。",
          "cn": "收件地址填这里，自己的地址填在寄件人栏就可以了吗？",
          "reply": {
            "jp": "はい、差出人の欄に、お名前とご住所をお願いします。",
            "reading": "はい、さしだしにんのらんに、おなまえとごじゅうしょをおねがいします。",
            "cn": "是的，请在寄件人栏填写您的姓名和地址。"
          },
          "keywords": [
            {
              "word": "送り先",
              "reading": "おくりさき",
              "meaning": "收件地址；寄送目的地"
            },
            {
              "word": "差出人",
              "reading": "さしだしにん",
              "meaning": "寄件人"
            }
          ],
          "note": "区分寄件人和收件人，避免把双方地址填反。",
          "id": "delivery-01"
        },
        {
          "sceneId": "delivery",
          "taskId": "delivery-02",
          "task": "出示地址询问运费和预计送达日",
          "situation": "顾客带着包装好的箱子和收件地址咨询；费用和时效还未测算。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "この住所に送ると、送料はいくらで、いつごろ届きますか。",
          "reading": "このじゅうしょにおくると、そうりょうはいくらで、いつごろとどきますか。",
          "cn": "寄到这个地址，运费多少钱，大概什么时候能到？",
          "reply": {
            "jp": "箱の大きさと重さを確認してから、料金と到着の目安をお伝えします。",
            "reading": "はこのおおきさとおもさをかくにんしてから、りょうきんととうちゃくのめやすをおつたえします。",
            "cn": "我先确认箱子的大小和重量，再告诉您费用和预计到达时间。"
          },
          "keywords": [
            {
              "word": "送料",
              "reading": "そうりょう",
              "meaning": "运费"
            },
            {
              "word": "届く",
              "reading": "とどく",
              "meaning": "送达"
            }
          ],
          "note": "「いつごろ」询问大致时间，预计送达不等于保证送达。",
          "id": "delivery-02"
        },
        {
          "sceneId": "delivery",
          "taskId": "delivery-03",
          "task": "寄易碎杯子前询问包装是否足够",
          "situation": "顾客展示已经装箱的杯子，请工作人员检查包装。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "中に割れやすいコップが入っているのですが、この包み方で大丈夫ですか。",
          "reading": "なかにわれやすいこっぷがはいっているのですが、このつつみかたでだいじょうぶですか。",
          "cn": "里面装的是容易碎的杯子，这样包装可以吗？",
          "reply": {
            "jp": "箱の中で動かないように、もう少し緩衝材を入れましょう。",
            "reading": "はこのなかでうごかないように、もうすこしかんしょうざいをいれましょう。",
            "cn": "再放一些缓冲材料，让它在箱子里不会晃动吧。"
          },
          "keywords": [
            {
              "word": "割れやすい",
              "reading": "われやすい",
              "meaning": "容易破碎的"
            },
            {
              "word": "包み方",
              "reading": "つつみかた",
              "meaning": "包装方式"
            }
          ],
          "note": "先告知物品特点，再请工作人员按当前包装检查。",
          "id": "delivery-03"
        },
        {
          "sceneId": "delivery",
          "taskId": "delivery-04",
          "task": "在收件人同意后申请运费到付",
          "situation": "顾客已和收件人确认由对方承担运费，向受理人员说明。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "相手が送料を払うことになっているので、着払いで送れますか。",
          "reading": "あいてがそうりょうをはらうことになっているので、ちゃくばらいでおくれますか。",
          "cn": "已经说好由对方付运费，可以用到付寄出吗？",
          "reply": {
            "jp": "着払いで承りますので、こちらの送り状をお使いください。",
            "reading": "ちゃくばらいでうけたまわりますので、こちらのおくりじょうをおつかいください。",
            "cn": "可以按运费到付受理，请使用这张运单。"
          },
          "keywords": [
            {
              "word": "着払い",
              "reading": "ちゃくばらい",
              "meaning": "运费到付"
            },
            {
              "word": "送料",
              "reading": "そうりょう",
              "meaning": "运费"
            }
          ],
          "note": "「着払い」通常指运费由收件人付，不是代收商品货款。",
          "id": "delivery-04"
        },
        {
          "sceneId": "delivery",
          "taskId": "delivery-05",
          "task": "收到未投递通知后申请明晚再送",
          "situation": "收件人根据未投递通知联系配送方；明晚是否可送还需确认。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "不在票を見たのですが、明日の夜にもう一度届けてもらえますか。",
          "reading": "ふざいひょうをみたのですが、あしたのよるにもういちどとどけてもらえますか。",
          "cn": "我看到了未投递通知，可以明天晚上再送一次吗？",
          "reply": {
            "jp": "明日の夜ですね、まず荷物の番号を伺って、配達できる時間帯を確認します。",
            "reading": "あしたのよるですね、まずにもつのばんごうをうかがって、はいたつできるじかんたいをかくにんします。",
            "cn": "明天晚上，对吧？我先记下包裹号码，再确认可以配送的时间段。"
          },
          "keywords": [
            {
              "word": "不在票",
              "reading": "ふざいひょう",
              "meaning": "未能投递通知单"
            },
            {
              "word": "もう一度",
              "reading": "もういちど",
              "meaning": "再一次"
            }
          ],
          "note": "先准备通知单上的包裹号码，便于对方查找。",
          "id": "delivery-05"
        },
        {
          "sceneId": "delivery",
          "taskId": "delivery-06",
          "task": "物流显示已送达但自己没收到",
          "situation": "收件人查看追踪页面后联系配送方，实际投递位置尚不清楚。",
          "youRole": "寄件人或收件人",
          "otherRole": "邮局或快递工作人员",
          "jp": "追跡では配達済みになっていますが、荷物が届いていないので確認をお願いします。",
          "reading": "ついせきでははいたつずみになっていますが、にもつがとどいていないのでかくにんをおねがいします。",
          "cn": "物流追踪显示已送达，但我没收到包裹，请帮忙核查。",
          "reply": {
            "jp": "追跡番号を教えていただければ、配達時の記録をお調べします。",
            "reading": "ついせきばんごうをおしえていただければ、はいたつじのきろくをおしらべします。",
            "cn": "请告诉我追踪号码，我来查询投递时的记录。"
          },
          "keywords": [
            {
              "word": "追跡",
              "reading": "ついせき",
              "meaning": "追踪"
            },
            {
              "word": "配達済み",
              "reading": "はいたつずみ",
              "meaning": "已送达"
            }
          ],
          "note": "区分页面显示与自己实际收到的情况，让问题更清楚。",
          "id": "delivery-06"
        }
      ]
    },
    {
      "id": "classroom",
      "label": "课堂学习",
      "group": "学习与工作",
      "description": "听课、提问与作业，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "教室的日语、第2课"
        },
        {
          "sourceId": "irodori-a2-1",
          "unit": "第9—10课"
        },
        {
          "sourceId": "tufs-dialog",
          "unit": "请求、许可、时间询问等功能"
        }
      ],
      "dialogues": [
        {
          "sceneId": "classroom",
          "taskId": "classroom-01",
          "task": "请老师重说最后一个步骤",
          "situation": "课堂上，学生没有听清练习的最后一个步骤。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "すみません、最後の手順が聞き取れませんでした。そこだけ、もう一度説明していただけますか。",
          "reading": "すみません、さいごのてじゅんがききとれませんでした。そこだけ、もういちどせつめいしていただけますか。",
          "cn": "不好意思，最后一个步骤我没听清。能否只把那部分再说明一遍？",
          "reply": {
            "jp": "はい。最後は、二人で答えを比べてください。",
            "reading": "はい。さいごは、ふたりでこたえをくらべてください。",
            "cn": "好的。最后请两个人对照答案。"
          },
          "keywords": [
            {
              "word": "手順",
              "reading": "てじゅん",
              "meaning": "步骤"
            },
            {
              "word": "聞き取る",
              "reading": "ききとる",
              "meaning": "听清"
            }
          ],
          "note": "指出没听懂的具体部分，比只说「分かりません」更便于对方解释。",
          "id": "classroom-01"
        },
        {
          "sceneId": "classroom",
          "taskId": "classroom-02",
          "task": "请老师解释句中的词义",
          "situation": "学生读到「宿題が済んだら」这一表达，不明白「済む」的意思。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "この文の「済む」は、どういう意味ですか。",
          "reading": "このぶんの「すむ」は、どういういみですか。",
          "cn": "这句话里的「済む」是什么意思？",
          "reply": {
            "jp": "ここでは「終わる」という意味です。「宿題が終わったら」と言い換えられます。",
            "reading": "ここでは「おわる」といういみです。「しゅくだいがおわったら」といいかえられます。",
            "cn": "在这里是“完成”的意思，可以换成“作业做完后”。"
          },
          "keywords": [
            {
              "word": "済む",
              "reading": "すむ",
              "meaning": "完成；结束"
            },
            {
              "word": "言い換える",
              "reading": "いいかえる",
              "meaning": "换一种说法"
            }
          ],
          "note": "",
          "id": "classroom-02"
        },
        {
          "sceneId": "classroom",
          "taskId": "classroom-03",
          "task": "确认作业页数和提交时间",
          "situation": "老师布置了练习册作业，学生核对范围和期限；数字仅为课堂示例。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "宿題は十ページから十二ページまでで、木曜日に提出すればいいですか。",
          "reading": "しゅくだいはじゅっページからじゅうにページまでで、もくようびにていしゅつすればいいですか。",
          "cn": "作业是第十页到第十二页，周四交就可以了吗？",
          "reply": {
            "jp": "はい。その三ページを解いて、木曜日の授業で出してください。",
            "reading": "はい。そのさんページをといて、もくようびのじゅぎょうでだしてください。",
            "cn": "是的。请做完那三页，在周四上课时交。"
          },
          "keywords": [
            {
              "word": "提出する",
              "reading": "ていしゅつする",
              "meaning": "提交"
            },
            {
              "word": "解く",
              "reading": "とく",
              "meaning": "解答"
            }
          ],
          "note": "",
          "id": "classroom-03"
        },
        {
          "sceneId": "classroom",
          "taskId": "classroom-04",
          "task": "因上传失败请求改交作业",
          "situation": "学生已经完成报告，但课程网站上传失败。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "レポートはできたのですが、サイトにアップロードできません。メールで送ってもいいですか。",
          "reading": "レポートはできたのですが、サイトにアップロードできません。メールでおくってもいいですか。",
          "cn": "报告已经写好了，但上传不到网站上。可以通过邮件交吗？",
          "reply": {
            "jp": "分かりました。今回はメールで受け取ります。エラーの画面も一緒に送ってください。",
            "reading": "わかりました。こんかいはメールでうけとります。エラーのがめんもいっしょにおくってください。",
            "cn": "明白了。这次我通过邮件接收，请把报错画面也一起发来。"
          },
          "keywords": [
            {
              "word": "アップロード",
              "reading": "アップロード",
              "meaning": "上传"
            },
            {
              "word": "受け取る",
              "reading": "うけとる",
              "meaning": "接收"
            }
          ],
          "note": "说明困难后再提出替代办法；回应只是示例，不代表课程通用规定。",
          "id": "classroom-04"
        },
        {
          "sceneId": "classroom",
          "taskId": "classroom-05",
          "task": "请假并询问如何补上课程",
          "situation": "学生下周有事不能上课，提前向老师请假。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "来週は用事があって授業を休みます。休んだ分は、どの資料で勉強すればいいですか。",
          "reading": "らいしゅうはようじがあってじゅぎょうをやすみます。やすんだぶんは、どのしりょうでべんきょうすればいいですか。",
          "cn": "下周我有事要请假。缺的那部分课程该用什么资料补学呢？",
          "reply": {
            "jp": "その日の資料を送りますね。読んで分からないところは、次の授業で聞いてください。",
            "reading": "そのひのしりょうをおくりますね。よんでわからないところは、つぎのじゅぎょうできいてください。",
            "cn": "我会把那天的资料发给你。读完还有不懂的地方，下次上课时问我。"
          },
          "keywords": [
            {
              "word": "用事",
              "reading": "ようじ",
              "meaning": "事情；安排"
            },
            {
              "word": "休んだ分",
              "reading": "やすんだぶん",
              "meaning": "缺课的那部分"
            }
          ],
          "note": "",
          "id": "classroom-05"
        },
        {
          "sceneId": "classroom",
          "taskId": "classroom-06",
          "task": "复述小组任务以确认理解",
          "situation": "开始小组练习前，学生确认是否每个人都要发言。",
          "youRole": "学生",
          "otherRole": "老师",
          "jp": "まずグループで話し合って、そのあと一人ずつ発表する、ということですか。",
          "reading": "まずグループではなしあって、そのあとひとりずつはっぴょうする、ということですか。",
          "cn": "意思是先在小组里讨论，然后每个人依次发言，对吗？",
          "reply": {
            "jp": "話し合うところまでは合っています。発表は、グループの代表一人で大丈夫です。",
            "reading": "はなしあうところまではあっています。はっぴょうは、グループのだいひょうひとりでだいじょうぶです。",
            "cn": "讨论这部分理解对了。发言由小组的一位代表来做就可以。"
          },
          "keywords": [
            {
              "word": "一人ずつ",
              "reading": "ひとりずつ",
              "meaning": "每人依次"
            },
            {
              "word": "代表",
              "reading": "だいひょう",
              "meaning": "代表"
            }
          ],
          "note": "「〜ということですか」用于核对自己对任务的理解。",
          "id": "classroom-06"
        }
      ]
    },
    {
      "id": "exam",
      "label": "备考应试",
      "group": "学习与工作",
      "description": "报名、复习与考试，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-1",
          "unit": "第9—10课学习沟通"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第9—10课学习方法"
        },
        {
          "sourceId": "jees-jlpt",
          "unit": "报名与受验票公告术语"
        }
      ],
      "dialogues": [
        {
          "sceneId": "exam",
          "taskId": "exam-01",
          "task": "询问校内考试范围和题型",
          "situation": "校内课程考试前，学生向任课老师询问；不是某项全国考试的规定。",
          "youRole": "考生",
          "otherRole": "老师",
          "jp": "来週の試験には、今月習った文法が全部出ますか。作文もありますか。",
          "reading": "らいしゅうのしけんには、こんげつならったぶんぽうがぜんぶでますか。さくぶんもありますか。",
          "cn": "下周考试会考本月学过的所有语法吗？也有作文吗？",
          "reply": {
            "jp": "文法は今月の内容が範囲です。作文はなく、短い文を作る問題があります。",
            "reading": "ぶんぽうはこんげつのないようがはんいです。さくぶんはなく、みじかいぶんをつくるもんだいがあります。",
            "cn": "语法范围是本月学的内容。没有作文，但有写短句的题。"
          },
          "keywords": [
            {
              "word": "範囲",
              "reading": "はんい",
              "meaning": "范围"
            },
            {
              "word": "作文",
              "reading": "さくぶん",
              "meaning": "作文"
            }
          ],
          "note": "",
          "id": "exam-01"
        },
        {
          "sceneId": "exam",
          "taskId": "exam-02",
          "task": "准考证尚未收到时请求查询",
          "situation": "考生已报名，但未收到准考证，向考试咨询人员求助。",
          "youRole": "考生",
          "otherRole": "考试咨询人员",
          "jp": "申し込みは済んでいますが、受験票がまだ届きません。どうすれば確認できますか。",
          "reading": "もうしこみはすんでいますが、じゅけんひょうがまだとどきません。どうすればかくにんできますか。",
          "cn": "我已经完成报名了，但准考证还没收到。该怎么查询呢？",
          "reply": {
            "jp": "お申し込みの状況を確認します。受付番号を教えていただけますか。",
            "reading": "おもうしこみのじょうきょうをかくにんします。うけつけばんごうをおしえていただけますか。",
            "cn": "我来确认您的报名情况，可以告诉我受理编号吗？"
          },
          "keywords": [
            {
              "word": "受験票",
              "reading": "じゅけんひょう",
              "meaning": "准考证"
            },
            {
              "word": "受付番号",
              "reading": "うけつけばんごう",
              "meaning": "受理编号"
            }
          ],
          "note": "受理编号等查询方式依主办方而异；此处练习说明问题和请求查询。",
          "id": "exam-02"
        },
        {
          "sceneId": "exam",
          "taskId": "exam-03",
          "task": "核对考场入口和集合时间",
          "situation": "考生拿着示例考试通知，在会场入口向工作人员确认。",
          "youRole": "考生",
          "otherRole": "会场工作人员",
          "jp": "この案内だと、集合は九時半で、入口はこちらですか。",
          "reading": "このあんないだと、しゅうごうはくじはんで、いりぐちはこちらですか。",
          "cn": "按这份通知，是九点半集合，入口在这里，对吗？",
          "reply": {
            "jp": "集合は九時半で合っています。入口は建物の反対側です。",
            "reading": "しゅうごうはくじはんであっています。いりぐちはたてもののはんたいがわです。",
            "cn": "集合时间九点半是对的，入口在建筑的另一侧。"
          },
          "keywords": [
            {
              "word": "集合",
              "reading": "しゅうごう",
              "meaning": "集合"
            },
            {
              "word": "反対側",
              "reading": "はんたいがわ",
              "meaning": "另一侧；对面"
            }
          ],
          "note": "",
          "id": "exam-03"
        },
        {
          "sceneId": "exam",
          "taskId": "exam-04",
          "task": "确认答题纸上的编号填写栏",
          "situation": "考试开始前，考生不确定答题纸的两个栏位。",
          "youRole": "考生",
          "otherRole": "监考人员",
          "jp": "受験番号はこの上の欄に書けばいいですか。下の欄は何を書くんですか。",
          "reading": "じゅけんばんごうはこのうえのらんにかけばいいですか。したのらんはなにをかくんですか。",
          "cn": "准考编号写在上面这一栏就可以吗？下面这一栏写什么呢？",
          "reply": {
            "jp": "はい、上が受験番号です。下の欄には、お名前を書いてください。",
            "reading": "はい、うえがじゅけんばんごうです。したのらんには、おなまえをかいてください。",
            "cn": "是的，上面写准考编号。下面一栏请填写姓名。"
          },
          "keywords": [
            {
              "word": "欄",
              "reading": "らん",
              "meaning": "栏位"
            },
            {
              "word": "受験番号",
              "reading": "じゅけんばんごう",
              "meaning": "准考编号"
            }
          ],
          "note": "",
          "id": "exam-04"
        },
        {
          "sceneId": "exam",
          "taskId": "exam-05",
          "task": "未听清考试要求时请监考澄清",
          "situation": "一场校内模拟考试开始前，考生确认是否可以在试卷上做标记。",
          "youRole": "考生",
          "otherRole": "监考人员",
          "jp": "さっきの説明がよく分かりませんでした。問題用紙に線を引いてもいい、ということですか。",
          "reading": "さっきのせつめいがよくわかりませんでした。もんだいようしにせんをひいてもいい、ということですか。",
          "cn": "刚才的说明我没太明白。意思是可以在试卷上画线，对吗？",
          "reply": {
            "jp": "はい、この模擬試験では大丈夫です。答えは別の解答用紙に書いてください。",
            "reading": "はい、このもぎしけんではだいじょうぶです。こたえはべつのかいとうようしにかいてください。",
            "cn": "是的，这场模拟考试可以。答案请写在另一张答题纸上。"
          },
          "keywords": [
            {
              "word": "線を引く",
              "reading": "せんをひく",
              "meaning": "画线"
            },
            {
              "word": "解答用紙",
              "reading": "かいとうようし",
              "meaning": "答题纸"
            }
          ],
          "note": "此句用于向现场人员确认，不作为任何正式考试的规则说明。",
          "id": "exam-05"
        },
        {
          "sceneId": "exam",
          "taskId": "exam-06",
          "task": "请求查看试卷并了解薄弱点",
          "situation": "课程测验成绩公布后，学生向老师请求反馈。",
          "youRole": "考生",
          "otherRole": "老师",
          "jp": "点数だけでは、どこを直せばいいか分かりません。答案を見ながら教えていただけますか。",
          "reading": "てんすうだけでは、どこをなおせばいいかわかりません。とうあんをみながらおしえていただけますか。",
          "cn": "只看分数，我不清楚哪些地方需要改进。能否结合我的答卷讲解一下？",
          "reply": {
            "jp": "もちろんです。授業のあとで、間違いの多かった問題から一緒に見ましょう。",
            "reading": "もちろんです。じゅぎょうのあとで、まちがいのおおかったもんだいからいっしょにみましょう。",
            "cn": "当然可以。下课后，我们从出错较多的题开始一起看吧。"
          },
          "keywords": [
            {
              "word": "答案",
              "reading": "とうあん",
              "meaning": "答卷；作答内容"
            },
            {
              "word": "点数",
              "reading": "てんすう",
              "meaning": "分数"
            }
          ],
          "note": "",
          "id": "exam-06"
        }
      ]
    },
    {
      "id": "interview",
      "label": "求职面试",
      "group": "学习与工作",
      "description": "应聘、经历与自我介绍，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景16—17"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第18课"
        },
        {
          "sourceId": "marugoto-travel-notes",
          "unit": "主题9求职"
        }
      ],
      "dialogues": [
        {
          "sceneId": "interview",
          "taskId": "interview-01",
          "task": "因时间冲突请求调整面试",
          "situation": "应聘者已收到面试安排，原定上午有无法改动的事情；日期仅为示例。",
          "youRole": "应聘者",
          "otherRole": "招聘工作人员",
          "jp": "面接のご案内、ありがとうございます。金曜日の午前中は都合がつかないのですが、午後に変更していただくことは可能でしょうか。",
          "reading": "めんせつのごあんない、ありがとうございます。きんようびのごぜんちゅうはつごうがつかないのですが、ごごにへんこうしていただくことはかのうでしょうか。",
          "cn": "感谢您的面试通知。周五上午我时间上无法安排，请问可以改到下午吗？",
          "reply": {
            "jp": "午後の空きを確認します。二時以降でしたら、ご都合はいかがですか。",
            "reading": "ごごのあきをかくにんします。にじいこうでしたら、ごつごうはいかがですか。",
            "cn": "我来确认一下下午是否有空档。两点以后您方便吗？"
          },
          "keywords": [
            {
              "word": "都合がつかない",
              "reading": "つごうがつかない",
              "meaning": "时间无法安排"
            },
            {
              "word": "変更",
              "reading": "へんこう",
              "meaning": "更改"
            }
          ],
          "note": "",
          "id": "interview-01"
        },
        {
          "sceneId": "interview",
          "taskId": "interview-02",
          "task": "简要介绍真实的相关工作经历",
          "situation": "示例人物确实有两年酒店前台经验；学习时须替换成自己的真实经历。",
          "youRole": "应聘者",
          "otherRole": "面试官",
          "jp": "これまではホテルの受付で、二年間、予約の確認とお客様のご案内を担当していました。",
          "reading": "これまではホテルのうけつけで、にねんかん、よやくのかくにんとおきゃくさまのごあんないをたんとうしていました。",
          "cn": "此前我在酒店前台工作了两年，负责核对预订和接待引导客人。",
          "reply": {
            "jp": "ありがとうございます。その仕事で、特に気をつけていたことは何ですか。",
            "reading": "ありがとうございます。そのしごとで、とくにきをつけていたことはなんですか。",
            "cn": "谢谢。在那份工作中，您特别注意什么？"
          },
          "keywords": [
            {
              "word": "担当する",
              "reading": "たんとうする",
              "meaning": "负责"
            },
            {
              "word": "受付",
              "reading": "うけつけ",
              "meaning": "前台；接待"
            }
          ],
          "note": "示例中的行业、年数和职责不能直接当作自己的履历。",
          "id": "interview-02"
        },
        {
          "sceneId": "interview",
          "taskId": "interview-03",
          "task": "说明选择客服岗位的理由",
          "situation": "示例人物正在应聘客户支持岗位，并确实希望从事帮助客户解决问题的工作。",
          "youRole": "应聘者",
          "otherRole": "面试官",
          "jp": "お客様の困りごとを聞いて、解決を手伝う仕事がしたいと思い、この職種に応募しました。",
          "reading": "おきゃくさまのこまりごとをきいて、かいけつをてつだうしごとがしたいとおもい、このしょくしゅにおうぼしました。",
          "cn": "我希望从事倾听客户困难、帮助解决问题的工作，因此申请了这个岗位。",
          "reply": {
            "jp": "その点に興味を持ってくださったのですね。どのような対応が大切だと思いますか。",
            "reading": "そのてんにきょうみをもってくださったのですね。どのようなたいおうがたいせつだとおもいますか。",
            "cn": "原来您对这一点感兴趣。您认为怎样处理客户的问题比较重要？"
          },
          "keywords": [
            {
              "word": "困りごと",
              "reading": "こまりごと",
              "meaning": "遇到的困难"
            },
            {
              "word": "職種",
              "reading": "しょくしゅ",
              "meaning": "工种；岗位类别"
            }
          ],
          "note": "把应聘理由和具体工作内容联系起来，并按自己的实际想法表达。",
          "id": "interview-03"
        },
        {
          "sceneId": "interview",
          "taskId": "interview-04",
          "task": "用一项具体做法说明个人优势",
          "situation": "示例人物确实曾制作交接清单；此处演示“优势＋事例”的表达结构。",
          "youRole": "应聘者",
          "otherRole": "面试官",
          "jp": "私の強みは、作業を整理して進められることです。前の職場では、引き継ぎ用の一覧表を作りました。",
          "reading": "わたしのつよみは、さぎょうをせいりしてすすめられることです。まえのしょくばでは、ひきつぎようのいちらんひょうをつくりました。",
          "cn": "我的优势是能有条理地推进工作。在上一家公司，我制作过工作交接清单。",
          "reply": {
            "jp": "その一覧表は、どのような場面で役に立ちましたか。",
            "reading": "そのいちらんひょうは、どのようなばめんでやくにたちましたか。",
            "cn": "那份清单在什么情况下发挥了作用？"
          },
          "keywords": [
            {
              "word": "引き継ぎ",
              "reading": "ひきつぎ",
              "meaning": "工作交接"
            },
            {
              "word": "一覧表",
              "reading": "いちらんひょう",
              "meaning": "一览表；清单"
            }
          ],
          "note": "只举自己实际做过的事，不为套用表达而编造经历或成果。",
          "id": "interview-04"
        },
        {
          "sceneId": "interview",
          "taskId": "interview-05",
          "task": "核对面试问题所指的经历",
          "situation": "面试官问到处理分歧的经历，应聘者确认是否指上一份工作。",
          "youRole": "应聘者",
          "otherRole": "面试官",
          "jp": "今のご質問は、前の職場での経験について、という理解でよろしいでしょうか。",
          "reading": "いまのごしつもんは、まえのしょくばでのけいけんについて、というりかいでよろしいでしょうか。",
          "cn": "我可以理解为，您刚才问的是我在上一家公司的经历吗？",
          "reply": {
            "jp": "はい。仕事で意見が分かれたときの対応を教えてください。",
            "reading": "はい。しごとでいけんがわかれたときのたいおうをおしえてください。",
            "cn": "是的，请介绍一下工作中意见不一致时，您是怎样处理的。"
          },
          "keywords": [
            {
              "word": "理解",
              "reading": "りかい",
              "meaning": "理解"
            },
            {
              "word": "意見が分かれる",
              "reading": "いけんがわかれる",
              "meaning": "意见出现分歧"
            }
          ],
          "note": "",
          "id": "interview-05"
        },
        {
          "sceneId": "interview",
          "taskId": "interview-06",
          "task": "询问入职职责和后续选考",
          "situation": "面试接近结束，面试官允许应聘者提问；流程仅为示例。",
          "youRole": "应聘者",
          "otherRole": "面试官",
          "jp": "入社後に担当する業務と、今後の選考の流れを教えていただけますか。",
          "reading": "にゅうしゃごにたんとうするぎょうむと、こんごのせんこうのながれをおしえていただけますか。",
          "cn": "能否介绍一下入职后负责的工作，以及后续选拔流程？",
          "reply": {
            "jp": "まずは問い合わせ対応を担当していただく予定です。次の面接については、来週ご連絡します。",
            "reading": "まずはといあわせたいおうをたんとうしていただくよていです。つぎのめんせつについては、らいしゅうごれんらくします。",
            "cn": "我们计划先请您负责咨询应对工作。关于下一轮面试，会在下周联系您。"
          },
          "keywords": [
            {
              "word": "業務",
              "reading": "ぎょうむ",
              "meaning": "工作业务"
            },
            {
              "word": "選考",
              "reading": "せんこう",
              "meaning": "选拔；招聘筛选"
            }
          ],
          "note": "",
          "id": "interview-06"
        }
      ]
    },
    {
      "id": "meeting",
      "label": "会议协作",
      "group": "学习与工作",
      "description": "汇报、讨论与安排任务，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-1",
          "unit": "第13—14课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景18—19"
        },
        {
          "sourceId": "tufs-dialog",
          "unit": "意见、提议、条件、妥协等功能"
        }
      ],
      "dialogues": [
        {
          "sceneId": "meeting",
          "taskId": "meeting-01",
          "task": "确认本次会议要决定到哪一步",
          "situation": "团队有多个方案，参会者在讨论开始前确认今天的目标。",
          "youRole": "参会者",
          "otherRole": "会议主持人",
          "jp": "今日は、案を一つに絞るところまで決める予定ですか。",
          "reading": "きょうは、あんをひとつにしぼるところまできめるよていですか。",
          "cn": "今天计划讨论到只留下一个方案吗？",
          "reply": {
            "jp": "今日は候補を二つに絞って、最終決定は次回にしましょう。",
            "reading": "きょうはこうほをふたつにしぼって、さいしゅうけっていはじかいにしましょう。",
            "cn": "今天先把候选缩减为两个，最终决定留到下次吧。"
          },
          "keywords": [
            {
              "word": "絞る",
              "reading": "しぼる",
              "meaning": "缩小范围；筛选"
            },
            {
              "word": "候補",
              "reading": "こうほ",
              "meaning": "候选"
            }
          ],
          "note": "",
          "id": "meeting-01"
        },
        {
          "sceneId": "meeting",
          "taskId": "meeting-02",
          "task": "汇报已完成和待处理的工作",
          "situation": "团队例会上，负责人汇报自己整理资料的当前进度。",
          "youRole": "任务负责人",
          "otherRole": "同事",
          "jp": "資料の整理は終わっていますが、数字の確認がまだ残っています。今日の午後に確認します。",
          "reading": "しりょうのせいりはおわっていますが、すうじのかくにんがまだのこっています。きょうのごごにかくにんします。",
          "cn": "资料整理已经完成，但数字还没核对完。我今天下午会核对。",
          "reply": {
            "jp": "分かりました。確認が終わったら、最新版を共有してもらえますか。",
            "reading": "わかりました。かくにんがおわったら、さいしんばんをきょうゆうしてもらえますか。",
            "cn": "明白了。核对完成后，可以分享最新版吗？"
          },
          "keywords": [
            {
              "word": "残る",
              "reading": "のこる",
              "meaning": "剩下；尚未完成"
            },
            {
              "word": "最新版",
              "reading": "さいしんばん",
              "meaning": "最新版"
            }
          ],
          "note": "",
          "id": "meeting-02"
        },
        {
          "sceneId": "meeting",
          "taskId": "meeting-03",
          "task": "核对提案中的试行范围",
          "situation": "同事提出先试行新方案，参会者确认是不是暂不全面更换。",
          "youRole": "参会者",
          "otherRole": "提案同事",
          "jp": "先に一つのチームで試してから、全体に広げる、という提案ですか。",
          "reading": "さきにひとつのチームでためしてから、ぜんたいにひろげる、というていあんですか。",
          "cn": "您的提议是先让一个团队试行，然后再推广到整体，对吗？",
          "reply": {
            "jp": "はい。最初から全部変えるのではなく、まず使いにくい点を確かめたいです。",
            "reading": "はい。さいしょからぜんぶかえるのではなく、まずつかいにくいてんをたしかめたいです。",
            "cn": "是的。我希望先确认有哪些使用不便之处，不在一开始就全部更换。"
          },
          "keywords": [
            {
              "word": "試す",
              "reading": "ためす",
              "meaning": "试用；尝试"
            },
            {
              "word": "広げる",
              "reading": "ひろげる",
              "meaning": "扩大；推广"
            }
          ],
          "note": "",
          "id": "meeting-03"
        },
        {
          "sceneId": "meeting",
          "taskId": "meeting-04",
          "task": "请求展示一页补充资料",
          "situation": "讨论中，参会者准备通过资料解释自己的意见。",
          "youRole": "参会者",
          "otherRole": "会议主持人",
          "jp": "補足したいことがあります。資料を一枚、画面に出してもよろしいですか。",
          "reading": "ほそくしたいことがあります。しりょうをいちまい、がめんにだしてもよろしいですか。",
          "cn": "我有一点想补充，可以在屏幕上展示一页资料吗？",
          "reply": {
            "jp": "どうぞ。今の画面共有を止めますので、お願いします。",
            "reading": "どうぞ。いまのがめんきょうゆうをとめますので、おねがいします。",
            "cn": "请。我会停止当前的屏幕共享，接下来交给您。"
          },
          "keywords": [
            {
              "word": "補足",
              "reading": "ほそく",
              "meaning": "补充说明"
            },
            {
              "word": "画面共有",
              "reading": "がめんきょうゆう",
              "meaning": "屏幕共享"
            }
          ],
          "note": "",
          "id": "meeting-04"
        },
        {
          "sceneId": "meeting",
          "taskId": "meeting-05",
          "task": "确认自己的交付内容和截止时间",
          "situation": "会议结束前，参会者复述刚分配给自己的任务；日期为示例。",
          "youRole": "任务负责人",
          "otherRole": "会议主持人",
          "jp": "私が修正案をまとめて、水曜日の午前中までに送る、ということで合っていますか。",
          "reading": "わたしがしゅうせいあんをまとめて、すいようびのごぜんちゅうまでにおくる、ということであっていますか。",
          "cn": "由我整理修改方案，在周三上午结束前发出，这样理解对吗？",
          "reply": {
            "jp": "はい。変更した理由も一緒に書いていただけると助かります。",
            "reading": "はい。へんこうしたりゆうもいっしょにかいていただけるとたすかります。",
            "cn": "是的。如果也能一并写明修改理由，就帮大忙了。"
          },
          "keywords": [
            {
              "word": "修正案",
              "reading": "しゅうせいあん",
              "meaning": "修改方案"
            },
            {
              "word": "まとめる",
              "reading": "まとめる",
              "meaning": "整理；汇总"
            }
          ],
          "note": "",
          "id": "meeting-05"
        },
        {
          "sceneId": "meeting",
          "taskId": "meeting-06",
          "task": "提议另约时间讨论未决事项",
          "situation": "会议时间快到了，参会者提议把剩余问题另行讨论。",
          "youRole": "参会者",
          "otherRole": "同事",
          "jp": "残った課題は、別の時間に話しませんか。来週の月曜日なら参加できます。",
          "reading": "のこったかだいは、べつのじかんにはなしませんか。らいしゅうのげつようびならさんかできます。",
          "cn": "剩下的问题要不要另找时间讨论？下周一我可以参加。",
          "reply": {
            "jp": "私も月曜日なら大丈夫です。ほかの皆さんの予定も確認しましょう。",
            "reading": "わたしもげつようびならだいじょうぶです。ほかのみなさんのよていもかくにんしましょう。",
            "cn": "我周一也可以。我们再确认一下其他人的时间吧。"
          },
          "keywords": [
            {
              "word": "課題",
              "reading": "かだい",
              "meaning": "待解决的问题"
            },
            {
              "word": "別の時間",
              "reading": "べつのじかん",
              "meaning": "另外的时间"
            }
          ],
          "note": "",
          "id": "meeting-06"
        }
      ]
    },
    {
      "id": "introduction",
      "label": "初次见面",
      "group": "社交与休闲",
      "description": "介绍自己、称呼与寒暄，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第1、3—4课"
        },
        {
          "sourceId": "tufs-dialog",
          "unit": "自我介绍模块04"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第7—8课"
        }
      ],
      "dialogues": [
        {
          "sceneId": "introduction",
          "taskId": "introduction-01",
          "task": "初次打招呼并询问如何称呼对方",
          "situation": "交流活动开始，第一次见面的两位参加者互相问候；姓名为示例。",
          "youRole": "参加者",
          "otherRole": "另一位参加者",
          "jp": "初めまして。何とお呼びすればいいですか。",
          "reading": "はじめまして。なんとおよびすればいいですか。",
          "cn": "初次见面。我该怎么称呼您呢？",
          "reply": {
            "jp": "サトウです。下の名前はハルカなので、ハルカと呼んでください。",
            "reading": "サトウです。したのなまえはハルカなので、ハルカとよんでください。",
            "cn": "我姓佐藤，名字叫春香，叫我春香就好。"
          },
          "keywords": [
            {
              "word": "呼ぶ",
              "reading": "よぶ",
              "meaning": "称呼"
            },
            {
              "word": "下の名前",
              "reading": "したのなまえ",
              "meaning": "名字（不含姓氏）"
            }
          ],
          "note": "",
          "id": "introduction-01"
        },
        {
          "sceneId": "introduction",
          "taskId": "introduction-02",
          "task": "介绍姓名、来自哪里以及初次参加",
          "situation": "示例人物姓林、来自中国，首次参加社区交流会；个人信息可按实替换。",
          "youRole": "参加者",
          "otherRole": "另一位参加者",
          "jp": "リンです。中国から来ました。今日は初めて参加します。",
          "reading": "リンです。ちゅうごくからきました。きょうははじめてさんかします。",
          "cn": "我姓林，来自中国，今天是第一次参加。",
          "reply": {
            "jp": "ようこそ。私も先月から参加しているんです。よろしくお願いします。",
            "reading": "ようこそ。わたしもせんげつからさんかしているんです。よろしくおねがいします。",
            "cn": "欢迎。我也是从上个月才开始参加的，请多关照。"
          },
          "keywords": [
            {
              "word": "参加する",
              "reading": "さんかする",
              "meaning": "参加"
            },
            {
              "word": "初めて",
              "reading": "はじめて",
              "meaning": "第一次"
            }
          ],
          "note": "",
          "id": "introduction-02"
        },
        {
          "sceneId": "introduction",
          "taskId": "introduction-03",
          "task": "介绍正在学习的专业并询问对方工作",
          "situation": "示例人物目前在专门学校学习设计，与新认识的人交流学习和工作。",
          "youRole": "设计专业学生",
          "otherRole": "另一位参加者",
          "jp": "今は専門学校でデザインを勉強しています。普段はどんなお仕事をされているんですか。",
          "reading": "いまはせんもんがっこうでデザインをべんきょうしています。ふだんはどんなおしごとをされているんですか。",
          "cn": "我现在在专门学校学习设计。您平时从事什么工作呢？",
          "reply": {
            "jp": "私は本の編集をしています。デザインとは近いところがありますね。",
            "reading": "わたしはほんのへんしゅうをしています。デザインとはちかいところがありますね。",
            "cn": "我做图书编辑，和设计有一些相通之处呢。"
          },
          "keywords": [
            {
              "word": "専門学校",
              "reading": "せんもんがっこう",
              "meaning": "专门学校；职业专科学校"
            },
            {
              "word": "編集",
              "reading": "へんしゅう",
              "meaning": "编辑"
            }
          ],
          "note": "",
          "id": "introduction-03"
        },
        {
          "sceneId": "introduction",
          "taskId": "introduction-04",
          "task": "说明自己刚搬来并展开生活话题",
          "situation": "示例人物上个月搬到这个地区，和邻居初次交谈。",
          "youRole": "新住户",
          "otherRole": "邻居",
          "jp": "この町には先月引っ越してきたばかりで、まだ道をよく知りません。",
          "reading": "このまちにはせんげつひっこしてきたばかりで、まだみちをよくしりません。",
          "cn": "我上个月才搬到这个地方，对路还不太熟。",
          "reply": {
            "jp": "そうなんですね。駅の周りなら、よく行くお店をご紹介できますよ。",
            "reading": "そうなんですね。えきのまわりなら、よくいくおみせをごしょうかいできますよ。",
            "cn": "原来如此。车站周边的话，我可以给您介绍几家常去的店。"
          },
          "keywords": [
            {
              "word": "引っ越してくる",
              "reading": "ひっこしてくる",
              "meaning": "搬到这里来"
            },
            {
              "word": "周り",
              "reading": "まわり",
              "meaning": "周围"
            }
          ],
          "note": "",
          "id": "introduction-04"
        },
        {
          "sceneId": "introduction",
          "taskId": "introduction-05",
          "task": "从休闲活动中寻找共同兴趣",
          "situation": "第一次参加交流会的人，向身边的人聊起自己的爱好。",
          "youRole": "参加者",
          "otherRole": "另一位参加者",
          "jp": "休みの日はよく散歩をします。外で過ごすのはお好きですか。",
          "reading": "やすみのひはよくさんぽをします。そとですごすのはおすきですか。",
          "cn": "休息日我经常散步。您喜欢在户外活动吗？",
          "reply": {
            "jp": "ええ、私も歩くのが好きです。川沿いの道が気に入っています。",
            "reading": "ええ、わたしもあるくのがすきです。かわぞいのみちがきにいっています。",
            "cn": "喜欢，我也喜欢走走，尤其喜欢河边那条路。"
          },
          "keywords": [
            {
              "word": "過ごす",
              "reading": "すごす",
              "meaning": "度过"
            },
            {
              "word": "川沿い",
              "reading": "かわぞい",
              "meaning": "沿河；河边"
            }
          ],
          "note": "",
          "id": "introduction-05"
        },
        {
          "sceneId": "introduction",
          "taskId": "introduction-06",
          "task": "表达交流愉快并自然结束谈话",
          "situation": "社区活动结束时，两位刚认识的参加者准备离开。",
          "youRole": "参加者",
          "otherRole": "另一位参加者",
          "jp": "今日はお話しできて楽しかったです。また次の集まりでお会いできるとうれしいです。",
          "reading": "きょうはおはなしできてたのしかったです。またつぎのあつまりでおあいできるとうれしいです。",
          "cn": "今天和您聊天很开心，希望下次活动还能见到您。",
          "reply": {
            "jp": "私もです。次も来る予定なので、またお話ししましょう。",
            "reading": "わたしもです。つぎもくるよていなので、またおはなししましょう。",
            "cn": "我也是。我打算下次还来，到时再聊吧。"
          },
          "keywords": [
            {
              "word": "集まり",
              "reading": "あつまり",
              "meaning": "聚会；集体活动"
            },
            {
              "word": "予定",
              "reading": "よてい",
              "meaning": "计划；安排"
            }
          ],
          "note": "",
          "id": "introduction-06"
        }
      ]
    },
    {
      "id": "invitation",
      "label": "邀约做客",
      "group": "社交与休闲",
      "description": "邀请、约定与拜访，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第12课"
        },
        {
          "sourceId": "irodori-a2-1",
          "unit": "第7—8、17—18课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "便利短语场景5"
        }
      ],
      "dialogues": [
        {
          "sceneId": "invitation",
          "taskId": "invitation-01",
          "task": "邀请朋友周末一起看展",
          "situation": "朋友之间商量周末活动，此处时间为示例。",
          "youRole": "发出邀请的朋友",
          "otherRole": "朋友",
          "jp": "今度の日曜日、一緒に美術館に行きませんか。気になる展示があるんです。",
          "reading": "こんどのにちようび、いっしょにびじゅつかんにいきませんか。きになるてんじがあるんです。",
          "cn": "这个周日，要不要一起去美术馆？有个展览我挺想看的。",
          "reply": {
            "jp": "いいですね。午前中なら空いています。どんな展示ですか。",
            "reading": "いいですね。ごぜんちゅうならあいています。どんなてんじですか。",
            "cn": "好啊。我上午有空，是什么展览呢？"
          },
          "keywords": [
            {
              "word": "展示",
              "reading": "てんじ",
              "meaning": "展览；展示"
            },
            {
              "word": "空いている",
              "reading": "あいている",
              "meaning": "有空"
            }
          ],
          "note": "",
          "id": "invitation-01"
        },
        {
          "sceneId": "invitation",
          "taskId": "invitation-02",
          "task": "在两个碰面时间中询问对方偏好",
          "situation": "两位朋友已经约好吃饭，正在确认集合时间。",
          "youRole": "朋友",
          "otherRole": "朋友",
          "jp": "待ち合わせは六時と六時半なら、どちらがいいですか。私はどちらでも大丈夫です。",
          "reading": "まちあわせはろくじとろくじはんなら、どちらがいいですか。わたしはどちらでもだいじょうぶです。",
          "cn": "六点和六点半，您觉得哪个时间碰面更好？我都可以。",
          "reply": {
            "jp": "では、六時半にしましょう。仕事が終わってから向かいます。",
            "reading": "では、ろくじはんにしましょう。しごとがおわってからむかいます。",
            "cn": "那就六点半吧。我下班后过去。"
          },
          "keywords": [
            {
              "word": "待ち合わせ",
              "reading": "まちあわせ",
              "meaning": "约好碰面"
            },
            {
              "word": "向かう",
              "reading": "むかう",
              "meaning": "前往"
            }
          ],
          "note": "",
          "id": "invitation-02"
        },
        {
          "sceneId": "invitation",
          "taskId": "invitation-03",
          "task": "核对集合出口和标志物",
          "situation": "两位朋友约在车站见面，出发前再次确认具体位置。",
          "youRole": "朋友",
          "otherRole": "朋友",
          "jp": "駅の北口で待ち合わせでしたよね。改札を出て右側で合っていますか。",
          "reading": "えきのきたぐちでまちあわせでしたよね。かいさつをでてみぎがわであっていますか。",
          "cn": "我们约在车站北口见面，对吧？出检票口后的右边，是吗？",
          "reply": {
            "jp": "はい。右側のパン屋の前で待っています。",
            "reading": "はい。みぎがわのパンやのまえでまっています。",
            "cn": "是的。我在右边那家面包店门口等您。"
          },
          "keywords": [
            {
              "word": "北口",
              "reading": "きたぐち",
              "meaning": "北出口"
            },
            {
              "word": "改札",
              "reading": "かいさつ",
              "meaning": "检票口"
            }
          ],
          "note": "",
          "id": "invitation-03"
        },
        {
          "sceneId": "invitation",
          "taskId": "invitation-04",
          "task": "礼貌婉拒原定时间并提出改约",
          "situation": "朋友邀请周六见面，但自己已有安排；提出另一个可行日期。",
          "youRole": "受邀的朋友",
          "otherRole": "邀请方",
          "jp": "誘ってくれてありがとうございます。土曜日は予定があるので、日曜日ではどうですか。",
          "reading": "さそってくれてありがとうございます。どようびはよていがあるので、にちようびではどうですか。",
          "cn": "谢谢您邀请我。我周六已经有安排了，周日怎么样？",
          "reply": {
            "jp": "日曜日でも大丈夫です。では、その日にしましょう。",
            "reading": "にちようびでもだいじょうぶです。では、そのひにしましょう。",
            "cn": "周日也可以，那就定在那天吧。"
          },
          "keywords": [
            {
              "word": "誘う",
              "reading": "さそう",
              "meaning": "邀请"
            },
            {
              "word": "予定がある",
              "reading": "よていがある",
              "meaning": "已有安排"
            }
          ],
          "note": "先致谢，再说明时间不合适；愿意赴约时可以主动提出替代日期。",
          "id": "invitation-04"
        },
        {
          "sceneId": "invitation",
          "taskId": "invitation-05",
          "task": "进门问候并递上小礼物",
          "situation": "第一次到朋友家做客，来访者带来了一盒点心。",
          "youRole": "来访者",
          "otherRole": "主人",
          "jp": "お邪魔します。こちら、近所のお店のお菓子です。よかったら皆さんでどうぞ。",
          "reading": "おじゃまします。こちら、きんじょのおみせのおかしです。よかったらみなさんでどうぞ。",
          "cn": "打扰了。这是我家附近店里的点心，不嫌弃的话请大家一起尝尝。",
          "reply": {
            "jp": "ありがとうございます。あとで一緒にいただきましょう。どうぞお上がりください。",
            "reading": "ありがとうございます。あとでいっしょにいただきましょう。どうぞおあがりください。",
            "cn": "谢谢。等会儿一起吃吧，请进。"
          },
          "keywords": [
            {
              "word": "よかったら",
              "reading": "よかったら",
              "meaning": "如果愿意的话；不嫌弃的话"
            },
            {
              "word": "上がる",
              "reading": "あがる",
              "meaning": "进屋（从玄关进入室内）"
            }
          ],
          "note": "",
          "id": "invitation-05"
        },
        {
          "sceneId": "invitation",
          "taskId": "invitation-06",
          "task": "感谢招待并告辞",
          "situation": "在朋友家吃完饭后，客人准备回家。",
          "youRole": "来访者",
          "otherRole": "主人",
          "jp": "今日はごちそうになりました。そろそろ失礼します。今度はぜひ遊びに来てください。",
          "reading": "きょうはごちそうになりました。そろそろしつれいします。こんどはぜひあそびにきてください。",
          "cn": "今天承蒙款待。我差不多该告辞了，下次也请一定来我家玩。",
          "reply": {
            "jp": "こちらこそ、来てくれてうれしかったです。今度はそちらにも伺いますね。",
            "reading": "こちらこそ、きてくれてうれしかったです。こんどはそちらにもうかがいますね。",
            "cn": "我们才是，很高兴您能来。下次也去您那里拜访。"
          },
          "keywords": [
            {
              "word": "そろそろ",
              "reading": "そろそろ",
              "meaning": "差不多该……了"
            },
            {
              "word": "失礼する",
              "reading": "しつれいする",
              "meaning": "告辞；先离开"
            }
          ],
          "note": "「失礼します」在这里是告辞，不是在道歉。",
          "id": "invitation-06"
        }
      ]
    },
    {
      "id": "hobby",
      "label": "兴趣活动",
      "group": "社交与休闲",
      "description": "运动、展览与业余活动，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a1",
          "unit": "第11—12课"
        },
        {
          "sourceId": "irodori-a2-1",
          "unit": "第2、8课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "B1场景22"
        }
      ],
      "dialogues": [
        {
          "sceneId": "hobby",
          "taskId": "hobby-01",
          "task": "正式加入前申请体验一次",
          "situation": "参加者对社区舞蹈班感兴趣，先向组织者询问体验机会。",
          "youRole": "活动咨询者",
          "otherRole": "组织者",
          "jp": "入会を決める前に、一度だけ体験してみたいのですが、申し込めますか。",
          "reading": "にゅうかいをきめるまえに、いちどだけたいけんしてみたいのですが、もうしこめますか。",
          "cn": "在决定加入之前，我想先体验一次，可以报名吗？",
          "reply": {
            "jp": "はい、体験の枠があります。ご希望の曜日を伺ってもいいですか。",
            "reading": "はい、たいけんのわくがあります。ごきぼうのようびをうかがってもいいですか。",
            "cn": "可以，还有体验名额。请问您希望星期几来？"
          },
          "keywords": [
            {
              "word": "入会",
              "reading": "にゅうかい",
              "meaning": "加入社团或会员组织"
            },
            {
              "word": "体験",
              "reading": "たいけん",
              "meaning": "体验"
            }
          ],
          "note": "",
          "id": "hobby-01"
        },
        {
          "sceneId": "hobby",
          "taskId": "hobby-02",
          "task": "说明基础不足并确认课程是否合适",
          "situation": "音乐初学者报名时，担心自己不太会看乐谱。",
          "youRole": "课程咨询者",
          "otherRole": "音乐老师",
          "jp": "楽譜がほとんど読めませんが、このクラスについていけますか。",
          "reading": "がくふがほとんどよめませんが、このクラスについていけますか。",
          "cn": "我几乎不会看乐谱，能跟上这个班吗？",
          "reply": {
            "jp": "初めての方に合わせて進めます。最初は、音の出し方から練習しますよ。",
            "reading": "はじめてのかたにあわせてすすめます。さいしょは、おとのだしかたかられんしゅうしますよ。",
            "cn": "我们会按初学者的水平来教，先从如何发出声音开始练习。"
          },
          "keywords": [
            {
              "word": "楽譜",
              "reading": "がくふ",
              "meaning": "乐谱"
            },
            {
              "word": "ついていく",
              "reading": "ついていく",
              "meaning": "跟上"
            }
          ],
          "note": "",
          "id": "hobby-02"
        },
        {
          "sceneId": "hobby",
          "taskId": "hobby-03",
          "task": "核对下一次活动时间和预约要求",
          "situation": "参加者询问摄影社团下一次活动；日期和方式仅为示例。",
          "youRole": "活动参加者",
          "otherRole": "组织者",
          "jp": "次の活動は何日の何時からですか。参加する場合は、予約が必要ですか。",
          "reading": "つぎのかつどうはなんにちのなんじからですか。さんかするばあいは、よやくがひつようですか。",
          "cn": "下次活动是几号几点开始？参加的话需要预约吗？",
          "reply": {
            "jp": "次は八日の午後二時です。人数を確認したいので、参加する方は事前にお知らせください。",
            "reading": "つぎはようかのごごにじです。にんずうをかくにんしたいので、さんかするかたはじぜんにおしらせください。",
            "cn": "下次是八号下午两点。为了确认人数，想参加的请提前告诉我们。"
          },
          "keywords": [
            {
              "word": "事前に",
              "reading": "じぜんに",
              "meaning": "事先"
            },
            {
              "word": "活動",
              "reading": "かつどう",
              "meaning": "活动"
            }
          ],
          "note": "",
          "id": "hobby-03"
        },
        {
          "sceneId": "hobby",
          "taskId": "hobby-04",
          "task": "确认陶艺参加费是否包含材料和烧制",
          "situation": "咨询者看到陶艺体验的标价，询问具体包含的项目。",
          "youRole": "课程咨询者",
          "otherRole": "组织者",
          "jp": "表示されている参加費には、粘土と焼く費用も入っていますか。",
          "reading": "ひょうじされているさんかひには、ねんどとやくひようもはいっていますか。",
          "cn": "标出的参加费里，也包含黏土和烧制费用吗？",
          "reply": {
            "jp": "粘土代は含まれていますが、焼く費用は別です。料金表をお見せしますね。",
            "reading": "ねんどだいはふくまれていますが、やくひようはべつです。りょうきんひょうをおみせしますね。",
            "cn": "包含黏土费，但烧制费另算。我给您看一下价目表。"
          },
          "keywords": [
            {
              "word": "粘土",
              "reading": "ねんど",
              "meaning": "黏土"
            },
            {
              "word": "含まれる",
              "reading": "ふくまれる",
              "meaning": "包含在内"
            }
          ],
          "note": "",
          "id": "hobby-04"
        },
        {
          "sceneId": "hobby",
          "taskId": "hobby-05",
          "task": "询问能否借用球拍和应带物品",
          "situation": "第一次参加球类活动的人没有球拍，向组织者确认准备事项。",
          "youRole": "活动参加者",
          "otherRole": "组织者",
          "jp": "ラケットを持っていないのですが、会場で借りられますか。靴だけ持ってくればいいですか。",
          "reading": "ラケットをもっていないのですが、かいじょうでかりられますか。くつだけもってくればいいですか。",
          "cn": "我没有球拍，可以在现场借吗？只带鞋就可以了吗？",
          "reply": {
            "jp": "ラケットはお貸しできます。靴のほかに、タオルもお持ちください。",
            "reading": "ラケットはおかしできます。くつのほかに、タオルもおもちください。",
            "cn": "球拍可以借给您。除了鞋，也请带上毛巾。"
          },
          "keywords": [
            {
              "word": "ラケット",
              "reading": "ラケット",
              "meaning": "球拍"
            },
            {
              "word": "貸す",
              "reading": "かす",
              "meaning": "借出"
            }
          ],
          "note": "",
          "id": "hobby-05"
        },
        {
          "sceneId": "hobby",
          "taskId": "hobby-06",
          "task": "表达练习中的困难并请求同伴示范",
          "situation": "书法活动中，参加者向有经验的同伴请教执笔。",
          "youRole": "活动参加者",
          "otherRole": "有经验的同伴",
          "jp": "やってみると難しいですね。筆の持ち方を、もう一度見せてもらえますか。",
          "reading": "やってみるとむずかしいですね。ふでのもちかたを、もういちどみせてもらえますか。",
          "cn": "实际做起来挺难的呢。可以再示范一下怎么握笔吗？",
          "reply": {
            "jp": "もちろんです。私がゆっくり書くので、横から見てみてください。",
            "reading": "もちろんです。わたしがゆっくりかくので、よこからみてみてください。",
            "cn": "当然。我慢慢写，您可以从旁边看看。"
          },
          "keywords": [
            {
              "word": "筆",
              "reading": "ふで",
              "meaning": "毛笔"
            },
            {
              "word": "持ち方",
              "reading": "もちかた",
              "meaning": "握持方法"
            }
          ],
          "note": "",
          "id": "hobby-06"
        }
      ]
    },
    {
      "id": "online",
      "label": "线上沟通",
      "group": "社交与休闲",
      "description": "消息、视频通话与文件，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景13"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第11课信息问题；视频协作具体句需原创补充"
        }
      ],
      "dialogues": [
        {
          "sceneId": "online",
          "taskId": "online-01",
          "task": "说明会议链接无法打开并请求确认",
          "situation": "参会者点开邀请链接失败，通过消息联系会议组织者。",
          "youRole": "线上参会者",
          "otherRole": "会议组织者",
          "jp": "送っていただいたリンクを開いても、会議に入れません。新しいリンクはありますか。",
          "reading": "おくっていただいたリンクをひらいても、かいぎにはいれません。あたらしいリンクはありますか。",
          "cn": "打开您发来的链接后，我还是进不了会议。有新链接吗？",
          "reply": {
            "jp": "リンクを変更していました。連絡が遅くなってすみません。今、送り直します。",
            "reading": "リンクをへんこうしていました。れんらくがおそくなってすみません。いま、おくりなおします。",
            "cn": "我们已经换了链接，抱歉通知晚了。我现在重新发送。"
          },
          "keywords": [
            {
              "word": "送り直す",
              "reading": "おくりなおす",
              "meaning": "重新发送"
            },
            {
              "word": "リンク",
              "reading": "リンク",
              "meaning": "链接"
            }
          ],
          "note": "",
          "id": "online-01"
        },
        {
          "sceneId": "online",
          "taskId": "online-02",
          "task": "说明声音断续并请求重说关键内容",
          "situation": "线上通话中，参会者没有听清最后提到的日期。",
          "youRole": "线上参会者",
          "otherRole": "通话同事",
          "jp": "声が途切れてしまいました。最後におっしゃった日付だけ、もう一度お願いできますか。",
          "reading": "こえがとぎれてしまいました。さいごにおっしゃったひづけだけ、もういちどおねがいできますか。",
          "cn": "刚才声音断了一下，能否只把最后说的日期再重复一遍？",
          "reply": {
            "jp": "来週の火曜日です。念のため、チャットにも書きますね。",
            "reading": "らいしゅうのかようびです。ねんのため、チャットにもかきますね。",
            "cn": "是下周二。以防听错，我也写在聊天里。"
          },
          "keywords": [
            {
              "word": "途切れる",
              "reading": "とぎれる",
              "meaning": "中断；断断续续"
            },
            {
              "word": "念のため",
              "reading": "ねんのため",
              "meaning": "以防万一；为保险起见"
            }
          ],
          "note": "",
          "id": "online-02"
        },
        {
          "sceneId": "online",
          "taskId": "online-03",
          "task": "确认共享画面是否可见且清晰",
          "situation": "参会者开始共享一份资料，询问对方是否能看清。",
          "youRole": "资料分享者",
          "otherRole": "线上同事",
          "jp": "今、資料の表紙は見えていますか。文字が小さければ、大きくします。",
          "reading": "いま、しりょうのひょうしはみえていますか。もじがちいさければ、おおきくします。",
          "cn": "现在能看到资料封面吗？如果字太小，我会放大。",
          "reply": {
            "jp": "見えています。下の文字が少し小さいので、そこを大きくしてもらえますか。",
            "reading": "みえています。したのもじがすこしちいさいので、そこをおおきくしてもらえますか。",
            "cn": "看得见。下面的字有点小，可以把那部分放大吗？"
          },
          "keywords": [
            {
              "word": "表紙",
              "reading": "ひょうし",
              "meaning": "封面"
            },
            {
              "word": "文字",
              "reading": "もじ",
              "meaning": "文字"
            }
          ],
          "note": "",
          "id": "online-03"
        },
        {
          "sceneId": "online",
          "taskId": "online-04",
          "task": "附件打不开时请求图片版",
          "situation": "对方发送的表格附件在自己的设备上打不开。",
          "youRole": "文件接收者",
          "otherRole": "发送文件的同事",
          "jp": "添付の表が開けません。内容を確認したいので、画像でも送っていただけますか。",
          "reading": "てんぷのひょうがひらけません。ないようをかくにんしたいので、がぞうでもおくっていただけますか。",
          "cn": "附件里的表格打不开。我想核对内容，可以也用图片形式发来吗？",
          "reply": {
            "jp": "分かりました。画像にして送ります。元のファイルも残しておきますね。",
            "reading": "わかりました。がぞうにしておくります。もとのファイルものこしておきますね。",
            "cn": "明白了。我转成图片发给您，原文件也会保留。"
          },
          "keywords": [
            {
              "word": "添付",
              "reading": "てんぷ",
              "meaning": "附件；附加"
            },
            {
              "word": "画像",
              "reading": "がぞう",
              "meaning": "图片；图像"
            }
          ],
          "note": "",
          "id": "online-04"
        },
        {
          "sceneId": "online",
          "taskId": "online-05",
          "task": "为误发消息道歉并更正对象",
          "situation": "工作群里发错了一条普通通知，发送者及时解释；不涉及机密内容。",
          "youRole": "误发消息者",
          "otherRole": "群聊同事",
          "jp": "すみません、今のメッセージは別のグループ宛てでした。この件は対応していただかなくて大丈夫です。",
          "reading": "すみません、いまのメッセージはべつのグループあてでした。このけんはたいおうしていただかなくてだいじょうぶです。",
          "cn": "不好意思，刚才那条消息是发给另一个群的，这件事不需要大家处理。",
          "reply": {
            "jp": "了解しました。では、こちらでは対応せずにおきます。",
            "reading": "りょうかいしました。では、こちらではたいおうせずにおきます。",
            "cn": "明白了，那我们这边就不处理了。"
          },
          "keywords": [
            {
              "word": "宛て",
              "reading": "あて",
              "meaning": "寄给；发给"
            },
            {
              "word": "対応",
              "reading": "たいおう",
              "meaning": "处理；应对"
            }
          ],
          "note": "",
          "id": "online-05"
        },
        {
          "sceneId": "online",
          "taskId": "online-06",
          "task": "为回复延迟致歉并约定稍后沟通",
          "situation": "同事发来问题，自己刚忙完，准备约时间继续讨论。",
          "youRole": "消息接收者",
          "otherRole": "同事",
          "jp": "お返事が遅くなり、すみません。この件、今日の夕方に少しお話しできますか。",
          "reading": "おへんじがおそくなり、すみません。このけん、きょうのゆうがたにすこしおはなしできますか。",
          "cn": "抱歉回复晚了。关于这件事，今天傍晚可以聊一会儿吗？",
          "reply": {
            "jp": "大丈夫です。五時からなら話せますので、そのころに連絡をください。",
            "reading": "だいじょうぶです。ごじからならはなせますので、そのころにれんらくをください。",
            "cn": "可以。我五点开始有时间，到时请联系我。"
          },
          "keywords": [
            {
              "word": "返事",
              "reading": "へんじ",
              "meaning": "回复"
            },
            {
              "word": "夕方",
              "reading": "ゆうがた",
              "meaning": "傍晚"
            }
          ],
          "note": "",
          "id": "online-06"
        }
      ]
    },
    {
      "id": "clinic",
      "label": "挂号就诊",
      "group": "健康与求助",
      "description": "预约、问诊与描述症状，从开口到回应。",
      "references": [
        {
          "sourceId": "irodori-a2-1",
          "unit": "第15课"
        },
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景8"
        }
      ],
      "dialogues": [
        {
          "sceneId": "clinic",
          "taskId": "clinic-01",
          "task": "首次就诊时询问本周可预约时间",
          "situation": "就诊者致电一家诊所，说明自己是初次来诊。",
          "youRole": "就诊者",
          "otherRole": "诊所接待人员",
          "jp": "こちらにかかるのは初めてです。今週、診ていただける時間はありますか。",
          "reading": "こちらにかかるのははじめてです。こんしゅう、みていただけるじかんはありますか。",
          "cn": "我是第一次来这里就诊。本周有可以预约看诊的时间吗？",
          "reply": {
            "jp": "予約の空き状況を確認します。ご希望の曜日はありますか。",
            "reading": "よやくのあきじょうきょうをかくにんします。ごきぼうのようびはありますか。",
            "cn": "我来确认一下预约空档。您希望星期几来呢？"
          },
          "keywords": [
            {
              "word": "かかる",
              "reading": "かかる",
              "meaning": "就医；接受诊治"
            },
            {
              "word": "診る",
              "reading": "みる",
              "meaning": "诊察"
            }
          ],
          "note": "这里的「かかる」表示到医院或医师处就诊。",
          "id": "clinic-01"
        },
        {
          "sceneId": "clinic",
          "taskId": "clinic-02",
          "task": "计划变化后请求更改已有预约",
          "situation": "就诊者原约周一，现在需要换一天；安排为示例。",
          "youRole": "就诊者",
          "otherRole": "诊所接待人员",
          "jp": "月曜日に予約しているのですが、予定が変わりました。別の日にしていただけますか。",
          "reading": "げつようびによやくしているのですが、よていがかわりました。べつのひにしていただけますか。",
          "cn": "我预约了周一，但计划有变，可以帮我改到别的日期吗？",
          "reply": {
            "jp": "変更ですね。お名前と、今の予約時間を教えてください。",
            "reading": "へんこうですね。おなまえと、いまのよやくじかんをおしえてください。",
            "cn": "您要更改预约，对吧？请告诉我您的姓名和目前预约的时间。"
          },
          "keywords": [
            {
              "word": "変更",
              "reading": "へんこう",
              "meaning": "更改"
            },
            {
              "word": "別の日",
              "reading": "べつのひ",
              "meaning": "另外一天"
            }
          ],
          "note": "",
          "id": "clinic-02"
        },
        {
          "sceneId": "clinic",
          "taskId": "clinic-03",
          "task": "没有带就诊卡时请求核对预约",
          "situation": "就诊者已到接待处，但当天没有随身携带就诊卡。",
          "youRole": "就诊者",
          "otherRole": "医院接待人员",
          "jp": "予約の確認をお願いしたいのですが、今日は診察券を持っていません。",
          "reading": "よやくのかくにんをおねがいしたいのですが、きょうはしんさつけんをもっていません。",
          "cn": "我想请您核对一下预约，不过今天没有带就诊卡。",
          "reply": {
            "jp": "かしこまりました。確認のため、お名前と生年月日を伺ってもよろしいですか。",
            "reading": "かしこまりました。かくにんのため、おなまえとせいねんがっぴをうかがってもよろしいですか。",
            "cn": "明白了。为了核对，可以请您告知姓名和出生年月日吗？"
          },
          "keywords": [
            {
              "word": "診察券",
              "reading": "しんさつけん",
              "meaning": "就诊卡"
            },
            {
              "word": "生年月日",
              "reading": "せいねんがっぴ",
              "meaning": "出生年月日"
            }
          ],
          "note": "身份核对方式依机构而异，此处仅演示如何说明忘带卡片。",
          "id": "clinic-03"
        },
        {
          "sceneId": "clinic",
          "taskId": "clinic-04",
          "task": "描述不适部位和开始时间",
          "situation": "示例患者从昨晚起喉咙痛，正在向医师说明亲身感受。",
          "youRole": "患者",
          "otherRole": "医师",
          "jp": "昨日の夜から、のどが痛くて、飲み込むときに特に痛みます。",
          "reading": "きのうのよるから、のどがいたくて、のみこむときにとくにいたみます。",
          "cn": "从昨天晚上开始喉咙痛，吞咽的时候尤其疼。",
          "reply": {
            "jp": "昨日の夜からですね。ほかに、気になる症状はありますか。",
            "reading": "きのうのよるからですね。ほかに、きになるしょうじょうはありますか。",
            "cn": "是从昨天晚上开始的，对吧？还有其他让您在意的症状吗？"
          },
          "keywords": [
            {
              "word": "飲み込む",
              "reading": "のみこむ",
              "meaning": "吞咽"
            },
            {
              "word": "症状",
              "reading": "しょうじょう",
              "meaning": "症状"
            }
          ],
          "note": "只描述实际出现的感受和时间，不用示例自行判断疾病。",
          "id": "clinic-04"
        },
        {
          "sceneId": "clinic",
          "taskId": "clinic-05",
          "task": "请求医师换用容易理解的说法",
          "situation": "医师的说明包含患者不熟悉的术语，患者请求语言协助。",
          "youRole": "患者",
          "otherRole": "医师",
          "jp": "説明の言葉が難しくて、よく分かりません。もう少し簡単な言葉で話していただけますか。",
          "reading": "せつめいのことばがむずかしくて、よくわかりません。もうすこしかんたんなことばではなしていただけますか。",
          "cn": "说明里的词比较难，我不太明白。可以用更简单一些的说法解释吗？",
          "reply": {
            "jp": "分かりました。まず、分からなかったところを一つずつ確認しましょう。",
            "reading": "わかりました。まず、わからなかったところをひとつずつかくにんしましょう。",
            "cn": "明白了。我们先逐个确认您没明白的地方。"
          },
          "keywords": [
            {
              "word": "簡単な言葉",
              "reading": "かんたんなことば",
              "meaning": "简单易懂的说法"
            },
            {
              "word": "一つずつ",
              "reading": "ひとつずつ",
              "meaning": "逐个"
            }
          ],
          "note": "",
          "id": "clinic-05"
        },
        {
          "sceneId": "clinic",
          "taskId": "clinic-06",
          "task": "就诊结束后询问缴费和后续预约窗口",
          "situation": "患者完成诊察后向接待人员问路；窗口安排仅为示例。",
          "youRole": "患者",
          "otherRole": "接待人员",
          "jp": "診察は終わりました。このあと、会計はどちらで済ませればいいですか。",
          "reading": "しんさつはおわりました。このあと、かいけいはどちらですませればいいですか。",
          "cn": "我已经看完诊了，接下来应该到哪里缴费呢？",
          "reply": {
            "jp": "会計の窓口をご案内します。次の予約についても、そこで確認できます。",
            "reading": "かいけいのまどぐちをごあんないします。つぎのよやくについても、そこでかくにんできます。",
            "cn": "我给您指一下缴费窗口，下次预约的事情也可以在那里确认。"
          },
          "keywords": [
            {
              "word": "会計",
              "reading": "かいけい",
              "meaning": "结账；缴费"
            },
            {
              "word": "窓口",
              "reading": "まどぐち",
              "meaning": "办理窗口"
            }
          ],
          "note": "",
          "id": "clinic-06"
        }
      ]
    },
    {
      "id": "pharmacy",
      "label": "药店取药",
      "group": "健康与求助",
      "description": "处方、取药与询问药师，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "B1场景4"
        },
        {
          "sourceId": "irodori-a2-1",
          "unit": "第15课健康沟通"
        }
      ],
      "dialogues": [
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-01",
          "task": "出示处方并询问能否配药",
          "situation": "取药者带着医院开具的处方，到药房询问是否受理。",
          "youRole": "取药者",
          "otherRole": "药剂师",
          "jp": "病院でもらった処方箋です。こちらで薬を用意していただけますか。",
          "reading": "びょういんでもらったしょほうせんです。こちらでくすりをよういしていただけますか。",
          "cn": "这是医院开的处方，可以请这里帮我配药吗？",
          "reply": {
            "jp": "処方箋を確認しますね。在庫についても調べますので、少々お待ちください。",
            "reading": "しょほうせんをかくにんしますね。ざいこについてもしらべますので、しょうしょうおまちください。",
            "cn": "我先核对处方，也查一下库存，请稍等。"
          },
          "keywords": [
            {
              "word": "処方箋",
              "reading": "しょほうせん",
              "meaning": "处方"
            },
            {
              "word": "在庫",
              "reading": "ざいこ",
              "meaning": "库存"
            }
          ],
          "note": "",
          "id": "pharmacy-01"
        },
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-02",
          "task": "凭领取号码询问药是否备好",
          "situation": "取药者已提交处方，回到药房领取；号码仅为示例。",
          "youRole": "取药者",
          "otherRole": "药房工作人员",
          "jp": "さっきお願いした薬を取りに来ました。番号は十七番です。もうできていますか。",
          "reading": "さっきおねがいしたくすりをとりにきました。ばんごうはじゅうななばんです。もうできていますか。",
          "cn": "我来取刚才请您配的药，号码是十七号，已经准备好了吗？",
          "reply": {
            "jp": "十七番の方ですね。今、準備の状況を確認します。",
            "reading": "じゅうななばんのかたですね。いま、じゅんびのじょうきょうをかくにんします。",
            "cn": "您是十七号，对吧？我现在确认一下准备情况。"
          },
          "keywords": [
            {
              "word": "取りに来る",
              "reading": "とりにくる",
              "meaning": "前来领取"
            },
            {
              "word": "準備",
              "reading": "じゅんび",
              "meaning": "准备"
            }
          ],
          "note": "",
          "id": "pharmacy-02"
        },
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-03",
          "task": "主动告知正在用药并提供记录",
          "situation": "取药者确实还有其他正在服用的药，向药剂师出示用药记录。",
          "youRole": "取药者",
          "otherRole": "药剂师",
          "jp": "ほかにも飲んでいる薬があります。この手帳に名前が載っているので、見ていただけますか。",
          "reading": "ほかにものんでいるくすりがあります。このてちょうになまえがのっているので、みていただけますか。",
          "cn": "我还在服用其他药，名称记在这本手册里，可以请您看一下吗？",
          "reply": {
            "jp": "はい、確認します。手帳に載っていない薬やサプリメントはありますか。",
            "reading": "はい、かくにんします。てちょうにのっていないくすりやサプリメントはありますか。",
            "cn": "好的，我来核对。还有手册里没有记录的药或补充剂吗？"
          },
          "keywords": [
            {
              "word": "載る",
              "reading": "のる",
              "meaning": "登载；记录在上面"
            },
            {
              "word": "手帳",
              "reading": "てちょう",
              "meaning": "手册；记录本"
            }
          ],
          "note": "",
          "id": "pharmacy-03"
        },
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-04",
          "task": "请药剂师核对两种药能否合用",
          "situation": "取药者不清楚新药与已有药物的配伍关系，向药剂师提出问题。",
          "youRole": "取药者",
          "otherRole": "药剂师",
          "jp": "今使っている薬と一緒に飲めるかどうか、確認をお願いできますか。薬の名前はこちらです。",
          "reading": "いまつかっているくすりといっしょにのめるかどうか、かくにんをおねがいできますか。くすりのなまえはこちらです。",
          "cn": "能否请您核对一下，这能不能和我现在用的药一起服用？药名在这里。",
          "reply": {
            "jp": "お知らせいただき、ありがとうございます。両方の薬を確認してから、ご説明します。",
            "reading": "おしらせいただき、ありがとうございます。りょうほうのくすりをかくにんしてから、ごせつめいします。",
            "cn": "谢谢您告知。核对过两种药之后，我再向您说明。"
          },
          "keywords": [
            {
              "word": "一緒に",
              "reading": "いっしょに",
              "meaning": "一起"
            },
            {
              "word": "両方",
              "reading": "りょうほう",
              "meaning": "双方；两种都"
            }
          ],
          "note": "这组对话只练习提出合用问题，不表示任何两种药可以合用。",
          "id": "pharmacy-04"
        },
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-05",
          "task": "请药剂师解释说明书中不懂的部分",
          "situation": "取药者指着说明书上的一段文字，请专业人员解释。",
          "youRole": "取药者",
          "otherRole": "药剂师",
          "jp": "説明書のこの部分が分かりません。薬の使い方を、ここを見ながら教えていただけますか。",
          "reading": "せつめいしょのこのぶぶんがわかりません。くすりのつかいかたを、ここをみながらおしえていただけますか。",
          "cn": "说明书这一部分我不明白。可以对照这里，讲解一下药的用法吗？",
          "reply": {
            "jp": "もちろんです。どの言葉が分かりにくかったか、教えてください。順に説明します。",
            "reading": "もちろんです。どのことばがわかりにくかったか、おしえてください。じゅんにせつめいします。",
            "cn": "当然。请告诉我哪些词不好理解，我按顺序说明。"
          },
          "keywords": [
            {
              "word": "使い方",
              "reading": "つかいかた",
              "meaning": "使用方法"
            },
            {
              "word": "順に",
              "reading": "じゅんに",
              "meaning": "依次"
            }
          ],
          "note": "对话不代替处方或药剂师针对本人情况所作的说明。",
          "id": "pharmacy-05"
        },
        {
          "sceneId": "pharmacy",
          "taskId": "pharmacy-06",
          "task": "请药剂师说明需要了解的副作用信息",
          "situation": "取药者在领药说明环节，主动询问副作用相关信息。",
          "youRole": "取药者",
          "otherRole": "药剂师",
          "jp": "この薬の副作用について、知っておくべきことを教えていただけますか。",
          "reading": "このくすりのふくさようについて、しっておくべきことをおしえていただけますか。",
          "cn": "关于这种药的副作用，可以告诉我有哪些需要了解的吗？",
          "reply": {
            "jp": "はい。この薬の説明資料を見ながら、詳しくお話しします。気になることがあれば、途中でも聞いてください。",
            "reading": "はい。このくすりのせつめいしりょうをみながら、くわしくおはなしします。きになることがあれば、とちゅうでもきいてください。",
            "cn": "好的。我会对照这种药的说明资料详细讲解。如果有在意的地方，中途也可以提问。"
          },
          "keywords": [
            {
              "word": "副作用",
              "reading": "ふくさよう",
              "meaning": "副作用"
            },
            {
              "word": "途中",
              "reading": "とちゅう",
              "meaning": "中途"
            }
          ],
          "note": "",
          "id": "pharmacy-06"
        }
      ]
    },
    {
      "id": "emergency",
      "label": "紧急求助",
      "group": "健康与求助",
      "description": "说明位置、遗失与求助，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "A2场景9"
        },
        {
          "sourceId": "irodori-a2-b1",
          "unit": "第12课"
        },
        {
          "sourceId": "marugoto-travel-notes",
          "unit": "主题8，Can-do 38"
        }
      ],
      "dialogues": [
        {
          "sceneId": "emergency",
          "taskId": "emergency-01",
          "task": "向服务台说明同伴突然不适并请求协助",
          "situation": "示例情境：访客通过电话向会场服务台求助，同伴突然感到不适。",
          "youRole": "求助者",
          "otherRole": "服务台工作人员",
          "jp": "連れが急に気分が悪くなりました。係の方に連絡していただけますか。",
          "reading": "つれがきゅうにきぶんがわるくなりました。かかりのかたにれんらくしていただけますか。",
          "cn": "我的同伴突然不舒服了，能否帮忙联系工作人员？",
          "reply": {
            "jp": "分かりました。担当の者を呼びます。今どちらにいらっしゃいますか。",
            "reading": "わかりました。たんとうのものをよびます。いまどちらにいらっしゃいますか。",
            "cn": "明白了。我来叫负责人员，您现在在哪里？"
          },
          "keywords": [
            {
              "word": "連れ",
              "reading": "つれ",
              "meaning": "同行的人"
            },
            {
              "word": "急に",
              "reading": "きゅうに",
              "meaning": "突然"
            }
          ],
          "note": "只说明实际情况并请求人员协助，不将回应视为具体急救步骤。",
          "id": "emergency-01"
        },
        {
          "sceneId": "emergency",
          "taskId": "emergency-02",
          "task": "用入口方向和标志物说明位置",
          "situation": "示例情境：求助者通过电话描述位置，公园名称和标志物均为练习设定。",
          "youRole": "求助者",
          "otherRole": "接线员",
          "jp": "今、中央公園の東側にいます。入口に青い看板があります。",
          "reading": "いま、ちゅうおうこうえんのひがしがわにいます。いりぐちにあおいかんばんがあります。",
          "cn": "我现在在中央公园东侧，入口处有一块蓝色的牌子。",
          "reply": {
            "jp": "東側の入口ですね。看板には何と書いてありますか。",
            "reading": "ひがしがわのいりぐちですね。かんばんにはなんとかいてありますか。",
            "cn": "是在东侧入口，对吧？牌子上写着什么？"
          },
          "keywords": [
            {
              "word": "東側",
              "reading": "ひがしがわ",
              "meaning": "东侧"
            },
            {
              "word": "看板",
              "reading": "かんばん",
              "meaning": "牌子；标牌"
            }
          ],
          "note": "",
          "id": "emergency-02"
        },
        {
          "sceneId": "emergency",
          "taskId": "emergency-03",
          "task": "只向工作人员报告自己亲眼看见的情况",
          "situation": "示例情境：目击者在设施内看见有人摔倒，向工作人员陈述已知信息。",
          "youRole": "目击者",
          "otherRole": "设施工作人员",
          "jp": "この通路で人が転びました。私はすぐ近くにいましたが、詳しいことは分かりません。",
          "reading": "このつうろでひとがころびました。わたしはすぐちかくにいましたが、くわしいことはわかりません。",
          "cn": "这条通道里有人摔倒了。我当时就在附近，但具体情况不清楚。",
          "reply": {
            "jp": "見えた範囲で大丈夫です。いつごろのことか、教えてください。",
            "reading": "みえたはんいでだいじょうぶです。いつごろのことか、おしえてください。",
            "cn": "只说明您看见的部分就可以，请告诉我大概是什么时候。"
          },
          "keywords": [
            {
              "word": "通路",
              "reading": "つうろ",
              "meaning": "通道"
            },
            {
              "word": "転ぶ",
              "reading": "ころぶ",
              "meaning": "摔倒"
            }
          ],
          "note": "把亲眼所见与不知道的部分分开表达，不猜测原因或伤情。",
          "id": "emergency-03"
        },
        {
          "sceneId": "emergency",
          "taskId": "emergency-04",
          "task": "手机无法使用时请求联系家人的协助",
          "situation": "示例情境：求助者暂时无法使用自己的手机，向服务人员咨询联络方式。",
          "youRole": "求助者",
          "otherRole": "服务工作人员",
          "jp": "家族に連絡したいのですが、携帯電話が使えません。連絡の方法を相談できますか。",
          "reading": "かぞくにれんらくしたいのですが、けいたいでんわがつかえません。れんらくのほうほうをそうだんできますか。",
          "cn": "我想联系家人，但手机用不了。可以咨询一下还有什么联络办法吗？",
          "reply": {
            "jp": "お手伝いできる方法を確認します。連絡先の番号はお分かりですか。",
            "reading": "おてつだいできるほうほうをかくにんします。れんらくさきのばんごうはおわかりですか。",
            "cn": "我来确认一下能提供什么帮助。您知道对方的联系电话吗？"
          },
          "keywords": [
            {
              "word": "携帯電話",
              "reading": "けいたいでんわ",
              "meaning": "手机"
            },
            {
              "word": "連絡先",
              "reading": "れんらくさき",
              "meaning": "联系方式"
            }
          ],
          "note": "",
          "id": "emergency-04"
        },
        {
          "sceneId": "emergency",
          "taskId": "emergency-05",
          "task": "紧张时请求对方慢说并分开提问",
          "situation": "示例情境：求助者因紧张难以理解接线员的问题。",
          "youRole": "求助者",
          "otherRole": "接线员",
          "jp": "緊張していて、日本語がうまく聞き取れません。ゆっくり、一つずつ質問していただけますか。",
          "reading": "きんちょうしていて、にほんごがうまくききとれません。ゆっくり、ひとつずつしつもんしていただけますか。",
          "cn": "我现在很紧张，不太能听清日语。可以慢一点、一次问一个问题吗？",
          "reply": {
            "jp": "分かりました。一つずつ伺います。まず、お名前を教えていただけますか。",
            "reading": "わかりました。ひとつずつうかがいます。まず、おなまえをおしえていただけますか。",
            "cn": "明白了，我一个一个问。首先，可以告诉我您的姓名吗？"
          },
          "keywords": [
            {
              "word": "緊張する",
              "reading": "きんちょうする",
              "meaning": "紧张"
            },
            {
              "word": "質問する",
              "reading": "しつもんする",
              "meaning": "提问"
            }
          ],
          "note": "",
          "id": "emergency-05"
        },
        {
          "sceneId": "emergency",
          "taskId": "emergency-06",
          "task": "说明钱包不见了并请求受理咨询",
          "situation": "示例情境：求助者发现钱包不见了，尚不清楚是遗失还是失窃，来到交番。",
          "youRole": "求助者",
          "otherRole": "警察",
          "jp": "財布がなくなったのですが、落としたのか、盗まれたのか分かりません。こちらで相談できますか。",
          "reading": "さいふがなくなったのですが、おとしたのか、ぬすまれたのかわかりません。こちらでそうだんできますか。",
          "cn": "我的钱包不见了，但不知道是掉了还是被偷了。可以在这里咨询吗？",
          "reply": {
            "jp": "はい、お話を伺います。最後に財布を確認したのは、いつ、どこでしたか。",
            "reading": "はい、おはなしをうかがいます。さいごにさいふをかくにんしたのは、いつ、どこでしたか。",
            "cn": "可以，我来了解情况。您最后一次确认钱包还在，是什么时候、在哪里？"
          },
          "keywords": [
            {
              "word": "盗まれる",
              "reading": "ぬすまれる",
              "meaning": "被偷"
            },
            {
              "word": "最後に",
              "reading": "さいごに",
              "meaning": "最后一次"
            }
          ],
          "note": "原因尚未确认时，用「〜のか分かりません」说明不确定，不直接断言失窃。",
          "id": "emergency-06"
        }
      ]
    },
    {
      "id": "disaster",
      "label": "防灾避难",
      "group": "健康与求助",
      "description": "预警、避难场所与联络，从开口到回应。",
      "references": [
        {
          "sourceId": "tsunahiro",
          "unit": "B1场景5"
        },
        {
          "sourceId": "irodori-a2-2",
          "unit": "第16课"
        }
      ],
      "dialogues": [
        {
          "sceneId": "disaster",
          "taskId": "disaster-01",
          "task": "请工作人员解释看不懂的通知",
          "situation": "示例情境：居民收到一张与灾害有关的通知，向咨询窗口询问其中一段。",
          "youRole": "居民",
          "otherRole": "咨询窗口工作人员",
          "jp": "このお知らせの意味がよく分かりません。ここに書いてある内容を説明していただけますか。",
          "reading": "このおしらせのいみがよくわかりません。ここにかいてあるないようをせつめいしていただけますか。",
          "cn": "我不太明白这份通知的意思，能否解释一下这里写的内容？",
          "reply": {
            "jp": "はい、一緒に確認します。どこで受け取ったお知らせですか。",
            "reading": "はい、いっしょにかくにんします。どこでうけとったおしらせですか。",
            "cn": "好的，我们一起确认。您是在哪里收到这份通知的？"
          },
          "keywords": [
            {
              "word": "お知らせ",
              "reading": "おしらせ",
              "meaning": "通知"
            },
            {
              "word": "内容",
              "reading": "ないよう",
              "meaning": "内容"
            }
          ],
          "note": "",
          "id": "disaster-01"
        },
        {
          "sceneId": "disaster",
          "taskId": "disaster-02",
          "task": "询问哪里能查看官方避难地点信息",
          "situation": "示例情境：居民向市政咨询窗口询问本地区避难信息的查询渠道。",
          "youRole": "居民",
          "otherRole": "咨询窗口工作人员",
          "jp": "この地域の避難場所について、最新の公式情報はどこで確認できますか。",
          "reading": "このちいきのひなんばしょについて、さいしんのこうしきじょうほうはどこでかくにんできますか。",
          "cn": "关于这个地区的避难地点，在哪里可以查看最新的官方信息？",
          "reply": {
            "jp": "市が出している案内を確認しましょう。お住まいの地区はどちらですか。",
            "reading": "しがだしているあんないをかくにんしましょう。おすまいのちくはどちらですか。",
            "cn": "我们来确认市政府发布的说明。您住在哪个地区呢？"
          },
          "keywords": [
            {
              "word": "避難場所",
              "reading": "ひなんばしょ",
              "meaning": "避难地点"
            },
            {
              "word": "公式情報",
              "reading": "こうしきじょうほう",
              "meaning": "官方信息"
            }
          ],
          "note": "练习查找信息，不指定任何灾害下应前往的地点或路线。",
          "id": "disaster-02"
        },
        {
          "sceneId": "disaster",
          "taskId": "disaster-03",
          "task": "在接待处说明同行人数和语言需求",
          "situation": "示例情境：一位居民和母亲来到临时接待点，需要帮助母亲理解登记事项。",
          "youRole": "居民",
          "otherRole": "接待工作人员",
          "jp": "母と二人で来ました。母は日本語が分からないので、受付のときに私が説明してもいいですか。",
          "reading": "ははとふたりできました。はははにほんごがわからないので、うけつけのときにわたしがせつめいしてもいいですか。",
          "cn": "我和母亲两个人来的。她不懂日语，办理登记时可以由我帮她解释吗？",
          "reply": {
            "jp": "はい、分からないところをお伝えください。必要でしたら、言葉のサポートも確認します。",
            "reading": "はい、わからないところをおつたえください。ひつようでしたら、ことばのサポートもかくにんします。",
            "cn": "可以，请告诉我们哪些地方不明白。如有需要，我们也会确认能否提供语言支持。"
          },
          "keywords": [
            {
              "word": "受付",
              "reading": "うけつけ",
              "meaning": "接待；登记"
            },
            {
              "word": "二人",
              "reading": "ふたり",
              "meaning": "两个人"
            }
          ],
          "note": "",
          "id": "disaster-03"
        },
        {
          "sceneId": "disaster",
          "taskId": "disaster-04",
          "task": "询问供水点和物资发放的公告位置",
          "situation": "示例情境：居民在咨询点询问获取物资相关信息的渠道。",
          "youRole": "居民",
          "otherRole": "咨询点工作人员",
          "jp": "給水所や物資の配布について知りたいのですが、お知らせはどこに出ていますか。",
          "reading": "きゅうすいじょやぶっしのはいふについてしりたいのですが、おしらせはどこにでていますか。",
          "cn": "我想了解供水点和物资发放的情况，通知发布在哪里？",
          "reply": {
            "jp": "関連するお知らせを探しますね。どの地区の情報をお探しですか。",
            "reading": "かんれんするおしらせをさがしますね。どのちくのじょうほうをおさがしですか。",
            "cn": "我来找一下相关通知。您需要哪个地区的信息？"
          },
          "keywords": [
            {
              "word": "給水所",
              "reading": "きゅうすいじょ",
              "meaning": "供水点"
            },
            {
              "word": "物資",
              "reading": "ぶっし",
              "meaning": "物资"
            }
          ],
          "note": "",
          "id": "disaster-04"
        },
        {
          "sceneId": "disaster",
          "taskId": "disaster-05",
          "task": "尚未联系上家人时询问求助窗口",
          "situation": "示例情境：居民还没有联系上家人，向接待人员请求联络方面的咨询。",
          "youRole": "居民",
          "otherRole": "接待工作人员",
          "jp": "まだ家族と連絡が取れていません。安否の確認について相談できる窓口はありますか。",
          "reading": "まだかぞくとれんらくがとれていません。あんぴのかくにんについてそうだんできるまどぐちはありますか。",
          "cn": "我还没有联系上家人。有可以咨询如何确认平安情况的窗口吗？",
          "reply": {
            "jp": "担当の窓口を確認します。ご家族と最後に連絡が取れたのは、いつですか。",
            "reading": "たんとうのまどぐちをかくにんします。ごかぞくとさいごにれんらくがとれたのは、いつですか。",
            "cn": "我来确认负责的窗口。您最后一次和家人联系上是什么时候？"
          },
          "keywords": [
            {
              "word": "連絡が取れる",
              "reading": "れんらくがとれる",
              "meaning": "能够联系上"
            },
            {
              "word": "安否",
              "reading": "あんぴ",
              "meaning": "是否平安"
            }
          ],
          "note": "",
          "id": "disaster-05"
        },
        {
          "sceneId": "disaster",
          "taskId": "disaster-06",
          "task": "请求中文说明或口译服务",
          "situation": "示例情境：居民无法充分理解接待点的日语说明，询问能否获得中文协助。",
          "youRole": "居民",
          "otherRole": "咨询窗口工作人员",
          "jp": "中国語の案内はありますか。なければ、通訳をお願いできるか確認していただけますか。",
          "reading": "ちゅうごくごのあんないはありますか。なければ、つうやくをおねがいできるかかくにんしていただけますか。",
          "cn": "有中文说明吗？如果没有，可以帮我确认能否安排口译吗？",
          "reply": {
            "jp": "中国語の資料と、通訳の対応状況を確認します。どの内容についてお困りですか。",
            "reading": "ちゅうごくごのしりょうと、つうやくのたいおうじょうきょうをかくにんします。どのないようについておこまりですか。",
            "cn": "我来确认中文资料和口译服务的情况。您在哪方面有困难呢？"
          },
          "keywords": [
            {
              "word": "通訳",
              "reading": "つうやく",
              "meaning": "口译"
            },
            {
              "word": "案内",
              "reading": "あんない",
              "meaning": "说明；指引"
            }
          ],
          "note": "服务是否可用取决于当地实际情况；回应仅演示确认需求的过程。",
          "id": "disaster-06"
        }
      ]
    }
  ]
};
if (typeof module !== "undefined" && module.exports) module.exports = SceneLessons;
