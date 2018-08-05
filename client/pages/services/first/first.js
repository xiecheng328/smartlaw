Page({
    data: {
        imgUrls: [
            '../../images/banner.jpg',
            '../../images/banner.jpg',
            '../../images/banner.jpg',
            '../../images/banner.jpg',
            '../../images/banner.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        firstList: [
            {
                name: '代发律师函'
            }, {
                name: '合同审查'
            }, {
                name: '代写文书'
            }, {
                name: '电话咨询'
            }, {
                name: '律师线下一对一'
            }],
        secondList: [
            {
                name: '劳资关系',
                url: "../business/relation/relation",
            }, {
                name: '合同服务',
                url: "../business/contract/contract",
            }, {
                name: '股权事宜',
                url: "../business/stock/stock",
            }, {
                name: '知识产权',
                url: "../business/knowledge/knowledge"
            }, {
                name: '债务催收',
                url: "../business/debt/debt"
            }, {
                name: '诉讼仲裁',
                url: "../business/lawsuit/lawsuit"
            }],
        currentTapIndex: 0
    },

    tapHandler: function (e) {


        this.setData({
            currentTapIndex: e.target.dataset.tapindex
        });
    },
    list: [
        {
            name: '代发律师函'
        }, {
            name: '合同审查'
        }, {
            name: '代写文书'
        }, {
            name: '电话咨询'
        }, {
            name: '律师线下一对一'
        }]
})
