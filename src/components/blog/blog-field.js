import React from 'react';
import Article from './article.js';
import {Link} from 'react-router-dom';
import TimeFormat from './time-format.js';
import './style.css';

const BlogField = ({title, articles}) => {

  const generateArticles = () => {
    return articles.map((article, index) =>
      <Article
        key={article.pubDate + '-' + index}
        article={article}
        time={<TimeFormat time={article.pubDate}/>}
      />
    );
  };

  return (
    <div className='blog-field'>
      <div className='blog-header'>
        <h1>Lenalysis Consulting Services - Blog</h1>
        <Link to='/'>Home</Link>
      </div>
      <div className='blog-content'>
        {generateArticles()}
      </div>
    </div>
  );
};

export default BlogField;
