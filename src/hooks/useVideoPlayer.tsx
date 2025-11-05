'use client';

import { useState, useRef, useEffect } from 'react';
import { logger } from '@/lib/logger';
import { VIDEO } from '@/lib/constants';

interface UseVideoPlayerReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  videoLoaded: boolean;
  videoError: boolean;
  retryCount: number;
  handleVideoClick: () => void;
  retryVideoLoad: () => void;
}

export const useVideoPlayer = (): UseVideoPlayerReturn => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Force le démarrage de la vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Tentative de lecture automatique
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            logger.log('✅ Vidéo démarrée automatiquement');
            setVideoLoaded(true);
          })
          .catch((error) => {
            logger.warn('⚠️ Lecture automatique bloquée:', error);
            // La vidéo sera démarrée au premier clic utilisateur
          });
      }
    }
  }, [retryCount]);

  // Fonction pour retry le chargement de la vidéo
  const retryVideoLoad = () => {
    if (retryCount < VIDEO.MAX_RETRY_COUNT) {
      setVideoError(false);
      setVideoLoaded(false);
      setRetryCount(prev => prev + 1);
      logger.log(`🔄 Tentative ${retryCount + 1} de rechargement vidéo`);
    }
  };

  // Fonction pour démarrer la vidéo au clic
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        logger.log('✅ Vidéo démarrée manuellement');
        setVideoLoaded(true);
      }).catch((error) => {
        logger.error('❌ Erreur de lecture:', error);
      });
    }
  };

  // Video event handlers
  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoError(true);
    logger.error('❌ Erreur de chargement vidéo:', e);
    logger.log(`📁 Chemin recherché: ${VIDEO.VIDEO_PATH}`);
  };

  const handleLoadStart = () => {
    logger.log(`🎬 Chargement de la vidéo (${VIDEO.VIDEO_SIZE_MB}MB)...`);
    logger.log(`📁 Depuis: ${VIDEO.VIDEO_PATH}`);
  };

  const handleCanPlay = () => {
    logger.log('✅ Vidéo prête à être lue');
    // Essayer de démarrer la vidéo dès qu'elle est prête
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {
        logger.warn('⚠️ Lecture automatique bloquée - clic requis');
      });
    }
  };

  const handleLoadedData = () => {
    logger.log('📊 Données vidéo chargées');
  };

  const handlePlay = () => {
    setVideoLoaded(true);
    logger.log('▶️ Vidéo en cours de lecture');
  };

  const handlePause = () => {
    logger.log('⏸️ Vidéo en pause');
  };

  return {
    videoRef,
    videoLoaded,
    videoError,
    retryCount,
    handleVideoClick,
    retryVideoLoad,
  };
};

// Export event handlers as a separate object for cleaner usage
export const createVideoEventHandlers = (
  setVideoError: (value: boolean) => void
) => ({
  onError: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoError(true);
    logger.error('❌ Erreur de chargement vidéo:', e);
    logger.log(`📁 Chemin recherché: ${VIDEO.VIDEO_PATH}`);
  },
  onLoadStart: () => {
    logger.log(`🎬 Chargement de la vidéo (${VIDEO.VIDEO_SIZE_MB}MB)...`);
    logger.log(`📁 Depuis: ${VIDEO.VIDEO_PATH}`);
  },
  onCanPlay: (videoRef: React.RefObject<HTMLVideoElement>) => {
    logger.log('✅ Vidéo prête à être lue');
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {
        logger.warn('⚠️ Lecture automatique bloquée - clic requis');
      });
    }
  },
  onLoadedData: () => {
    logger.log('📊 Données vidéo chargées');
  },
  onPlay: (setVideoLoaded: (value: boolean) => void) => {
    setVideoLoaded(true);
    logger.log('▶️ Vidéo en cours de lecture');
  },
  onPause: () => {
    logger.log('⏸️ Vidéo en pause');
  },
});
