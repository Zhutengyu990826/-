const baseurl = "https://m.lanqb.com/api"

module.exports = {
  // 轮播图
	swiper: baseurl + "/home/banner?type=m&local_code=10&order=weight&limit=6",
	// 热门教程
	hot: baseurl + "/home/series",
	// 问答专区
	QA: baseurl + "/home/heat/qa-list",
	//素材下载
	materialDownload: baseurl + "/news?type=sucai&page=1",
	// 教程中间图片
	lanqb : baseurl + "/series/banners?type=m&position=3&locality=0&order=weight&limit=6",
	// 分类列表
	sortList: baseurl + "/course-group-list",
	// 课程
	course: baseurl + "/course/video?type=1&page=1&limit=10",
	// 网校轮播图
	schoolBanner: baseurl + '/home/banner?type=m&local_code=20&limit=6&order=weight',
	 // 热门课程推荐
   professionals:baseurl + '/school/professionals?limit=4&teacher_show=1'
}