const user_info = {
    type: jsPsychSurveyText,
    questions: [
      {prompt: '学籍番号を入力してください', columns: 10, required: true, name: 'id'},
      {prompt: '年齢を入力してください', columns: 10, required: true, name: 'age'},
    ],
    button_label: '次へ',
  };

const gender = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {prompt: "性別を選択してください", options: ['男性', '女性'], required: true, horizontal: true, name: 'gender'},
  ],
  button_label: '次へ',
};