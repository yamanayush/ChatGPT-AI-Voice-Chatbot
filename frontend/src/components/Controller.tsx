import { useState } from "react";
import Title from "./Title";
import axios from "axios";
import RecordMessage from "./RecordMessage";
import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: (blobUrl: string, blob: Blob) => void;
};

function Controller({ handleStop }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <ReactMediaRecorder
        audio
        onStop={handleStop}
        render={({ status, startRecording, stopRecording }) => (
          <div className="mt-2 w-full flex flex-col items-center justify-center">
            <button
              onMouseDown={startRecording}
              onMouseUp={stopRecording}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <RecordIcon
                classText={
                  status === "recording"
                    ? "animate-pulse text-white"
                    : "text-white"
                }
              />
            </button>
            <p className="mt-4 text-lg text-gray-500">
              {status === "recording" ? "Recording..." : "Press and hold to speak"}
            </p>
          </div>
        )}
      />
    </div>
  );
}

export default Controller;
