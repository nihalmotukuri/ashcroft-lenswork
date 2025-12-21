import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Section3 = () => {
    useGSAP(() => {
        const headingSplit = new SplitText('#sec3 h1', { type: 'chars' })
        const paraSplit = new SplitText('#block4 p', { type: 'lines' })

        const sec3TL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec3',
                start: 'top 45%'
            }
        })

        sec3TL
            .from(headingSplit.chars, {
                opacity: 0,
                y: 48,
                stagger: {
                    each: 0.04,
                    from: 'random'
                },
                duration: 0.3
            }, 0)
            .from('#block3 img', {
                opacity: 0,
                y: 8
            }, 0)
            .from(paraSplit.lines, {
                opacity: 0,
                stagger: 0.02,
                y: 16
            }, 0)
    }, [])

    return (
        <section id="sec3" className='min-h-screen pl-[160px] pr-[100px]'>
            <h1
                style={{
                    fontFamily: 'Zen Dots'
                }}
                className="text-[8vw] text-center"
            >
                RETROSCOPE
            </h1>

            <div className="flex justify-between items-center w-full">
                <div id="block3" className='w-[400px]'>
                    <img src="/intax.png" alt="" />
                    <h3
                        style={{
                            fontFamily: 'Zen Dots'
                        }}
                        className="text-2xl mt-5"
                    >
                        Watch the Actual Footage on <span className="text-[#99400b]">Intax</span>
                    </h3>
                </div>

                <div id="block4" className='w-[450px] flex flex-col gap-[24px]'>
                    <p
                        style={{
                            wordSpacing: '10px',
                            fontFamily: 'Montserrat'
                        }}
                        className="text-2xl mt-[-16px] leading-[40px]"
                    >
                        Cameras have evolved significantly since their inception, transforming from bulky devices to sleek, portable gadgets. Today, digital cameras offer high-resolution image and advanced features that cater to both amateur and professional photographers. With the rise of smartphone cameras.
                    </p>

                    <h3
                        style={{
                            fontFamily: 'Zen Dots'
                        }}
                        className="text-2xl mt-5"
                    >
                        INTAX
                    </h3>

                    <p
                        style={{
                            wordSpacing: '10px',
                            fontFamily: 'Montserrat'
                        }}
                        className="text-2xl mt-[-16px] leading-[40px]"
                    >
                        Cameras have evolved significantly since their inception, transforming from bulky devices to sleek, portable gadgets. Today, digital cameras offer high-resolution image and advanced features that cater to both amateur and professional photographers. With the rise of smartphone cameras.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section3