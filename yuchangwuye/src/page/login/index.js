import Vue from 'vue';
import {localData, ajax, urls, sessionData} from '../../common/common';
import {Form, Button, Input} from 'vue-antd-ui';

export default {
	data() {
		return {
			formLayout: 'horizontal',
			formItemLayout: {
				labelCol: {span: 4},
				wrapperCol: {span: 14},
			},
			buttonItemLayout: {
				wrapperCol: {span: 14, offset: 0}
			},
			iconLoading: false,
			formData: {
				"name": "",
				"idCardNo": "",
				"phone": ""
			}
		}
	},

	components: {
		"AForm": Form,
		"AButton": Button,
		"AFormItem": Form.Item,
		"AInput": Input
	},
	mounted() {
	},
	methods: {
		login() {
			if (this.iconLoading) {
				return;
			}

			this.iconLoading = true;

			console.log("this.formData", this.formData);
			let vm = this;
			ajax(urls.login, {
				jsonParams: vm.formData
			}).then(json => {
				this.iconLoading = false;
				sessionData.set("userInfo", json.data);
				sessionData.set("token", json.token);
				vm.$router.push({name: 'paymentList'});
			}).catch(() => {
			});
		}
	},
}