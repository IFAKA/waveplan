// /components/RestDayGregorianChants.tsx
import { REST_MESSAGE } from '../constants';
import GregorianChantsAudio from './GregorianChantsAudio';

const RestDayView = () => {
  return (
    <>
      <GregorianChantsAudio text={REST_MESSAGE} />
      <div className="text-gray-600 h-full flex items-center justify-center">
        <div className="text-center text-balance w-80">
          <p className="text-8xl mb-3">☦</p>
          <p className="mt-2 text-lg">{REST_MESSAGE}</p>
        </div>
      </div>
    </>
  );
};

export default RestDayView;
