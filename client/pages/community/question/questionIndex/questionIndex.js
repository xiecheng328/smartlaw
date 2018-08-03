// pages/community/question/questionIndex/questionIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyerIndex:-1,
    selectData: ['婚姻家庭', '劳动工伤', '刑事辩护', '交通事故', '财产纠纷', '婚姻家庭', '劳动工伤', '刑事辩护', '劳动工伤', '财产纠纷', '婚姻家庭', '劳动工伤', '刑事辩护', '交通事故', '财产纠纷'],
    asklist: [
      {
        caseText:'案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述',
        money:5,
        lawyerName:'王爱国',
        lawFirm:'爱国律所事务所',
        img:'../../../images/Avatar.png',
        peoples:35
      },
      {
        caseText: '案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述',
        money: 5,
        lawyerName: '王爱国',
        lawFirm: '爱国律所事务所',
        img: '../../../images/Avatar.png',
        peoples: 35
      },
      {
        caseText: '案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述',
        money: 5,
        lawyerName: '王爱国',
        lawFirm: '爱国律所事务所',
        img: '../../../images/Avatar.png',
        peoples: 35
      },
      {
        caseText: '案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述案件陈述',
        money: 5,
        lawyerName: '王爱国',
        lawFirm: '爱国律所事务所',
        img: '../../../images/Avatar.png',
        peoples: 35
      }
    ]
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
  
  },
  tapHandler: function (e) {
    console.log(e.target.dataset.tapindex);
    this.setData({
      lawyerIndex: e.target.dataset.tapindex
    });
  },
})