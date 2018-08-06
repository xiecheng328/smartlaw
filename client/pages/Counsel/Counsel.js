Page({
  data: {
    
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    firstList: [
      {
        name: '张三',
        year: '从业1年',
        house:'xx律师事务所',
        star:'专业指数AAA'
      }, {
        name: '李四',
        year: '从业1年',
        house: 'xx律师事务所',
        star: '专业指数AAA'
      }, {
        name: '赵四',
        year: '从业1年',
        house: 'xx律师事务所',
        star: '专业指数AAA'
      }, {
        name: '刘能',
        year: '从业1年',
        house: 'xx律师事务所',
        star: '专业指数AAA'
      }, {
        name: '二奎',
        year: '从业1年',
        house: 'xx律师事务所',
        star: '专业指数AAA'
      }],
    
    secondList: [
      {
        name: '尼古拉斯'
      }, {
        name: '凯文'
      }, {
        name: '鲁尼'
      }, {
        name: '托雷斯'
      }, {
        name: '布冯'
      }],
    currentTapIndex: 0
  },

  tapHandler: function (e) {


    this.setData({
      currentTapIndex: e.target.dataset.tapindex
    });
  },
  list: [
    {
      name: '代发律师函'
    }, {
      name: '合同审查'
    }, {
      name: '代写文书'
    }, {
      name: '电话咨询'
    }, {
      name: '律师线下一对一'
    }]
})
