import React from 'react'
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from 'react-yandex-maps';
import FindBanner from '../FindBanner/FindBanner';
import tooth from './img/tooth.gif'
import styles from './YandexMap.module.css'

function YandexMap() {

  return (
    <div className={styles['map-content']}>
      <YMaps>
        <Map style={{'width': '100%', 'height': '600px'}} defaultState={{ center: [59.957503, 30.480785], zoom: 14 }}>
          <Placemark geometry={[59.957503, 30.480785]}
          properties=
            {{hintContent: 'ТОМСОН', balloonContent: 'Санкт-Петербург, пр. Наставников, д. 47 к.1'}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: tooth,
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -4]
        }} 
        modules= {['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />
          <FullscreenControl options={{float: 'left'}} />
          <ZoomControl options={{float: 'left'}} />
        </Map>
      </YMaps>
      <FindBanner />
    </div>
  )
}

export default YandexMap
