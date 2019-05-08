import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 如何预防肥胖带来的危害

1. **控制饮食**: 主要从摄入量和成分两方面进行。摄入量要少，控制糖和脂肪的摄取，同时要注意各营养素的搭配(否则易出现副作用)。
2. **运动减肥**: 运动增加热量消耗；运动使身体成分中瘦体重增加，使身体结实、健美，并对心血管机能有良好的改善作用、如走路、跑步、游泳、白行车、健美操等等。
3. **药物治疗**: 治疗肥胖的药物通过抑制能量的摄取或促进能量的消耗来调节体重。市场上减肥的药物种类多。无论哪一类减肥药物，都必须符合国际减肥的三项原则：不厌食、不腹泻、降低体重而不降低体力。
4. **胃肠外科手术治疗**: 20世纪50年代开始，胃肠外科医生通过手术使胃、小肠对食物的摄取和营养物质的吸收比正常情况下少，从而达到减肥的目的。这些方法都有不同程度的副作用和并发症。
`;

const BMI1Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default BMI1Frame;
