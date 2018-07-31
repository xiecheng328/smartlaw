// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTapIndex: 0,
    list: [
        {
        code: '171003111222',
        status: '已完成',
        img: 'xx.jpg',
        name: '律师报告列表'
      }, {
        code: '171003111222',
        status: '已完成',
        img: 'xx.jpg',
        name: '律师报告列表'
      }, {
        code: '171003111222',
        status: '已完成',
        img: 'xx.jpg',
        name: '律师报告列表'
      }, {
        code: '171003111222',
        status: '已完成',
        img: 'xx.jpg',
        name: '律师报告列表'
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

  tapHandler: function(e){
    // console.log(e.target.dataset.tapindex);

    this.setData({
      currentTapIndex: e.target.dataset.tapindex
    });
  },
  show: function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})