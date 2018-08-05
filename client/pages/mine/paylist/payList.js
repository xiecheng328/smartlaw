// pages/mine/paylist/payList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTap: 0,
    list: [{
      code: '171003111222',
      status: '已完成',
      img: '../images/payList/payList-headphoto.png',
      name: '律师报告列表',
      amount: 1,
      price: 500,
      isPay: true
    }, {
      code: '171003111222',
      status: '待收货',
      img: '../images/payList/payList-headphoto.png',
      name: '律师报告列表',
      amount: 1,
      price: 500,
      isPay: true
    }, {
      code: '171003111222',
      status: '待付款',
      img: '../images/payList/payList-headphoto.png',
      name: '律师报告列表',
      amount: 1,
      price: 500,
      isPay: false
    }, {
      code: '171003111222',
      status: '待发货',
      img: '../images/payList/payList-headphoto.png',
      name: '律师报告列表',
      amount: 1,
      price: 500,
      isPay: true
    }],
    logistics1: [{
      data: '2018/7/8',
      time: '15:15',
      msg: '商家接单 等待出库'
    }],
    logistics2: [{
      data: '2018/7/8',
      time: '15:15',
      msg: '商家接单'
    }, {
      data: '2018/7/8',
      time: '16:15',
      msg: '货物出库'
    }, {
      data: '2018/7/8',
      time: '17:15',
      msg: '申通接单'
    }, {
      data: '2018/7/8',
      time: '18:15',
      msg: '运往物流集散中心'
    }, {
      data: '2018/7/8',
      time: '19:15',
      msg: '已从哈尔滨出发'
    }, {
      data: '2018/7/8',
      time: '20:15',
      msg: '正在运往满洲里途中'
    }]
  },

  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  confirm: function(e){
    var that = this;
    var strStatus = 'list[1].status';
    that.setData({
      [strStatus]: e.target.dataset.status,
      currentTab: 0
    });
  },
  moreDetails: function(e){
    wx.navigateTo({
      url: 'more_details/more_details',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    /** * 获取系统信息  */
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      currentTab: 0
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
  
})