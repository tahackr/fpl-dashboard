function PlayerPageSkeleton() {
    const heading = (
        <h2 className="p-1 mb-2 font-bold text-xl self-start">
            <div className="bg-gray-300 w-28 h-8 rounded"></div>
        </h2>
    );
    return (
        <>
            <div>
                {heading}
                <div className="bg-white/50 shadow p-0.5 rounded-2xl h-[310px]">
                    <div className="p-6 animate-pulse h-full w-full flex flex-col justify-between">
                        <div className="h-8 w-full bg-gray-300 rounded"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
            <div>
                {heading}
                <div className="bg-white/50 shadow p-0.5 rounded-2xl h-[310px]">
                    <div className="p-6 animate-pulse flex flex-col items-center h-full justify-center gap-4">
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                            <div className="h-4 w-6 bg-gray-300 rounded"></div>
                            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="flex justify-around self-stretch">
                            <div className="flex flex-col gap-3">
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {heading}
                <div className="bg-gray-300/50 shadow p-0.5 rounded-2xl h-[310px] overflow-hidden">
                    <div className="relative p-10 animate-pulse h-full w-full flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 bg-gray-300 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2  rotate-45  max-[700px]:h-[100px] max-[700px]:w-[100px]"></div>
                        <div className="h-[200px] w-[200px] bg-gray-300"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {heading}
                <div className="bg-white/50 shadow p-0.5 rounded-2xl h-full min-h-[310px]">
                    <div className="p-6 animate-pulse flex flex-col items-center h-full justify-center gap-4">
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                        <div className="flex items-center gap-8">
                            <div className="h-20 w-20 rounded-full bg-gray-300"></div>
                            <div className="h-4 w-6 bg-gray-300 rounded"></div>
                            <div className="h-20 w-20 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                        <div className="h-4 w-40 bg-gray-300 rounded"></div>
                        <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="col-start-[-1] col-end-[-2] row-start-1 row-end-3 row-span-2 flex flex-col">
                {heading}
                <div className="bg-white/50 shadow p-0.5 rounded-2xl h-full min-h-[684px] flex">
                    <div className="p-6 animate-pulse grid grid-cols-2 gap-4 w-full items-center">
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                        <div className="bg-gray-300 h-20 w-full rounded-lg"></div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col items-center max-[1500px]:col-span-full">
                {heading}
                <div className="bg-white/50 shadow p-0.5 rounded-2xl w-full h-full min-h-[320px]">
                    <div className="p-6 animate-pulse flex justify-between w-full h-full">
                        <div className="w-full h-full flex items-end justify-center gap-2">
                            <div className=" bg-gray-300 h-[80%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[40%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[70%] w-[20%]"></div>
                        </div>
                        <div className="w-full h-full flex items-end justify-center gap-2">
                            <div className=" bg-gray-300 h-[20%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[40%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[70%] w-[20%]"></div>
                        </div>
                        <div className="w-full h-full flex items-end justify-center gap-2">
                            <div className=" bg-gray-300 h-[40%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[70%] w-[20%]"></div>
                            <div className=" bg-gray-300 h-[20%] w-[20%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayerPageSkeleton;
