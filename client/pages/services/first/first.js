Page({
  data: {
    imgUrls: [
      '../../images/banner.jpg',
      '../../images/banner.jpg',
      '../../images/banner.jpg',
      '../../images/banner.jpg',
      '../../images/banner.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    firstList: [
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
      }],
    secondList: [
      {
        name: '劳资关系'
      }, {
        name: '合同服务'
      }, {
        name: '股权事宜'
      }, {
        name: '知识产权'
      }, {
        name: '债务催收'
      },{
        name:'诉讼仲裁'
      }],
    currentTapIndex: 0
  },
 
  tapHandler: function (e) {
    // console.log(e.target.dataset.tapindex);

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
    },{
    name:'电话咨询'
    }, {
      name: '律师线下一对一'
    }]
  })
  