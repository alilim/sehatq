import React from 'react'

import ContentLoader from 'react-content-loader'

export const ContentLoaderCategory = props => {
  return <ContentLoader
            height={133}
            width='100%'
            speed={1}
            backgroundColor='rgb(0,0,0)'
            foregroundColor='rgb(0,0,0)'
            backgroundOpacity={0.06}
            foregroundOpacity={0.12}
          >
            <rect x='0' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='118' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='236' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='354' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='472' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='590' y='0' rx='6' ry='6' width='105' height='122' />
            <rect x='708' y='0' rx='6' ry='6' width='105' height='122' />

          </ContentLoader>
}

export const ContentLoaderItem = props => {
  return <ContentLoader
            height={1112}
            width='100%'
            speed={1}
            backgroundColor='rgb(0,0,0)'
            foregroundColor='rgb(0,0,0)'
            backgroundOpacity={0.06}
            foregroundOpacity={0.12}
          >
            <rect x='0' y='10' rx='6' ry='6' width='100%' height='253' />
            <rect x='0' y='283' rx='6' ry='6' width='100%' height='253' />
            <rect x='0' y='556' rx='6' ry='6' width='100%' height='253' />
            <rect x='0' y='829' rx='6' ry='6' width='100%' height='253' />

          </ContentLoader>
}
