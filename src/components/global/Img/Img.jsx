import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Img.module.css';

const IMAGE_DIMENSIONS = {
  dotcom: {
    titleTreatment: { width: 678, height: 330 },
    bg: { width: 1920, height: 1080 },
    rail: {
      169: { width: 592, height: 332 },
      34: { width: 353, height: 470 },
    },
  },
  bsd: {
    titleTreatment: { width: 678, height: 330 },
    bg: { width: 1920, height: 1080 },
    rail: {
      169: {
        small: { width: 304, height: 171 },
        large: { width: 512, height: 288 },
      },
      34: {
        small: { width: 304, height: 414 },
        large: { width: 304, height: 414 },
      },
    },
  },
};

const getImageUrl = (src, type) => {
  if (typeof src === 'string') {
    return src;
  }

  const typeMapping = {
    titleTreatment: 'TITLE_TREATMENT',
    bg: 'PRIMARY_HERO',
  };

  const targetType = typeMapping[type];
  const match = src.find((img) => img.imageType === targetType);

  return match?.href || src[0]?.href || '';
};

const modifyUrlForDimensions = (url, width, height, quality) => {
  // Replace {&resize} with actual resize parameters
  let modifiedUrl = url.replace('{&resize}', `&resize=${width}:${height}`);
  
  // If {&resize} wasn't found, add resize parameter
  if (modifiedUrl === url && width && height) {
    const separator = modifiedUrl.includes('?') ? '&' : '?';
    modifiedUrl = `${modifiedUrl}${separator}resize=${width}:${height}`;
  }
  
  // Update or add output-quality
  if (modifiedUrl.includes('output-quality=')) {
    modifiedUrl = modifiedUrl.replace(/output-quality=\d+/, `output-quality=${quality}`);
  } else {
    const separator = modifiedUrl.includes('?') ? '&' : '?';
    modifiedUrl = `${modifiedUrl}${separator}output-quality=${quality}`;
  }
  
  return modifiedUrl;
};

const getDimensions = (type, aspect, platform = 'dotcom', size = 'large') => {
  const platformDimensions = IMAGE_DIMENSIONS[platform];
  
  if (type === 'rail' && aspect) {
    const railDimensions = platformDimensions.rail[aspect];
    
    if (platform === 'bsd' && railDimensions.small && railDimensions.large) {
      return railDimensions[size];
    }
    
    return railDimensions;
  }
  
  return platformDimensions[type];
};

export const PerformantImage = ({
  src,
  type,
  aspect = 169,
  alt = '',
  priority = false,
  platform = 'dotcom',
  size = 'large',
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const imageUrl = getImageUrl(src, type);
  const dimensions = getDimensions(type, aspect, platform, size);
  const lowQualityUrl = modifyUrlForDimensions(imageUrl, dimensions.width, dimensions.height, 10);
  const highQualityUrl = modifyUrlForDimensions(imageUrl, dimensions.width, dimensions.height, 90);

  return (
    <div
      ref={imgRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: 'relative',
        backgroundColor: 'rgba(17,17,17,0.1)'
      }} 
      data-name={'railimg'} 
      data-aspectratio={aspect}
      data-platform={platform}
      data-size={size}
      className={styles.img}
    >
      {!isInView ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#2a2a2a',
          }}
        />
      ) : (
        <>
          {!hasLoaded && (
            <Image
              src={lowQualityUrl}
              alt={alt}
              width={dimensions.width}
              height={dimensions.height}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                filter: 'blur(10px)',
                transform: 'scale(1.1)',
              }}
              priority={priority}
              unoptimized={true} // Disable Next.js image optimization
            />
          )}
          <Image
            src={highQualityUrl}
            alt={alt}
            width={dimensions.width}
            height={dimensions.height}
            onLoad={() => setHasLoaded(true)}
            style={{
              position: hasLoaded ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              opacity: hasLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            priority={priority}
            unoptimized={true} // Disable Next.js image optimization
          />
        </>
      )}
    </div>
  );
};

export default PerformantImage;