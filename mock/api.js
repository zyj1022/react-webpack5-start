'use strict';

const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { common } = require('./common');

router.post('/saveRolePermission', function(req, res) {
	res.type('json');
	let params = req.body,
		ret = {};

	console.log('roldId', params.roldId);
	console.log('menuIds', params.menuIds);

	Object.assign(ret, common);

	res.send(ret);
});

router.get('/getSurveyQuestion', function(req, res) {
	res.type('json');
	let params = req.query,
		ret = {};
	Object.assign(ret, common, {
		data: [
			{
				key: 1,
				userId: 12,
				name: '管理员000',
				describe: '我是描述',
				cTime: '2017-6-15',
				mTime: '2017-8-15'
			}
		]
	});
	res.send(ret);
});

router.get('/checkProjectVersion', function(req, res) {
	res.type('json');
	let params = req.query,
		ret = {};
	Object.assign(ret, common, {
		data: 'V3'
	});
	res.send(ret);
});

module.exports = router;
