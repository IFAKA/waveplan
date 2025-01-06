import { useEffect, useRef } from 'react';

interface GregorianChantsAudioProps {
  text: string; // Add text to be displayed with the audio
}

const GregorianChantsAudio: React.FC<GregorianChantsAudioProps> = ({ text }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const setRandomStartTime = () => {
        // Ensure the duration is available
        const randomTime = Math.random() * audioElement.duration;
        audioElement.currentTime = randomTime;
      };

      // Set the random start time once the metadata is loaded
      audioElement.addEventListener('loadedmetadata', setRandomStartTime);

      // Volume manipulation sequence
      const volumeChangeSequence = () => {
        if (!audioElement) return;

        // Calculate reading time (in seconds) based on the word count and reading speed
        const wordCount = text.split(' ').length;
        const readingTimeInMinutes = wordCount / 200; // 200 words per minute
        const readingTimeInSeconds = readingTimeInMinutes * 60;

        // Increase volume over 3 seconds
        let volume = 0;
        const increaseInterval = setInterval(() => {
          if (volume < 1) {
            volume += 0.1;
            audioElement.volume = Math.min(volume, 1); // Make sure volume doesn't exceed 1
          } else {
            clearInterval(increaseInterval);

            // Wait for the reading time at full volume
            setTimeout(() => {
              // Decrease volume over 3 seconds
              let decreaseVolume = 1;
              const decreaseInterval = setInterval(() => {
                if (decreaseVolume > 0) {
                  decreaseVolume -= 0.1;
                  audioElement.volume = Math.max(decreaseVolume, 0); // Make sure volume doesn't go below 0
                } else {
                  clearInterval(decreaseInterval);

                  // Stop the audio after the volume decrease completes
                  audioElement.pause();
                  audioElement.currentTime = 0; // Reset to the beginning of the song
                }
              }, 300); // Decrease every 300ms

              // Wait for the decrease to finish, plus reading time duration
              setTimeout(() => {
                // Stop the audio after the decrease duration and reading time
                audioElement.pause();
              }, readingTimeInSeconds * 1000 + 3000); // Account for both reading time and volume fade duration
            }, readingTimeInSeconds * 1000); // Wait for the reading time
          }
        }, 300); // Increase every 300ms
      };

      // Start the volume change sequence once audio is ready
      audioElement.addEventListener('play', volumeChangeSequence);

      // Clean up the event listeners when the component is unmounted
      return () => {
        if (audioElement) {
          audioElement.removeEventListener('loadedmetadata', setRandomStartTime);
          audioElement.removeEventListener('play', volumeChangeSequence);
        }
      };
    }
  }, [text]);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/audio/gregorian-chant.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default GregorianChantsAudio;
