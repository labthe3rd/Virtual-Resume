export default function VibeBlaster() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-dotted p-4 bg-neutral-700 bg-opacity-30">
      <h1 className="font-bold text-xl sm:text-3xl">Vibe Blaster</h1>
      <p className="mt-10 sm:mt-4">
        Light gun shooters at arcades had always been something I loved to do as
        a kid. To recapture the experience I put my skills as a software
        developer to work and created a package for Unity that would bring this
        experience into VRChat for a virtual arcade shooter experience that you
        can enjoy with friends. The prefab is completely porable so anyone can
        drop it in their world and make the desired changes to parameters with
        ease. To demonstrate the prefab, I put together a world in VRChat for
        customers and users to try out the game before buying.
      </p>
      <a
        className="text-2xl text-primary"
        target="_blank"
        href="https://vrchat.com/home/world/wrld_09c59641-4098-4679-aa19-8349fb4cc987"
        rel="noopener noreferrer"
      >
        Try out Vibe Blaster in VRChat!
      </a>
      <iframe
        className="mt-4 md:mt-10 w-full aspect-video"
        src="https://www.youtube.com/embed/WXpjLlTTcjk?si=_SsnyoeTNtxgSdBG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
