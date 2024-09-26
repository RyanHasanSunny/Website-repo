import React, { useState, useEffect } from 'react';
import ArticleItem from '../components/ArticleItem';
import { db } from './config/firebase';  // Adjust the import path
import { collection, getDocs } from 'firebase/firestore';
import '../Styles/Articles.css';
import myimage from '../assets/Ryan.png';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const articlesArray = querySnapshot.docs.map(doc => doc.data());
      setArticles(articlesArray);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};



export default Articles;
