'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import LogoImage from '@/components/LogoImage'
import AdBannerWithStorage from '@/components/AdBannerWithStorage'
import { usePreviewMode } from '@/components/PreviewModeDetector'

export default function Home() {
  // Side ad GIFs (vertical ads)
  const sideAds = [
    '/ads/side/1.gif',
    '/ads/side/2.gif',
    '/ads/side/3.gif',
    '/ads/side/4.gif',
    '/ads/side/5.gif',
    '/ads/side/6.gif',
    '/ads/side/7.gif',
    '/ads/side/8.gif',
    '/ads/side/9.gif',
    '/ads/side/10.gif',
    '/ads/side/11.gif',
  ]

  // Landscape ad GIFs (horizontal ads)
  const landscapeAds = [
    '/ads/landscape/1.gif',
    '/ads/landscape/2.gif',
    '/ads/landscape/3.gif',
    '/ads/landscape/4.gif',
    '/ads/landscape/5.gif',
    '/ads/landscape/6.gif',
    '/ads/landscape/7.gif',
    '/ads/landscape/8.gif',
    '/ads/landscape/9.gif',
    '/ads/landscape/10.gif',
    '/ads/landscape/11.gif',
  ]

  const previewMode = usePreviewMode()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col min-h-full">
        <a href="#main-content" className="absolute z-[100] opacity-0 -left-[999px] focus:-left-[0px] focus:opacity-100 inline-block rounded-none bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Skip to main content
        </a>


        <div className="relative rounded-3xl shadow-sm" id="search_area_container">
          <div id="global_search" className="relative z-50 hidden">
            <div id="global_search-bg" className="fixed inset-0 transition-opacity bg-gray-700/75 backdrop-filter backdrop-blur-sm" aria-hidden="true"></div>
            <div className="fixed inset-0 overflow-y-auto" aria-labelledby="global_search-title" aria-describedby="global_search-description" role="dialog" aria-modal="true" tabIndex={0}>
              <div className="flex justify-center min-h-full relative">
                <div className="w-full max-w-5xl p-4 sm:p-6 mt-5 md:mt-20">
                  <div id="global_search-container" className="relative hidden transition bg-transparent">
                    <span id="global_search-container-start" tabIndex={0} aria-hidden="true"></span>
                    
                    <div className="text-right">
                      <button type="button" className="flex-none p-2 mb-2 text-right text-white hover:text-gray-300" aria-label="close">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 stroke-current" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                    <div id="global_search-content">
                      <div className="relative rounded-3xl shadow-sm" id="search_area">
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                          </div>
                          <div className="relative">
                            <form id="live_search_form">
                              <label htmlFor="global_search_input" className="sr-only">
                                Search for name of services,ministry, department..
                              </label>
                              <input defaultValue="" type="text" id="global_search_input" name="search" className="2xs:pl-12 2xs:pr-5 block h-14 w-full border-gray-100 transition-none pl-10 pr-6 placeholder:text-slate-400 focus:border-gray-100 focus:outline-0 focus:ring-0 rounded-[30px]" placeholder="Type name of service, ministry, department, agency etc..." />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <span id="global_search-container-end" tabIndex={0} aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 flex flex-col min-h-full w-full" id="main-content">
          {/* Disconnected notification */}
          <div id="disconnected" role="alert" className="fixed hidden top-2 right-2 w-80 sm:w-96 z-[1001] rounded-lg p-3 shadow-md shadow-zinc-900/5 ring-1 bg-rose-50 text-rose-900 ring-rose-500 fill-rose-900 transition-all transform ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" style={{display: 'none'}}>
            <p className="flex gap-1.5 text-[0.8125rem] font-semibold leading-6">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd"></path>
              </svg>
              Oops, it seems we're having trouble connecting to the internet.
            </p>
            <p className="mt-2 text-[0.8125rem] leading-5">
              Attempting to reconnect <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="ml-1 w-3 h-3 inline animate-spin" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
              </svg>
            </p>
          </div>
          
          <div id="home_live_content">
            <div className="relative">
              <div className="relative z-20 bg-gray-400">
                <div className="absolute inset-0 isolate h-full w-full">
                  <div className="relative w-full h-full bg-no-repeat bg-bottom bg-cover -z-10" style={{backgroundImage: "url('https://demoadmin.ecitizen.pesaflow.com/assets/uploads/eCitizen-hero-banner-5.jpg')"}}>
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 md:bg-transparent md:bg-gradient-to-t md:from-gray-900/70 md:via-gray-900/60 lg:to-transparent">
                    </div>
                  </div>
                </div>
                <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-14 sm:pt-32 relative z-20 gap-6">
          <div className="max-w-none text-left md:max-w-2xl lg:max-w-4xl">
            <h1 className="text-[1.575rem] sm:text-3xl lg:text-4xl font-medium tracking-wide text-white leading-8 sm:leading-10">
Government of Kenya services
              <strong>simplified</strong> <br />
All your government records
              <strong>unified</strong>
          </h1>
          </div>
          {/* Video on the right top */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full lg:w-80 xl:w-96 h-auto rounded-lg shadow-2xl border-2 border-white/20"
            >
              <source src="/videos/live.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
                <div className="mt-10 rounded-t-3xl bg-gray-900 bg-opacity-40 px-5 py-5 backdrop-blur-sm backdrop-filter sm:px-10 sm:py-10 lg:bg-opacity-30">
          <div className="relative rounded-3xl shadow-sm" id="search_area">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                  </path>
              </svg>
              </div>
              <div className="relative">
                <form id="live_search_form">
                  <label htmlFor="homepage_search_input" className="sr-only">
                    Search for name of service, ministry, department, agency etc...
                  </label>
                  <input defaultValue="" type="text" id="homepage_search_input" name="search" className="2xs:pl-12 2xs:pr-5 block h-14 w-full border-gray-100 transition-none pl-10 pr-6 placeholder:text-slate-400 focus:border-gray-100 focus:outline-none rounded-[30px]" placeholder="Type name of service, ministry, department, agency etc..." />
                </form>
              </div>
              
            </div>
            
          </div>

          <div className="scrollbar-none py-3 md:pb-0 overflow-x-auto md:overflow-x-hidden 3xs:mb-auto mt-5 flex space-x-6 md:space-x-0 md:grid grid-cols-2 gap-y-8 md:gap-x-4 sm:gap-y-4 md:grid-cols-4 xl:grid-cols-8 xl:gap-x-6 xl:gap-y-0">
            <a href="https://dis.ecitizen.go.ke/services/1/apply/1" title="Apply for a Passport" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Apply for <br />a Passport
              </span>
            </a><a href="https://serviceportal.ntsa.go.ke/dashboard" title="Apply for a Driving License" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Apply for a <br />Driving License
              </span>
            </a><a href="https://ecitizen.kra.go.ke/" title="KRA Services" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
KRA <br />Services
              </span>
            </a><a href="https://dcrs.ecitizen.go.ke/services/3/apply/3" title="Apply for a Birth Certificate" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Apply for a<br /> Birth Certificate
              </span>
            </a><a href="https://dci.ecitizen.go.ke/services/1/apply/1" title="Apply for Certificate of Good Conduct" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Apply for Certificate<br /> of Good Conduct
              </span>
            </a><a href="https://www.bomayangu.go.ke/" title="Save for  Affordable Housing " target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Save for <br /> Affordable Housing 
              </span>
            </a><a href="https://brs.ecitizen.go.ke/" title="Register a  Business" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Register a <br /> Business
              </span>
            </a><a href="https://oag.ecitizen.go.ke/services/1/apply/1" title="Apply for a  Marriage Certificate" target="_blank" className="min-w-fit md:w-auto group block text-center text-xs font-medium text-white hover:text-gray-200 sm:pt-5 sm:text-sm">
              
              <span className="mt-3 3xs:mt-4 inline-block">
Apply for a <br /> Marriage Certificate
              </span>
            </a>
          </div>
        </div>
              </div>
            </div>
          </div>
          
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            {/* Over 22,000 Section with Ads on Both Sides */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Left Ad - Hidden on mobile, shown on large screens - WIDER */}
              <div className="hidden lg:block lg:col-span-3">
          <AdBannerWithStorage
            containerId="side-left-1"
            defaultImages={sideAds}
            defaultSponsor="University of Nairobi"
            defaultSponsorType="Higher Education Institution"
            size="vertical"
            className="h-full"
            showMarker={previewMode}
            markerLabel="Left Side Ad (Top)"
          />
        </div>

        {/* Center Content - NARROWER */}
        <div className="lg:col-span-6">
          <div className="rounded-b-3xl relative overflow-hidden bg-[#00595E]">
            <div className="absolute inset-0 h-full w-full">
              
            </div>
            <div className="relative sm:min-h-[250px] lg:min-h-[314px] w-full inline-flex justify-start items-center bg-black/20">
              <div className="w-full">
                <div className="py-10 sm:py-14 px-5 sm:px-10 max-w-3xl">
                  <h2 className="text-xl sm:text-3xl font-medium tracking-tight text-white">
Over <strong>22,000</strong> Government services now available from <strong>100+</strong> Ministries, Counties, Departments and Agencies.
                  </h2>
                </div>
                <div className="px-5 sm:px-10 py-7 sm:flex items-center justify-between bg-gradient-to-tr from-black/60 to-black/40">
                  <h3 className="text-white text-xl sm:text-2xl font-normal">
Get started on eCitizen today
                </h3>

                  <div className="flex space-x-4 items-center lg:justify-end mt-4 sm:mt-0">
                    <Link href="/login" className="block md:inline w-full md:w-auto text-center rounded-3xl whitespace-nowrap border border-transparent bg-white py-2 px-4 font-medium text-gray-800 shadow-sm hover:bg-gray-200 focus:outline-none" title="Go to the login page">
                      Sign in
                    </Link>
                    <Link href="/register" className="block md:inline w-full md:w-auto text-center rounded-3xl whitespace-nowrap border border-transparent bg-accentcolor-700 py-2 px-4 font-medium text-white shadow-sm hover:bg-accentcolor-800 focus:outline-none" title="Go to the registration page">
                      Register
              </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Ad - Hidden on mobile, shown on large screens - WIDER */}
        <div className="hidden lg:block lg:col-span-3">
          <AdBannerWithStorage
            containerId="side-right-1"
            defaultImages={sideAds}
            defaultSponsor="Ministry of Education"
            defaultSponsorType="Government Department"
            size="vertical"
            className="h-full"
            showMarker={previewMode}
            markerLabel="Right Side Ad (Top)"
          />
        </div>
      </div>

      {/* Mobile Ads - Shown only on mobile, below the content */}
      <div className="lg:hidden mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AdBannerWithStorage
          containerId="side-left-1"
          defaultImages={landscapeAds}
          defaultSponsor="University of Nairobi"
          defaultSponsorType="Higher Education Institution"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="Mobile Ad 1"
        />
        <AdBannerWithStorage
          containerId="side-right-1"
          defaultImages={landscapeAds}
          defaultSponsor="Ministry of Education"
          defaultSponsorType="Government Department"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="Mobile Ad 2"
        />
      </div>
    </div>
      </div>

      {/* Ministries */}
      <div className="mt-5 py-8">
        <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-xl sm:text-2xl">National Ministries</h3>
        <Link href="/national" className="text-navcolor-500 hover:text-navcolor-700 whitespace-nowrap" title="View all ministries">
View all <span className="hidden sm:inline">ministries</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <Link href="/national" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Open Ministry Of Agriculture And Livestock Development">
          <div className="p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ministry-of-agriculture.png"
                  alt="Ministry logo"
                  fallbackText="MA"
                />
              </div>
            <div>
                <h4 className="line-clamp-2 text-base font-medium text-gray-500 group-hover:text-gray-800">
Ministry Of Agriculture And Livestock Development
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/national" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Open Ministry Of Cooperatives And Micro, Small And Medium Enterprises (MSME) Development">
          <div className="p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ministry-of-cooperatives.png"
                  alt="Ministry logo"
                  fallbackText="MC"
                />
              </div>
              <div>
                <h4 className="line-clamp-2 text-base font-medium text-gray-500 group-hover:text-gray-800">
Ministry Of Cooperatives And Micro, Small And Medium Enterprises (MSME) Development
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/national" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Open Ministry Of Education">
          <div className="p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ministry-of-education.png"
                  alt="Ministry logo"
                  fallbackText="ME"
                />
              </div>
              <div>
                <h4 className="line-clamp-2 text-base font-medium text-gray-500 group-hover:text-gray-800">
Ministry Of Education
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/national" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Open Ministry Of Energy And Petroleum">
          <div className="p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ministry-of-energy.png"
                  alt="Ministry logo"
                  fallbackText="EP"
                />
              </div>
              <div>
                <h4 className="line-clamp-2 text-base font-medium text-gray-500 group-hover:text-gray-800">
Ministry Of Energy And Petroleum
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/national" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Open Ministry Of Environment, Climate Change And Forestry">
          <div className="p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ministry-of-environment.png"
                  alt="Ministry logo"
                  fallbackText="EF"
                />
              </div>
              <div>
                <h4 className="line-clamp-2 text-base font-medium text-gray-500 group-hover:text-gray-800">
Ministry Of Environment, Climate Change And Forestry
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
        </div>
      </div>

      {/* Advertisement Section - After Ministries */}
      <div className="mt-8 py-6">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <AdBannerWithStorage
        containerId="horizontal-1"
        defaultImages={landscapeAds}
        defaultSponsor="Kenya Commercial Bank"
        defaultSponsorType="Financial Institution"
        size="horizontal"
        showMarker={previewMode}
        markerLabel="After Ministries"
      />
    </div>
      </div>

      <div className="mt-5 py-8">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-xl sm:text-2xl">Agencies</h3>
        <Link href="/agencies" className="text-navcolor-500 hover:text-navcolor-700 whitespace-nowrap" id="agency_link" title="Navigate to all agencies page">
View all <span className="hidden sm:inline">agencies</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <a target="_blank" href="https://serviceportal.ntsa.go.ke/dashboard" title="Navigate to National Transport And Safety Authority (NTSA) (New) page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ntsa-logo.png"
                  alt="NTSA logo"
                  fallbackText="NTSA"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
National Transport And Safety Authority (NTSA) (New)
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Dedicated platform for Application and Renewal of Driving Licence, Driving School Management and PSV related services
              </p>
            </div>
          </div>
        </a>        <a target="_blank" href="https://ntsa.ecitizen.go.ke/" title="Navigate to National Transport And Safety Authority (NTSA) (Old) page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ntsa-logo.png"
                  alt="NTSA logo"
                  fallbackText="NTSA"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
National Transport And Safety Authority (NTSA) (Old)
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
National Transport and Safety Authority Act (NTSA) is a statutory body established by the National Transport and Safety Authority Act (2012) to bring about sanity in our roads. To this end, NTSA, brings together under one roof the functions of Motor Vehicle Registration, Transport Licensing and Motor Vehicle Inspection, Road Safety, Driver Testing and some extent Traffic Law enhancement
              </p>
            </div>
          </div>
        </a>        <a target="_blank" href="https://dis.ecitizen.go.ke/dashboard" title="Navigate to Directorate of Immigration Services (New Applications) page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/dis-logo.png"
                  alt="DIS logo"
                  fallbackText="DIS"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Directorate of Immigration Services (New Applications)
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Utilize DIS's online services for efficient ePassport, temporary permit, and eVisa applications.
              </p>
            </div>
          </div>
        </a>        <a target="_blank" href="https://kws.ecitizen.go.ke/" title="Navigate to Kenya Wildlife Service page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/kws-logo.png"
                  alt="KWS logo"
                  fallbackText="KWS"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Kenya Wildlife Service
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Explore. Experience.  Conserve.
Kenya Parks
              </p>
            </div>
          </div>
        </a>        <a target="_blank" href="https://dci.ecitizen.go.ke/dashboard" title="Navigate to Directorate of Criminal Investigations page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/dci-logo.png"
                  alt="DCI logo"
                  fallbackText="DCI"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Directorate of Criminal Investigations
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Access the Directorate of Criminal Investigations' online platform for police clearance certificate services and more.
              </p>
            </div>
          </div>
        </a>        <a target="_blank" href="http://brs.ecitizen.go.ke/" title="Navigate to Business Registration Services page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/brs-logo.png"
                  alt="BRS logo"
                  fallbackText="BRS"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Business Registration Services
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Leverage BRS's digital platform for simplified and efficient business registration procedures.
              </p>
            </div>
          </div>
        </a>

        {/* Advertisement in Agencies Grid - After 6 agencies */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <AdBannerWithStorage
            containerId="horizontal-2"
            defaultImages={landscapeAds}
            defaultSponsor="Cooperative Bank of Kenya"
            defaultSponsorType="Banking Services"
            size="horizontal"
            showMarker={previewMode}
            markerLabel="In Agencies Grid"
          />
        </div>

        <a target="_blank" href="https://ecitizen.kra.go.ke/" title="Navigate to Kenya Revenue Authority page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/kra-logo.png"
                  alt="KRA logo"
                  fallbackText="KRA"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Kenya Revenue Authority
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
To enhance mobilisation of government revenue and to facilitate growth in economic activities and trade by ensuring compliance with tax and customs laws
              </p>
            </div>
          </div>
        </a><a target="_blank" href="https://oag.ecitizen.go.ke/dashboard" title="Navigate to Registrar Of Marriages page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/oag-logo.png"
                  alt="OAG logo"
                  fallbackText="OAG"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Registrar Of Marriages
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Utilize OAG's online services for efficient marriage registration and other legal services.
              </p>
            </div>
          </div>
        </a><a target="_blank" href="https://dcrs.ecitizen.go.ke/dashboard" title="Navigate to Civil Registration Services page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/dcrs-logo.png"
                  alt="DCRS logo"
                  fallbackText="CRS"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Civil Registration Services
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
Access CRS's online platform to conveniently apply and pay for birth and death registration services.
            </p>
          </div>
        </div>
        </a><a target="_blank" href="https://www.bomayangu.go.ke/" title="Navigate to Boma Yangu page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/boma-yangu-logo.png"
                  alt="Boma Yangu logo"
                  fallbackText="BY"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
              </svg>
            </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Boma Yangu
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
The Boma Yangu platform is the gateway into the Affordable Housing Program. Start your journey towards home ownership.
              </p>
            </div>
          </div>
        </a><a target="_blank" href="https://ncpwd.ecitizen.go.ke/" title="Navigate to National Council for Persons with Disabilities(NCPWD) page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/ncpwd-logo.png"
                  alt="NCPWD logo"
                  fallbackText="NC"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
National Council for Persons with Disabilities(NCPWD)
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
To promote and protect equalization of opportunities and realization of human rights for PWDs to live descent livelihoods.
              </p>
            </div>
          </div>
        </a><a target="_blank" href="https://kebs.org/kebs-services/" title="Navigate to Kenya Bureau of Standards (KEBS) page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/kebs-logo.png"
                  alt="KEBS logo"
                  fallbackText="KB"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
Kenya Bureau of Standards (KEBS)
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
The Kenya Bureau of Standards (KEBS) has remained the premier government agency for the provision of Standards, Metrology and Conformity Assessment (SMCA) services since its inception in 1974. Over that period its main activities have grown from the development of standards and quality control for a limited number of locally made products in the 1970s to the provision of more comprehensive Standards development, Metrology, Conformity Assessment, Training and Certification services. With the re-establishment of the East African Community (EAC) and Common Market for Eastern and Southern Africa (COMESA), KEBS activities now include participation in the development and implementation of SMCA activities at the regional level where it participates in the harmonization of standards, measurements and conformity assessment regimes for regional integration. KEBS operates the National Enquiry Point in support of the WTO Agreement on Technical Barriers to Trade (TBT).
              </p>
            </div>
          </div>
        </a><a target="_blank" href="https://nrb.ecitizen.go.ke/" title="Navigate to National Registration Bureau page" className="block overflow-hidden rounded-lg group bg-white hover:bg-gray-50 border border-gray-200">
          <div className="flex flex-col">
            <div className="p-3 flex-shrink-0 flex justify-between items-center border-b border-gray-300">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/nrb-logo.png"
                  alt="NRB logo"
                  fallbackText="NRB"
                  className="w-full h-full object-contain"
                  fallbackTextSize="small"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                </svg>
              </div>
            <div className="p-3">
              <h4 className="text-base line-clamp-2 font-medium text-gray-500 group-hover:text-gray-800 mb-2">
National Registration Bureau
              </h4>
              <p className="text-sm line-clamp-2 font-light text-gray-500/90 group-hover:text-gray-800">
The Department of National Registration Bureau was established in 1978 to implement the Registration of Persons Act, Cap 107, laws of Kenya. The Act provides for mandatory identification, registration and issuance of identity cards to all persons who are citizens of Kenya and who have attained the age of eighteen years or over.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
      </div>

      {/* Advertisement Section - After Agencies (After National Registration Bureau) */}
      <div className="mt-8 py-6">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdBannerWithStorage
          containerId="horizontal-3a"
          defaultImages={landscapeAds}
          defaultSponsor="Safaricom PLC"
          defaultSponsorType="Telecommunications Company"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="After Agencies (Left)"
        />
        <AdBannerWithStorage
          containerId="horizontal-3b"
          defaultImages={landscapeAds}
          defaultSponsor="Equity Bank"
          defaultSponsorType="Financial Services"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="After Agencies (Right)"
        />
      </div>
    </div>
      </div>

      <div className="py-8">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-xl sm:text-2xl">Counties</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <Link href="/counties/001-mombasa-county" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 001 - Mombasa County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/mombasa-logo.png"
                  alt="Mombasa County logo"
                  fallbackText="001"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
001 - Mombasa County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/012-meru" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 012 - Meru County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/meru-logo.png"
                  alt="Meru County logo"
                  fallbackText="012"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
012 - Meru County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/013-tharaka-nithi" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 013 - Tharaka-Nithi County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/tharaka-nithi-logo.png"
                  alt="Tharaka-Nithi County logo"
                  fallbackText="013"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
013 - Tharaka-Nithi County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/014-embu" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 014 - Embu County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/embu-logo.png"
                  alt="Embu County logo"
                  fallbackText="014"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
014 - Embu County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/034-kajiado" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 034 - Kajiado County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/kajiado-logo.png"
                  alt="Kajiado County logo"
                  fallbackText="034"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
034 - Kajiado County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/036-bomet" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 036 - Bomet County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/bomet-logo.png"
                  alt="Bomet County logo"
                  fallbackText="036"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
036 - Bomet County
                </h4>
              </div>
            </div>
          </div>
        </Link><Link href="/counties/042-kisumu-county" className="group block overflow-hidden rounded-lg border border-gray-200 bg-white hover:bg-gray-50" title="Navigate to 042 - Kisumu County page">
          <div className="xs:px-2 px-2 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 self-center w-10 h-10 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                <LogoImage 
                  src="https://demoadmin.ecitizen.pesaflow.com/assets/uploads/counties/kisumu-logo.png"
                  alt="Kisumu County logo"
                  fallbackText="042"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-500 group-hover:text-gray-800 sm:text-lg">
042 - Kisumu County
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
      </div>

      {/* Advertisement Section - After Kisumu County */}
      <div className="mt-8 py-6">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <AdBannerWithStorage
        containerId="horizontal-4"
        defaultImages={landscapeAds}
        defaultSponsor="Kenya Power & Lighting Company"
        defaultSponsorType="Energy Provider"
        size="horizontal"
        showMarker={previewMode}
        markerLabel="After Counties"
      />
    </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-5 py-12 bg-white border-t border-gray-200">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-[#00595E] mb-2">22,000+</div>
          <div className="text-sm sm:text-base text-gray-600">Government Services</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-[#00595E] mb-2">100+</div>
          <div className="text-sm sm:text-base text-gray-600">Ministries & Agencies</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-[#00595E] mb-2">47</div>
          <div className="text-sm sm:text-base text-gray-600">Counties</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-[#00595E] mb-2">24/7</div>
          <div className="text-sm sm:text-base text-gray-600">Online Access</div>
        </div>
      </div>
    </div>
      </div>

      <div className="xl:py-30 mt-5 bg-gray-100 py-16 sm:py-20">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="top-red-line text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
The single point of access for all government services
        </h2>
        <p className="mt-4 text-lg md:w-5/12">
Enjoy the convenience. Get information about government online services and make applications quickly and easily.
        </p>
      </div>

      {/* Advertisement in Features Section */}
      <div className="mt-12">
        <AdBannerWithStorage
          containerId="horizontal-5"
          defaultImages={landscapeAds}
          defaultSponsor="Kenya Airways"
          defaultSponsorType="National Airline"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="In Features Section"
        />
      </div>

      <div className="mt-16 lg:mt-20">
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-9 lg:space-y-0">
          <div>
            <div className="h-12 w-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div className="mt-5">
              <dt className="sm:text-lgleading-6 text-base font-medium text-gray-900">
One Log-in, all government services
              </dt>
              <dd className="mt-4 max-w-xs text-base text-gray-500">
All you need is one account. Citizens and residents can register with an ID number
              </dd>
            </div>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="mt-5">
              <dt className="sm:text-lgleading-6 text-base font-medium text-gray-900">
A single unified citizen's profile
              </dt>
              <dd className="mt-4 max-w-xs text-base text-gray-500">
Your information as a citizen or resident from across government will be accessible through your profile
              </dd>
            </div>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <dt className="sm:text-lgleading-6 text-base font-medium text-gray-900">
Convenient service access
              </dt>
              <dd className="mt-4 max-w-xs text-base text-gray-500">
Search, apply and pay for services online, receive progress notifications and access all your downloads in one place
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-5 py-16 bg-white">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get started with eCitizen in three simple steps
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00595E] text-white text-2xl font-bold mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Register</h3>
          <p className="text-gray-600">
            Create your account using your National ID number or passport. It only takes a few minutes.
          </p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00595E] text-white text-2xl font-bold mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Search & Apply</h3>
          <p className="text-gray-600">
            Browse through thousands of services, find what you need, and submit your application online.
          </p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00595E] text-white text-2xl font-bold mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Track & Receive</h3>
          <p className="text-gray-600">
            Monitor your application status in real-time and receive notifications when it's ready.
          </p>
        </div>
      </div>
    </div>
      </div>

      {/* Advertisement Section - After How It Works */}
      <div className="mt-8 py-6">
    <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdBannerWithStorage
          containerId="horizontal-6a"
          defaultImages={landscapeAds}
          defaultSponsor="Airtel Kenya"
          defaultSponsorType="Telecommunications"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="After How It Works (1)"
        />
        <AdBannerWithStorage
          containerId="horizontal-6b"
          defaultImages={landscapeAds}
          defaultSponsor="National Bank of Kenya"
          defaultSponsorType="Banking Services"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="After How It Works (2)"
        />
        <AdBannerWithStorage
          containerId="horizontal-6c"
          defaultImages={landscapeAds}
          defaultSponsor="Kenya Railways"
          defaultSponsorType="Transport Services"
          size="horizontal"
          showMarker={previewMode}
          markerLabel="After How It Works (3)"
        />
      </div>
    </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-5 py-12 bg-gradient-to-r from-[#00595E] to-[#007a82] text-white">
        <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
          Join millions of Kenyans who are already using eCitizen to access government services online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="inline-block rounded-3xl bg-white py-3 px-8 font-medium text-[#00595E] shadow-lg hover:bg-gray-100 transition-colors">
            Create Account
          </Link>
          <Link href="/login" className="inline-block rounded-3xl border-2 border-white py-3 px-8 font-medium text-white hover:bg-white/10 transition-colors">
            Sign In
          </Link>
          </div>
        </div>
      </div>
      </div>
      </main>
      </div>
      <Footer />
    </div>
  )
}

