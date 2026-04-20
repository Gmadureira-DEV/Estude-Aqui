import { useState } from "react";
import { Video } from "@/data/content";
import { PlayCircle } from "lucide-react";

interface VideoEmbedProps {
  video: Video;
}

export function VideoEmbed({ video }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
      <div className="relative w-full bg-gray-100" style={{ paddingBottom: "56.25%" }}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <div className="w-12 h-12 mb-3 rounded-full border-4 border-gray-200 border-t-primary animate-spin"></div>
            <span className="text-sm font-medium">Carregando vídeo...</span>
          </div>
        )}
        <iframe
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4 flex items-start gap-3">
        <PlayCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {video.title}
        </p>
      </div>
    </div>
  );
}
