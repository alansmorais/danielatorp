import React, { useEffect, useState } from 'react';
import { Calendar, Loader2 } from 'lucide-react';
import { fetchLiveDates, LiveDateItem, DEFAULT_NO_DATES } from '../services/api';

interface DynamicDatesBannerProps {
  onSelectDate: (dateText: string) => void;
  variant?: 'banner' | 'box';
}

export const DynamicDatesBanner: React.FC<DynamicDatesBannerProps> = ({
  onSelectDate,
  variant = 'box',
}) => {
  const [dates, setDates] = useState<LiveDateItem[]>(DEFAULT_NO_DATES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchLiveDates()
      .then((data) => {
        if (mounted) {
          if (data && data.length > 0) {
            setDates(data);
          }
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (variant === 'banner') {
    return (
      <div className="max-w-[1120px] mx-auto mb-12 bg-[#fff5f7] border-l-4 border-[#ee5a7a] p-6 rounded-r-lg text-left shadow-xs">
        <h2 className="text-xl font-normal text-neutral-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#ee5a7a]" />
          Kommende datoer
        </h2>

        {loading ? (
          <div className="flex items-center gap-2 text-sm text-neutral-500 py-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#ee5a7a]" />
            <span>Laster inn oppdaterte arrangementsdatoer...</span>
          </div>
        ) : dates.length > 0 ? (
          <ul className="space-y-2.5">
            {dates.map((dateItem, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => onSelectDate(dateItem.text)}
                  className="text-left text-sm text-neutral-700 hover:text-[#ee5a7a] hover:underline flex items-center gap-2 transition-colors py-1 cursor-pointer w-full"
                >
                  <span className="text-sm">📅</span>
                  <span className="font-normal">{dateItem.text}</span>
                  <span className="text-xs text-[#ee5a7a] ml-auto shrink-0">➜ Meld interesse</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-neutral-600">
            {error
              ? 'Kunne ikke hente datoer automatisk. Ta kontakt direkte for informasjon om planlagte workshops.'
              : 'Nye datoer for Norge annonseres fortløpende. Send inn en henvendelse nedenfor for å reservere plass på venteliste.'}
          </p>
        )}
      </div>
    );
  }

  // Box variant for homepage hero
  return (
    <div className="border border-[#ee5a7a] p-4 sm:p-5 bg-white/80 backdrop-blur-xs text-left text-xs leading-relaxed max-w-[530px] mx-auto my-6 rounded-xs shadow-xs">
      <h3 className="text-sm font-bold text-neutral-900 mb-2 flex items-center gap-1.5">
        <Calendar className="w-4 h-4 text-[#ee5a7a]" />
        Kommende datoer:
      </h3>

      {loading ? (
        <div className="flex items-center gap-2 text-neutral-500 py-3">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#ee5a7a]" />
          <span>Laster inn datoer...</span>
        </div>
      ) : dates.length > 0 ? (
        <div className="space-y-1.5 pt-1">
          {dates.map((dateItem, idx) => (
            <div key={idx}>
              <button
                type="button"
                onClick={() => onSelectDate(dateItem.text)}
                className="text-left text-[#ee5a7a] font-medium hover:underline cursor-pointer block leading-normal py-0.5"
              >
                {dateItem.text}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-neutral-600 space-y-1 py-1">
          <div className="text-neutral-800 font-medium">Nye datoer for Norge settes opp fortløpende.</div>
          <p className="text-[11px] text-neutral-500">
            Ta gjerne kontakt for å melde din interesse eller avtale en individuell konsultasjon.
          </p>
        </div>
      )}
    </div>
  );
};
