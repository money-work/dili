//这是缴费列表
import Vue from 'vue';
import userInfo from '../../components/top-user/index.vue';
import footerComponent from '../../components/footer/footer.vue';
import {Collapse} from 'vue-antd-ui';
import {ajax, sessionData, urls} from "../../common/common";
import {mapGetters} from 'vuex';
import * as actions from '../../store/mutation-types.js';

export default {
	data() {
		return {
			paymentList: []
		}
	},
	computed: {
		// 客可以直接在<template> 中使用
		...mapGetters({
			selectTab: 'getSelectTab',
		}),
	},
	components: {userInfo, footerComponent, "ACollapse": Collapse, "ACollapsePanel": Collapse.Panel},
	created() {
		this.$store.commit(actions.SELECT_TAB, 'paymentList');
	},
	mounted() {
		this.$nextTick(function () {
			this.getPaymentList();
		});
	},
	methods: {
		getPaymentList() {

			this.paymentList = [
				{
					"id": "1",
					"name": "裕昌国际",
					"homes": [
						{
							"floor": "33栋",
							"unit": "1单元",
							"room": "603室"
						},
						{
							"floor": "3栋",
							"unit": "2单元",
							"room": "303室"
						},
						{
							"floor": "30栋",
							"unit": "2单元",
							"room": "103室"
						}
					]
				},
				{
					"id": "2",
					"name": "裕昌九州国际",
					"homes": [
						{
							"floor": "3栋",
							"unit": "1单元",
							"room": "603室"
						},
						{
							"floor": "1栋",
							"unit": "3单元",
							"room": "303室"
						},
						{
							"floor": "29栋",
							"unit": "2单元",
							"room": "103室"
						}
					]
				},
				{
					"id": "3",
					"name": "裕昌大学城",
					"homes": [
						{
							"floor": "3栋",
							"unit": "2单元",
							"room": "603室"
						},
						{
							"floor": "1栋",
							"unit": "6单元",
							"room": "303室"
						},
						{
							"floor": "29栋",
							"unit": "1单元",
							"room": "103室"
						}
					]
				}
			];

			return;
			ajax(urls.getPaymentList).then(json => {
				this.paymentList = json.data;
			}).catch(() => {
			});
		},
		showPaymentInfo(item) {
			vm.$router.push({name: 'paymentInfo', query: {id: item.id}});
		}
	}
}