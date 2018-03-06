import React from 'react';
import './style.css';

const Article = ({article, time, number}) => {
  // article ? console.log('pubDate: ', article.pubDate) : '';
  return (
    <div id={`article-${number}`}>
      <a href={article.link} className='article-wrapper'>
        <figure style={{backgroundImage: `url(${article.thumbnail})`}} alt='article thumbnail'>{time}</figure>
        <footer>
          <figcaption>
            <h2>{article.title}</h2>
            <p>description</p>
          </figcaption>
        </footer>
      </a>
    </div>
  );
};

export default Article;

// <a href={article.link} target='_#' className='article-wrapper'>
//   <div className='article-image'>
//     {time}
//     <img src={article.thumbnail} alt='article thumbnail' />
//   </div>
//   <div className='article-title'>{article.title}</div>
// </a>
//
// <div id='hero #'>
//   <a>
//     <figure>background img</figure>
//     <footer>
//       <figurecaption>
//         <h2>title</h2>
//         <p>description</p>
//       </figurecaption>
//     </footer>
//   </a>
// </div>
