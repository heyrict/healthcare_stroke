import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 如何预防吸烟带来的危害：

1. 戒烟
2. 减少吸入二手烟以及三手烟
3. 合理调节饮食
  - 少食一些含高脂肪的食物，如肥肉类食物；
  - 多喝茶，多吃新鲜蔬菜和水果。这样可以补充由于吸烟引起的维生素C和抗氧化剂的损失和减少（吸烟者的维生素C消耗量比常人高出30%），清除体内多余的氧自由基，帮助协调体内自由基的产生和清除、氧化和还原的平衡，保持身体健康。
  - 另外，烟气中的一氧化碳会与氧争夺与血红蛋白结合，使氧的运输变得困难。多食含铁丰富的黄豆、蛋黄、含维生素B12丰富的牛奶和含维生素C丰富的苹果等，会有效地降低一氧化碳的毒性，因为维生素C有助于人体对铁的吸收，而铁剂和维生素B12能阻止一氧化碳与氧争夺血红蛋白。
  - 此外，尼古丁随烟气进入人体中，会使胆固醇附于血管壁上，导致血管硬化；而牡蛎中的大量牛磺可以将胆固醇分解掉，因此多食牡蛎可解尼古丁中毒；
  - 还有人在牛奶、蚕豆、水果中发现了尼古丁的克星，这些食物中含有维生素B2可分解焦油中的3,4-苯并[a]芘化合物，分解后的化合物又会随纤维素排出体外，故还应多食青菜。
`;

const Smoke1Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default Smoke1Frame;
