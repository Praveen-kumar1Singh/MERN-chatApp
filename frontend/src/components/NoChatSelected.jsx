import { Lock, MessageCircleCode } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center
             justify-center animate-spin"
            >
              <MessageCircleCode className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to TalkFlow !</h2>
        <p className="text-base-content/60 flex justify-center items-center">
          <Lock size={16} className="mr-1"/>Your Personal messages are end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
