const createLikert = (question, name, q_type) => {
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
const likert_instruction = {
  type: jsPsychInstructions,
  pages: [
    '<div style="font-size: 20px"><p>これから質問紙調査を行います。</p> <p>1(全くあてはまらない)〜 7 (非常によく当てはまる)の中から最も近いもの選択してください。</p> <p>質問項目は全部で25項目です。</p><p>準備ができたら次に進んで、回答を開始してください。</p></div>',
  ],
  show_clickable_nav: true,
  button_label_previous: '戻る',
  button_label_next: '次へ'
}

const likert1 = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "<p>私は自分で決めたことを後悔しない。</p>", name: 's1', labels: likert_scale1, required: true},
    {prompt: "<p>私は自分の判断をいつも信じている。</p>", name: 's2', labels: likert_scale1, required: true},
    {prompt: "<p>自分で決心したことが他人の意見で変わることはめったにない。</p>", name: 's3', labels: likert_scale1, required: true},
    {prompt: "<p>「なぜそれが好きなのですか？」と聞かれた時，何についても説明できる。</p>", name: 's4', labels: likert_scale1, required: true},
    {prompt: "<p>私は自分の人生を完全に思い通りに進めている。</p>", name: 's5', labels: likert_scale1, required: true},
    {prompt: "<p>たとえ何人かの人に嫌われても，私にとっては問題ない。</p>", name: 's6', labels: likert_scale1, required: true},
    {prompt: "<p>私のことを他人が本当にどう思っているのか気にならない。</p>", name: 's7', labels: likert_scale1, required: true},
    {prompt: "<p>時々，すぐに決心できなくて失敗することがある。</p>", name: 's8', labels: likert_scale1, required: true},
    {prompt: "<p>私は自分でなぜ自分がそうしたのか，自分でも分からないときがある。</p>", name: 's9', labels: likert_scale1, required: true},
    {prompt: "<p>いろいろなことについて，つい余計なことを考える。</p>", name: 's10', labels: likert_scale1, required: true},
    {prompt: "<p>私が感じた他人の第一印象はよく当たっている。</p>", name: 's11', labels: likert_scale1, required: true},
    {prompt: "<p>他人には言えないようなことをしたことがある。</p>", name: 's12', labels: likert_scale1, required: true},
    {prompt: "<p>私はきわめて理性的な人間である。</p>", name: 'i1', labels: likert_scale1, required: true},
    {prompt: "<p>必要であれば，時々は嘘をつく。</p>", name: 'i2', labels: likert_scale1, required: true},
    {prompt: "<p>人をうまく利用したことがある。</p>", name: 'i3', labels: likert_scale1, required: true},
    {prompt: "<p>私はきわめて理性的な人間である。</p>", name: 'i4', labels: likert_scale1, required: true},
    {prompt: "<p>友達の陰口を言ったことがある。</p>", name: 'i5', labels: likert_scale1, required: true},
    {prompt: "<p>人をののしったことがない。</p>", name: 'i6', labels: likert_scale1, required: true},
    {prompt: "<p>かなりよくない習慣をいくつか持っている。</p>", name: 'i7', labels: likert_scale1, required: true},
    {prompt: "<p>仮病で仕事や学校を休んだことがある。</p>", name: 'i8', labels: likert_scale1, required: true},
    {prompt: "<p>道路や公共の場所で，ごみを落としたことはない。</p>", name: 'i9', labels: likert_scale1, required: true},
    {prompt: "<p>人と争ったとき，水に流すよりもむしろ復しゅうする。</p>", name: 'i10', labels: likert_scale1, required: true},
    {prompt: "<p>私は恐らく捕まらないような時でも，いつも法律に従っている。</p>", name: 'i11', labels: likert_scale1, required: true},
    {prompt: "<p>お釣りを多くもらったとき，気づいてもそのまま受け取ってしまう。</p>", name: 'i12', labels: likert_scale1, required: true},
    {prompt: "<p>図書館の本や店の商品を破損した時は，必ずそれを報告する。</p>", name: 'i13', labels: likert_scale1, required: true},
  ],
  randomize_question_order: true,
  autocomplete: true,
  button_label: '次へ'
};

const likert_e = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "<p>人と話すのがとても楽しい。</p>", name: 'e1', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>何かする場合は一人でやる方が好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},
    {prompt: "<p>大勢の人と一緒にいるのが好きだ。</p>", name: 'e2', labels: likert_scale2, required: true},

  ],
  randomize_question_order: true,
  autocomplete: true,
  button_label: '次へ'
};

const big5_likert = {
  type: jsPsychSurvey,
  pages: [
    [
      createLikert('人と話すのがとても楽しい', 'e1', 'N'),
      createLikert('大勢の人と一緒にいるのが好きだ。', 'e2', 'N'),
      createLikert('何かする場合は一人でやる方が好きだ。', 'e3', 'N'),
      createLikert('人の先頭に立つよりも、むしろ我が道を行く方が良い。', 'e4', 'R'),
      createLikert('元気があふれて、じっとしていられないことがよくある。', 'e5', 'N'),
      createLikert('私はいつも何かしている。', 'e6', 'N'),
      createLikert('非常に活発的な人間だ。', 'e7', 'N'),
      createLikert('活気のある所にいるのが好きだ。', 'e8', 'N'),
      createLikert('楽天家ではない。', 'e9', 'R'),
      createLikert('特にほがらかな人間ではない。', 'e10', 'R'),
      createLikert('元気で、はつらつとした人間だ。', 'e11', 'N'),
      createLikert('私はすぐに笑う', 'e12', 'N'),
    ],
    [
      createLikert('私は心配性ではない。', 'n1', 'R'),
      createLikert('恐ろしいとか、不安だとか感じることはめったにない。', 'n2', 'R'),
      createLikert('よく緊張したり神経過敏になったりする。', 'n3', 'N'),
      createLikert('人の仕打ちによく腹を立てる。', 'n4', 'N'),
      createLikert('さびしくなったり、憂うつになったりすることはめったにない。', 'n5', 'R'),
      createLikert('自分はまったく価値がないと感じることが時々ある。', 'n6', 'N'),
      createLikert('悲しくなったり、落ち込んだりすることはほとんどない。', 'n7', 'N'),
      createLikert('物事がうまくいかないと、がっかりして、あきらめたくなることがしょっちゅうある。', 'n8', 'N'),
      createLikert('穴があったら入りたいと思うほど、恥ずかしいことがたまにある。', 'n9', 'N'),
      createLikert('劣等感を持つことがよくある。', 'n10', 'N'),
      createLikert('どうしようもなくて、その問題を誰かに解決してもらいたいと思うことがよくある。', 'n11', 'N'),
      createLikert('ストレスが多いと、自分が「めちゃくちゃ」になるように感じることもある。', 'n12', 'N'),
    ],
    [
      createLikert('どんなことでも現実的に考え、空想や夢のような考えを避けるように努めている。', 'o1', 'R'),
      createLikert('空想にふけって時間を無駄にするのは好きではない。', 'o2', 'N'),
      createLikert('芸術作品や自然の中で見つけた形に興味をひかれる。', 'o3', 'N'),
      createLikert('詩を読んでもなにも感じない。', 'o4', 'R'),
      createLikert('場所が変わると気分や気持ちが変わるものだが、私は気分が変わったとは感じない。', 'o5', 'R'),
      createLikert('いったんうまくいくと思ったら、あくまでもそのやり方を変えない。', 'o6', 'R'),
      createLikert('新しい、珍しい食べ物を試してみることがよくある。', 'o7', 'N'),
      createLikert('抽象的な考えや理論を楽しむことがよくある。', 'o8', 'N'),
      createLikert('宇宙の本質や、人類が置かれている状態に思いをめぐらすことにはほとんど興味がない。', 'o9', 'R'),
      createLikert('知的好奇心が強い。', 'o10', 'N'),
      createLikert('学生に対しては、いろいろな意見や考え方があることを教えるのではなく、一つの考え方を教えるだけで十分だ。', 'o11', 'R'),
      createLikert('道徳的な判断は、昔からある基準に基づくべきだ。', 'o12', 'R'),
    ],
    [
      createLikert('持ち物をきちんとし、きれいにしている。', 'c1', 'N'),
      createLikert('几帳面ではない。', 'c2', 'R'),
      createLikert('人は私のことを、きちんとした人間だと思っていない。', 'c3', 'R'),
      createLikert('割り当てられた仕事を、すべてきちんとやるよう努めている。', 'c4', 'N'),
      createLikert('人の期待にそったり、約束を守ったりしなければならないのに、時々そうではない。', 'c5', 'R'),
      createLikert('一人でやるゲームでは、時々ずるをする。', 'c6', 'R'),
      createLikert('明確な目標を持っており、それに向かって整然としたやり方で取り組んでいる。', 'c7', 'N'),
      createLikert('自分の目標を達成するようにがんばる。', 'c8', 'N'),
      createLikert('やることすべてにおいて、志を高く持ってがんばる。', 'c9', 'N'),
      createLikert('時間どおりに物事をやり終えるよう、自分のペースを守るのが得意だ。', 'c10', 'N'),
      createLikert('身を入れて仕事を始めるまでに、時間がかかる。', 'c11', 'R'),
      createLikert('バリバリと仕事をやって、それをやり遂げる。', 'c12', 'N'),
    ],
    [
      createLikert('人の考えを皮肉っぽく疑いの目で見がちだ。', 'a1', 'R'),
      createLikert('ほうっておけば、たいていの人は私を出し抜こうとするだろう。', 'a2', 'R'),
      createLikert('自分の望むものを手に入れるためなら、人を操ることもためらわない。', 'a3', 'R'),
      createLikert('私のことを、自分勝手で自分のことしか考えない人間だと思っている人がいる。', 'a4', 'R'),
      createLikert('私は誰にでも好意を持って接しようとする。', 'a5', 'N'),
      createLikert('私を冷たく計算高いと見ている人がいる。', 'a6', 'R'),
      createLikert('私はいつも他の人を思いやる人間であろうとしている。', 'a7', 'N'),
      createLikert('私はほとんどの人から好かれている。 ', 'a8', 'N'),
      createLikert('人と張り合うよりも協力しあう方が好きだ。', 'a9', 'N'),
      createLikert('嫌いな人には、そう知らせてやる。', 'a10', 'R'),
      createLikert('家族や同僚とよく口論をする。', 'a11', 'R'),
      createLikert('私は現実的で、情では動かない。', 'a12', 'R'),
    ]
  ],
  button_label_next: '次へ',
  button_label_back: '戻る',
  button_label_finish: '終了'
}