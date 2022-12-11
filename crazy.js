const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let punclist=['，','。','，','。','，','。','，','。','，','。','！','！','！','……','……','……','，，，。。。','（）'];
let w1='呜呜呜,呜哇,我哭,怎会如此,哇,呜,天哪,天啊';
let w2='命运,天使,命运道标,锚,猫咪,桥,大猫咪,妈妈,爱人,光,光环,神,卡密,神仙,父亲,海洋,主,主宰,温柔,星海,宇宙,超新星,诗人,歌谣,爱侣,桃源,故乡,月亮,爱河,心,爱,才华,美人,美神,永远的神,碎玻璃,月光,外敷,鸟儿,狼,硝烟,雨';
let w3='好,美,绝,可爱,脆弱,坚强,勇敢,温柔,美好,强大,痛,苦,命中注定,真,真诚,动人';
let w4='不愿再流泪,不愿再痛苦,不愿再想起,深夜感慨,不禁感慨,不可能,茫然无知,无限痛哭,无限复读,全文背诵,摇摆矛盾,难过,自相矛盾,回不去了,不知道,泪洒太平洋,泪洒狂暴海,当场失控,癫狂,盲目痴愚,开不了口,飞翔,旋转上天,哭晕,大受震撼,看一万遍,看一千遍,永远热爱,痛哭失声,哭晕在厕所,用一生治愈此刻,眼泪从嘴角流下,馋,怎么会这样呢,好爱,被触动,狂呼乱叫';

let a1 = w1.split(',');
let a2 = w2.split(',');
let a3 = w3.split(',');
let a4 = w4.split(',');

let me='我';
let my='我的';
let a33=['那么','又','那么','又','那么','又','意想不到地'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
  }
  
function punc(){
  const pun=Math.floor(Math.random() * punclist.length);
  return punclist[pun];
}

function be(){
  const be=Math.floor(Math.random() * 3);
  return ['是','是','你是'][be];
}



randomize.addEventListener('click', result);

function result() {
const rawText=[];
const storyText=[];
var name = customName.value;

  if (name ===''){
  name = '煎饼果子';
  }
  
let num1=6+ Math.floor(Math.random() * 3);
let num2=6+ Math.floor(Math.random() * 3);
let num3=22-num1-num2;

rawText.push(randomValueFromArray(a1));
rawText.push(my+name);
rawText.push(my+randomValueFromArray(a2)+'般的'+name);

for (let i = 0; i < num1; i++) {
  rawText.push(be()+randomValueFromArray(a2));
}

for (let i = 0; i < num2; i++) {
  rawText.push(be()+randomValueFromArray(a3));
}

for (let i = 0; i < num3; i++) {
  rawText.push(me+randomValueFromArray(a4));
}
 
for (let i=0; i < 3+Math.floor(Math.random()*4);i++) {
  rawText.splice(Math.floor(Math.random() * rawText.length),0,name);
}            
  
for (let i = 0; i < rawText.length; i++) {
  storyText.push(rawText[i]);
  storyText.push(punc());
}

  let newStory = storyText.join('');
  story.textContent=newStory;
  story.style.visibility='visible';
}
