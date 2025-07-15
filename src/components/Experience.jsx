'use client';

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { allCocktails } from '../constants';

const Experience = () => {
	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useGSAP(() => {
		gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
		gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
			xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
		})
		gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
		gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
	}, [currentIndex]);

	const totalCocktails = allCocktails.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalCocktails) % totalCocktails;

		setCurrentIndex(newIndex);
	}

	const getCocktailAt = (indexOffset) => {
		return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
	}

	const currentCocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);

	return (
		<section id="menu" aria-labelledby="menu-heading">
			<img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
			<img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

			<div className="cocktail-tabs" aria-label="Cocktail Navigation">
				{allCocktails.map((cocktail, index) => {
					const isActive = index === currentIndex;

					return (
						<button key={cocktail.id} className={`bg-none
				${isActive
								? 'text-white border-white'
								: 'text-white/50 border-white/50'}
			 `} onClick={() => goToSlide(index)}
						>
							{cocktail.name}
						</button>
					)
				})}
			</div>

			<div className="content">
				<div className="arrows">
					<button onClick={() => goToSlide(currentIndex - 1)}>
						<span>Previous</span>
						<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
					</button>

					<button onClick={() => goToSlide(currentIndex + 1)}>
						<span>Next</span>
						<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
					</button>
				</div>

				<div className="cocktail">
					<img src={currentCocktail.image} className="object-contain" alt='company logo' />
				</div>

				<div className="recipe">
					<div ref={contentRef} className="info">
						<p>Work for</p>
						<p id="title">{currentCocktail.name}</p>
					</div>

					<div className="details">
						<h2>{currentCocktail.title}</h2>
						<p className='text-gray-400 -mt-4'>{currentCocktail.period}</p>
						<ul className="space-y-4">
							{currentCocktail.list.map((feature, index) => (
								<li key={index} className="flex items-center gap-2">
									{/* <img src="/images/check.png" alt="check" /> */}
									<p>{feature}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Experience
