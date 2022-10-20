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

const e_likert = {
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
  ],
  button_label_next: '次へ',
  button_label_back: '戻る',
  button_label_finish: '終了'
}

const big5_likert = {
  timeline: [e_likert]
}
