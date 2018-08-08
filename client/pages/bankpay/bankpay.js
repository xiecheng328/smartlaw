Page({
  data: {
    array: ['婚姻家庭', '财产继承', '工伤赔偿', '房屋租赁', '房屋买卖'],
    objectArray: [
      {
        id: 0,
        name: '婚姻家庭'
      },
      {
        id: 1,
        name: '财产继承'
      },
      {
        id: 2,
        name: '工伤赔偿'
      },
      {
        id: 3,
        name: '房屋租赁'
      },
      {
        id: 4,
        name: '房屋买卖'
      }
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
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

  }
})