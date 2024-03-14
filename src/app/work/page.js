export default function Work() {
  return (
    <div className="flex min-h-screen mx-12 flex-col px-8 bg-dark-void">
      <div className="py-8 container-xl text-center">
        <p className="text-dusty-gray mb-6">Work</p>
        <h2 className="text-6xl mb-8">
          A small selection of <br /> recent projects
        </h2>
      </div>
      <div className="container-xl pb-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        <div className="md:col-span-2 bg-slate-gray h-[80vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
        <div className="bg-slate-gray h-[40vh] rounded-md"></div>
      </div>
    </div>
  );
}
