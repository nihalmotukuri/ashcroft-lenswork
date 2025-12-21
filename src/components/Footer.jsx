import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Footer = () => {
    useGSAP(() => {
        const footerSplit = new SplitText('#footerText', { type: 'chars' })

        const footerTL = gsap.timeline({
            scrollTrigger: {
                trigger: 'footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })

        footerTL.from(footerSplit.chars, {
            y: 64,
            stagger: {
                each: 0.06,
                from: 'random'
            },
            ease: 'none'
        })
    }, [])

    return (
        <footer className='relative'>
            <div
                id='footerText'
                style={{
                    fontFamily: 'Zen Dots'
                }}
                className='text-[17vw] m-0 p-0 leading-[11vw] text-[#99400b] text-center pl-[80px]'
            >
                Artisans
            </div>

            <div className='bg-[#99400b] h-[120px] flex justify-center items-center'>
                <span
                style={{
                    fontFamily: 'Zen Dots'
                }}
                className='text-[#ffefd8] text-xl'
                >
                    Nihal & Sourish
                </span>
            </div>
        </footer>
    )
}

export default Footer