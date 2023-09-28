export default function MetaPlazaVR() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-double p-4 bg-neutral-700 bg-opacity-30 shadow-md shadow-neutral-500 border-opacity-20">
      <h1 className="font-bold text-xl sm:text-3xl">MetaPlaza VR</h1>
      <h2 className="font-semibold text-xl">Lead Developer/Owner</h2>
      <h3 className="italic">June 2023 - Current</h3>
      <p className="mt-10 sm:mt-4">
        <span className="font-bold text-danger-400">
          This service is not active to be respectful to VRChat's terms of
          service, but I've included it as a means to share my skills/abilities.
        </span>
        The video shows a project I worked on that used VRChat's Udon Sharp,
        which is essentially C# in unity, to integrate with a backend server I
        created. I also created the font end. Communicaton was handled via APIs.
      </p>
      <iframe
        className="mt-4 md:mt-10 w-full aspect-video"
        src="https://www.youtube.com/embed/9vlD0eExXdY?si=lHvOKU9tKBffSvib"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
