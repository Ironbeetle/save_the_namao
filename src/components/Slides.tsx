


import { useState, Suspense } from 'react';

const VideoCarousel = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [
        { src: '/PreCRDFlowMap.webm', label: 'Pre-CRD Flow' },
        { src: '/PostCRDFlowMap.webm', label: 'Post-CRD Flow' }
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Left arrow */}
            <button
                onClick={() => setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1))}
                className="absolute left-2 z-10 text-amber-400/60 hover:text-amber-400 hover:scale-110 transition-all duration-300"
                aria-label="Previous video"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg">
                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
            </button>

            <div className="flex flex-col items-center justify-center px-4 lg:px-12">
                <Suspense fallback={<div className="text-white/75 text-xl">Loading...</div>}>
                    <video
                        key={videos[currentVideo].src}
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={videos[currentVideo].src} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </Suspense>
                
                {/* Video label */}
                <div className="mt-4 text-label text-dark-strong font-semibold">
                    {videos[currentVideo].label}
                </div>
            </div>

            {/* Right arrow */}
            <button
                onClick={() => setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1))}
                className="absolute right-2 z-10 text-amber-400/60 hover:text-amber-400 hover:scale-110 transition-all duration-300"
                aria-label="Next video"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};


export const Slide1 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[2vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                     <div className="text-heading text-dark">
                        SINCE TIME IMMEMORIAL,<br/>members of<br/> TATASKWEYAK CREE NATION <br/>have been the traditional STEWARDS of the lands and waters.
                    </div>
                    <div className='h-[10vh] lg:h-[0vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center lg:p-6 p-2">
                    <img loading="lazy" 
                        className="w-full h-full object-contain overflow-hidden"
                        src="/stewardsroleimg.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className="mt-4 text-label text-dark-strong font-semibold">
                <a href="https://tcntrsc.ca/" target="_blank" rel="noopener noreferrer">
                    Tataskweyak Cree Nation Stewardship 
                </a>
            </div>
        </div>
    )
}

export const Slide2 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="w-full h-auto flex flex-col justify-center items-center"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark text-center">
                    ALL THINGS ARE INTERCONNECTED <br/>and deserving of our protection as our relatives.
                        <br/> In the north, one of these relatives is NAMAO <br/> or known as Lake Sturgeon to settlers.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className='w-full flex flex-col justify-center items-center mt-[5vh] lg:mt-[4vh] pt-[5vh] lg:pt-[8vh]'>
                    <img loading="lazy" 
                        className="w-[80%] lg:w-[80%] h-auto object-contain overflow-hidden"
                        src="/RSPaintingNamao.png"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='h-[1vh] lg:h-[8vh] w-full' />
        </div>
    )
}

export const Slide3 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[8vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark text-center">
                        TATASKWEYAK<br/>members have inherent responsibilities 
                        under our inherent laws to protect NAMAO and other living beings in our territory.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                   <img loading="lazy" 
                        className="w-full h-auto object-fit"
                        src="/ATKfront.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export const Slide4 = () =>{
    return (
        <div className="h-auto w-full">
            {/* <div className='h-[1vh] lg:h-[5vh] w-full' /> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-evenly items-center p-2 lg:p-8">
                     <div className="text-heading text-dark lg:p-6 p-2">
                        OUR WAY OF LIFE,<br/>culture, and environment are falling victim to environmental colonialism.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' /> 
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="w-full flex flex-row justify-start items-center">
                        <img loading="lazy" 
                            className="w-[48%] h-auto object-cover overflow-hidden"
                            src="/cleanWater.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row justify-end items-center">
                        <img loading="lazy" 
                            className="w-[48%] h-auto object-cover overflow-hidden"
                            src="/Familyboatride.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-center">
                        <img loading="lazy" 
                            className="w-[48%] h-auto object-cover overflow-hidden"
                            src="/FamilyWater70s.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
               
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}


export const Slide5 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong text-center">
                        TATASKWEYAK CREE NATION <br/>has been engaged in efforts to 
                        protect what citizens believe to be the last remaining NAMAO population on the lower 
                        Churchill River from the economic interests of<br/> MANITOBA HYDRO.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-8">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                        <img loading="lazy" 
                            className="w-full h-auto object-fit"
                            src="/Progimg1.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                        <img loading="lazy" 
                            className="w-full h-auto object-fit"
                            src="/affectsprograms.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center pt-3'>
                        <img loading="lazy" 
                            className="w-full h-auto object-contain overflow-hidden"
                            src="/stewardship2.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}


export const Slide6 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-evenly items-center p-2 lg:p-8">
                     <div className="text-heading text-dark-strong text-center">
                        The Churchill River<br/> is not only a source of water, but a living entity deeply 
                        embedded in our cultural identity and community well-being.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-8">
                    <div>
                        <div className="w-full h-auto flex flex-col justify-center items-center p-2">
                            <img loading="lazy" 
                                className="w-full h-auto object-cover"
                                src="/FamilyCR1.jpg"
                                alt="Stewards Role"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="w-full h-auto flex flex-row justify-center items-center p-2">
                            <img loading="lazy" 
                                className="w-full h-auto object-cover overflow-hidden"
                                src="/FamilyCR2.jpg"
                                alt="Stewards Role"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="w-full h-auto flex flex-col justify-center items-center p-2">
                            <img loading="lazy" 
                                className="w-full h-auto object-cover overflow-hidden"
                                src="/FamilyCR4.jpg"
                                alt="Stewards Role"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-center items-center">
                        <img loading="lazy" 
                            className="w-full h-auto object-cover overflow-hidden"
                            src="/FamilyCR3.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>


                </div>
            </div>
            {/* add satellite view link with description and image */}
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide7 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className=" flex flex-col justify-evenly items-center p-2 lg:p-8">
                    <div className="text-quote text-accent border-l-4 border-amber-400 px-4 bg-black/20">
                        Sacred stories from Tataskweyak elders refer to NAMAO as grandfathers and grandmothers, demonstrating both the 
                        social and spiritual value of NAMAO relations with Tataskweyak.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-auto object-fit"
                        src="/LandUsebkg.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
                
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide8 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className=" flex flex-col justify-center items-center">
                    <div className="text-heading text-dark-strong p-6 text-center">
                        Over generations of living with and on the river,<br/> Tataskweyak elders share stories of the NAMAO providing our Nation 
                        with good food, <br/>
                        trade items and tools <br/>
                        year round.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="h-full flex flex-col items-center justify-center gap-4  p-2 lg:p-8">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-1">
                        <img loading="lazy" 
                            className="w-full h-auto object-cover"
                            src="/ATKboatingold.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <img loading="lazy" 
                            className="w-full h-auto object-contain overflow-hidden"
                            src="/Olden2.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className='h-[1vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide9 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                      <div className="text-heading text-dark-strong p-4">
                        MANITOBA HYDRO'S operations has profoundly altered the natural river system,<br/>
                        Tataskweyak's innate connection to the lands and waters,<br/> have never been severed.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <div className="w-full flex flex-row justify-start items-center">
                        <img loading="lazy" 
                            className="w-[48%] h-auto object-cover overflow-hidden"
                            src="/Wayoflife1.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row justify-end items-center">
                        <img loading="lazy" 
                            className="w-[50%] h-auto object-cover overflow-hidden"
                            src="/Wayoflife3.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-center">
                        <img loading="lazy" 
                            className="w-[47%] h-auto object-cover overflow-hidden"
                            src="/Wayoflife2.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide10 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-6">
                        MANITOBA HYDRO built the <br/>CHURCHILL RIVER DIVERSION (CRD) in the 1970s<br/> in order to send more water down the NELSON RIVER 
                        to power its hydroelectric dams.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
               <div className="flex items-center justify-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-[85%] h-auto object-contain overflow-hidden"
                        src="/IntroCRDPath.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
               </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide11 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-6"> 
                        <span className="text-display">UP TO 95%</span><br/>of the CHURCHILL RIVER'S flow has been 
                        diverted to the NELSON RIVER system to feed Manitoba's power needs.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex items-center justify-center p-2 lg:p-8">
                    <VideoCarousel />
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide12 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-6 mb-6">
                            The flow of the Churchill River is dictated by the power needs of Manitoba Hydro.
                    </div>
                   
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <div className='w-full flex flex-col justify-center items-center lg:p-2'>
                        <img loading="lazy" 
                            className="w-full h-auto object-cover overflow-hidden"
                            src="/MissiFalls2.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-quote text-accent border-l-4 border-amber-400 px-4 bg-black/20">
                        This need leaves the Churchill River with more extreme high and low flows, 
                        creating cycles of drought punctuated by extreme floods that make it hard for any species, including NAMAO, to survive.
                    </div>
                    <div className='h-[5vh] lg:h-[10vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <div className='w-full flex flex-col justify-center items-center lg:p-2'>
                        <img loading="lazy" 
                            className="w-full h-auto object-cover overflow-hidden"
                            src="/AAE_ChurchillFlyover_10.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='h-[2vh] lg:h-[0vh] w-full' />
                    <div className='w-full flex flex-col justify-center items-center lg:p-2'>
                        <img loading="lazy" 
                            className="w-full h-auto object-contain overflow-hidden"
                            src="/L1180046.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            {/* add SatelliteView.tsx link with description and image */}
        </div>
    )
}

export const Slide13 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4 mb-6 lg:p-4">
                        The entire CRD operates without a proper environmental review ever being done to understand how this 
                        change in flow would impact the Churchill River and the animals and people that rely on it.
                    </div>
                    <div className='h-[5vh] lg:h-[0vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center lg:p-6">
                    <div className="w-full grid grid-cols-1 gap-4">
                        <div className='w-full flex flex-col justify-center items-center lg:p-2'>
                        <img loading="lazy" 
                            className="w-full h-auto object-cover overflow-hidden"
                            src="/AAE_ChurchillFlyover_1.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}


export const Slide14 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4 mb-6 text-center">
                        Manitoba Hydro has already applied for a permanent licence to continue operations past September 2026.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 lg:p-8">
                <img loading="lazy" 
                    className="w-full h-full object-contain overflow-hidden"
                    src="/impoundintro.jpg"
                    alt="Stewards Role"
                    width={200}
                    height={200}
                />
                </div>
            </div>
            <div className='h-[0vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide15 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4 mb-6">
                        If ACTION is not taken IMMEDIATELY we run the risk of permanent extinction of NAMAO in the <br/>LOWER CHURCHILL RIVER.
                    </div>
                    <div className='h-[5vh] lg:h-[0vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-full object-contain overflow-hidden"
                        src="/Sturgeon222.jpg"
                        alt="Winnipeg City Night Skyline"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='h-[0vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide16 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4">
                        FOR TOO LONG <br/>the people of southern Manitoba have lived comfortably off benefits provided by the north without understanding the 
                        permanent harms being caused.
                    </div>
                    <div className='h-[5vh] lg:h-[0vh] w-full' />
                </div>
                <div className="flex flex-col items-center justify-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-full object-contain overflow-hidden"
                        src="/CityViewOK.jpg"
                        alt="Winnipeg City Night Skyline"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='h-[0vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide17 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4 mb-5">
                        We of the north cannot stand quietly by while our lands and waters 
                        are taken advantage of. 
                    </div>
                    <div className="text-heading text-dark-strong p-4 mt-2">
                        It is our responsibility as members of<br/> TATASKWEYAK CREE NATION <br/>to protect all our relations.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-full object-contain overflow-hidden"
                        src="/tcnaboutbkg.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}
{/* section const 17B for press conference here will create a page for press conference */}
export const Slide18 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4 mb-6">
                        As a result of declines in NAMAO populations, TATASKWEYAK placed a moratorium on NAMAO harvesting in the mid-2010s.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-full object-contain overflow-hidden"
                        src="/Sturgeon333.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
                 <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-quote text-accent border-l-4 border-amber-400 px-4 bg-black/20">
                        We took this step as part of our commitment to fulfill our inherent stewardship responsibilities for our lands and waters.
                    </div>
                </div>

                {/* add link panel to Researchreports page */}
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide19 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                     <div className="text-heading text-dark-strong p-4">
                    TATASKWEYAK has combined traditional and scientific knowledge to research how the 
                    CRD's operations have changed the flow of the CHURCHILL RIVER and impacted the 
                    habitat and health of the remaining NAMAO population.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-8">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-1 lg:gap-4">
                        <img loading="lazy" 
                            className="w-full h-auto object-fit"
                            src="/stewardshiplab11.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                      
                    </div>
                    <div className='w-full flex flex-col justify-center items-center pt-3'>
                        <img loading="lazy" 
                            className="w-full h-auto object-contain overflow-hidden"
                            src="/watersampler.jpg"
                            alt="Stewards Role"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            {/* add link panel to Picture Gallery page */}
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide20 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                   <div className="text-heading text-dark-strong p-4">
                        The reports support what our ELDERS, KNOWLEDGE KEEPERS and LAND USERS have been saying is TRUE – the CRD's reduced flow has led to the 
                        collapse of NAMAO on the CHURCHILL RIVER.
                    </div>
                    <div className='h-[8vh] lg:h-[0vh] w-full' />
                </div>
                <img loading="lazy" 
                    className="w-full h-full object-contain overflow-hidden"
                    src="/creelangbannerimg.jpg"
                    alt="Stewards Role"
                    width={200}
                    height={200}
                />
            </div>
            <div className='h-[0vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide21 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full"> 
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <div className="text-heading text-dark-strong p-4">
                        TATASKWEYAK believes STRONGLY in the importance of meaningful and in-depth consultation BEFORE decisions are made that affect our RIGHTS.
                    </div>
                    <div className='h-[5vh] lg:h-[0vh] w-full' />
                </div>
                <div className="flex flex-col justify-center items-center p-2 lg:p-8">
                    <img loading="lazy" 
                        className="w-full h-auto object-contain overflow-hidden"
                        src="/ottawa-parliament-hill-building.jpg"
                        alt="Stewards Role"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='h-[1vh] lg:h-[10vh] w-full' />
        </div>
    )
}

export const Slide22 = () =>{
    return (
        <div className="h-auto w-full">
            <div className='h-[1vh] lg:h-[10vh] w-full' />
            <div className="grid grid-cols-2 lg:gap-4 p-1 lg:p-4">
                <div className="w-full flex justify-center items-center p-1 lg:p-6">
                    <img loading="lazy" 
                        className="w-[90%] lg:w-[75%] h-auto object-cover overflow-hidden"
                        src="/gov-of-canada-logo.png"
                        alt="Canada"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-full h-auto flex justify-center items-center p-1 lg:p-6">
                    <img loading="lazy" 
                        className="w-[90%] lg:w-[75%] h-auto object-cover overflow-hidden"
                        src="/gov-of-mb-logo.png"
                        alt="Manitoba"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="flex flex-col justify-center items-center p-2 lg:p-4">
                <div className="text-heading text-dark-strong text-center lg:p-6 p-2">
                    We call on CANADA and MANITOBA <br/>to take immediate action to honour and protect our TREATY rights.
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className='flex flex-col justify-center items-center p-2 lg:p-4'>
                <div className="w-full flex justify-center items-center p-1 lg:p-6">
                 {/* Add link to SenatorMessage.tsx include profile pic of senator in link button with her name */}
                     
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
            <div className="flex flex-col justify-center items-center p-2 lg:p-4">
                <div className="text-quote text-accent border-l-4 border-amber-400 px-4 bg-black/20">
                    We need to ensure that the 
                    CHURCHILL RIVER DIVERSION is operated in a way that ensures the NAMAO are able to live and thrive on the CHURCHILL RIVER.
                </div>
            </div>
            <div className='h-[5vh] lg:h-[10vh] w-full' />
        </div>
    )
}