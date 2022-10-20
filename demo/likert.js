const createLikert1 = (question, name, q_type) => {
  const likert = {
      type: 'likert',
      prompt: question,
      likert_scale_min_label: '全く当てはまらない',
      likert_scale_max_label: '非常に当てはまる',
      likert_scale_values: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5},
        {value: 6},
        {value: 7},
      ],
      name: name,
      q_type: q_type
  };
  return likert;
}
const createLikert2 = (question, name, q_type) => {
  const likert = {
      type: 'likert',
      prompt: question,
      likert_scale_min_label: '全くそうではない',
      likert_scale_max_label: '非常にそうだ',
      likert_scale_values: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5}
      ],
      name: name,
      q_type: q_type
  };
  return likert;
};


const likert_scale1 = ['1 <br>全くあてはまらない', '2 <br>ほとんどあてはまらない', '3 <br>あまりあてはまらない', '4<br>どちらともいえない', '5 <br>ややあてはまる', '6<br>かなりあてはまる', '7 <br>非常によくあてはまる']
const likert_scale2 = ['1 <br>全くそうではない', '2 <br>そうでない', '3 <br>どちらでもない', '4<br>そうだ', '5 <br>非常にそうだ']

const likert_instruction1 = {
  type: jsPsychInstructions,
  pages: [
    '<div style="font-size: 20px"><p>これから質問紙調査を行います。</p> <p>1(全くあてはまらない)〜 5 (非常にそうだ)の中から最も近いもの選択してください。</p> <p>質問項目は全部で12項目(5セット)となります。</p><p>準備ができたら次に進んで、回答を開始してください。</p></div>',
  ],
  show_clickable_nav: true,
  button_label_previous: '戻る',
  button_label_next: '次へ'
}
const likert_instruction2 = {
  type: jsPsychInstructions,
  pages: [
    '<div style="font-size: 20px"><p>これから質問紙調査を行います。</p> <p>1(全くあてはまらない)〜 7 (非常によく当てはまる)の中から最も近いもの選択してください。</p> <p>質問項目は全部で24項目です。</p><p>準備ができたら次に進んで、回答を開始してください。</p></div>',
  ],
  show_clickable_nav: true,
  button_label_previous: '戻る',
  button_label_next: '次へ'
}

const bidr_likert = {
  type: jsPsychSurvey,
  pages: [
    [
      createLikert1('私は自分で決めたことを後悔しない。', 's1', 'N'),
      createLikert1('私は自分の判断をいつも信じている。', 's2', 'N'),
      createLikert1('自分で決心したことが他人の意見で変わることはめったにない。', 's3', 'N'),
      createLikert1('「なぜそれが好きなのですか？」と聞かれた時，何についても説明できる。', 's4', 'N'),
      createLikert1('私は自分の人生を完全に思い通りに進めている。', 's5', 'N'),
      createLikert1('たとえ何人かの人に嫌われても，私にとっては問題ない。', 's6', 'N'),
      createLikert1('私のことを他人が本当にどう思っているのか気にならない。', 's7', 'N'),
      createLikert1('時々，すぐに決心できなくて失敗することがある。', 's8', 'R'),
      createLikert1('自分でなぜ自分がそうしたのか，自分でも分からないときがある。', 's9', 'R'),
      createLikert1('いろいろなことについて，つい余計なことを考える。', 's10', 'R'),
      createLikert1('私が感じた他人の第一印象はよく当たっている。', 's11', 'N'),
      createLikert1('私はきわめて理性的な人間である。', 's12', 'N'),
    ],
    [
      createLikert1('他人には言えないようなことをしたことがある。', 'i1', 'R'),
      createLikert1('必要であれば，時々は嘘をつく。', 'i2', 'R'),
      createLikert1('人をうまく利用したことがある。', 'i3', 'R'),
      createLikert1('友達の陰口を言ったことがある。', 'i4', 'R'),
      createLikert1('人をののしったことがない。', 'i5', 'N'),
      createLikert1('かなりよくない習慣をいくつか持っている。', 'i6', 'R'),
      createLikert1('仮病で仕事や学校を休んだことがある。', 'i7', 'R'),
      createLikert1('道路や公共の場所で，ごみを落としたことはない。', 'i8', 'N'),
      createLikert1('人と争ったとき，水に流すよりもむしろ復しゅうする。', 'i9', 'R'),
      createLikert1('私は恐らく捕まらないような時でも，いつも法律に従っている。', 'i10', 'N'),
      createLikert1('お釣りを多くもらったとき，気づいてもそのまま受け取ってしまう。', 'i11', 'R'),
      createLikert1('図書館の本や店の商品を破損した時は，必ずそれを報告する。', 'i12', 'N'),
    ]
  ],
  button_label_next: '次へ',
  button_label_back: '戻る',
  button_label_finish: '終了'
}


const big5_likert = {
  type: jsPsychSurvey,
  pages: [
    [
      createLikert2('人と話すのがとても楽しい', 'e1', 'N'),
      createLikert2('大勢の人と一緒にいるのが好きだ。', 'e2', 'N'),
      createLikert2('何かする場合は一人でやる方が好きだ。', 'e3', 'N'),
      createLikert2('人の先頭に立つよりも、むしろ我が道を行く方が良い。', 'e4', 'R'),
      createLikert2('元気があふれて、じっとしていられないことがよくある。', 'e5', 'N'),
      createLikert2('私はいつも何かしている。', 'e6', 'N'),
      createLikert2('非常に活発的な人間だ。', 'e7', 'N'),
      createLikert2('活気のある所にいるのが好きだ。', 'e8', 'N'),
      createLikert2('楽天家ではない。', 'e9', 'R'),
      createLikert2('特にほがらかな人間ではない。', 'e10', 'R'),
      createLikert2('元気で、はつらつとした人間だ。', 'e11', 'N'),
      createLikert2('私はすぐに笑う', 'e12', 'N'),
    ],
    [
      createLikert2('私は心配性ではない。', 'n1', 'R'),
      createLikert2('恐ろしいとか、不安だとか感じることはめったにない。', 'n2', 'R'),
      createLikert2('よく緊張したり神経過敏になったりする。', 'n3', 'N'),
      createLikert2('人の仕打ちによく腹を立てる。', 'n4', 'N'),
      createLikert2('さびしくなったり、憂うつになったりすることはめったにない。', 'n5', 'R'),
      createLikert2('自分はまったく価値がないと感じることが時々ある。', 'n6', 'N'),
      createLikert2('悲しくなったり、落ち込んだりすることはほとんどない。', 'n7', 'N'),
      createLikert2('物事がうまくいかないと、がっかりして、あきらめたくなることがしょっちゅうある。', 'n8', 'N'),
      createLikert2('穴があったら入りたいと思うほど、恥ずかしいことがたまにある。', 'n9', 'N'),
      createLikert2('劣等感を持つことがよくある。', 'n10', 'N'),
      createLikert2('どうしようもなくて、その問題を誰かに解決してもらいたいと思うことがよくある。', 'n11', 'N'),
      createLikert2('ストレスが多いと、自分が「めちゃくちゃ」になるように感じることもある。', 'n12', 'N'),
    ],
    [
      createLikert2('どんなことでも現実的に考え、空想や夢のような考えを避けるように努めている。', 'o1', 'R'),
      createLikert2('空想にふけって時間を無駄にするのは好きではない。', 'o2', 'N'),
      createLikert2('芸術作品や自然の中で見つけた形に興味をひかれる。', 'o3', 'N'),
      createLikert2('詩を読んでもなにも感じない。', 'o4', 'R'),
      createLikert2('場所が変わると気分や気持ちが変わるものだが、私は気分が変わったとは感じない。', 'o5', 'R'),
      createLikert2('いったんうまくいくと思ったら、あくまでもそのやり方を変えない。', 'o6', 'R'),
      createLikert2('新しい、珍しい食べ物を試してみることがよくある。', 'o7', 'N'),
      createLikert2('抽象的な考えや理論を楽しむことがよくある。', 'o8', 'N'),
      createLikert2('宇宙の本質や、人類が置かれている状態に思いをめぐらすことにはほとんど興味がない。', 'o9', 'R'),
      createLikert2('知的好奇心が強い。', 'o10', 'N'),
      createLikert2('学生に対しては、いろいろな意見や考え方があることを教えるのではなく、一つの考え方を教えるだけで十分だ。', 'o11', 'R'),
      createLikert2('道徳的な判断は、昔からある基準に基づくべきだ。', 'o12', 'R'),
    ],
    [
      createLikert2('持ち物をきちんとし、きれいにしている。', 'c1', 'N'),
      createLikert2('几帳面ではない。', 'c2', 'R'),
      createLikert2('人は私のことを、きちんとした人間だと思っていない。', 'c3', 'R'),
      createLikert2('割り当てられた仕事を、すべてきちんとやるよう努めている。', 'c4', 'N'),
      createLikert2('人の期待にそったり、約束を守ったりしなければならないのに、時々そうではない。', 'c5', 'R'),
      createLikert2('一人でやるゲームでは、時々ずるをする。', 'c6', 'R'),
      createLikert2('明確な目標を持っており、それに向かって整然としたやり方で取り組んでいる。', 'c7', 'N'),
      createLikert2('自分の目標を達成するようにがんばる。', 'c8', 'N'),
      createLikert2('やることすべてにおいて、志を高く持ってがんばる。', 'c9', 'N'),
      createLikert2('時間どおりに物事をやり終えるよう、自分のペースを守るのが得意だ。', 'c10', 'N'),
      createLikert2('身を入れて仕事を始めるまでに、時間がかかる。', 'c11', 'R'),
      createLikert2('バリバリと仕事をやって、それをやり遂げる。', 'c12', 'N'),
    ],
    [
      createLikert2('人の考えを皮肉っぽく疑いの目で見がちだ。', 'a1', 'R'),
      createLikert2('ほうっておけば、たいていの人は私を出し抜こうとするだろう。', 'a2', 'R'),
      createLikert2('自分の望むものを手に入れるためなら、人を操ることもためらわない。', 'a3', 'R'),
      createLikert2('私のことを、自分勝手で自分のことしか考えない人間だと思っている人がいる。', 'a4', 'R'),
      createLikert2('私は誰にでも好意を持って接しようとする。', 'a5', 'N'),
      createLikert2('私を冷たく計算高いと見ている人がいる。', 'a6', 'R'),
      createLikert2('私はいつも他の人を思いやる人間であろうとしている。', 'a7', 'N'),
      createLikert2('私はほとんどの人から好かれている。 ', 'a8', 'N'),
      createLikert2('人と張り合うよりも協力しあう方が好きだ。', 'a9', 'N'),
      createLikert2('嫌いな人には、そう知らせてやる。', 'a10', 'R'),
      createLikert2('家族や同僚とよく口論をする。', 'a11', 'R'),
      createLikert2('私は現実的で、情では動かない。', 'a12', 'R'),
    ]
  ],
  button_label_next: '次へ',
  button_label_back: '戻る',
  button_label_finish: '終了'
}