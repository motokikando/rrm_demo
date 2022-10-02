const likert_scale = ['1 全くあてはまらない', '2', '3', '4', '5', '6', '7 非常にあてはまる']

const likert_instruction = {
  type: jsPsychInstructions,
  pages: [
    '<p>これから質問紙調査を行います。</p> <p>1(全くあてはまらない)〜 7 (非常によく当てはまる)の中から最も近いもの選択してください。</p> <p>質問項目は全部で25項目です。</p><p>準備ができたら次に進んで、回答を開始してください。</p>',
  ],
  show_clickable_nav: true
}

const likert1 = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "私は自分で決めたことを後悔しない。", name: 's1', labels: likert_scale, required: true},
    {prompt: "私は自分の判断をいつも信じている。", name: 's2', labels: likert_scale, required: true},
    {prompt: "自分で決心したことが他人の意見で変わることはめったにない。", name: 's3', labels: likert_scale, required: true},
    {prompt: "「なぜそれが好きなのですか？」と聞かれた時，何についても説明できる。", name: 's4', labels: likert_scale, required: true},
    {prompt: "私は自分の人生を完全に思い通りに進めている。", name: 's5', labels: likert_scale, required: true},
    {prompt: "たとえ何人かの人に嫌われても，私にとっては問題ない。", name: 's6', labels: likert_scale, required: true},
    {prompt: "私のことを他人が本当にどう思っているのか気にならない。", name: 's7', labels: likert_scale, required: true},
    {prompt: "時々，すぐに決心できなくて失敗することがある。", name: 's8', labels: likert_scale, required: true},
    {prompt: "私は自分でなぜ自分がそうしたのか，自分でも分からないときがある。", name: 's9', labels: likert_scale, required: true},
    {prompt: "いろいろなことについて，つい余計なことを考える。", name: 's10', labels: likert_scale, required: true},
    {prompt: "私が感じた他人の第一印象はよく当たっている。", name: 's11', labels: likert_scale, required: true},
    {prompt: "他人には言えないようなことをしたことがある。", name: 's12', labels: likert_scale, required: true},
    {prompt: "私はきわめて理性的な人間である。", name: 'i1', labels: likert_scale, required: true},
    {prompt: "必要であれば，時々は嘘をつく。", name: 'i2', labels: likert_scale, required: true},
    {prompt: "人をうまく利用したことがある。", name: 'i3', labels: likert_scale, required: true},
    {prompt: "私はきわめて理性的な人間である。", name: 'i4', labels: likert_scale, required: true},
    {prompt: "友達の陰口を言ったことがある。", name: 'i5', labels: likert_scale, required: true},
    {prompt: "人をののしったことがない。", name: 'i6', labels: likert_scale, required: true},
    {prompt: "かなりよくない習慣をいくつか持っている。", name: 'i7', labels: likert_scale, required: true},
    {prompt: "仮病で仕事や学校を休んだことがある。", name: 'i8', labels: likert_scale, required: true},
    {prompt: "道路や公共の場所で，ごみを落としたことはない。", name: 'i9', labels: likert_scale, required: true},
    {prompt: "人と争ったとき，水に流すよりもむしろ復しゅうする。", name: 'i10', labels: likert_scale, required: true},
    {prompt: "私は恐らく捕まらないような時でも，いつも法律に従っている。", name: 'i11', labels: likert_scale, required: true},
    {prompt: "お釣りを多くもらったとき，気づいてもそのまま受け取ってしまう。", name: 'i12', labels: likert_scale, required: true},
    {prompt: "図書館の本や店の商品を破損した時は，必ずそれを報告する。", name: 'i13', labels: likert_scale, required: true},
  ],
  randomize_question_order: true,
  autocomplete: true,
  button_label: '次へ'
};