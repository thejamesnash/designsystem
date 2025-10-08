import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const IMAGE_DIMENSIONS = {
  titleTreatment: { width: 678, height: 330 },
  bg: { width: 1920, height: 1080 },
  rail: {
    169: { width: 592, height: 332 },
    34: { width: 353, height: 470 },
  },
};

const getImageUrl = (src, type) => {
  if (typeof src === 'string') {
    return src;
  }

  // Map component types to imageType values in the array
  const typeMapping = {
    titleTreatment: 'TITLE_TREATMENT',
    bg: 'PRIMARY_HERO',
  };

  const targetType = typeMapping[type];
  const match = src.find((img) => img.imageType === targetType);

  return match?.href || src[0]?.href || '';
};

const modifyUrlQuality = (url, quality) => {
  // Handle templated URLs with {&resize} placeholder
  const cleanUrl = url.replace('{&resize}', '');
  
  if (cleanUrl.includes('output-quality=')) {
    return cleanUrl.replace(/output-quality=\d+/, `output-quality=${quality}`);
  }
  
  // If no quality param exists, add it
  const separator = cleanUrl.includes('?') ? '&' : '?';
  return `${cleanUrl}${separator}output-quality=${quality}`;
};

const getDimensions = (type, aspect) => {
  if (type === 'rail' && aspect) {
    return IMAGE_DIMENSIONS.rail[aspect];
  }
  return IMAGE_DIMENSIONS[type];
};

export const PerformantImage = ({
  src,
  type,
  aspect = 169,
  alt = '',
  priority = false,
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
  const dimensions = getDimensions(type, aspect);
  const lowQualityUrl = modifyUrlQuality(imageUrl, 10);
  const highQualityUrl = modifyUrlQuality(imageUrl, 90);

  return (
    <div
      ref={imgRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: 'relative',
        backgroundColor: '#1a1a1a',
      }}
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
          />
        </>
      )}
    </div>
  );
};

export default PerformantImage;