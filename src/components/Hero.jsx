import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {
    useGSAP(() => {
        const heroTextSplit = new SplitText('#heroText', { type: 'chars' })

        gsap.from('#heroText', {
            scale: 0.25,
            duration: 4,
            ease: "expo.inOut",
            delay: 0.1,
        }, 0)

        gsap.from('header', {
            yPercent: -100,
            duration: 3,
            ease: "expo.out",
            delay: 1.6
        }, 0)

        gsap.from('#camDrop', {
            yPercent: -100,
            duration: 3,
            ease: "expo.out",
            delay: 1.8
        }, 0)

        gsap.from('#sidebar', {
            xPercent: -100,
            duration: 2.4,
            ease: "expo.out",
            delay: 1.6
        }, 0)


        const textTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec1',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2
            }
        })

        textTL.to(heroTextSplit.chars, {
            y: -16,
            stagger: {
                each: 0.06,
                from: 'random'
            }
        })
    }, [])

    return (
        <section
            id="sec1"
            className='h-screen flex justify-center items-center pl-[80px]'
        >
            <h1
                id='heroText'
                style={{
                    fontFamily: 'Zen Dots'
                }}
                className='text-center text-[#973f0b] text-[11vw] leading-[9.5vw] font-mediumbold overflow-hidden'>
                Unlimited<br />Release IPA
            </h1>
        </section>
    )
}

export default Hero