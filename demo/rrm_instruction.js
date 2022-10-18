const createTrial = (stim) => {
    const trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<p style="font-size: 70px"> ${stim}</p>`,
      choices: ['e', 'i'],
      post_trial_gap: 100,
      prompt: "<div style='display:flex;' ><div style='margin: 0 100px 0 100px; padding: 50px; background-color: #b4b4e3; border-radius: 20px;'>自分に当てはまらない<br><p>eキー</p></div><div style='margin: 0 120px 0 100px; padding: 50px; background-color: #57e815; border-radius: 20px;'>自分に当てはまる<br><p>iキー</p></div></div>"
  };
    return trial;
  };

const createInstruction = (num) => {
  const instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  `これより本番ブロック ${num}を開始します。` +
    '<br>もし自分にあてはまるなら「i」キーを' +
    '自分に当てはまらない場合は「e」キーを' +
    'なるべく早く，正確に押してください' +
    '<br>準備ができたらスペースキーを押して課題を開始してください。',
    choices: [' '],
    data: { task: 'instruction' },
  };
  return instruction;
}


const pre_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      '次の課題ではある形容詞が提示され、それが自身に当てはまるかどうか分類することが求められます。',
      'もし自身に当てはまるなら「i」キー (自分に当てはまる)をもし当てはまらないなら「eキー」(自分に当てはまらない)を押下してください。',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p> <p>,ブロックは全部で５つあります。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ'
  }

  const pre_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'これより練習ブロックを開始します。<br>' +
    'もし自分にあてはまるなら「i」キーを<br>' +
    '自分に当てはまらない場合は「e」キーを<br>' +
    'なるべく早く，正確に押してください<br><br>' +
    '準備ができたらスペースキーを押して課題を開始してください。',
    choices: [' '],
    data: { task: 'instruction' },
  };


  const fake_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      'これより本番ブロック1を始めます。ただし、次の提示を想定しながら回答をしてください。',
      '<p>1.自分が入社したいと思う理想的な企業を思い浮かべてください</p> <p>*上記を想定することができたら「次へ」を押してください</p> ',
      '<p>2.これから、その第一志望の企業の適性検査に参加することを想定してください。</p> <p>*上記を想定することができたら「次へ進む」を押してください</p> ',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ'
  };

  const fake_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  'これより本番ブロックAを開始します。<br>' +
    'もし自分にあてはまるなら「i」キーを<br>' +
    '自分に当てはまらない場合は「e」キーを<br>' +
    'なるべく早く，正確に押してください<br><br>' +
    '準備ができたらスペースキーを押して課題を開始してください。',
    choices: [' '],
    data: { task: 'instruction' },
  };


  const honest_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      'これより本番ブロックBを始めます。ただし、次の提示を想定しながら回答をしてください。',
      '<p>できるだけ今の自分に正直に回答してください。</p> <p>*上記を想定することができたら「次へ」を押してください</p> ',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ'
  };

  const honest_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  'これより本番ブロックを開始します。' +
    'もし自分にあてはまるなら「i」キーを' +
    '自分に当てはまらない場合は「e」キーを' +
    'なるべく早く，正確に押してください' +
    '準備ができたらスペースキーを押して課題を開始してください。',
    choices: [' '],
    data: { task: 'instruction' },
  };
