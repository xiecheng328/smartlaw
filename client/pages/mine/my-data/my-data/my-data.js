Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName: '',
    myDataList: [{
      img: "../../images/my-data-images/head-pic.png",
      name: "用户",
      phoneNumber: "15200000000",
      address: ''
    }, ]
  },
  tempFilePaths: '',
  chooseimage: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            // that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            // that.chooseWxImage('camera')
          }
        }
      }
    })
    // wx.showActionSheet({
    //   itemList: ['从相册中选择', '拍照'],
    //   itemColor: "#577eff",
    //   success: function (res) {
    //     if (!res.cancel) {
    //       if (res.tapIndex == 0) {
    //         that.chooseWxImage('album')
    //       } else if (res.tapIndex == 1) {
    //         that.chooseWxImage('camera')
    //       }
    //     }
    //   }
    // })

  },






  changePic: function() {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol
    })
  },
  close_changePic: function() {
    // var bol = this.data.boolean;
    // this.setData({
    //   boolean: !bol
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);//通过navigateTo把realname值拿过来
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