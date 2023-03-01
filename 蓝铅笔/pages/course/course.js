// pages/course/course.js
const http = require("../../http/http")
const API = require("../../http/API")
const { sortList } = require("../../http/API")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		navList: [
			{
				id: 0,
				text: "最新"
			},
			{
				id: 1,
				text: "入门"
			},
			{
				id: 2,
				text: "进阶"
			},
			{
				id: 3,
				text: "免费"
			},
			{
				id: 4,
				text: "图文"
			},
			{
				id: 5,
				text: "兑换"
			},
			{
				id: 6,
				text: "专题"
			}
		],
		navIndex: 0,
		lanqbList: [],
		// 分类列表
		sortList: {},
		// 分类列表索引
		sortIndex: -1,
		// 是否展开
		showMore: false,
		// 课程列表
		courseList: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getLanqb()
		this.getSortList()
		this.getCourseList()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},
	// 请求教程中间图片
	getLanqb(){
		http(API.lanqb).then(res=>{
			this.setData({
				lanqbList: res.data.data[0]
			})
		})
	},
	// 请求分类列表
	getSortList(){
		http(API.sortList).then(res=>{
			this.setData({
				sortList: res.data
			})
			console.log(this.data.sortList);
		})
	},
	// 请求课程列表
	getCourseList(option){
		http(API.course).then(res=>{
			this.setData({
				courseList: res.data.data
			})
		})
	},
	modifyIndex(e){
		this.setData({
			navIndex: e.currentTarget.dataset.index
		})
	},
	getsortIndex(e){
		console.log(e.currentTarget.dataset.sortindex);
		this.setData({
			sortIndex: e.currentTarget.dataset.sortindex
		})
		if (e.currentTarget.dataset.sortindex >= 0) {
			http(API.course,{
				course_subjects_ids: this.data.sortList.course_subjects[e.currentTarget.dataset.sortindex].id
			}).then(res=>{
				this.setData({
					courseList: res.data.data
				})
			})
		}else{
			this.getCourseList()
		}
		
	},
	// 是否展开
	isShowMore(){
		this.setData({
			showMore: !this.data.showMore
		})
	}
})