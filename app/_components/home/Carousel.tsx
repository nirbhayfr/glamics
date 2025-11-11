"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const images = [
	"/assets/img/banner-slide-1.png",
	"/assets/img/banner-slide-2.png",
	"/assets/img/banner-slide-3.png",
];

export default function CarouselFull() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % images.length);
		}, 4000); // 4 seconds per slide
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="carousel-full">
			<div className="carousel-container">
				<div className="carousel-image-wrapper">
					{images.map((src, index) => (
						<div
							key={index}
							className={`carousel-slide ${
								index === currentSlide ? "active" : ""
							}`}
						>
							<Image
								src={src}
								alt={`Slide ${index + 1}`}
								fill
								style={{
									objectFit: "cover",

									objectPosition: "top right",
								}}
								priority={index === 0}
							/>
						</div>
					))}

					{/* Button overlay */}
					<button className="carousel-btn overlay-btn">
						Explore Collection <ArrowUpRight size={18} />
					</button>
				</div>

				{/* Progress indicators below */}
				<div className="carousel-progress">
					{images.map((_, i) => (
						<div
							key={i}
							className={`carousel-progress-bar ${
								i === currentSlide ? "active" : ""
							}`}
						></div>
					))}
				</div>
			</div>
		</section>
	);
}
