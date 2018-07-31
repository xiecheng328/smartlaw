// pages/community/question/questionAsk/questionAsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['婚姻家庭','劳动工伤','刑事辩护','交通事故','财产纠纷'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    moneyData: [10,50,80,100]
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
  /**
   *点击下拉显示框
   */
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  /**
   * 点击下拉列表
   */
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  radioChange: function(e){
  },
  show: function () {
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000
    })
  }
});