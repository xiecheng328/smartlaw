// pages/lawyer_assessment/judgeSearch/judgeDetail/judgeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resume: '法官履历',
    footer: '如需查看大数据分析报告及法官姓名等全部信息请付费查看',
    messages: {
      name: '李xx',
      win: '68%',
      age: '44岁',
      cultrue: '硕士学历',
      school: '中国政法大学',
      work: '20年'
    },
    wrapper: '以下部分为平台大数据系统下付费可查看的信息',
    lawyerKey: {
      msg: '法官关键词',
      key: '关键词'
    },
    area: {
      msg: '法官受案地域分布',
      key: '地域'
    },
    trialCourt: {
      msg: '审理法院分布',
      key: '审理法院'
    },
    program: {
      msg: '审理程序分布',
      key: '审理程序'
    },
    doc: {
      msg: '文书性质分布',
      key: '文书性质'
    },
    caseType: {
      msg: '案件类型分布',
      key: '案件类型'
    },
    case: {
      msg: '法官案由分布',
      key: '案由分布'
    },
    court: {
      msg: '法院层级分布',
      key: '法院层级'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let Charts = require('../../../../utils/wxcharts.js');

    //关键词
    new Charts({
      canvasId: 'canvas3',
      dataPointShape: false,
      type: 'column',
      categories: ['缓刑', '民间借贷', '有期徒刑', '借贷', '确认合同无效', '迟延履行', '邪教组织', '邪教宣传品', '退房', '违约金'],
      series: [{
        name: '法官关键词',
        data: [4, 4, 4, 4, 3, 2, 1, 1, 1, 1], color: "#2a9ee5"//支持rgba，但不支持渐变色
      }],
      yAxis: {
        min: 0
      },
      xAxis: {
        disableGrid: false,
      },
      width: 320,
      height: 284,
      dataLabel: true,
      extra: {
        column: {
          width: 40 //柱的宽度
        }
      }
    });

    //地域
    new Charts({
      canvasId: 'canvas7',
      dataPointShape: false,
      type: 'column',
      categories: ['黑龙江省', '安徽省', '最高人民法院', '辽宁省', '吉林省'],
      series: [{
        name: '法官受案地域分布',
        data: [30, 3, 2, 1, 1], color: "#2a9ee5"//支持rgba，但不支持渐变色
      }],
      yAxis: {
        min: 0
      },
      xAxis: {
        disableGrid: false,
      },
      width: 320,
      height: 284,
      dataLabel: true,
      extra: {
        column: {
          width: 40 //柱的宽度
        }
      }
    });

    //审理法院
    new Charts({
      canvasId: 'canvas8',
      dataPointShape: false,
      type: 'column',
      categories: ['哈尔滨中级人民法院', '最高人民法院', '吉林省高级法院', '大庆市中级人民法院'],
      series: [{
        name: '法官受案地域分布',
        data: [11, 2, 1, 1], color: "#2a9ee5"//支持rgba，但不支持渐变色
      }],
      yAxis: {
        min: 0
      },
      xAxis: {
        disableGrid: false,
      },
      width: 320,
      height: 284,
      dataLabel: true,
      extra: {
        column: {
          width: 40 //柱的宽度
        }
      }
    });

    //审理程序
    new Charts({
      canvasId: 'canvas1',
      type: 'pie',
      series: [{ name: '一审', data: 50 }, { name: '二审', data: 30 }, { name: '再审', data: 20 }],
      width: 320,
      height: 284,
      dataLabel: true,
    });

    //文书性质
    new Charts({
      canvasId: 'canvas2',
      type: 'pie',
      series: [{ name: '判决', data: 50 }, { name: '裁定', data: 30 }],
      width: 320,
      height: 284,
      dataLabel: true,
    });

    //案件类型
    new Charts({
      canvasId: 'canvas4',
      type: 'pie',
      series: [{ name: '刑事', data: 40 }, { name: '民事', data: 30 }],
      width: 320,
      height: 284,
      dataLabel: true,
    });

    //案由分布
    new Charts({
      canvasId: 'canvas6', // canvas-id
      dataPointShape: false,
      type: 'column', // 图表类型，可选值为pie, line, column, area, ring
      categories: ['不当得利纠纷', '侵犯责任纠纷', '侵犯公民人身权利,民主权利罪', '民事其他', '与公司、证券\保险、票据有关的民事纠纷'],
      series: [{ // 数据列表
        name: '案由分布',
        color: '#2a9ee5', // 配色，不传入则使用系统默认配色方案
        data: [4, 3, 3, 2, 1]
      }],
      yAxis: {
        min: 0
      },
      xAxis: {
        disableGrid: false,
      },
      width: 320, // 宽度，单位为px
      height: 284, // 高度，单位为px
      extra: {
        column: {
          width: 50 // 柱状图每项的图形宽度，单位为px
        }
      }
    });

    //法院层级
    new Charts({
      canvasId: 'canvas5',
      type: 'pie',
      series: [{ name: '最高人民法院', data: 40 }, { name: '高级人民法院', data: 30 }, { name: '中级人民法院', data: 30 }, { name: '基层人民法院', data: 30 }],
      width: 320,
      height: 284,
      dataLabel: true,
    });

    //裁判年份
    new Charts({
      canvasId: 'canvas9',
      dataPointShape: "circle",
      type: 'line',
      categories: ['2014', '2015', '2016', '2017'],
      series: [{
        name: '裁判年份',
        data: [17, 3, 7, 10],//设置某一个值为null会出现断层
      }],
      yAxis: {
        min: 0,
        fontColor: "#000",
        gridColor: "#000"
      },
      width: 320,
      height: 284,
      dataLabel: true
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})