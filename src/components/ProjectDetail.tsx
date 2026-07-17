interface DetailProps {
  detail: Detail;
}

const ProjectDetail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div className="pb-10 border-b border-[#302d27] last:border-b-0 last:pb-0">
      <h2
        className="inline-flex rounded-md border border-[#302d27] bg-[#161513] px-4 py-2 portfolio-heading-md"
        id={detail?.title}
      >
        {detail.title}
      </h2>

      <p className="my-5 portfolio-body">{detail?.description}</p>

      {detail?.imgSrc && (
        <>
          {detail.imgSrc.includes("youtube") ? (
            <div className="relative overflow-hidden w-full pt-[56.25%] rounded-lg">
              <iframe
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                src={detail.imgSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={`Video: ${detail.title}`}
              ></iframe>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg">
              <img className="w-full rounded-lg" src={detail?.imgSrc} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectDetail;

{
}
