import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 如何预防高血压带来的危害

1. 治疗性生活方式干预：适用于所有高血压患者。
  - 减轻体重：将BMI尽可能控制在<24千克/立方米；体重降低对改善胰岛素抵抗、糖尿病、血脂异常和左心室肥厚均有益。
  - 减少钠盐摄入：膳食中约80%的钠盐来自烹饪用盐和各种腌制品！所以应减少烹调用盐，每人每日食盐量以不超过6g为宜。
  - 补充钾盐：每日吃新鲜蔬菜和水果。
  - 减少脂肪摄入：减少食用油摄入，少吃或不吃肥肉和动物内脏。
  - 戒烟戒酒。
  - 增加运动：运动有利于减轻体重和改善胰岛素抵抗，提高心血管调节适应能力，稳定血压水平。
  - 必要时补充叶酸制剂。
2. 降压药物治疗
  - 高血压2级或以上患者
  - 高血压合并糖尿病，或已有心、脑、肾靶器官损害或并发症患者
  - 凡血压持续升高，改善生活方式后血压仍未获得有效控制者
3. 多重心血管危险因素协同控制: 降压治疗，除了必须有效控制血压，还应兼顾对糖代谢、脂代谢、尿酸代谢等多重危险因素的控制。
`;

const HT1Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default HT1Frame;
