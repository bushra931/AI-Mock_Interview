import { useEffect, useRef, useState } from "react";

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();

    /* 
        What these do
        transcript → stores the live speech-to-text output.
        listening → tells us whether the microphone is currently active.
        supported → lets us show a message if the browser doesn't support the API.
        recognitionRef → stores the Speech Recognition instance so it persists across renders.
    */

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      let text = "";

      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }

      setTranscript(text);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return {
    transcript,
    listening,
    supported,
    startListening,
    stopListening,
  };
}

/*
What this does
This effect runs once when the component mounts. It checks if the browser supports the Speech Recognition API. If it does, it creates a new instance of SpeechRecognition and configures it to continuously listen for speech and return interim results. The instance is stored in recognitionRef so it can be accessed later. When the component unmounts, it stops the recognition to clean up resources.
*/

/*
This does
Checks if the browser supports speech recognition.
Creates a recognition object.
Enables continuous listening.
Enables live/interim transcript updates.
Sets the language.
Cleans up by stopping recognition when the component unmounts.
*/




