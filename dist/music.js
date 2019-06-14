const ap = new APlayer({
  container: document.getElementById('aplayer'), //播放器容器元素
  mini: false, //迷你模式
  autoplay: false, //自动播放
  theme: '#ff6700', //主题色
  loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
  order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
  preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.5, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
  listFolded: false, //列表默认折叠
  listMaxHeight: 90, //列表最大高度
  lrcType: 1, //歌词传递方式
  audio: [ //音频信息,包含以下
    {
      name: '珍重', //音频名称
      artist: '叶倩文', //音频艺术家
      url: 'http://music.163.com/song/media/outer/url?id=318527.mp3', //音频外链
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg', //音频封面
      lrc: '[00:00.00]',
      theme: 'pink' //切换到此音频时的主题色，比上面的 theme 优先级高
    },
    {
      name: '春夏秋冬',
      artist: '张国荣',
      url: 'http://music.163.com/song/media/outer/url?id=186453.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: '玉门关',
      artist: '上海彩虹室内合唱团',
      url: 'http://music.163.com/song/media/outer/url?id=1365898217.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]前奏很长...',

    },
    {
      name: '男孩',
      artist: '梁博',
      url: 'http://music.163.com/song/media/outer/url?id=467952048.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: '约定',
      artist: '王菲',
      url: 'http://music.163.com/song/media/outer/url?id=299116.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: '大鱼',
      artist: '周深',
      url: 'http://music.163.com/song/media/outer/url?id=413812448.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: '稀客',
      artist: '杨千嬅',
      url: 'http://music.163.com/song/media/outer/url?id=316510.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: '风的季节',
      artist: 'Soler',
      url: 'http://music.163.com/song/media/outer/url?id=26584442.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',

    },
    {
      name: 'Hotel California',
      artist: 'Eagles',
      url: 'http://music.163.com/song/media/outer/url?id=26289183.mp3',
      cover: 'http://prl0yrsmk.bkt.clouddn.com/blog/20190612/4BJ0T6x8TkST.jpg',
      lrc: '[00:00.00]',
    }

  ]
});
