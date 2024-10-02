import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Slider from '../../components/slider/Slider';
import Spinner from '../../components/spinner/Spinner';
import NewsCard from '../../components/newscard/NewsCard';
import useNews from '../../hooks/useNews';

import ThemeOperations from '../../components/themeoperations/ThemeOperations';

const Home = () => {
   const {news,loading,theme}=useNews("",'us');
 
   const darkMode=theme.state.darkMode;
 
const sliderNews=news?.splice(0,3);
useEffect(()=>{

},[darkMode]);
  return (
    <div className={styles.container}
    
    style=
    {{backgroundColor:darkMode?
      'orange':'white'}}
    >
    
    <ThemeOperations/>
     <div className={styles.Slider}>
<Slider sliderNews={sliderNews}/>
     </div>
     <div className={styles.news}>
{loading && <Spinner/>}
{news?.map((item,index)=><NewsCard key={index} {...item}/>)}
     </div>
    </div>
  )
}

export default Home
