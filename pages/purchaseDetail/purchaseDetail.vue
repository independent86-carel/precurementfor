<template>
	<view class="wrapper">
		<view class="lists">
			<uni-list class="column1">
				<uni-list-item title="申请单位" note="" :rightText="info.orgName"></uni-list-item>
				<uni-list-item title="项目负责人" note="" :rightText="info.username"></uni-list-item>
				<uni-list-item title="联系电话" note="" :rightText="info.phone"></uni-list-item>
				<uni-list-item title="申请日期" note="" :rightText="info.date"></uni-list-item>
				<uni-list-item title="经费账号" note="" :rightText="info.account"></uni-list-item>
				<uni-list-item title="项目名称" note="" :rightText="info.name"></uni-list-item>
				<uni-list-item title="计划单号" note="" :rightText="info.number"></uni-list-item>
				<!-- <uni-list-item title="采购是否含有批量集采目录中的41+ 	货物" note="" rightText="否"></uni-list-item> -->
			</uni-list>

			<view class="list-table">
				<scroll-view scroll-x="true" scroll-left="0" scroll-y="true">
					<tbody>
						<view class="addborder header">
							<tr style="width: 100%;">
								<td>
									<view style="width: 150rpx;">
										序号
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										货物服务名称
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										采购类型
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										是否属于政府集中采购目录
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										参考品牌/规格/型号
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										额定功率(W)
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										单位（台/件/套/次）
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										数量
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										计划单价(元)
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										计划总金额(元)
									</view>
								</td>
							</tr>
						</view>

						<!-- 循环渲染数据区域 -->
						<view class="addborder" v-for="(item,index) in batchList" :key="index">
							<!-- <scroll-view scroll-x="true" scroll-top="0" scroll-y="true"> -->
							<tr>
								<td>
									<view style="width: 150rpx;">
										{{index+1}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.name}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;" v-if="item.type==1">
										设备
									</view><view style="width: 150rpx;" v-if="item.type==2">
										家具
									</view><view style="width: 150rpx;" v-if="item.type==3">
										服务
									</view><view style="width: 150rpx;" v-if="item.type==4">
										材料
									</view>
								</td>
								<td>
									<view style="width: 150rpx;"   >
										{{item.isBatch==1?'是':'否'}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.number}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.power}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.company}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.num}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.unitPrice}}
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{item.money}}
									</view>
								</td>
							</tr>
						</view>


						<!-- 总计价格 -->
						<view class="addborder">
							<tr>
								<td>
									<view style="width: 150rpx;">
										总计
									</view>
								</td>
								<td>
									<view style="width: 150rpx;">
										{{totalMoney}}
									</view>
								</td>
							</tr>
						</view>


					</tbody>
				</scroll-view>
				</table>


			</view>

			<uni-list class="column2">
				<uni-list-item title="使用方向" note="" :rightText="useDirection" v-if="useDirection!=999" ></uni-list-item>
				<uni-list-item title="急需说明" note="" :rightText="info.needContent"></uni-list-item>
				<!-- <uni-list-item title="论证 报告及其他附件" link note="" rightText="土木建筑工程"></uni-list-item> -->
				<uni-list-item title="论证 报告及其他附件" note="" rightText=""></uni-list-item>
				<view class="viewFile">
					<!-- report对应评论报告 -->
					<view class="viewFile-column" v-if="info.report">
						<view class="viewFile-column-left">
							<image src="../../static/images/file.png" mode=""></image>
							{{info.report}}
						</view>
						<view class="viewFile-column-right" @click="viewReport(info.report)">
							查看
						</view>
					</view>
					<!--  file对应的附件 -->
					<view class="viewFile-column" v-if="info.file">
						<view class="viewFile-column-left">
							<image src="../../static/images/file.png" mode=""></image>
							{{info.file}}
						</view>
						<view class="viewFile-column-right" @click="viewFile(info.file)" >
							查看
						</view>
					</view>
				</view>
				<uni-list-item title="情况说明" note="" :rightText="info.remark"></uni-list-item>
				
		
				<!-- <web-view  :webview-styles="webviewStyles" :src="' http://view.officeapps.live.com/op/view.aspx?src='+fileSrc"></web-view> -->
			</uni-list>
		</view>



	</view>
</template>

<script>
	import request from '@/request/request.js'
	export default {
		data() {
			return {
				id: null, //采购申报列表详情ID
				listData: null,
				info: {},
				testText: 'niua',
				batchList: null
			}
		},
		onLoad(option) {
			console.log(option, 'option')
			this.id = option.id
			console.log(this.id, 'id')
			this.getData(this.id)
		},
		computed: {
			useDirection() {
				if (this.info.useDirection == 1) {
					return "科研急需"
				} else if (this.info.useDirection == 2) {
					return "教学急需"
				} else if (this.info.useDirection == 3){
					return "其他(批量集采的采购周期为6~12个月)"
				} else{
					return 999
				}
			},
			totalMoney() {

				if (this.batchList) {
					let total = 0
					// console.log(typeof(this.batchList[0].money), 'type')
					//确保传递的参数是number类型
					for (var i = 0; i < this.batchList.length; i++) {
						if (typeof(this.batchList[0].money) != 'number') {
							total += parseFloat(this.batchList[i].money)
						} else {
							total += this.batchList[i].money
						}
					}
					return total
				} else {

					return ''
				}
			}
		},
		methods: {
			gos(){
				
			},
			// 阅览报告
			viewReport(path){
				const urlz= `http://192.168.0.155:8081/purchase/base/file/download?name=${path}`
				uni.downloadFile({
				  url: urlz,
				  success: function (res) {
				    var filePath = res.tempFilePath;
				    uni.openDocument({
				      filePath: filePath,
				      success: function (res) {
				        console.log('打开文档成功');
				      }
				    });
				  }
				});
			},
			//下载附件
			viewFile(path){
				const urlz= `http://192.168.0.155:8081/purchase/base/file/download?name=${path}`
				uni.downloadFile({
				  url: urlz,
				  success: function (res) {
					  console.log(res,'res')
				    var filePath = res.tempFilePath;
				    uni.openDocument({
				      filePath: filePath,
				      success: function (res) {
				        console.log('打开文档成功');
				      },
					  fail:function(res){
						  console.log(res,'失败')
					  }
				    });
				  }
				});
				
			},
			// 获取数据
			getData(id) {
				this.$http('GET', `/web/api/purchaseInfo/get/${id}?null`, ).then(res => {
					// this.$http('GET', `/web/api/purchaseApproval/get/${id}?null`, ).then(res => {
					// 错误处理
					if (res.code != 200) {
						uni.showToast({
							title: res.msg,
							duration: 2000,
							icon: 'loading'
						});
						setTimeout(() => {
							uni.hideToast();
						}, 1000)
					} else {
						uni.showToast({
							title: '更新页面成功',
							duration: 2000
						});
						setTimeout(() => {
							uni.hideToast();
						}, 1000)
						this.listData = res.data
						this.info = res.data.info
						this.batchList = res.data.inventory
					}
				})




			},
			onPullDownRefresh() {
				this.getData(this.id)
				setTimeout(function() {
					uni.stopPullDownRefresh();
				}, 1000);

			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		background-color: #E0E0E0;
		height: calc(100vh - 44px);

		.lists {
			.list-table {
				width: 100vw;
				background-color: #FFFFFF;
				margin-top: 30rpx;
				margin-bottom: 30rpx;
			}
		}
	}

	.list-table {


		.addborder {
			// width: 100vw;
			overflow: hidden;
			font-size: 24rpx;
			padding-top: 22rpx;
			box-sizing: border-box;
			height: 88rpx;
			vertical-align: middle;
			border-bottom: 2rpx solid #E0E0E0;
			color: #999999;
		}

		.header {
			padding-top: 14rpx;
			height: 88rpx;
			align-items: center;
			color: #333333;
			line-height: auto;
			font-weight: bold;
			font-size: 24rpx;
		}

		td {
			width: 200rpx;
			text-align: center;
		}
	}

	.list-table td {
		width: auto;
	}


	.viewFile {
		.viewFile-column {
			font-size: 14px;
			color: #3b4144;
			display: flex;
			justify-content: space-between;
			padding: 0 16px;

			view {
				line-height: 48rpx;
			}

			.viewFile-column-left {
				image {
					vertical-align: text-top;
					margin-right: 17rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}

			.viewFile-column-right {
				color: #5592F7;
			}
		}
	}
	/* .webviewStyles{
		border: 1px solid black;
	} */
</style>
