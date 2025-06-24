import { useMemo } from "react";

type Props = {
  sender: string;
  blobUrl: string;
};

const RecordMessage = ({ sender, blobUrl }: Props) => {
  const audio = useMemo(() => {
    return new Audio(blobUrl);
  }, [blobUrl]);

  return (
    <div
      className={
        "flex flex-col " + (sender === "me" ? "items-end" : "items-start")
      }
    >
      <div className="mt-4">
        <p
          className={
            "text-xs " +
            (sender === "me"
              ? "text-right mr-2 italic text-gray-500"
              : "ml-2 italic text-gray-500")
          }
        >
          {sender}
        </p>
        <audio src={blobUrl} controls />
      </div>
    </div>
  );
};

export default RecordMessage;
