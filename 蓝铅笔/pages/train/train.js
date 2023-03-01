// pages/train/train.js
const http = require("../../http/http")
const API = require("../../http/API")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subMenuList: [
      {
        id: 0,
        text: "全部课程",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h9-b_1806.png"
      },
      {
        id: 1,
        text: "直播班",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h12-g_1806.png"
      },
      {
        id: 2,
        text: "大触直播",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h2-p_2212.png"
      },
      {
        id: 3,
        text: "教程兑换",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h10-o_1806.png"
      },
      {
        id: 4,
        text: "学员成长",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h11-c_2212.png"
      },
      {
        id: 5,
        text: "每日一画",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h11-c_1811.png"
      },
      {
        id: 6,
        text: "素材下载",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h14-r_2212.png"
      },
      {
        id: 7,
        text: "社区问答",
        image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h5-p_2211.png"
      }
    ],
    bannerList: [],
    hotList: [
      {
        id: 0,
        text: "坚持画画，领高额奖学金"
      },
      {
        id: 1,
        text: "30天学会用ipad画插画"
      },
      {
        id: 2,
        text: "日系插画，怎么上手"
      },
      {
        id: 3,
        text: "重磅！日系插画直播教学"
      }
    ],
    professionalsList: [],
    historyList: [{
      date: '2011',
      desTitle: '成立初期',
      desDetail: '蓝铅笔社区论坛上线运营'
    },
    {
      date: '2014',
      desTitle: '迅速成长',
      desDetail: '蓝铅笔社区网校完成天使轮风险投资蓝铅笔网校兴趣插画类学习项目启动'
    },
    {
      date: '2016',
      desTitle: '持续攀升',
      desDetail: '蓝铅笔学员任治和荣获北美动画师擂台赛冠军蓝铅笔获得中文在线文化产基金、华睿本投资的千万人民币A轮融资'
    },
    {
      date: '2018',
      desTitle: '创新发展',
      desDetail: '蓝铅笔荣获国家级“高新技术企业”评定蓝铅笔向国家版权局申获7项软件著作权'
    },
    {
      date: '2020',
      desTitle: '口碑信任',
      desDetail: '蓝铅笔荣获“新浪中国”2020年度影响力艺术教育品牌蓝铅笔荣获“回响中国”2020年度口碑影响力职业教育品牌'
    },
    {
      date: '2021',
      desTitle: '口碑信任',
      desDetail: '蓝铅笔参与第七届中国品牌创新发展论坛并入选“中国品牌创新发展工程”蓝铅笔创始人参与央视《大国匠心》、《企业家精神》节目录制'
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList()
    this.getProfessionals()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  getBannerList() {
    http(API.schoolBanner).then(res => {
      console.log(res.data.data);
      this.setData({
        bannerList: res.data.data
      })
    })
  },
  getProfessionals() {
    http(API.professionals).then(res => {
      console.log(res);
      this.setData({
        professionalsList: res.data.data
      })
    })
  }

})