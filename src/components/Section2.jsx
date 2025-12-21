import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

const Section2 = () => {
    useGSAP(() => {
        const subHeadSplit = new SplitText('#block1 h2', { type: 'words' })
        const paraSplit = new SplitText('#block1 p', { type: 'lines' })

        const sec2TL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec2',
                start: 'top center'
            }
        })

        sec2TL
            .from('#block1 h5', {
                y: 36,
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
            }, 0)
            .from(subHeadSplit.words, {
                y: 54,
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
                stagger: 0.06
            }, 0)
            .from(paraSplit.lines, {
                y: 45,
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
                stagger: 0.02
            }, 0)
            .from('#block1 button', {
                y: 36,
                opacity: 0,
                duration: 1,
                ease: "expo.inOut",
            }, 0)
            .from('#block2 img', {
                y: 54,
                opacity: 0,
                stagger: 0.04
            }, 0.4)

    }, [])

    return (
        <section id="sec2" className='flex justify-between items-center pl-[180px] pr-[100px] mb-[240px]'>
            <div id="block1" className='w-[300px]'>
                <h5 className='text-3xl font-medium'>limited version</h5>
                <h2
                    className='text-[72px] leading-[92px] mt-3'
                    style={{
                        fontFamily: 'Zen Dots'
                    }}
                >
                    INTAX<br />FUJIFILM
                </h2>
                <p className='text-xl'>Cameras have evolved significantly since their inception, transforming from bulky devices to sleek, portable gadgets. Today, digital cameras offer high-resolution images and advanced features that cater to both amateur and professional photographers. With the rise of smartphone cameras.</p>
                <button
                    className='bg-[#33302b] text-white py-2 px-4 mt-6'
                    style={{
                        fontFamily: 'Zen Dots'
                    }}
                >
                    BUY NOW
                </button>
            </div>

            <div id="block2" className='w-[300px] flex flex-col gap-[24px]'>
                <img src="/Group 4.png" alt="" />
                <img src="/Group 5.png" alt="" />
                <img src="/Group 5.png" alt="" />
            </div>
        </section>
    )
}

export default Section2