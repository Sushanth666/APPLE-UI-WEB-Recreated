import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video player">
          <X size={20} />
        </button>
        <div className="video-player-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FT3ODSg1GFE?autoplay=1&mute=0"
            title="A Guided Tour of iPhone 14 and iPhone 14 Pro | Apple"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
