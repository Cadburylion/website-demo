import React from 'react';
import Article from './article.js';
import {Link} from 'react-router-dom';
import TimeFormat from './time-format.js';
import './style.css';

const BlogField = ({title, articles}) => {

  let number = 0;
  const generateColumn = (start, end) => {
    let selection = articles.slice(start, end);
    return selection.map((article, index) => {
      number += 1;
      return <Article
        key={article.pubDate + '-' + index}
        article={article}
        number={number}
        time={<TimeFormat time={article.pubDate}/>}
      />;
    });
  };

  return (
    <div className='blog-field'>
      <div className='blog-header'>
        <div className='inline-field'>
          <img src={require('../../static/images/Lenalysis_Logo.png')} />
          <h1>Blog</h1>
        </div>
        <Link to='/'>Home</Link>
      </div>
      <div className='blog-content'>
        <div className='col one'>
          {generateColumn(0, 2)}
        </div>
        <div className='col two'>
          {generateColumn(2, 4)}
        </div>
        <div className='col three'>
          {generateColumn(4, 6)}
        </div>
        <div className='col four'>
          {generateColumn(6, 8)}
        </div>
      </div>
    </div>
  );
};

export default BlogField;
