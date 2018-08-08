// pages/services/business/stock/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentTapIndex:0,
      list1:[
          {
              img:'../../../../images/lvshi1.png',
              name:'王大锤律师',
              position:'不赢官司不要钱律师事务所',
              address:'黑龙江省哈尔滨市南岗区学府路xx号',
              url:'../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '王大锤律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
      ],
      list2: [
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          {
              img: '../../../../images/lvshi1.png',
              name: '金三胖律师',
              position: '不赢官司不要钱律师事务所',
              address: '黑龙江省哈尔滨市南岗区学府路xx号',
              url: '../dialog/dialog'
          },
          
      ]
  },
    
    indexChange:function(e){
        this.setData({
            currentTapIndex: e.target.dataset.tapindex
        })
    },
    call: function () {
        wx.makePhoneCall({
            phoneNumber: '12345678900', 
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
    },
    gotoDialog:function(){
        wx.navigateTo({
            url: '../dialog/dialog',
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