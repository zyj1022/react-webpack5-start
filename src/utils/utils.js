function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

// 判断是否全部为空格
function isAllSpace(str) {
  if (str == '') return true;
  let reg = '^[ ]+$';
  return new RegExp(reg).test(str);
}

// 去除字符串中首尾的空格
function trimStrSpace(str) {
  if (str) {
    str = str.replace(/^\s+/, '');
    for (let i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
  }
  return str;
}

/**
@ function:检测特殊字符
@ param
@ str:待检测字符串
*/
function isHasSpecialStr(str) {
  // eslint-disable-next-line no-useless-escape
  var myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
  if (myReg.test(str)) {
    return true;
  }
  return false;
}

/**
 *
 * @param {string} name
 */
function getUrlQuery(name, search) {
  let result = null;
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let regResult = search.substr(1).match(reg);
  if (regResult !== null) {
    result = regResult[2];
  }
  return result;
}

/**
 *
 * @param {string} str
 */
function UrlSearch(str) {
  var name, value;
  // eslint-disable-next-line no-redeclare
  var str = location.href; //取得整个地址栏
  var num = str.indexOf('?');
  str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
  var arr = str.split('&'); //各个参数放到数组里
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=');
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      this[name] = value;
    }
  }
}

function hashParams(str) {
  var name, value;
  // eslint-disable-next-line no-redeclare
  var str = window.location.hash; // 取得hash
  var num = str.indexOf('?');
  str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
  var arr = str.split('&'); //各个参数放到数组里
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=');
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      this[name] = value;
    }
  }
}

/**
 * @param {Array} _arr
 * @param {string} _obj
 *  */
function removeArray(_arr, _obj) {
  var length = _arr.length;
  for (var i = 0; i < length; i++) {
    if (_arr[i].value == _obj) {
      _arr.splice(i, 1);
      return _arr;
    }
  }
}

/**
 *
 * @param {Array} num
 * 价格取整
 */
function getFloatStr(num) {
  num += '';
  // eslint-disable-next-line no-useless-escape
  num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
  // eslint-disable-next-line no-constant-condition
  if (/^0+/)
    //清除字符串开头的0
    num = num.replace(/^0+/, '');
  if (!/\./.test(num))
    //为整数字符串在末尾添加.00
    num += '.00';
  if (/^\./.test(num))
    //字符以.开头时,在开头添加0
    num = '0' + num;
  num += '00'; //在字符串末尾补零
  num = num.match(/\d+\.\d{2}/)[0];
  return num;
}

/**
 *
 * @param {string} num
 * 数字千分位处理
 */
function thousandNum(num) {
  // eslint-disable-next-line no-redeclare
  var num = (num || 0).toString(),
    result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result;
}

/**
 * @param {Array} array1
 * @param {Array} array2
 * array2>array1
 *  */
function compareArray(array1, array2) {
  var result = [];
  for (var i = 0; i < array2.length; i++) {
    var obj = array2[i];
    var num = obj.value;
    var isExist = false;
    for (var j = 0; j < array1.length; j++) {
      var aj = array1[j];
      var n = aj;
      if (n == num) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      result.push(obj);
    }
  }
  return result;
}

// // console.log(compareArray([ 'A','C'],[ {'value': 'A','Name': 't1 ' }, {'value': 'B','Name': 't2'}, {'value': 'C' ,'Name': 't3 '}]));

// 计算中英文混合输入字符的长度
function calculateNum(str) {
  let sum = 0;
  if (str) {
    let len = str.length;
    for (let i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 255) {
        // sum = sum + 2; // 如果是汉字就算2个字符
        sum = sum + 1; // 汉字也算1个字符
      } else {
        sum++;
      }
    }
    return sum;
  } else {
    return 0;
  }
}

// 截取中英文混合字符串固定长度
function cutString(str, n) {
  var r = /[^\x00-\xff]/g;
  if (str.replace(r, '**').length <= n) {
    return str;
  }
  var m = Math.floor(n / 2);
  for (var i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, '**').length >= n) {
      return str.substr(0, i);
    }
  }
  return str;
}

// object 排序
function objCompare(key) {
  return (obj1, obj2) => {
    let value1 = parseFloat(obj1[key]);
    let value2 = parseFloat(obj2[key]);
    if (value2 > value1) {
      return 1;
    } else if (value2 < value1) {
      return -1;
    } else {
      return 0;
    }
  };
}

function getBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
  var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器
  var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 'IE7';
    } else if (fIEVersion == 8) {
      return 'IE8';
    } else if (fIEVersion == 9) {
      return 'IE9';
    } else if (fIEVersion == 10) {
      return 'IE10';
    } else if (fIEVersion == 11) {
      return 'IE11';
    } else {
      return '0';
    } //IE版本过低
    // eslint-disable-next-line no-unreachable
    return 'IE';
  }
  if (isOpera) {
    return 'Opera';
  }
  if (isEdge) {
    return 'Edge';
  }
  if (isFF) {
    return 'FF';
  }
  if (isSafari) {
    return 'Safari';
  }
  if (isChrome) {
    return 'Chrome';
  }
}

/**
 * 数组对象去重
 * @arr 数组
 * @key 去重关键字，默认为key
 * arrObjectReduce(arr, 'id')
 */
function arrObjectReduce(arr, key = 'key') {
  let obj = {};
  return arr.reduce((cur, next) => {
    obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next));
    return cur;
  }, []);
}

// 判断权限码是否存在
function isAuthCode(arr, str) {
  if (str) {
    return arr.indexOf(`SIM.${str}`) > -1;
  } else {
    return true;
  }
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

/**
 * @desc 函数防抖 非立即执行
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
export function debounce(func, wait) {
  let timeout;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    const _args = arguments;
    // console.log('debounce', _this, _args);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(_this, _args);
    }, wait);
  };
}

export function throttle(func, wait) {
  let timeout;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let _this = this;
    let _args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(_this, _args);
      }, wait);
    }
  };
}

export const storage = {
  //存储,可设置过期时间
  // @storage.set('access_token', '123456', 5000);
  // 60 * 60 * 24 * 1 * 1000 = 1天
  set(key, value, expires) {
    let params = { key, value, expires };
    if (expires) {
      // 记录何时将值存入缓存，毫秒级
      var data = Object.assign(params, { startTime: new Date().getTime() });
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      if (Object.prototype.toString.call(value) == '[object Object]') {
        value = JSON.stringify(value);
      }
      if (Object.prototype.toString.call(value) == '[object Array]') {
        value = JSON.stringify(value);
      }
      localStorage.setItem(key, value);
    }
  },
  //取出
  get(key) {
    let item = localStorage.getItem(key);
    // 先将拿到的试着进行json转为对象的形式
    try {
      item = JSON.parse(item);
    } catch (error) {
      // eslint-disable-next-line no-self-assign
      item = item;
    }
    // 如果有startTime的值，说明设置了失效时间
    if (item && item.startTime) {
      let date = new Date().getTime();
      // 如果大于就是过期了，如果小于或等于就还没过期
      if (date - item.startTime > item.expires) {
        localStorage.removeItem(name);
        return false;
      } else {
        return item.value;
      }
    } else {
      return item;
    }
  },
  // 删除
  remove(key) {
    localStorage.removeItem(key);
  },
  // 清除全部
  clear() {
    localStorage.clear();
  },
};

export {
  capitalize,
  getUrlQuery,
  UrlSearch,
  removeArray,
  compareArray,
  getFloatStr,
  thousandNum,
  calculateNum,
  cutString,
  objCompare,
  getBrowser,
  isAllSpace,
  trimStrSpace,
  hashParams,
  isHasSpecialStr,
  arrObjectReduce,
  isAuthCode,
};
