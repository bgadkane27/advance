import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'

const AboutMe = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const start = isMobile ? 'top 20%' : 'top top';

		const maskTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#art',
				start,
				end: 'bottom center',
				scrub: 1.5,
				pin: true
			}
		})

		maskTimeline
			.to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
			.to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut ' })
			.to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
	})

	return (
		<div id="art">
			<div className="container mx-auto h-full max-w-7xl">
				<h2 className="will-fade">About Me</h2>

				<div className="content">
					<div className='max-w-xs will-fade'>
						<p className='break-words text-justify'>A skilled QA/QC Engineer with a
							sharp eye for quality, precision, and
							software reliability.</p>
					</div>

					<div className="cocktail-img">
						<img
							src="/images/under.webp"
							alt="cocktail"
							className="abs-center masked-img size-full object-contain"
						/>
					</div>

					<div className='max-w-xs will-fade'>
						<p className='break-words text-justify'>
							Behind every great product is a robust
							quality strategy. I specialize in designing
							those strategies — ensuring every
							project I test is scalable, reliable, and
							flawless. Precision isn't just a
							requirement for me, it's a mindset.
						</p>
					</div>

				</div>

				<div className="masked-container max-w-7xl mx-auto">
					<h2 className="will-fade">Quality isn't a task — it's a discipline</h2>
					<p className='will-fade -mt-4 sm:text-center'>
						A QA/QC Engineer with 3+ years of
						hands-on experience in ensuring the
						quality, reliability, and performance of
						ERP and HRMS enterprise-level
						applications.
					</p>
					<div id="masked-content">
						{/* <h3>Made with Craft, Poured with Passion</h3> */}
						<p className='text-sm sm:text-base px-2'>Once a banker, now a QA/QC engineer — committed to delivering quality and reliability in every project I undertake.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutMe
