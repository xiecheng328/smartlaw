// pages/services/company/relation/relation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        array1: ['请选择', '国营与集体企业', '私营企业', '外资企业'],
        array2: ['请选择', '国营与集体企业', '私营企业', '外资企业'],
        objectArray1: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '国营与集体企业'
            },
            {
                id: 2,
                name: '私营企业'
            },
            {
                id: 3,
                name: '外资企业'
            }
        ],
        objectArray2: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '国营与集体企业'
            },
            {
                id: 2,
                name: '私营企业'
            },
            {
                id: 3,
                name: '外资企业'
            }
        ],
        index1: 0,
    },


    bindPickerChange1: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index1: e.detail.value
        })
    },
    bindPickerChange2: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index2: e.detail.value
        })
    },
    gotoPayPage: function () {
        wx.navigateTo({
            url: 'pay/pay',
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
    },
    aa: function () {
        wx.navigateTo({
            url: '../contract/contract'
        })
    }
})