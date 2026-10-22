import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ModalContent } from '../types';

interface ModalProps {
  modal: ModalContent;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ modal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal.isOpen) {
        onClose();
      }
    };

    if (modal.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal.isOpen, onClose]);

  if (!modal.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-xl p-6 sm:p-8 shadow-2xl text-left border border-neutral-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Lukk modal"
        >
          <X className="w-5 h-5" />
        </button>

        {modal.tag && (
          <span className="block text-[11px] font-semibold tracking-wider text-[#ee5a7a] uppercase mb-2">
            {modal.tag}
          </span>
        )}

        <h3 id="modal-title" className="text-2xl font-light text-neutral-900 mb-4 pr-8">
          {modal.title}
        </h3>

        <div className="text-[14.5px] text-neutral-600 leading-relaxed space-y-4">
          {typeof modal.body === 'string' ? (
            <div className="whitespace-pre-line">{modal.body}</div>
          ) : (
            modal.body
          )}
        </div>

        <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-normal border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors text-neutral-700"
          >
            Lukk
          </button>

          {modal.actionButtonText && modal.onAction && (
            <button
              type="button"
              onClick={() => {
                modal.onAction?.();
                onClose();
              }}
              className="btn-primary-solid text-xs py-2 px-6"
            >
              {modal.actionButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
