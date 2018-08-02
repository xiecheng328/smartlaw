// pages/community/settled/first_settled/first_settled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oroute:'../../../images/upload2.png',
    inform:{
      '姓名':     'certificate_name',
      '律师证号': 'certificate_number',
      '律师类型': 'certificate_type',
      '执业年数': 'certificate_year',
      '办公地址': 'certificate_area',
      '擅长案例': 'certificate_case',
      '个人简介': 'certificate_intro',
      '成功案例': 'certificate_successcase',
      '手机号':  'certificate_phonenumber',
      '微信号':   'certificate_wechatnumber'
    },
    bind:true,
    imgborder:true
  },
  chooseimg:function(){
    let that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#577EFF",
      success: function (res) {
        if (res.tapIndex == 0) {
          that.chooseWxImage('album')
        } else if (res.tapIndex == 1) {
          that.chooseWxImage('camera')
        }
      }
    })
  },
  chooseWxImage:function(type){
    let that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
          that.setData({
            oroute: res.tempFilePaths[0],
            imgborder:false
          })
        }
      })
  },
  formSubmit:function(e){
    let that=this;
    that.setData({
      bind:true
    })
    if (that.data.oroute==='../../../images/upload2.png') {
      that.setData({
        bind: false
      })
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '还没上传头像',
      })
    }
    else{
      for (let key in e.detail.value) {
        if (!e.detail.value[key]) {
          that.setData({
            bind: false
          })
          for (let sign in that.data.inform) {
            if (that.data.inform[sign] === key) {
              wx.showModal({
                title: '提示',
                showCancel: false,
                content: sign + '不能为空',
              })
            }
          }
        }
      }
    }
    if (this.data.bind) {
      wx.setStorageSync('certificate_area', e.detail.value.certificate_area);
      wx.setStorageSync('certificate_name', e.detail.value.certificate_name);
      wx.setStorageSync('certificate_number', e.detail.value.certificate_number);
      wx.setStorageSync('certificate_year', e.detail.value.certificate_year);
      wx.setStorageSync('certificate_case', e.detail.value.certificate_case);
      wx.setStorageSync('certificate_intro', e.detail.value.certificate_intro);
      wx.setStorageSync('certificate_successcase', e.detail.value.certificate_successcase);
      wx.setStorageSync('certificate_phonenumber', e.detail.value.certificate_phonenumber);
      wx.setStorageSync('certificate_wechatnumber', e.detail.value.certificate_wechatnumber);
      wx.setStorageSync('certificate_type', e.detail.value.certificate_type);
      wx.setStorageSync('certificate_headimg', that.data.oroute);
      wx.navigateTo({
        url: '../second_settled/second_settled',
      })
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