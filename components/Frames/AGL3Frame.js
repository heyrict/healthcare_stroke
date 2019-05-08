import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 如何控制血糖
- **饮食均衡**
  - 不偏食，主食不吃太饱，水果不吃多，甜品禁忌，少喝酒。
  - 少食高胆固醇的食物（动物的内脏、蛋黄、肥肉、黄油、猪牛羊油等易使血脂升高，易发生动脉粥样硬化）
  - 控制饭量，六七分饱。

- **适度运动**

  运动能激发人体胰岛细胞的活力。
  每周运动<span class="green">6—10</span>小时/每天运动<span class="green">30—50</span>分钟，
  血糖波动范围比常人下降<span class="green">80%</span>。

  运动改变人体安静状态下的生理、心理活动方式<br />
  → 促使身体各机能系统进人积极活动状态<br />
  → 全身循环加快，各器官处于活跃状态<br />
  → 稳定血糖水平，对抗焦虑和抑郁的不良心理。

- **充足睡眠**

  睡眠是人体获得免疫力的最佳途径，其占人类生存时间的三分之一，失眠会使人体免疫力降低，容易感染疾病，加重亚健康状态。

  按时作息，睡眠要追求质量而非数量。睡得好不好不与睡眠时间成正比，而与睡眠深浅成正比。

- **体检**

  每年一次的定期体检必不可少。定期体检是健康投资里最关键的一部分。定期体检可以了解身体的健康状态，查出疾病隐患，制定健康管理方案。
`;

const AGL3Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default AGL3Frame;
