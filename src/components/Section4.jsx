import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Section4 = () => {
    useGSAP(() => {
        const initialTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec4',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.1
            }
        })

        initialTL
            .from('#img1', {
                x: -100,
                y: 100
            }, 0)
            .from('#img2', {
                x: 100,
                y: 100
            }, 0)
            .from('#img3', {
                x: 160,
                y: 100
            }, 0)
    }, [])

    return (
        <section id="sec4" className='relative min-h-screen mt-[120px]'>
            <img id="img1" className="absolute top-[80px] z-1 left-[11vw]" src="/Group 11.png" alt="" />
            <img id="img2" className="absolute top-[480px] left-[18vw]" src="/Group 12.png" alt="" />
            <img id="img3" className="absolute z-2 top-[120px] right-[8vw]" src="/Group 13.png" alt="" />
        </section>
    )
}

export default Section4