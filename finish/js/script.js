// アルバムデータの作成
const albumData = [
  {
    filename: 'image01.jpg',
    alt: '飼い主を玄関で迎える子犬の画像',
    caption: 'おかえりなさい！',
    date: '2024-11-01',
  },
  {
    filename: 'image02.jpg',
    alt: '飼い主とタオルの引っ張り合いをする子犬の画像',
    caption: '負けないぞー！',
    date: '2024-11-03',
  },
  {
    filename: 'image03.jpg',
    alt: '床に伏せて寂しそうな表情を見せる子犬の画像',
    caption: 'さみしいな...',
    date: '2024-11-05',
  },
  {
    filename: 'image04.jpg',
    alt: 'カメラに向かってジャンプする子犬とそれを後ろから見ている子犬の画像',
    caption: '僕を写して！',
    date: '2024-11-07',
  },
  {
    filename: 'image05.jpg',
    alt: 'タオルに包まれ顔だけが見えている子犬の画像',
    caption: 'このタオル、お気に入り',
    date: '2024-11-09',
  },
  {
    filename: 'image06.jpg',
    alt: '子猫の頭の上に顎を乗せてくつろいでいる子犬の画像',
    caption: 'ふたりは仲良し',
    date: '2024-11-11',
  },
  {
    filename: 'image07.jpg',
    alt: '波打ち際でサーフボードに座る子犬の画像',
    caption: '波乗りpuppyって呼んでね！',
    date: '2024-11-12',
  },
];

// メイン画像とサムネ画像を入れる親要素を取得
let main = document.querySelector('.album-main');
let thumb = document.querySelector('.album-thumb');

// メイン画像の最初の一枚を表示
let mainImgElm = document.createElement('img');
mainImgElm.classList.add('album-main__img');
mainImgElm.setAttribute('src', './img/' + albumData[0].filename);
mainImgElm.setAttribute('alt', albumData[0].alt);
// console.log(mainImgElm);
main.append(mainImgElm);

// メイン画像のキャプションを追加
let mainCaptionElm = document.createElement('p');
mainCaptionElm.classList.add('album-main__caption');
mainCaptionElm.innerText = albumData[0].caption;
main.append(mainCaptionElm);

// メイン画像の日付を追加
let mainDateElm = document.createElement('time');
mainDateElm.classList.add('album-main__date');
mainDateElm.setAttribute('datetime', albumData[0].date);
let date = new Date(albumData[0].date);
console.log(date);
mainDateElm.innerText = date.toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
console.log(mainDateElm);
main.append(mainDateElm);

// サムネ画像のボタン一覧を表示
for (let i = 0; i < albumData.length; i++) {
  let thumbImgElm = document.createElement('img');
  thumbImgElm.setAttribute('src', './img/' + albumData[i].filename);
  thumbImgElm.setAttribute('alt', albumData[i].alt);
  //   thumbImgElm.setAttribute('data-caption', albumData[i].caption);
  thumbImgElm.setAttribute('data-index', i);
  if (i === 0) {
    thumbImgElm.classList.add('is-active');
  }
  thumb.append(thumbImgElm);

  thumbImgElm.addEventListener('click', function () {
    let activeImg = document.querySelector('.is-active');
    if (!thumbImgElm.classList.contains('is-active')) {
      // 画像の切り替えにサムネイルにセットされたデータを利用するパターン
      //   let targetSrc = thumbImgElm.getAttribute('src');
      //   let targetAlt = thumbImgElm.getAttribute('alt');
      //   let targetCaption = thumbImgElm.getAttribute('data-caption');
      //   mainImgElm.setAttribute('src', targetSrc);
      //   mainImgElm.setAttribute('alt', targetAlt);
      //   mainCaptionElm.innerText = targetCaption;
      //   let targetId = thumbImgElm.dataset.index;

      //   画像の切り替えに既存のオブジェクト配列を利用するパターン
      let targetId = thumbImgElm.getAttribute('data-index');
      mainImgElm.setAttribute('src', './img/' + albumData[targetId].filename);
      mainImgElm.setAttribute('alt', albumData[targetId].alt);
      mainCaptionElm.innerText = albumData[targetId].caption;
      mainDateElm.setAttribute('datetime', albumData[targetId].date);
      let targetDate = new Date(albumData[targetId].date);
      console.log(targetDate);
      mainDateElm.innerText = targetDate.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      activeImg.classList.remove('is-active');
      thumbImgElm.classList.add('is-active');
    }
  });
}
