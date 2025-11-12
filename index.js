<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Sales Representatives LLC</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #e2e8f0;
            overflow-x: hidden;
            background-color: #0a0a2e; /* Fully navy blue background */
            position: relative;
        }

        #fluid {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
            pointer-events: none;
            width: 100%;
            height: 100%;
        }

        .gooey-nav-container {
            position: fixed;
            top: calc(15vh - 2rem);
            left: 50%;
            transform: translateX(-50%);
            z-index: 50;
        }

        .gooey-nav-container nav ul {
            display: flex;
            gap: 1rem;
            padding: 0.75rem;
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            border-radius: 9999px;
            border: 1px solid #334155;
        }

        .gooey-nav-container nav li {
            list-style: none;
        }

        .gooey-nav-container nav a {
            color: #94a3b8;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            transition: color 0.3s;
            font-size: 0.875rem;
        }

        .gooey-nav-container nav a:hover {
            color: #f1f5f9;
        }

        .section {
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .pill-box {
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid #334155;
            border-radius: 9999px;
            padding: 1rem 2rem;
            text-align: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 48rem;
        }

        .text-box {
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid #334155;
            border-radius: 0.5rem;
            padding: 2rem;
            max-width: 48rem;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            width: 100%;
        }

        .column-box {
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid #334155;
            border-radius: 0.5rem;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .grid-cols-3 {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.5rem;
        }

        .grid-cols-2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
        }

        @media (max-width: 768px) {
            .grid-cols-3 {
                grid-template-columns: 1fr;
            }

            .grid-cols-2 {
                grid-template-columns: 1fr;
            }
        }

        .flex {
            display: flex;
        }

        .flex-col {
            flex-direction: column;
        }

        .items-center {
            align-items: center;
        }

        .justify-center {
            justify-content: center;
        }

        .space-y-8 > * + * {
            margin-top: 2rem;
        }

        .space-x-4 > * + * {
            margin-left: 1rem;
        }

        .space-y-6 > * + * {
            margin-top: 1.5rem;
        }

        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }

        .text-center {
            text-align: center;
        }

        .text-left {
            text-align: left;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .font-bold {
            font-weight: 700;
        }

        .font-medium {
            font-weight: 500;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mt-8 {
            margin-top: 2rem;
        }

        .pb-4 {
            padding-bottom: 1rem;
        }

        .border-b {
            border-bottom-width: 1px;
        }

        .border-gray-700 {
            border-color: #334155;
        }

        .leading-relaxed {
            line-height: 1.625;
        }

        .w-full {
            width: 100%;
        }

        .max-w-2xl {
            max-width: 42rem;
        }

        .max-w-4xl {
            max-width: 56rem;
        }

        .max-w-md {
            max-width: 28rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .p-8 {
            padding: 2rem;
        }

        .p-6 {
            gap: 1.5rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-gray-200 {
            color: #e2e8f0;
        }

        .text-gray-300 {
            color: #cbd5e1;
        }

        .bg-blue-600 {
            background-color: #2563eb;
        }

        .hover\:bg-blue-700:hover {
            background-color: #1d4ed8;
        }

        .text-white {
            color: #fff;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .rounded-lg {
            border-radius: 0.5rem;
        }

        .transition-colors {
            transition: color 0.3s, background-color 0.3s;
        }

        .duration-300 {
            transition-duration: 0.3s;
        }

        .underline {
            text-decoration: underline;
        }

        .w-40 {
            width: 10rem;
        }

        .mx-auto {
            margin-left: auto;
            margin-right: auto;
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-2 > * + * {
            margin-left: 0.5rem;
        }

        .gap-4 > * + * {
            margin-left: 1rem;
        }

        .gap-6 > * + * {
            margin-left: 1.5rem;
        }

        .text-blue-400 {
            color: #60a5fa;
        }

        .text-green-400 {
            color: #34d399;
        }

        .text-red-400 {
            color: #f87171;
        }

        .text-pink-500 {
            color: #ec4899;
        }

        .text-blue-400 {
            color: #60a5fa;
        }

        .text-purple-500 {
            color: #a78bfa;
        }

        .hover\:text-pink-400:hover {
            color: #f472b6;
        }

        .hover\:text-blue-300:hover {
            color: #93c5fd;
        }

        .hover\:text-purple-300:hover {
            color: #c4b5fd;
        }

        .w-4, .h-4 {
            width: 1rem;
            height: 1rem;
        }

        .w-5, .h-5 {
            width: 1.25rem;
            height: 1.25rem;
        }

        .w-6, .h-6 {
            width: 1.5rem;
            height: 1.5rem;
        }
    </style>
</head>
<body>
    <!-- Removed background canvas container entirely -->
    <div id="fluid"></div>
    <div class="gooey-nav-container" id="gooey-nav">
        <nav>
            <ul id="nav-list">
                <li><a href="#about" data-index="0">About</a></li>
                <li><a href="#experience" data-index="1">Experience</a></li>
                <li><a href="#education" data-index="2">Education</a></li>
                <li><a href="#projects" data-index="3">Projects</a></li>
                <li><a href="#contact" data-index="4">Contact</a></li>
            </ul>
        </nav>
        <span class="effect filter" id="nav-effect"></span>
        <svg id="gooey-filter" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0; width: 0; height: 0; opacity: 0;">
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
    </div>

    <div class="flex flex-col">
        <!-- Section 1 - About Us -->
        <section id="about" class="section">
            <div class="flex flex-col items-center space-y-8 px-4">
                <div class="pill-box">
                    <h2 class="text-xl font-bold text-gray-200 flex items-center gap-2 justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        About Us - Secure Sales Representatives LLC.
                    </h2>
                </div>
                <div class="text-box">
                    <p class="text-gray-200 leading-relaxed text-lg">
                        Everyone should feel comfortable using their own voice to do something. Why pay thousands in commission to a realtor when you can get the real value out of your house with us? With our experience in helping FOR SALE BY OWNER properties, renovate, reconstruct, sell, refinance, and re-evaluate we've helped over 4,500 people in Indiana sell, or turn their home into the appreciating asset they know it could be. You could be next! Whether your property was valued at $60,000 or $6,000,000, we can save you from the hassle that the new reality of buying, selling, or renovating homes has become!
                    </p>
                </div>
            </div>
        </section>

        <!-- Section 2 - Professional Experience -->
        <section id="experience" class="section">
            <div class="flex flex-col items-center space-y-8 px-4">
                <div class="pill-box">
                    <h2 class="text-xl font-bold text-gray-200 flex items-center gap-2 justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Professional Experience
                    </h2>
                </div>
                <div class="text-box">
                    <div class="space-y-6 text-left text-gray-200">
                        <div class="border-b border-gray-700 pb-4">
                            <h3 class="text-xl font-bold text-gray-200 mb-2">Senior Consultant Leader</h3>
                            <p class="text-gray-300 font-medium">Rapid7 • 2023 - 2025</p>
                            <p class="mt-2">Managed and taught several classes to train employees on how to spot faults as well as the lack of integrities in structures, security systems, and electronic defense, and how to prevent them as well as fix or repair them.</p>
                        </div>
                        <div class="border-b border-gray-700 pb-4">
                            <h3 class="text-xl font-bold text-gray-200 mb-2">Real Estate Wholesaler</h3>
                            <p class="text-gray-300 font-medium">New Western • 2020 - 2023</p>
                            <p class="mt-2">Sought out primarily for sale by owner sellers in Indiana and those looking to renovate their homes. Worked with over 4,592 people help them achieve a price they're happy with when it comes to either selling their home to a realtor or independent buyer, or just simply remodeling their home.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-200 mb-2">Surveyor</h3>
                            <p class="text-gray-300 font-medium">ProSpect Home Inspections • 2016 - 2020</p>
                            <p class="mt-2">Surveyed buildings upon completion before first initial inspection, to ensure all structural integrity is being maintained, as well as ensuring all vents, doors, windows, handles, locks, and garage doors are hung, installed, mounted, and fitted correctly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3 - Education -->
        <section id="education" class="section">
            <div class="flex flex-col items-center space-y-8 px-4">
                <div class="pill-box">
                    <h2 class="text-xl font-bold text-gray-200 flex items-center gap-2 justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                        Education
                    </h2>
                </div>
                <div class="text-box">
                    <div class="space-y-6 text-left text-gray-200">
                        <div class="border-b border-gray-700 pb-4">
                            <h3 class="text-xl font-bold text-gray-200 mb-2">Master of Systems Infrastructure and Communications - Con. Cybersecurity</h3>
                            <p class="text-gray-300 font-medium">Ball State University • 2025 - 2029</p>
                            <p class="mt-2">Specialized in Systems Infrastructure gives us more than enough knowledge to secure your homes network and other electronic devices.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-200 mb-2">Bachelor of Marketing - Con. Real Estate</h3>
                            <p class="text-gray-300 font-medium">Ball State University • 2025 - 2027</p>
                            <p class="mt-2">Participated in assisting and interning for several realtors/agencies throughout Indiana, learned how to successfully satisfy the needs of an owner selling their property while keeping it cost effective for every involved party.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4 - Certificates, Projects & Achievements -->
        <section id="projects" class="section">
            <div class="flex flex-col items-center space-y-8 px-4">
                <div class="pill-box">
                    <h2 class="text-xl font-bold text-gray-200 flex items-center gap-2 justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Certificates, Projects & Achievements
                    </h2>
                </div>
                <div class="text-box">
                    <div class="grid-cols-3">
                        <!-- Certificates -->
                        <div class="column-box">
                            <h3 class="text-lg font-bold text-gray-200 mb-4 flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Certificates
                            </h3>
                            <div class="space-y-3 text-left text-gray-200 text-sm">
                                <p>• All AWS Certifications Held Between All Members</p>
                                <p>• All Google Cybersecurity, Programming, and Customer Service Certificates Held Between All Members</p>
                                <p>• All OFFSEC and OWASP Certifications Held Between All Members</p>
                                <p>• Certified Home Inspector & Certified Plot Surveyor</p>
                                <p>• All HTB, Cisco And CompTIA Certificates Held Between All Members</p>
                            </div>
                        </div>
                        <!-- Projects -->
                        <div class="column-box">
                            <h3 class="text-lg font-bold text-gray-200 mb-4 flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Projects
                            </h3>
                            <div class="space-y-3 text-left text-gray-200 text-sm">
                                <p>• Multiple Online Real Estate Agencies Established</p>
                                <p>• Multiple Red Team Businesses Created</p>
                                <p>• Founded Security Consulting Firms</p>
                                <p>• Created A Simplified Employee Payroll And Information System</p>
                                <p>• Building Homes For Those In Need, While Teaching Others Threat And Fault Detection</p>
                            </div>
                        </div>
                        <!-- Achievements -->
                        <div class="column-box">
                            <h3 class="text-lg font-bold text-gray-200 mb-4 flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                Achievements
                            </h3>
                            <div class="space-y-3 text-left text-gray-200 text-sm">
                                <p>• Transparency Award 2025</p>
                                <p>• Best Startup 2024</p>
                                <p>• $150,000 In Contributions 2023</p>
                                <p>• Patent For Employee Payroll Information and Sorting System</p>
                                <p>• Locally Owned, Operated, And Produced. Here To Help You, From The Same People Who Live Next To You</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5 - Contact Us -->
        <section id="contact" class="section">
            <div class="flex flex-col items-center space-y-8 px-4">
                <div class="pill-box">
                    <h2 class="text-xl font-bold text-gray-200 flex items-center gap-2 justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        Contact Us!
                    </h2>
                </div>
                <div class="text-box">
                    <div class="space-y-6">
                        <h3 class="text-2xl font-bold text-gray-200 mb-6">Schedule Your Change Today.</h3>
                        <div class="grid-cols-2 gap-6">
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>zjordonez@gmail.com</span>
                            </div>
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+1 (765) 546-9932</span>
                            </div>
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Muncie, IN</span>
                            </div>
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                <a href="https://www.instagram.com/securesalesrepresentatives" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-400 transition-colors duration-300 underline">Instagram</a>
                            </div>
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                <a href="https://x.com/SecureSalesReps" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline">Twitter (X)</a>
                            </div>
                            <div class="flex items-center space-x-4 text-gray-200">
                                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                <a href="https://linktr.ee/securesalesrepresentatives" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors duration-300 underline">Linktree</a>
                            </div>
                        </div>
                        <div class="mt-8">
                            <p class="text-gray-300 mb-4 text-sm">We Value Your Time. Contact The Head Representative Today. All Rights Reserved. 2025 Secure Sales Representatives (SSR) LLC.</p>
                            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mx-auto w-40">
                                Send Message
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script>
        // Removed the entire createSquaresBackground function and its initialization

        // Optimized navigation component
        function initGooeyNav() {
            const navList = document.getElementById('nav-list');
            const navEffect = document.getElementById('nav-effect');
            const navContainer = document.querySelector('.gooey-nav-container');
            let activeIndex = 0;

            function updateEffectPosition(element) {
                if (!navContainer || !navEffect) return;
                const containerRect = navContainer.getBoundingClientRect();
                const pos = element.getBoundingClientRect();
                navEffect.style.left = `${pos.x - containerRect.x}px`;
                navEffect.style.top = `${pos.y - containerRect.y}px`;
                navEffect.style.width = `${pos.width}px`;
                navEffect.style.height = `${pos.height}px`;
            }

            function createParticles(element) {
                const particleCount = 15;
                const particleDistances = [90, 10];
                const particleR = 100;
                const animationTime = 600;
                const timeVariance = 300;
                const colors = [1, 2, 3, 1, 2, 3, 1, 4];
                
                const d = particleDistances;
                const r = particleR;
                const bubbleTime = animationTime * 2 + timeVariance;
                element.style.setProperty('--time', `${bubbleTime}ms`);

                function noise(n = 1) {
                    return n / 2 - Math.random() * n;
                }

                function getXY(distance, pointIndex, totalPoints) {
                    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
                    return [distance * Math.cos(angle), distance * Math.sin(angle)];
                }

                function createParticle(i, t, d, r) {
                    let rotate = noise(r / 10);
                    return {
                        start: getXY(d[0], particleCount - i, particleCount),
                        end: getXY(d[1] + noise(7), particleCount - i, particleCount),
                        time: t,
                        scale: 1 + noise(0.2),
                        color: colors[Math.floor(Math.random() * colors.length)],
                        rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
                    };
                }

                element.classList.remove('active');

                for (let i = 0; i < particleCount; i++) {
                    const t = animationTime * 2 + noise(timeVariance * 2);
                    const p = createParticle(i, t, d, r);

                    setTimeout(() => {
                        const particle = document.createElement('span');
                        const point = document.createElement('span');
                        particle.classList.add('particle');
                        particle.style.setProperty('--start-x', `${p.start[0]}px`);
                        particle.style.setProperty('--start-y', `${p.start[1]}px`);
                        particle.style.setProperty('--end-x', `${p.end[0]}px`);
                        particle.style.setProperty('--end-y', `${p.end[1]}px`);
                        particle.style.setProperty('--time', `${p.time}ms`);
                        particle.style.setProperty('--scale', `${p.scale}`);
                        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
                        particle.style.setProperty('--rotate', `${p.rotate}deg`);
                        point.classList.add('point');
                        particle.appendChild(point);
                        element.appendChild(particle);

                        requestAnimationFrame(() => {
                            element.classList.add('active');
                        });

                        setTimeout(() => {
                            try {
                                element.removeChild(particle);
                            } catch {
                                // Do nothing
                            }
                        }, t);
                    }, 30);
                }
            }

            function handleClick(e, index) {
                const liEl = e.currentTarget.parentElement;
                if (activeIndex === index) return;
                
                activeIndex = index;
                updateEffectPosition(liEl);
                
                const particles = navEffect.querySelectorAll('.particle');
                particles.forEach(p => navEffect.removeChild(p));
                
                createParticles(navEffect);
            }

            function handleKeyDown(e, index) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const liEl = e.currentTarget.parentElement;
                    if (liEl) {
                        handleClick({ currentTarget: liEl }, index);
                    }
                }
            }

            navList.querySelectorAll('li').forEach((li, index) => {
                const link = li.querySelector('a');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    handleClick(e, index);
                });
                link.addEventListener('keydown', (e) => handleKeyDown(e, index));
            });

            // Initialize active element position
            const activeLi = navList.querySelectorAll('li')[activeIndex];
            if (activeLi) {
                updateEffectPosition(activeLi);
            }
        }

        // Splash Cursor Component (remains unchanged)
        function initSplashCursor() {
            if (window.innerWidth <= 768) return; // Only show on desktop
            
            const canvas = document.createElement('canvas');
            canvas.id = 'fluid';
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.display = 'block';
            document.getElementById('fluid').appendChild(canvas);

            const SIM_RESOLUTION = 128;
            const DYE_RESOLUTION = 1440;
            const CAPTURE_RESOLUTION = 512;
            const DENSITY_DISSIPATION = 3.5;
            const VELOCITY_DISSIPATION = 2;
            const PRESSURE = 0.1;
            const PRESSURE_ITERATIONS = 20;
            const CURL = 3;
            const SPLAT_RADIUS = 0.2;
            const SPLAT_FORCE = 6000;
            const SHADING = true;
            const COLOR_UPDATE_SPEED = 10;
            const BACK_COLOR = { r: 0.5, g: 0, b: 0 };
            const TRANSPARENT = true;

            let config = {
                SIM_RESOLUTION,
                DYE_RESOLUTION,
                CAPTURE_RESOLUTION,
                DENSITY_DISSIPATION,
                VELOCITY_DISSIPATION,
                PRESSURE,
                PRESSURE_ITERATIONS,
                CURL,
                SPLAT_RADIUS,
                SPLAT_FORCE,
                SHADING,
                COLOR_UPDATE_SPEED,
                PAUSED: false,
                BACK_COLOR,
                TRANSPARENT
            };

            function pointerPrototype() {
                this.id = -1;
                this.texcoordX = 0;
                this.texcoordY = 0;
                this.prevTexcoordX = 0;
                this.prevTexcoordY = 0;
                this.deltaX = 0;
                this.deltaY = 0;
                this.down = false;
                this.moved = false;
                this.color = [0, 0, 0];
            }

            let pointers = [new pointerPrototype()];
            const { gl, ext } = getWebGLContext(canvas);

            if (!ext.supportLinearFiltering) {
                config.DYE_RESOLUTION = 256;
                config.SHADING = false;
            }

            function getWebGLContext(canvas) {
                const params = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false
                };

                let gl = canvas.getContext('webgl2', params);
                const isWebGL2 = !!gl;
                if (!isWebGL2) gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

                let halfFloat;
                let supportLinearFiltering;
                if (isWebGL2) {
                    gl.getExtension('EXT_color_buffer_float');
                    supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
                } else {
                    halfFloat = gl.getExtension('OES_texture_half_float');
                    supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
                }

                gl.clearColor(0.0, 0.0, 0.0, 1.0);

                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
                let formatRGBA;
                let formatRG;
                let formatR;

                if (isWebGL2) {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
                } else {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                }

                return {
                    gl,
                    ext: {
                        formatRGBA,
                        formatRG,
                        formatR,
                        halfFloatTexType,
                        supportLinearFiltering
                    }
                };
            }

            function getSupportedFormat(gl, internalFormat, format, type) {
                if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                    switch (internalFormat) {
                        case gl.R16F:
                            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                        case gl.RG16F:
                            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                        default:
                            return null;
                    }
                }
                return { internalFormat, format };
            }

            function supportRenderTextureFormat(gl, internalFormat, format, type) {
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

                const fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                return status === gl.FRAMEBUFFER_COMPLETE;
            }

            class Material {
                constructor(vertexShader, fragmentShaderSource) {
                    this.vertexShader = vertexShader;
                    this.fragmentShaderSource = fragmentShaderSource;
                    this.programs = [];
                    this.activeProgram = null;
                    this.uniforms = [];
                }

                setKeywords(keywords) {
                    let hash = 0;
                    for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
                    let program = this.programs[hash];
                    if (program == null) {
                        let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                        program = createProgram(this.vertexShader, fragmentShader);
                        this.programs[hash] = program;
                    }
                    if (program === this.activeProgram) return;
                    this.uniforms = getUniforms(program);
                    this.activeProgram = program;
                }

                bind() {
                    gl.useProgram(this.activeProgram);
                }
            }

            class Program {
                constructor(vertexShader, fragmentShader) {
                    this.uniforms = {};
                    this.program = createProgram(vertexShader, fragmentShader);
                    this.uniforms = getUniforms(this.program);
                }

                bind() {
                    gl.useProgram(this.program);
                }
            }

            function createProgram(vertexShader, fragmentShader) {
                let program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
                return program;
            }

            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }

            function compileShader(type, source, keywords) {
                source = addKeywords(source, keywords);
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
                return shader;
            }

            function addKeywords(source, keywords) {
                if (!keywords) return source;
                let keywordsString = '';
                keywords.forEach(keyword => {
                    keywordsString += '#define ' + keyword + '\n';
                });
                return keywordsString + source;
            }

            const baseVertexShader = compileShader(
                gl.VERTEX_SHADER,
                `
                    precision highp float;
                    attribute vec2 aPosition;
                    varying vec2 vUv;
                    varying vec2 vL;
                    varying vec2 vR;
                    varying vec2 vT;
                    varying vec2 vB;
                    uniform vec2 texelSize;
                    void main () {
                        vUv = aPosition * 0.5 + 0.5;
                        vL = vUv - vec2(texelSize.x, 0.0);
                        vR = vUv + vec2(texelSize.x, 0.0);
                        vT = vUv + vec2(0.0, texelSize.y);
                        vB = vUv - vec2(0.0, texelSize.y);
                        gl_Position = vec4(aPosition, 0.0, 1.0);
                    }
                `
            );

            const copyShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    uniform sampler2D uTexture;
                    void main () {
                        gl_FragColor = texture2D(uTexture, vUv);
                    }
                `
            );

            const clearShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    uniform sampler2D uTexture;
                    uniform float value;
                    void main () {
                        gl_FragColor = value * texture2D(uTexture, vUv);
                    }
                `
            );

            const displayShaderSource = `
                precision highp float;
                precision highp sampler2D;
                varying vec2 vUv;
                varying vec2 vL;
                varying vec2 vR;
                varying vec2 vT;
                varying vec2 vB;
                uniform sampler2D uTexture;
                uniform sampler2D uDithering;
                uniform vec2 ditherScale;
                uniform vec2 texelSize;
                vec3 linearToGamma (vec3 color) {
                    color = max(color, vec3(0));
                    return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
                }
                void main () {
                    vec3 c = texture2D(uTexture, vUv).rgb;
                    #ifdef SHADING
                        vec3 lc = texture2D(uTexture, vL).rgb;
                        vec3 rc = texture2D(uTexture, vR).rgb;
                        vec3 tc = texture2D(uTexture, vT).rgb;
                        vec3 bc = texture2D(uTexture, vB).rgb;
                        float dx = length(rc) - length(lc);
                        float dy = length(tc) - length(bc);
                        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
                        vec3 l = vec3(0.0, 0.0, 1.0);
                        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
                        c *= diffuse;
                    #endif
                    float a = max(c.r, max(c.g, c.b));
                    gl_FragColor = vec4(c, a);
                }
            `;

            const splatShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision highp float;
                    precision highp sampler2D;
                    varying vec2 vUv;
                    uniform sampler2D uTarget;
                    uniform float aspectRatio;
                    uniform vec3 color;
                    uniform vec2 point;
                    uniform float radius;
                    void main () {
                        vec2 p = vUv - point.xy;
                        p.x *= aspectRatio;
                        vec3 splat = exp(-dot(p, p) / radius) * color;
                        vec3 base = texture2D(uTarget, vUv).xyz;
                        gl_FragColor = vec4(base + splat, 1.0);
                    }
                `
            );

            const advectionShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision highp float;
                    precision highp sampler2D;
                    varying vec2 vUv;
                    uniform sampler2D uVelocity;
                    uniform sampler2D uSource;
                    uniform vec2 texelSize;
                    uniform vec2 dyeTexelSize;
                    uniform float dt;
                    uniform float dissipation;
                    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
                        vec2 st = uv / tsize - 0.5;
                        vec2 iuv = floor(st);
                        vec2 fuv = fract(st);
                        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
                        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
                        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
                        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
                        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
                    }
                    void main () {
                        #ifdef MANUAL_FILTERING
                            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                            vec4 result = bilerp(uSource, coord, dyeTexelSize);
                        #else
                            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                            vec4 result = texture2D(uSource, coord);
                        #endif
                        float decay = 1.0 + dissipation * dt;
                        gl_FragColor = result / decay;
                    }
                `,
                ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
            );

            const divergenceShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    varying highp vec2 vL;
                    varying highp vec2 vR;
                    varying highp vec2 vT;
                    varying highp vec2 vB;
                    uniform sampler2D uVelocity;
                    void main () {
                        float L = texture2D(uVelocity, vL).x;
                        float R = texture2D(uVelocity, vR).x;
                        float T = texture2D(uVelocity, vT).y;
                        float B = texture2D(uVelocity, vB).y;
                        vec2 C = texture2D(uVelocity, vUv).xy;
                        if (vL.x < 0.0) { L = -C.x; }
                        if (vR.x > 1.0) { R = -C.x; }
                        if (vT.y > 1.0) { T = -C.y; }
                        if (vB.y < 0.0) { B = -C.y; }
                        float div = 0.5 * (R - L + T - B);
                        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
                    }
                `
            );

            const curlShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    varying highp vec2 vL;
                    varying highp vec2 vR;
                    varying highp vec2 vT;
                    varying highp vec2 vB;
                    uniform sampler2D uVelocity;
                    void main () {
                        float L = texture2D(uVelocity, vL).y;
                        float R = texture2D(uVelocity, vR).y;
                        float T = texture2D(uVelocity, vT).x;
                        float B = texture2D(uVelocity, vB).x;
                        float vorticity = R - L - T + B;
                        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
                    }
                `
            );

            const vorticityShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision highp float;
                    precision highp sampler2D;
                    varying vec2 vUv;
                    varying vec2 vL;
                    varying vec2 vR;
                    varying vec2 vT;
                    varying vec2 vB;
                    uniform sampler2D uVelocity;
                    uniform sampler2D uCurl;
                    uniform float curl;
                    uniform float dt;
                    void main () {
                        float L = texture2D(uCurl, vL).x;
                        float R = texture2D(uCurl, vR).x;
                        float T = texture2D(uCurl, vT).x;
                        float B = texture2D(uCurl, vB).x;
                        float C = texture2D(uCurl, vUv).x;
                        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
                        force /= length(force) + 0.0001;
                        force *= curl * C;
                        force.y *= -1.0;
                        vec2 velocity = texture2D(uVelocity, vUv).xy;
                        velocity += force * dt;
                        velocity = min(max(velocity, -1000.0), 1000.0);
                        gl_FragColor = vec4(velocity, 0.0, 1.0);
                    }
                `
            );

            const pressureShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    varying highp vec2 vL;
                    varying highp vec2 vR;
                    varying highp vec2 vT;
                    varying highp vec2 vB;
                    uniform sampler2D uPressure;
                    uniform sampler2D uDivergence;
                    void main () {
                        float L = texture2D(uPressure, vL).x;
                        float R = texture2D(uPressure, vR).x;
                        float T = texture2D(uPressure, vT).x;
                        float B = texture2D(uPressure, vB).x;
                        float C = texture2D(uPressure, vUv).x;
                        float divergence = texture2D(uDivergence, vUv).x;
                        float pressure = (L + R + B + T - divergence) * 0.25;
                        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
                    }
                `
            );

            const gradientSubtractShader = compileShader(
                gl.FRAGMENT_SHADER,
                `
                    precision mediump float;
                    precision mediump sampler2D;
                    varying highp vec2 vUv;
                    varying highp vec2 vL;
                    varying highp vec2 vR;
                    varying highp vec2 vT;
                    varying highp vec2 vB;
                    uniform sampler2D uPressure;
                    uniform sampler2D uVelocity;
                    void main () {
                        float L = texture2D(uPressure, vL).x;
                        float R = texture2D(uPressure, vR).x;
                        float T = texture2D(uPressure, vT).x;
                        float B = texture2D(uPressure, vB).x;
                        vec2 velocity = texture2D(uVelocity, vUv).xy;
                        velocity.xy -= vec2(R - L, T - B);
                        gl_FragColor = vec4(velocity, 0.0, 1.0);
                    }
                `
            );

            const blit = (() => {
                gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
                gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
                gl.enableVertexAttribArray(0);
                return (target, clear = false) => {
                    if (target == null) {
                        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    } else {
                        gl.viewport(0, 0, target.width, target.height);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                    }
                    if (clear) {
                        gl.clearColor(0.0, 0.0, 0.0, 1.0);
                        gl.clear(gl.COLOR_BUFFER_BIT);
                    }
                    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                };
            })();

            let dye, velocity, divergence, curl, pressure;

            const copyProgram = new Program(baseVertexShader, copyShader);
            const clearProgram = new Program(baseVertexShader, clearShader);
            const splatProgram = new Program(baseVertexShader, splatShader);
            const advectionProgram = new Program(baseVertexShader, advectionShader);
            const divergenceProgram = new Program(baseVertexShader, divergenceShader);
            const curlProgram = new Program(baseVertexShader, curlShader);
            const vorticityProgram = new Program(baseVertexShader, vorticityShader);
            const pressureProgram = new Program(baseVertexShader, pressureShader);
            const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
            const displayMaterial = new Material(baseVertexShader, displayShaderSource);

            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = ext.formatRGBA;
                const rg = ext.formatRG;
                const r = ext.formatR;
                const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

                gl.disable(gl.BLEND);

                if (!dye)
                    dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                else
                    dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

                if (!velocity)
                    velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                else
                    velocity = resizeDoubleFBO(
                        velocity,
                        simRes.width,
                        simRes.height,
                        rg.internalFormat,
                        rg.format,
                        texType,
                        filtering
                    );

                divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
            }

            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                let texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

                let fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);

                let texelSizeX = 1.0 / w;
                let texelSizeY = 1.0 / h;

                return {
                    texture,
                    fbo,
                    width: w,
                    height: h,
                    texelSizeX,
                    texelSizeY,
                    attach(id) {
                        gl.activeTexture(gl.TEXTURE0 + id);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        return id;
                    }
                };
            }

            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                let fbo2 = createFBO(w, h, internalFormat, format, type, param);

                return {
                    width: w,
                    height: h,
                    texelSizeX: fbo1.texelSizeX,
                    texelSizeY: fbo1.texelSizeY,
                    get read() {
                        return fbo1;
                    },
                    set read(value) {
                        fbo1 = value;
                    },
                    get write() {
                        return fbo2;
                    },
                    set write(value) {
                        fbo2 = value;
                    },
                    swap() {
                        let temp = fbo1;
                        fbo1 = fbo2;
                        fbo2 = temp;
                    }
                };
            }

            function resizeFBO(target, w, h, internalFormat, format, type, param) {
                let newFBO = createFBO(w, h, internalFormat, format, type, param);
                copyProgram.bind();
                gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
                blit(newFBO);
                return newFBO;
            }

            function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                if (target.width === w && target.height === h) return target;
                target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
                target.write = createFBO(w, h, internalFormat, format, type, param);
                target.width = w;
                target.height = h;
                target.texelSizeX = 1.0 / w;
                target.texelSizeY = 1.0 / h;
                return target;
            }

            function updateKeywords() {
                let displayKeywords = [];
                if (config.SHADING) displayKeywords.push('SHADING');
                displayMaterial.setKeywords(displayKeywords);
            }

            updateKeywords();
            initFramebuffers();

            let lastUpdateTime = Date.now();
            let colorUpdateTimer = 0.0;

            function updateFrame() {
                const dt = calcDeltaTime();
                if (resizeCanvas()) initFramebuffers();
                updateColors(dt);
                applyInputs();
                step(dt);
                render(null);
                requestAnimationFrame(updateFrame);
            }

            function calcDeltaTime() {
                let now = Date.now();
                let dt = (now - lastUpdateTime) / 1000;
                dt = Math.min(dt, 0.016666);
                lastUpdateTime = now;
                return dt;
            }

            function resizeCanvas() {
                let width = scaleByPixelRatio(canvas.clientWidth);
                let height = scaleByPixelRatio(canvas.clientHeight);
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    return true;
                }
                return false;
            }

            function updateColors(dt) {
                colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
                if (colorUpdateTimer >= 1) {
                    colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
                    pointers.forEach(p => {
                        p.color = generateColor();
                    });
                }
            }

            function applyInputs() {
                pointers.forEach(p => {
                    if (p.moved) {
                        p.moved = false;
                        splatPointer(p);
                    }
                });
            }

            function step(dt) {
                gl.disable(gl.BLEND);

                curlProgram.bind();
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);

                vorticityProgram.bind();
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();

                divergenceProgram.bind();
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);

                clearProgram.bind();
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();

                pressureProgram.bind();
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }

                gradienSubtractProgram.bind();
                gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();

                advectionProgram.bind();
                gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                if (!ext.supportLinearFiltering)
                    gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);

                let velocityId = velocity.read.attach(0);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                gl.uniform1f(advectionProgram.uniforms.dt, dt);
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                blit(velocity.write);
                velocity.swap();

                if (!ext.supportLinearFiltering)
                    gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                blit(dye.write);
                dye.swap();
            }

            function render(target) {
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                drawDisplay(target);
            }

            function drawDisplay(target) {
                let width = target == null ? gl.drawingBufferWidth : target.width;
                let height = target == null ? gl.drawingBufferHeight : target.height;
                displayMaterial.bind();
                if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
                gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
                blit(target);
            }

            function splatPointer(pointer) {
                let dx = pointer.deltaX * config.SPLAT_FORCE;
                let dy = pointer.deltaY * config.SPLAT_FORCE;
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
            }

            function clickSplat(pointer) {
                const color = generateColor();
                color.r *= 10.0;
                color.g *= 10.0;
                color.b *= 10.0;
                let dx = 10 * (Math.random() - 0.5);
                let dy = 30 * (Math.random() - 0.5);
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
            }

            function splat(x, y, dx, dy, color) {
                splatProgram.bind();
                gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                gl.uniform2f(splatProgram.uniforms.point, x, y);
                gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
                gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
                blit(velocity.write);
                velocity.swap();

                gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                blit(dye.write);
                dye.swap();
            }

            function correctRadius(radius) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) radius *= aspectRatio;
                return radius;
            }

            function updatePointerDownData(pointer, id, posX, posY) {
                pointer.id = id;
                pointer.down = true;
                pointer.moved = false;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.deltaX = 0;
                pointer.deltaY = 0;
                pointer.color = generateColor();
            }

            function updatePointerMoveData(pointer, posX, posY, color) {
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
                pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
                pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
                pointer.color = color;
            }

            function updatePointerUpData(pointer) {
                pointer.down = false;
            }

            function correctDeltaX(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio < 1) delta *= aspectRatio;
                return delta;
            }

            function correctDeltaY(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) delta /= aspectRatio;
                return delta;
            }

            function generateColor() {
                let c = HSVtoRGB(Math.random(), 1.0, 1.0);
                c.r *= 0.15;
                c.g *= 0.15;
                c.b *= 0.15;
                return c;
            }

            function HSVtoRGB(h, s, v) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                    default:
                        break;
                }
                return { r, g, b };
            }

            function wrap(value, min, max) {
                const range = max - min;
                if (range === 0) return min;
                return ((value - min) % range) + min;
            }

            function getResolution(resolution) {
                let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
                if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
                const min = Math.round(resolution);
                const max = Math.round(resolution * aspectRatio);
                if (gl.drawingBufferWidth > gl.drawingBufferHeight) return { width: max, height: min };
                else return { width: min, height: max };
            }

            function scaleByPixelRatio(input) {
                const pixelRatio = window.devicePixelRatio || 1;
                return Math.floor(input * pixelRatio);
            }

            function hashCode(s) {
                if (s.length === 0) return 0;
                let hash = 0;
                for (let i = 0; i < s.length; i++) {
                    hash = (hash << 5) - hash + s.charCodeAt(i);
                    hash |= 0;
                }
                return hash;
            }

            window.addEventListener('mousedown', e => {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                updatePointerDownData(pointer, -1, posX, posY);
                clickSplat(pointer);
            });

            document.body.addEventListener('mousemove', function handleFirstMouseMove(e) {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                let color = generateColor();
                updateFrame();
                updatePointerMoveData(pointer, posX, posY, color);
                document.body.removeEventListener('mousemove', handleFirstMouseMove);
            });

            window.addEventListener('mousemove', e => {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                let color = pointer.color;
                updatePointerMoveData(pointer, posX, posY, color);
            });

            document.body.addEventListener('touchstart', function handleFirstTouchStart(e) {
                const touches = e.targetTouches;
                let pointer = pointers[0];
                for (let i = 0; i < touches.length; i++) {
                    let posX = scaleByPixelRatio(touches[i].clientX);
                    let posY = scaleByPixelRatio(touches[i].clientY);
                    updateFrame();
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
                document.body.removeEventListener('touchstart', handleFirstTouchStart);
            });

            window.addEventListener('touchstart', e => {
                const touches = e.targetTouches;
                let pointer = pointers[0];
                for (let i = 0; i < touches.length; i++) {
                    let posX = scaleByPixelRatio(touches[i].clientX);
                    let posY = scaleByPixelRatio(touches[i].clientY);
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
            });

            window.addEventListener(
                'touchmove',
                e => {
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for (let i = 0; i < touches.length; i++) {
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerMoveData(pointer, posX, posY, pointer.color);
                    }
                },
                false
            );

            window.addEventListener('touchend', e => {
                const touches = e.changedTouches;
                let pointer = pointers[0];
                for (let i = 0; i < touches.length; i++) {
                    updatePointerUpData(pointer);
                }
            });

            updateFrame();
        }

        // Page navigation and scrolling
        function initPageNavigation() {
            let currentPage = 0;
            const sections = ['about', 'experience', 'education', 'projects', 'contact'];

            function handleScroll(e) {
                if (e.deltaY > 0 && currentPage < 4) {
                    currentPage++;
                    scrollToSection(currentPage);
                } else if (e.deltaY < 0 && currentPage > 0) {
                    currentPage--;
                    scrollToSection(currentPage);
                }
            }

            function scrollToSection(index) {
                const element = document.getElementById(sections[index]);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            window.addEventListener('wheel', handleScroll);
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Removed createSquaresBackground() call
            initGooeyNav();
            initSplashCursor();
            initPageNavigation();
        });
    </script>
</body>
</html>

