"use strict";
/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要用于api接口公共输出
 */
const models = require('./db');
const express = require('express');
const router = express.Router();


/**
 * login 页面API
 */
const login = require('./api/login');
login(router, models);

/**
 * other api
 */


module.exports = router;