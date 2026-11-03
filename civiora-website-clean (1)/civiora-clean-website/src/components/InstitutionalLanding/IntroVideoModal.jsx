import { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, CheckCircle2 } from 'lucide-react';
import logoWhite from '../../assets/civiora-logo-white-lockup.png';

const SCENES = [
  {
    start: 0,
    end: 5,
    tag: 'Civiora Introduction',
    title: 'Every student has aspirations.',
    subtitle: 'Every institution can help shape their next step.',
    bullets: [
      'Empowering students across India',
      'Structured student development & career pathways',
    ],
  },
  {
    start: 5,
    end: 11,
    tag: 'For Schools',
    title: 'Schools: Skills for Life',
    subtitle: 'Civiora connects schools with specialist partners for communication, reasoning, leadership and practical learning.',
    bullets: [
      'Confidence & reasoning alongside academics',
      'Age-appropriate partner-led workshops',
      'Curiosity, communication & practical skill building',
    ],
  },
  {
    start: 11,
    end: 18,
    tag: 'For Colleges & Universities',
    title: 'Colleges & Universities: Career Direction',
    subtitle: 'We support Government Career Cells, awareness sessions, counselling and relevant preparation pathways.',
    bullets: [
      'UPSC, State PSC, SSC, Banking & Defence pathways',
      'Aspiration mapping & 1-on-1 career counselling',
      'Complements existing campus placement & career cells',
    ],
  },
  {
    start: 18,
    end: 25,
    tag: 'How We Work',
    title: 'Understand · Guide · Connect · Coordinate',
    subtitle: 'We understand needs, guide interested students, connect suitable service providers and coordinate agreed follow-up.',
    bullets: [
      'Civiora consults & coordinates at every step',
      'Specialist service providers deliver agreed programmes',
      'Structured calendar reviews & sustained engagement',
    ],
  },
  {
    start: 25,
    end: 30,
    tag: 'Begin the Discussion',
    title: 'Connecting Institutions. Building Future-Ready Ecosystems.',
    subtitle: 'Let’s discuss your institution’s priorities with our leadership team.',
    bullets: [
      'Clear institutional consultation',
      'Tailored implementation roadmap',
    ],
  },
];

export default function IntroVideoModal({ isOpen, onClose, onScrollToForm }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showCaptions, setShowCaptions] = useState(true);
  const timerRef = useRef(null);

  const duration = 30;

  useEffect(() => {
    if (!isOpen) {
      setCurrentTime(0);
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setIsPlaying(true);
    setCurrentTime(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          setIsPlaying(false);
          return duration;
        }
        return Math.min(prev + 0.25, duration);
      });
    }, 250);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentScene = SCENES.find((s) => currentTime >= s.start && currentTime < s.end) || SCENES[SCENES.length - 1];
  const progressPercent = Math.min((currentTime / duration) * 100, 100);

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setCurrentTime(Math.min(Math.max(pos * duration, 0), duration));
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fadeUp"
      role="dialog"
      aria-modal="true"
      aria-label="Civiora 30-Second Introduction"
    >
      <div className="relative w-full max-w-3xl bg-navy-900 rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl flex flex-col text-white font-body">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-navy-950 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-300 uppercase">
              Civiora Introduction (30s)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Canvas Presentation */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9962A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Brand Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30">
              {currentScene.tag}
            </span>
            <span className="text-xs text-navy-300 font-mono">
              00:{Math.floor(currentTime).toString().padStart(2, '0')} / 00:30
            </span>
          </div>

          {/* Main Animated Presentation Content */}
          <div className="relative z-10 my-auto py-4 text-center max-w-xl mx-auto space-y-4">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white font-bold leading-snug tracking-tight">
              {currentScene.title}
            </h3>
            <p className="text-sm sm:text-base text-navy-200 leading-relaxed max-w-lg mx-auto">
              {currentScene.subtitle}
            </p>

            {/* Feature Bullets */}
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {currentScene.bullets.map((b, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/10 text-navy-100 border border-white/10"
                >
                  <CheckCircle2 size={13} className="text-gold-400 shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitles / Captions Banner */}
          {showCaptions && (
            <div className="relative z-10 mx-auto px-4 py-2 rounded-xl bg-navy-950/90 border border-white/10 text-xs sm:text-sm text-gold-200 text-center font-medium max-w-lg shadow-lg">
              &ldquo;{currentScene.subtitle}&rdquo;
            </div>
          )}

          {/* Overlay CTA when finished */}
          {currentTime >= 30 && (
            <div className="absolute inset-0 z-20 bg-navy-950/95 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <img src={logoWhite} alt="Civiora" className="h-10 w-auto opacity-95" />
              <h4 className="font-display text-xl sm:text-2xl text-white font-bold">
                Let’s Discuss Your Institution’s Priorities
              </h4>
              <p className="text-xs sm:text-sm text-navy-200 max-w-md">
                Civiora connects schools, colleges and universities with specialist partners for student development and government career pathways.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onScrollToForm();
                  }}
                  className="btn-primary"
                >
                  Request a Partnership Discussion
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="btn-ghost text-xs"
                >
                  <RotateCcw size={14} />
                  Replay Video
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Video Controls Bar */}
        <div className="bg-navy-950 px-5 py-3 border-t border-white/10 flex flex-col gap-2">
          
          {/* Progress Bar (Interactive seek) */}
          <div 
            onClick={handleSeek}
            className="w-full h-2 bg-navy-800 rounded-full overflow-hidden cursor-pointer relative group"
            role="progressbar"
            aria-valuenow={Math.round(progressPercent)}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Video timeline"
          >
            <div 
              className="h-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-150 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-xs text-navy-300 pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center transition-colors"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="hover:text-gold-300 transition-colors flex items-center gap-1"
                aria-label="Restart video"
              >
                <RotateCcw size={14} />
                <span>Replay</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowCaptions(!showCaptions)}
                className={`px-2 py-1 rounded text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                  showCaptions ? 'bg-gold-500 text-navy-950' : 'bg-white/10 text-navy-300 hover:text-white'
                }`}
                aria-label={showCaptions ? 'Hide captions' : 'Show captions'}
              >
                CC
              </button>
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                title={isMuted ? 'Sound off by default' : 'Sound on'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

