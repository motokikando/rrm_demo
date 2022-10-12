const survey = {
  type: jsPsychSurvey,
  pages: [
      [
      {
        type: 'text',
        prompt: '年齢を入力してください',
        name: 'age',
        required: true
      },
      {
        type: 'multi-choice',
        prompt: '性別を選択してください',
        options: ['男性', '女性', 'その他'],
        name: 'sex',
        required: true
      },
    ],
  ],
  title: '下記の項目に回答してください。',
  button_label_finish: '次へ',
};