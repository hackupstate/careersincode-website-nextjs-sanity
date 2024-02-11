import React, { useState, useEffect } from 'react'
import { useInView } from 'react-cool-inview'
import cx from 'classnames'

import { buildSrcSet, buildSrc } from '@lib/helpers'

const Photo = ({
  photo,
  width,
  height,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = '(min-width: 940px) 50vw, 100vw',
  layout = 'intrinsic',
  quality = 80,
  hasPlaceholder = true,
  forceLoad,
  onLoad,
  className,
}) => {
  if (!photo?.asset) return null

  const [isLoaded, setIsLoaded] = useState(false)
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  })

  // define our aspect ratio if not a background fill
  const aspect =
    typeof width === 'number' && typeof height === 'number'
      ? (height / width) * 100
      : 100 / (photo.customRatio || photo.aspectRatio)

  const aspectCustom =
    layout === 'intrinsic' ? { paddingTop: `${aspect}%` } : null

  // define our src and srcset
  const src = buildSrc(photo, {
    ...{ width },
    ...{ height },
    ...{ quality },
  })

  const srcset = buildSrcSet(photo, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ quality },
  })

  // handle our image onLoad
  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true)
    })
  }

  // trigger any onLoad callbacks
  useEffect(() => {
    if (isLoaded) onLoad?.()
  }, [isLoaded])

  const [screenSize, setScreenSize] = useState(
    typeof window !== 'undefined' && window.innerWidth
  )

  // update screenSize when window size changes
  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <figure className={className ? className : null} style={
      (photo.alt == "Instructor/Student" && (screenSize <= 700)) ? 
      {
        width: '100%',
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: '0',
        margin: '0'
      }
      :
      (photo.alt == "Instructor/Student" && (1100 >= screenSize > 700)) ? 
      {
        width: '30vw',
        alignSelf: 'center',
      }
      :
      (photo.alt == "Instructor/Student" && (screenSize > 1100)) ? 
      {
        alignSelf: 'center',
        width: '20vw',
        maxWidth: 350,
        maxHeight: 350,
        margin: 0,
        padding: 0,
      }
      :
      (photo.alt == "Medium Post") ? 
      {
        width: '20vw',
        maxWidth: 375
      }
      :
      (photo.alt == "Company") ? 
      {
        width: '20vw',
        maxWidth: 350
      }
      :
      {}
    }>
      <div
        className={cx('ar', {
          'has-fill': layout === 'fill' || layout === 'contain',
        })}
        style={{
          ...aspectCustom,
          ...(photo.alt == "Instructor/Student" && (screenSize <= 700)) ? 
          {
            width: '30vw',
            height: '30vh',
            
          }
          :
      (photo.alt == "Medium Post") ? 
      {
        width: '20vw',
        maxWidth: 350
      }
          :
          {}
        }}
      >
          <img
            ref={observe}
            width={width}
            height={height}
            style={
              (photo.alt == "Instructor/Student" && (screenSize <= 700)) ? 
              {
                width: '30vw',
                height: '30vh',
                minWidth: '30vw',
                minHeight: '30vh',
                maxWidth: '30vw',
                maxHeight: '30vh',
                objectFit: 'contain',
                
              }
              :
              (photo.alt == "Instructor/Student" && (1100 >= screenSize > 700)) ? 
              {
                minWidth: '30vw',
                minHeight: '30vh',
                objectFit: 'contain'
              }
              :
              (photo.alt == "Instructor/Student" && (screenSize > 1100)) ? 
              {
                width: '20vw',
                maxWidth: 350,
                maxHeight: 350,
                margin: 0,
                padding: 0,
              }
              :
              (photo.alt == "Medium Post") ? 
              {
                maxWidth: 350
              }
              :
              (photo.alt == "Company") ? 
              {
                minWidth: '20vw',
                objectFit: 'contain'
              }
              :
              {}
            }
            src={forceLoad || inView ? src : null}
            srcSet={forceLoad || inView ? srcset : null}
            sizes={sizes}
            decoding="async"
            onLoad={handleLoad}
            alt={photo.alt || photo.asset?.altText}
            className={cx(getSize(layout), { 'is-loaded': isLoaded })}
          />

        {hasPlaceholder && (
          <div className={cx('ar--placeholder', { 'is-loaded': isLoaded })}>
            <img src={photo.lqip} alt="" role="presentation" />
          </div>
        )}
      </div>
    </figure>
  )
}

const getSize = (layout) => {
  switch (layout) {
    case 'intrinsic':
      return 'object-cover'
    case 'fill':
      return 'object-cover'
    case 'contain':
      return 'object-contain'
  }
}

export default Photo