/* global hexo */

'use strict';

const moment = require('moment');
const { isMoment } = moment;

var posts = document.getElementsByClassName('post-content');
if (posts.length === 0) { return; }

hexo.extend.helper.register('compare_date', function(date1, date2) {
  if (!date1) {
    return -1;
  }
  if (!date2) {
    return 1;
  }
  const m1 = isMoment(date1) ? date1 : moment(date1);
  const m2 = isMoment(date2) ? date2 : moment(date2);
  const diff = m1.diff(m2);
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return 0;
  }
});
<div class="note note-warning" style="font-size:0.9rem"><p><div class="h6">文章已被更改</div><p>時間： diff ，信息已發生改變，請注意。</p></p></div>