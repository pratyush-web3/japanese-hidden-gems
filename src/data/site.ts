const unsplash = (id: string, query: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80&ixlib=rb-4.0.3&${query}`;

const heroVillage = unsplash("1500375592092-40eb2168fd21", "crop=entropy");
const hiddenTemple = unsplash("1542051841857-5f90071e7989", "crop=entropy");
const ruralCafe = unsplash("1495474472287-4d71bcdd2085", "crop=entropy");
const localTrain = unsplash("1511882150382-421056c89033", "crop=entropy");
const coastalVillage = unsplash("1500375592092-40eb2168fd21", "crop=entropy&sat=-20");
const seasonSpring = unsplash("1522383225653-ed111181a951", "crop=entropy");
const seasonSummer = unsplash("1506744038136-46273834b3fb", "crop=entropy");
const seasonAutumn = unsplash("1504196606672-aef5c9cefc92", "crop=entropy");
const seasonWinter = unsplash("1485236715568-ddc5ee6ca227", "crop=entropy");

export const images = {
  heroVillage,
  hiddenTemple,
  ruralCafe,
  localTrain,
  coastalVillage,
  seasonSpring,
  seasonSummer,
  seasonAutumn,
  seasonWinter,
};

export type Destination = {
  slug: string;
  name: string;
  nameEn: string;
  region: string;
  prefecture: string;
  tagline: string;
  excerpt: string;
  bestSeason: string;
  travelTime: string;
  image: string;
  story: string[];
  history: string;
  access: string;
  highlights: string[];
  cafes: { name: string; note: string }[];
  temples: { name: string; note: string }[];
  itinerary: { day: string; title: string; detail: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "miyama",
    name: "美山",
    nameEn: "Miyama",
    region: "近畿",
    prefecture: "京都府",
    tagline: "茅葺き屋根が眠る、霧の谷",
    excerpt:
      "京都の北、山々に抱かれた小さな集落。冬の朝、茅葺き屋根の上に静かに雪が積もり、囲炉裏の煙が天井裏へと立ちのぼる。",
    bestSeason: "11月〜2月（雪景色）",
    travelTime: "京都駅より約1時間40分",
    image: heroVillage,
    story: [
      "京都府南丹市美山町、北山杉の森を抜けた先に、時の流れがゆるやかに息づく集落がある。茅葺き屋根の家々が三十八棟、寄り添うように建ち並ぶ「かやぶきの里・北集落」。",
      "夜明け前、川霧が谷を覆い、屋根の上を白い綿のように流れていく。やがて陽が差し込むと、霧は薄絹のように溶け、田畑と石垣がゆっくりと姿を現す。",
      "村の暮らしは三百年、ほとんど変わらない。畑を耕し、薪を割り、囲炉裏に火をくべる。観光地化を拒み、静けさを守り続ける選択がここにはある。",
    ],
    history:
      "江戸時代中期に成立したとされる北集落は、江戸幕府の天領として保護され、戦後の高度成長期にも合掌造りに似た茅葺きを残した。1993年に重要伝統的建造物群保存地区に選定。",
    access:
      "JR京都駅からJR山陰本線・園部駅下車、南丹市営バスにて約1時間。冬季は道路状況により遅延あり。レンタカー利用が望ましい。",
    highlights: [
      "茅葺き屋根の里・北集落",
      "美山民俗資料館",
      "知井八幡神社の参道",
      "由良川源流の渓谷",
      "毎年5月・12月の一斉放水点検",
    ],
    cafes: [
      { name: "喫茶 きたむら", note: "築百八十年の古民家。自家焙煎の深煎り珈琲と、村の卵で焼くカステラ。" },
      { name: "山小屋カフェ 苔陰", note: "由良川沿い、北山杉の床に座って飲む宇治抹茶。" },
    ],
    temples: [
      { name: "知井八幡神社", note: "千年を越える鎮守の杜。例祭は十月の第三日曜日。" },
      { name: "西教寺", note: "雪に閉ざされる二月、ろうそく灯の法要が静かに営まれる。" },
    ],
    itinerary: [
      { day: "Day 1", title: "京都から、ゆっくりと北へ", detail: "午後の遅い列車で園部へ。バスで美山入り。古民家の宿に荷を解き、囲炉裏端で夕餉。" },
      { day: "Day 2", title: "里と森を歩く", detail: "朝霧の集落を散策。午後は知井八幡神社を訪ね、由良川源流まで足を延ばす。" },
      { day: "Day 3", title: "別れの茶", detail: "喫茶きたむらで珈琲を一杯。バスで園部へ戻り、京都へ。" },
    ],
  },
  {
    slug: "tsumago",
    name: "妻籠",
    nameEn: "Tsumago",
    region: "中部",
    prefecture: "長野県",
    tagline: "中山道に残る、灯火の宿場",
    excerpt:
      "電柱を地中化し、看板を消した宿場町。木の扉、紙障子、軒先に灯る提灯。江戸の旅人の足音が、いまも石畳に残っている。",
    bestSeason: "10月〜11月（紅葉）",
    travelTime: "名古屋駅より約1時間40分",
    image: hiddenTemple,
    story: [
      "中山道六十九次のうち、四十二番目の宿場として栄えた妻籠。明治以降、鉄道から外れたことで近代化の波を免れ、江戸の町並みが奇跡的に残された。",
      "一九六八年、村人たちは「売らない・貸さない・壊さない」という三原則を定め、自らの手で町並みを守り始めた。日本における景観保全運動の原点である。",
      "夜、提灯の灯りだけが石畳を照らす。歩く人の影が、白壁にゆれる。江戸の旅人が見た景色が、いまも残っている。",
    ],
    history:
      "1601年、徳川家康が中山道を整備したことで宿場として成立。明治後期に中央本線が南へ迂回したため衰退するが、1960年代の保存運動により再生。",
    access:
      "JR中央本線・南木曽駅よりバス約7分。名古屋から特急しなので木曽福島経由も風情がある。",
    highlights: [
      "重要伝統的建造物群保存地区",
      "枡形の道（敵の侵入を防ぐ屈曲路）",
      "脇本陣奥谷",
      "妻籠宿本陣",
      "馬籠峠ハイキングコース（約8km）",
    ],
    cafes: [
      { name: "茶房 ゑびや", note: "築二百年。栗きんとんと薄茶のセットを縁側で。" },
      { name: "珈琲 木曽", note: "焙煎師夫婦の小さな店。木曽檜のカウンター。" },
    ],
    temples: [
      { name: "光徳寺", note: "妻籠宿を一望できる高台。秋は紅葉の名所。" },
      { name: "和智埜神社", note: "宿場の鎮守。旅の安全を祈る人が今も絶えない。" },
    ],
    itinerary: [
      { day: "Day 1", title: "夕暮れの妻籠入り", detail: "夕方到着し、本陣を見学。夜は提灯の灯りの中を散策。" },
      { day: "Day 2", title: "馬籠峠を歩く", detail: "妻籠から馬籠まで旧街道八kmを歩く。茶屋で休みながら半日かけて。" },
      { day: "Day 3", title: "木曽の手仕事", detail: "漆器工房を訪ね、檜の箸を求める。" },
    ],
  },
  {
    slug: "ine",
    name: "伊根",
    nameEn: "Ine",
    region: "近畿",
    prefecture: "京都府",
    tagline: "海に浮かぶ、舟屋の町",
    excerpt:
      "丹後半島の北端、波静かな入江に二百三十軒の舟屋が並ぶ。一階が船の停泊所、二階が住居。海と暮らしが、ここまで近い場所はない。",
    bestSeason: "5月〜6月、9月〜10月",
    travelTime: "京都駅より約2時間30分",
    image: coastalVillage,
    story: [
      "丹後半島、伊根湾。風と潮の通り道に、二百三十軒の舟屋が連なっている。海面ぎりぎりに建てられた木造の家屋は、世界に類を見ない景観をつくる。",
      "朝、漁を終えた小舟が家の下に滑り込む。一階で網を干し、二階の窓から夕日を眺める。海が玄関で、廊下で、生活の真ん中にある。",
      "観光地化された伊勢や鎌倉とは違い、ここでは今も漁師たちが日々の漁を続けている。観光客は静かに、その営みに迷い込む客人にすぎない。",
    ],
    history:
      "舟屋の起源は江戸時代中期に遡る。波の穏やかな伊根湾の地形と、漁業中心の生活様式が結びついて生まれた。2005年に重要伝統的建造物群保存地区に指定。",
    access:
      "JR京都駅から特急はしだてで宮津駅へ、丹後海陸交通バスで約1時間。海上タクシーで湾内を巡るのが旅情深い。",
    highlights: [
      "舟屋群（230棟）",
      "伊根湾めぐり遊覧船",
      "浦嶋神社（浦島太郎伝説）",
      "新井崎神社からの眺望",
      "伊根祭（7月最終土曜日）",
    ],
    cafes: [
      { name: "INE CAFE", note: "舟屋を改装した二階席。海面と同じ高さで珈琲を飲む。" },
      { name: "鶴亀屋", note: "地元の海女が営む昼の食堂兼夕方の茶屋。" },
    ],
    temples: [
      { name: "浦嶋神社", note: "日本最古の浦島伝説を伝える社。境内に玉手箱を祀る。" },
      { name: "新井崎神社", note: "断崖の上の小さな社。徐福伝説が残る。" },
    ],
    itinerary: [
      { day: "Day 1", title: "舟屋の宿に泊まる", detail: "舟屋を改装した宿に到着。夕食は地元の鯖と岩牡蠣。" },
      { day: "Day 2", title: "湾と社を巡る", detail: "朝の遊覧船で湾内一周。午後は浦嶋神社、夕暮れに新井崎へ。" },
      { day: "Day 3", title: "海女小屋の昼", detail: "海女小屋で炭火焼の朝獲り魚介を味わい、宮津経由で帰路へ。" },
    ],
  },
  {
    slug: "ginzan",
    name: "銀山",
    nameEn: "Ginzan Onsen",
    region: "東北",
    prefecture: "山形県",
    tagline: "ガス灯と雪の、湯のまち",
    excerpt:
      "大正の木造旅館が川の両岸に並ぶ。日が暮れるとガス灯がともり、雪が静かに舞う。映画のセットのようでありながら、すべてが本物の生活の場である。",
    bestSeason: "12月〜2月（雪）",
    travelTime: "山形駅より約1時間20分",
    image: seasonWinter,
    story: [
      "銀山温泉。江戸時代の銀鉱山から始まり、大正末期に温泉郷として整備された。川を挟んで三、四階建ての木造旅館が向かい合う風景は、当時のまま。",
      "雪の夜、ガス灯が一つ一つ灯ると、街は橙色に染まる。下駄の音が雪を踏む。湯気が窓から立ち昇り、川面に映る灯りが揺れる。",
      "宿の数は十数軒のみ。日帰り入浴は受けない宿もある。静けさを守るため、自動車の乗り入れは温泉街の手前で止められる。",
    ],
    history:
      "江戸初期の延沢銀山として栄え、銀採掘が衰退した後、温泉地として再生。大正末期から昭和初期にかけて現在の木造建築群が建てられた。",
    access:
      "JR山形駅から山形新幹線で大石田駅、バスで約40分。冬は積雪により所要時間に余裕を。",
    highlights: [
      "ガス灯のともる温泉街",
      "白銀の滝",
      "銀坑洞（旧銀山跡）",
      "能登屋旅館（国登録有形文化財）",
      "雪見の足湯",
    ],
    cafes: [
      { name: "伊豆の華 茶寮", note: "蕎麦と田舎汁粉。雪を眺めながらの抹茶。" },
      { name: "野川とうふや", note: "朝採れ豆腐の田楽。湯気と一緒にいただく。" },
    ],
    temples: [
      { name: "白銀公園 観音堂", note: "白銀の滝の上に静かに建つ小堂。" },
      { name: "天台宗 延沢寺", note: "銀山の歴史を見守ってきた古刹。" },
    ],
    itinerary: [
      { day: "Day 1", title: "雪の温泉街へ", detail: "大石田駅からバス。夕方の到着で、ガス灯のともる瞬間に立ち会う。" },
      { day: "Day 2", title: "滝と銀坑跡", detail: "白銀の滝、銀坑洞を巡り、午後は宿の湯にじっくり浸かる。" },
      { day: "Day 3", title: "別れの朝湯", detail: "早朝の貸切露天で雪見の湯。山形で芋煮を味わって帰路。" },
    ],
  },
  {
    slug: "ohara",
    name: "大原",
    nameEn: "Ohara",
    region: "近畿",
    prefecture: "京都府",
    tagline: "都を逃れた、苔と落葉の里",
    excerpt:
      "京都市街から車で四十分。比叡山の北麓、棚田と古寺が点在する隠れ里。三千院の苔庭は、千年の時を吸い込んで、ただ深い。",
    bestSeason: "11月（紅葉）、6月（青もみじ）",
    travelTime: "京都駅より約1時間",
    image: seasonAutumn,
    story: [
      "京都の北、若狭街道沿いに開ける大原の里。比叡山に隔てられ、都の喧騒から守られてきた山間の盆地。平安貴族たちが世を捨て、隠棲した場所である。",
      "三千院、寂光院、来迎院。それぞれの寺が、それぞれの静けさを持っている。中でも三千院の苔庭は、訪れた者の足を長く止める。",
      "里には大原女の伝統が残る。頭に薪を載せて京都市街へ売りに出た女性たちの装いは、いまも祭で見ることができる。",
    ],
    history:
      "9世紀初頭、最澄の門弟により天台声明の道場として開かれた。建礼門院徳子が平家滅亡後に隠棲した寂光院でも知られる。",
    access:
      "京都駅から京都バス17系統で約1時間。地下鉄国際会館駅からバスで30分の経路もある。",
    highlights: [
      "三千院（苔庭・往生極楽院）",
      "寂光院（建礼門院ゆかり）",
      "勝林院（声明発祥の地）",
      "来迎院",
      "音無の滝",
    ],
    cafes: [
      { name: "café 来隣", note: "古民家のオーガニックビュッフェ。地元野菜の昼餉。" },
      { name: "茶房 京美山", note: "三千院の参道。わらび餅と抹茶。" },
    ],
    temples: [
      { name: "三千院", note: "天台五箇室門跡の一つ。往生極楽院の阿弥陀三尊像は国宝。" },
      { name: "寂光院", note: "建礼門院徳子が出家後に余生を送った尼寺。" },
    ],
    itinerary: [
      { day: "Day 1", title: "三千院の苔", detail: "午前中に到着し、三千院をゆっくりと拝観。苔庭で時を過ごす。" },
      { day: "Day 2", title: "寂光院と滝", detail: "朝、寂光院へ。午後は音無の滝まで散策、夕暮れに勝林院。" },
    ],
  },
  {
    slug: "shodoshima",
    name: "小豆島",
    nameEn: "Shodoshima",
    region: "中国・四国",
    prefecture: "香川県",
    tagline: "オリーブと、潮風の島",
    excerpt:
      "瀬戸内海に浮かぶ、緑したたる島。オリーブ畑、醤油蔵、棚田、岬の小さな郵便局。風と光がやわらかく、時間がゆっくり流れる。",
    bestSeason: "4月〜6月、9月〜10月",
    travelTime: "高松港よりフェリー約1時間",
    image: seasonSummer,
    story: [
      "瀬戸内海第二の面積を持つ小豆島。日本で初めてオリーブの栽培に成功した島として知られるが、本当の魅力は内陸の集落にある。",
      "中山の千枚田、湯船山の名水、寒霞渓の岩肌。島の中心へ分け入るほど、人の営みと自然がゆっくりと溶け合っていく景色に出会える。",
      "海岸線には小さな醤油蔵が点在し、四百年続く木桶仕込みの香りが路地に漂う。映画『二十四の瞳』の舞台でもあり、教師と生徒の記憶がいまも風景に染みている。",
    ],
    history:
      "古代から塩と海運の島として発展。江戸時代に醤油醸造が始まり、明治末期にオリーブが導入された。映画『二十四の瞳』のロケ地としても有名。",
    access:
      "JR高松駅から高松港、フェリーで土庄港まで約1時間。岡山県の新岡山港からの航路もある。",
    highlights: [
      "中山千枚田",
      "醤の郷（醤油蔵通り）",
      "寒霞渓（紅葉の名所）",
      "エンジェルロード（干潮時に現れる砂州）",
      "二十四の瞳映画村",
    ],
    cafes: [
      { name: "森國酒造 富士見台店", note: "蔵を改装したカフェバー。地酒と島野菜のプレート。" },
      { name: "MORIKUNI BAKERY", note: "オリーブオイルを練り込んだパン。" },
    ],
    temples: [
      { name: "小豆島八十八ヶ所霊場", note: "島全体を巡る巡礼路。約150km、四日で歩く。" },
      { name: "西光寺", note: "土庄の港町に佇む古刹。" },
    ],
    itinerary: [
      { day: "Day 1", title: "島へ渡る", detail: "高松からフェリー。土庄に投宿、夕方エンジェルロードへ。" },
      { day: "Day 2", title: "千枚田と醤の郷", detail: "中山千枚田から醤油蔵通りへ。夕方は寒霞渓の展望台。" },
      { day: "Day 3", title: "巡礼の道", detail: "八十八ヶ所のうち、海沿いの数札所を歩く。" },
    ],
  },
];

export type Story = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "miyama-winter",
    category: "紀行",
    title: "美山、雪の音を聴く三日間",
    excerpt: "京都の山奥、茅葺きの屋根に積もる雪。火と湯と、囲炉裏の小さな会話。",
    date: "2026年2月14日",
    readTime: "9分",
    image: heroVillage,
    body: [
      "始発の山陰本線に乗ったのは、京都駅の空がまだ群青に沈んでいる時刻だった。窓ガラスに自分の顔が映っては消える。亀岡を過ぎる頃から雪が降り始め、園部に着いた時には世界が白く変わっていた。",
      "美山行きのバスは一日に数本しかない。古い座席に身体を沈めて窓の外を見ていると、川沿いの集落が一つ、また一つと過ぎていく。それぞれに小さな鎮守があり、橋があり、誰かの暮らしがある。",
      "宿の主人は囲炉裏の前で待っていてくれた。「今夜はもっと降りますよ」。火に薪を一本足しながら、彼はそう言った。雪国の人の言葉はいつも、天気の予報ではなく、暮らしの仕方を伝えている。",
    ],
  },
  {
    slug: "tsumago-lantern",
    category: "町並み",
    title: "提灯の光だけで歩く、妻籠の夜",
    excerpt: "電線を消し、看板を外し、夜になれば闇が戻ってくる宿場町。",
    date: "2026年1月22日",
    readTime: "7分",
    image: hiddenTemple,
    body: [
      "妻籠の夜は早い。日が落ちると土産物屋は静かに戸を閉じ、軒先の提灯だけが石畳をぼんやりと照らす。観光客の声も、自動販売機の光も、ここにはない。",
      "本陣の前で立ち止まると、自分の足音が思いのほか大きく響く。江戸の旅人もきっとこんなふうに、暗闇の中で自分の存在を確かめていたのだろう。",
    ],
  },
  {
    slug: "ine-funaya",
    category: "海辺",
    title: "舟屋に泊まる、伊根の朝",
    excerpt: "海面と同じ高さで眠る夜。窓を開ければ、潮の匂いと漁師たちの声。",
    date: "2025年10月8日",
    readTime: "6分",
    image: coastalVillage,
    body: [
      "舟屋の二階で目を覚ます。窓のすぐ下を、漁から戻る小舟がゆっくりと滑り込んでくる。船底が木の床に擦れる音。誰かが網を畳む音。",
      "ここでは、海は風景ではなく生活そのものだ。家の床下まで波が打ち寄せる暮らしを、伊根の人々は四百年続けてきた。",
    ],
  },
  {
    slug: "ohara-moss",
    category: "古寺",
    title: "三千院の苔は、千年の沈黙",
    excerpt: "比叡の北、隠れ里の門跡寺院で出会う、時間の重さ。",
    date: "2025年6月3日",
    readTime: "8分",
    image: seasonAutumn,
    body: [
      "三千院の往生極楽院の前に立つと、苔が呼吸している音が聞こえる気がする。何千年もの雨と霧と落葉が、ここに積もって緑になっている。",
      "参道の途中で、地元のおばあさんがすれ違いざまに会釈をくれた。観光地の挨拶ではなく、隣家の人へ向ける、ごく自然なそれだった。",
    ],
  },
];

export const cafes = [
  { name: "喫茶 きたむら", town: "美山", note: "築百八十年の古民家。自家焙煎の深煎り。", image: unsplash("1458216873501-4b2c28a1c9b5", "crop=entropy") },
  { name: "茶房 ゑびや", town: "妻籠", note: "栗きんとんと薄茶。縁側の席。", image: unsplash("1504674900247-0877df9cc836", "crop=entropy") },
  { name: "INE CAFE", town: "伊根", note: "舟屋二階。海面と同じ高さで珈琲。", image: unsplash("1493976040374-85c8e12f0c0e", "crop=entropy") },
  { name: "café 来隣", town: "大原", note: "オーガニックビュッフェ。地元野菜。", image: unsplash("1498804103079-a6351b050096", "crop=entropy") },
  { name: "森國酒造 富士見台", town: "小豆島", note: "蔵を改装。地酒と島野菜のプレート。", image: unsplash("1453614512568-c4024d13c247", "crop=entropy") },
  { name: "伊豆の華 茶寮", town: "銀山", note: "蕎麦と汁粉。雪見の抹茶。", image: unsplash("1517248135467-4c7edcad34c4", "crop=entropy") },
];

export const temples = [
  { name: "三千院", town: "大原", era: "9世紀", note: "天台五箇室門跡。往生極楽院の阿弥陀三尊は国宝。" },
  { name: "寂光院", town: "大原", era: "推古天皇期", note: "建礼門院徳子が余生を送った尼寺。" },
  { name: "知井八幡神社", town: "美山", era: "10世紀", note: "千年の鎮守の杜。十月の例祭が静か。" },
  { name: "浦嶋神社", town: "伊根", era: "825年", note: "日本最古の浦島伝説を伝える社。" },
  { name: "光徳寺", town: "妻籠", era: "1500年代", note: "宿場を一望する高台の禅寺。" },
  { name: "西光寺", town: "小豆島", era: "戦国期", note: "土庄の港町に佇む古刹。三重塔が美しい。" },
];

export const seasons = [
  { key: "spring", label: "春", subtitle: "Haru / 三月〜五月", image: seasonSpring, places: ["美山", "大原"], note: "桜と山桜、若葉。雪解け水が川を満たし、棚田に水が張られる。" },
  { key: "summer", label: "夏", subtitle: "Natsu / 六月〜八月", image: seasonSummer, places: ["小豆島", "伊根"], note: "青田の緑、夕立、蛍。海辺の集落と山の渓谷が涼を呼ぶ。" },
  { key: "autumn", label: "秋", subtitle: "Aki / 九月〜十一月", image: seasonAutumn, places: ["大原", "妻籠"], note: "紅葉、新米、栗。古寺と山道が最も美しく色づく季節。" },
  { key: "winter", label: "冬", subtitle: "Fuyu / 十二月〜二月", image: seasonWinter, places: ["銀山", "美山"], note: "雪、湯気、囲炉裏の火。静寂が深まり、灯火がやさしく見える季節。" },
];
