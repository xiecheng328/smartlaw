// pages/services/one-to-one/one-to-one1.js
Page({


    data: {
      region: ['黑龙江省', '哈尔滨市', '南岗区'],
      customItem: '全部',
      selectPerson: true,
      firstPerson: '房屋买卖',
      selectArea: false,
      bind: true,
      inform:{
        '委托人姓名': 'clientName',
        '委托人电话': 'clientTelNumber',
        '地址详情': 'AddressDetails',
        '咨询内容': 'counsellingContent'
      }
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson ==true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  //下一步保存表单数据
  formSubmit: function (e){
    let that = this;
    that.setData({
      bind: true
    })
    // for (let key in e.detail.value) {
    //   if (!e.detail.value[key]) {
    //     that.setData({
    //       bind: false
    //     })
    //     for (let sign in that.data.inform) {
    //       if (that.data.inform[sign] === key) {
    //         wx.showModal({
    //           title: '提示',
    //           showCancel: false,
    //           content: sign + '不能为空',
    //         })
    //       } 
    //     }
    //   }
    // }
    if (this.data.bind) {
    //   wx.setStorageSync('clientName', e.detail.value.clientName);
    //   wx.setStorageSync('clientTelNumber', e.detail.value.clientTelNumber);
    //   wx.setStorageSync('AddressDetails', e.detail.value.AddressDetails);
    //   wx.setStorageSync('counsellingContent', e.detail.value.counsellingContent);
    //   wx.setStorageSync('firstPerson', that.data.firstPerson);
    //   wx.setStorageSync('region', that.data.region);
      wx.navigateTo({
        url: '../one-to-one2/one-to-one2',
      })
    }
  },
  /**
   * 页面的初始数据
   */


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