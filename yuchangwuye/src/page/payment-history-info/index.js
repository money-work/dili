import Vue from 'vue';
import userInfo from '../../components/top-user/index.vue';
import {ajax, sessionData, urls} from "../../common/common";
//这是缴费历史详情
export default {
	data() {
		return {
			paymentHistoryInfo: [],
			paymentHistoryInfoId: ""
		}
	},
	components: {userInfo},
	mounted() {
		this.paymentHistoryInfoId = this.$route.query["id"] || '';
		this.$nextTick(function () {
			this.getPaymentHistoryInfo();
		});
	},
	methods: {
		getPaymentHistoryInfo() {

			this.paymentHistoryInfo = {
				"id": "1",
				"name": "裕昌国际",
				"floor": "33栋",
				"unit": "1单元",
				"room": "603室",
				"info": [
					{
						"id": 1,
						"name": "物业费",
						"money": "2000",
						"date": "2018年1月-2018年2月"
					},
					{
						"id": 2,
						"name": "电费",
						"money": "200",
						"date": "2018年4月-2018年5月"
					},
					{
						"id": 3,
						"name": "水费",
						"money": "220",
						"date": "2018年3月-2018年4月"
					},
					{
						"id": 4,
						"name": "大学城生活垃圾处置费",
						"money": "2300",
						"date": "2018年3月-2018年4月"
					}
				]
			}
			return;
			// ajax(urls.getPaymentHistoryInfo, {
			// 	jsonParams: this.paymentHistoryInfoId
			// }).then(json => {
			// 	this.paymentHistoryInfo = json.data;
			// }).catch(() => {
			// });
			ajax(urls.getPaymentHistoryInfo).then(json => {
				this.paymentHistoryInfo = json.data[0];
			}).catch(() => {
			});
		}
	}
}