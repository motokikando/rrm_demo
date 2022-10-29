const createTrial = (stim) => {
    const trial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<p style="font-size: 70px"> ${stim}</p>`,
      choices: ['e', 'i'],
      post_trial_gap: 100,
      prompt: "<div style='display:flex;' ><div class='choice1'>自分に当てはまらない<br><p>eキー</p></div><div class='choice2'>自分に当てはまる<br><p>iキー</p></div></div>"
  };
    return trial;
  };

const createInstruction = (num) => {
  const instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  `<div class="bold">これより本番ブロック ${num}を開始します。` +
    '<br>もし自分にあてはまるなら「i」キーを' +
    '自分に当てはまらない場合は「e」キーを' +
    'なるべく早く，正確に押してください' +
    '<br>準備ができたらスペースキーを押して課題を開始してください。</div>',
    choices: [' '],
    data: { task: 'instruction' },
  };
  return instruction;
}


const pre_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      '次の課題では以下に示すようにある形容詞が提示され、それが自身に当てはまるかどうか分類することが求められます。<br><img src="rrm_example1.png" width="500px" height="250px">',
      '下記の例のようにもし自身に当てはまるなら「i」キー (自分に当てはまる)をもし当てはまらないなら「e」キー(自分に当てはまらない)を押してください。<br><img src="rrm_example1.png" width="500px" height="250px">',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p> <p>ブロックは全部で５つあります。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ',
    show_page_number: true
  }

  const pre_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class="bold">これより練習ブロックを開始します。<br>' +
    '<div class="bold">もし自分にあてはまるなら「i」キーを<br>' +
    '自分に当てはまらない場合は「e」キーを<br>' +
    'なるべく早く，正確に押してください<br></div>' +
    '準備ができたらスペースキーを押して課題を開始してください。</div>',
    choices: [' '],
    data: { task: 'instruction' },
  };

  const fake_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      'これより本番ブロックAを始めます。ただし、次の提示を想定しながら回答をしてください。',
      '<p><div class="bold">1.自分が入社したいと思う理想的な企業を思い浮かべてください</div></p> <p>*上記を想定することができたら「次へ」を押してください</p> ',
      '<div class="bold">2.これから、先ほどイメージした理想的な企業の適性検査に参加することを想定してください。</div> <p>*上記を想定することができたら「次へ進む」を押してください</p> ',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ',
    show_page_number: true
  };

  const fake_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  '<div class="bold">これより本番ブロックを開始します。<br>' +
    'もし自分にあてはまるなら「i」キーを<br>' +
    '自分に当てはまらない場合は「e」キーを<br>' +
    'なるべく早く，正確に押してください<br>' +
    '準備ができたらスペースキーを押して課題を開始してください。</div>',
    choices: [' '],
    data: { task: 'instruction' },
  };

  const honest_instruction1 = {
    type: jsPsychInstructions,
    pages: [
      'これより本番ブロックBを始めます。ただし、次の提示を想定しながら回答をしてください。',
      '<div class="bold">できるだけ今の自分に正直に回答してください。</div> <p>*上記を想定することができたら「次へ」を押してください</p> ',
      '<p>注意事項 </p> <p>速く反応ができるようにするために、「e」と「i」のキーの上に予め人差し指を置いて下さい。</p> <p>反応が遅すぎる場合には、テストの結果を示すことができません。正確に回答することに努めながらも、できるだけ速く反応するようにして下さい。</p>'
    ],
    show_clickable_nav: true,
    button_label_previous: '戻る',
    button_label_next: '次へ',
    show_page_number: true
  };

  const honest_instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:  '<div class="bold">これより本番ブロックを開始します。' +
    'もし自分にあてはまるなら「i」キーを' +
    '自分に当てはまらない場合は「e」キーを' +
    'なるべく早く，正確に押してください' +
    '準備ができたらスペースキー</div>を押して課題を開始してください。</div>',
    choices: [' '],
    data: { task: 'instruction' },
  };
