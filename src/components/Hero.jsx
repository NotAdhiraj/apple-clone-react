import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 765 ? smallHeroVideo : heroVideo
	);

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 765) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleVideoSrcSet);
		return () => window.removeEventListener("resize", handleVideoSrcSet);
	}, []);

	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 1,
			ease: "power1.in",
			delay: 2,
		});
		gsap.to("#cta", {
			opacity: 1,
			y: "-50",
			delay: 2,
		});
	}, []);
	return (
		<section className='w-full nav-height bg-black relative'>
			<div className='h-5/6 w-full flex-center flex-col'>
				<p id='hero' className='hero-title'>
					iPhone 15 Pro
				</p>
				<div className='md:w-10/12 w-9/12'>
					<video
						autoPlay
						muted
						playsInline
						key={videoSrc}
						className='pointer-events-none'>
						<source src={videoSrc} type='video/mp4' />
					</video>
				</div>
			</div>
			<div
				id='cta'
				className='flex flex-col items-center opacity-0 translate-y-20'>
				<a href='#highlights' className='btn'>
					Buy
				</a>
				<p>From $199/month or $1499</p>
			</div>
		</section>
	);
};

export default Hero;
