import React, { useEffect } from 'react'
import './Modal.css'
import { useTranslations } from '../../../../hooks/useTranslations'

const Modal = ({ isOpen, onClose, title, url, type, codeDescription }) => {
  const { t, language } = useTranslations()

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const isGitHub = url.includes('github.com')
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')
  const cannotEmbed = isGitHub || isYouTube

  const getEmbedUrl = () => {
    if (isYouTube) {
      // Convertir URL de YouTube a formato embed
      const videoId = url.includes('youtu.be')
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }
    return url
  }

  const getIcon = () => {
    if (isGitHub) {
      return <i className="fab fa-github modal-icon"></i>
    }
    if (isYouTube) {
      return <i className="fab fa-youtube modal-icon"></i>
    }
    return null
  }

  // Parse simple markdown formatting (bold and line breaks)
  const formatDescription = (text) => {
    if (!text) return null

    return text.split('\n').map((line, index) => {
      // Parse **bold** text
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      const formattedLine = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>
        }
        return part
      })

      return (
        <span key={index}>
          {formattedLine}
          {index < text.split('\n').length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-content">
          {cannotEmbed && !isYouTube ? (
            <div className="modal-info">
              {getIcon()}
              <h3 className="modal-info-title">
                {isGitHub
                  ? t('githubRepository')
                  : t('externalContent')
                }
              </h3>
              {codeDescription && (
                <div className="modal-project-description">
                  {formatDescription(codeDescription)}
                </div>
              )}
              <p className="modal-info-description">
                {isGitHub
                  ? t('githubDescription')
                  : t('externalContentDescription')
                }
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                {isGitHub
                  ? t('viewOnGithub')
                  : t('openNewTab')
                }
              </a>
            </div>
          ) : (
            <iframe
              src={getEmbedUrl()}
              title={title}
              className="modal-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="modal-footer">
          {!isGitHub && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('openNewTab')}
            </a>
          )}
          <button className="btn btn-outline" onClick={onClose}>
            {t('closeModal')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
