import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ArcMap from '../components/ArcMap';


const Explore = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.arcgis.com/4.18/";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div className="App">

            <Helmet>
                <html lang="en" />
                <title>Explore</title>
                <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css"></link>
            </Helmet>

            <Suspense fallback={<div>preparing map...</div>}>
                <ArcMap />
            </Suspense>

            <p>Yeet</p>
        </div>
    );
}

export default Explore;