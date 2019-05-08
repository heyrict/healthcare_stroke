import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const contents = `
# 高血糖性亚健康
### —— 高血糖引起的亚健康状态

表现: 口渴、头晕、乏力、昏昏欲睡等症状。

随着我国经济的高速增长，富裕的生活催生人们血糖的普遍偏高。血糖偏高者往往处在工作节奏快、压力大的环境中，久而久之，容易让人进人消极的亚健康状态，染上吸烟、酗酒、暴饮暴食、长期生活无规律等生活习惯，这些不良的习惯会进一步使人体血糖异常，形成恶性循环，最终导致**糖尿病的亚健康状态**。

有调查表明：世界上每3个高血糖患者就有1个是中国人，中国已经跃居成为世界上高血糖患者人数最多的国家，患病总数接近1亿，患病率高达9.7％，人数还在逐年增加。

`;

const AGL2Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default AGL2Frame;
