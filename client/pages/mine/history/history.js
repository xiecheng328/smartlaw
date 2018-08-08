// pages/mine/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:true,
    // check:"",
    checkeList: [],
    newPro : [],
    idx : 1,
    historyList:[
      { 
        date: "7月10号",
        value:false,
        check:false,
        caseDetail: [{ detail: "案件详情案件详情案件详情案件详情案件详情案件详情案件详情" }, { detail: "案件详情案件详情案件详情案件详情案件详情案件详情案件详情案件详情" }, { detail: "案件详情案件详情案件详情案件详情案件详情案件详情案件详情案件详情" }],
        price:"￥5.00",
        casetype:"婚姻",
        isSelect:false,
      }, {
        value:false,
        date: "7月9号",
        check: false,
        caseDetail: [{ detail: "案件详情案件详情案件详情案件详情案件详情案件详情" }, { detail: "案件详情案件详情案件详情案件详情案件详情案件详情案件详情" }, { detail: "案件详情案件详情案件详情案件详情案件详情案件详情" }],
        price: "￥5.00",
        casetype: "婚姻",
        isSelect: false,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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
  allselected:function(){
    console.log(6666);
    this.data.historyList.forEach((elem, index)=>{
      elem.check = !elem.check;
    });
    console.log();
    this.setData({
      historyList: this.data.historyList
    })

    // this.setData({
    //   check: !this.data.check, 
    // })
    console.log(this.data.check)
    if (this.data.msg==true){
      this.setData({
        msg: false,
      });
    }else{
      this.setData({
        msg: true,
      });
    }
  },

  //   console.log(that.data.idx);
// tap:function(e){
//   console.log(e.target.dataset.tapindex)
// },

  change: function (e) {
    // e.detail.value=!e.detail.value;
    var that = this;
    console.log(e.detail.value);
    that.data.historyList[parseInt(e.target.dataset.tapindex)].check = !that.data.historyList[parseInt(e.target.dataset.tapindex)].check;
    console.log(e.target.dataset.tapindex);
  
    
    
    console.log(this)
    

  
    // that.data.historyList[e.target.dataset.tapIndex].check=true;
    that.setData({
      historyList: that.data.historyList
    });
    let arr = that.data.historyList;
    let arr2 = [];
    var flag= [];
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i].check == true) {
        flag.push(i);
        
      }
    }

    // console.log(flag)
    if(flag.length==arr.length){
      this.setData({
        msg:false
      })
    }else{
      this.setData({
        msg: true
      })
    }
    
  },
  // 删除
  alldeleted: function () {
    var that = this;
    let arr = that.data.historyList;
    let arr2 = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].check == false) {
        arr2.push(arr[i]);
      }
    }
    // console.log(arr2);
    that.setData({
      historyList: arr2,

    })
  },
})