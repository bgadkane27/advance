import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants';

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav>
	 <div className='max-w-7xl mx-auto px-4'>
		<a href="#home" className="flex items-center justify-center gap-2">
		 <img src="/hero/logo.png" alt="logo" className='w-full h-10' />
		 {/* <p>Baburao Adkane</p> */}
		</a>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar