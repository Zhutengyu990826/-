// index.js
// 获取应用实例
const app = getApp()
const http = require("../../http/http")
const API = require("../../http/API")
Page({
	data: {
		swiperList: [],
		subMenuList: [
			{
				id: 0,
				text: "免费教程",
				image: "https://assets-cdn.lanqb.com/imgv3_m/images-icon/submenu/h9-b_1806.png"
			},
			{
				id: 1,
				text: "专业课程",
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
		hotList: [],
		QAList: [],
		materialList: []
	},

	onLoad() {
		this.getSwiper()
		this.getHot()
		this.getQA()
		this.getMaterial()
	},
	// 请求轮播图
	getSwiper() {
		http(API.swiper).then(res => {
			console.log(res);
			this.setData({
				swiperList: res.data.data
			})
		})
	},
	// 请求热门教程
	getHot() {
		http(API.hot).then(res => {
			let arr = res.data.splice(0,4)
			this.setData({
				hotList: arr
			})
		})
	},
	// 请求问答
	getQA() {
		http(API.QA).then(res => {
			let arr = res.data.splice(0,3)
			this.setData({
				QAList: arr
			})
			console.log(this.data.QAList);
		})
	},

	// 素材下载
	getMaterial() {
		http(API.materialDownload).then(res => {
			let arr = res.data.data.splice(0,3)
			this.setData({
				materialList: arr
			})
		})
	},
})
