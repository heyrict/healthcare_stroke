import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

const contents = `
# 其他

1. 保持乐观的心态，避免长期的精神紧张状态 
2. 保持良好的作息和充足的睡眠，避免过度劳累
3. 保持良好的饮食习惯，避免长期高糖高脂饮食
4. 坚持锻炼，保持良好的身体机能
`;

const Others1Frame = () => {
  return <ReactMarkdown source={contents} escapeHtml={false} />;
};

export default Others1Frame;
