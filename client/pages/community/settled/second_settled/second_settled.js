// pages/community/settled/second_settled/second_settled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prompt:false,
    oroute: '../../../images/upload2.png',
    oroute2: '../../../images/upload2.png',
    oroute3: '../../../images/upload2.png',
    choose1:false,
    choose2: false,
    choose3: false,
    imgwidth1: 0,
    imgheight1: 0,
    imgwidth2:0,
    imgheight2:0,
    imgwidth3: 0,
    imgheight3: 0,
    bind: true,
    fianll:true
  },
  chooseimg: function (event) {
    let that = this;
    let choosenum = event.currentTarget.dataset.choosenum;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#577EFF",
      success: function (res) {
        if (res.tapIndex == 0) {
          that.chooseWxImage('album', choosenum)
        } else if (res.tapIndex == 1) {
          that.chooseWxImage('camera', choosenum)
        }
      }
    })
  },
  chooseWxImage: function (type, choosenum) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        if (choosenum=='1'){
          that.setData({
            choose1: true,
            oroute: res.tempFilePaths[0]
          })
        }
        else if (choosenum == '2') {
          that.setData({
            choose2: true,
            oroute2: res.tempFilePaths[0]
          })
        }
        else{
          that.setData({
            choose3: true,
            oroute3: res.tempFilePaths[0]
          })
        }
      }
    })
  },
  imageLoad: function (e) {
    var that = this;
    var $width = e.detail.width,
      $height = e.detail.height,
      ratio = $width / $height;
    var viewHeight = 256,
      viewWidth = ratio * 256;
    if (e.currentTarget.dataset.imgnum==1){
      this.setData({
        imgwidth1: viewWidth,
        imgheight1: viewHeight
      })
    }
    else if (e.currentTarget.dataset.imgnum == 2){
      this.setData({
        imgwidth2: viewWidth,
        imgheight2: viewHeight
      })
    }
    else{
      this.setData({
        imgwidth3: viewWidth,
        imgheight3: viewHeight
      })
    }
  },
  formSubmit: function (e) {
    let that=this;
    that.setData({
      bind:true
    })
    if (that.data.oroute === '../../../images/upload2.png' || that.data.oroute2 === '../../../images/upload2.png' || that.data.oroute3 === '../../../images/upload2.png') {
      that.setData({
        bind: false
      })
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '还有图片未上传',
      })
    }
    if (this.data.bind) {
      wx.request({
        url: 'https://cthmcof7.qcloud.la/index.php/',
        data: {
          certificate: that.data.oroute,
          PositiveID: that.data.oroute2,
          behindID: that.data.oroute3,
          certificate_area:wx.getStorageSync('certificate_area'),
          certificate_name: wx.getStorageSync('certificate_name'),
          certificate_number: wx.getStorageSync('certificate_number'),
          certificate_year: wx.getStorageSync('certificate_year'),
          certificate_case: wx.getStorageSync('certificate_case'),
          certificate_intro: wx.getStorageSync('certificate_intro'),
          certificate_successcase: wx.getStorageSync('certificate_successcase'),
          certificate_phonenumber: wx.getStorageSync('certificate_phonenumber'),
          certificate_wechatnumber: wx.getStorageSync('certificate_wechatnumber'),
          certificate_type: wx.getStorageSync('certificate_type'),
          certificate_headimg: wx.getStorageSync('certificate_headimg'),
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            prompt: true
          })
          // wx.clearStorageSync();
          // wx.removeStorageSync('key');
        }
      })
    }
  },
  close_prompt:function(){
    this.setData({
      prompt: false
    });
    wx.navigateBack({
      delta: 2
    });
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
    wx.navigateBack({
      delta: 1
    })
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