import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 血糖升高是中风的高危因素

**糖尿病** → 损伤全身的血管，包括心血管和脑血管。糖尿病病人的脑血管病变是非糖尿病病人的<span class="red">3</span>倍。

**糖尿病** → 容易发生心脏病、脑血管和下肢缺血坏疽等问题。
糖尿病性脑卒中的病人<span class="red">88%</span>为脑血栓形成或是腔隙性脑梗塞阻塞性脑血管病变。

**临床表现**：头痛，头晕，肢体麻木，严重时候可有偏瘫，残疾甚至危及生命。

若**糖尿病**人本身**血压高**
→ 增加脑血管硬化、血管内壁损伤、红细胞变形能力下降，血液黏稠度增加，血管阻塞性的脑血管疾病的发生率也会明显增加。
→ 糖尿病人需做好健康管理，控制好血压
`;

const AGL1Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default AGL1Frame;
