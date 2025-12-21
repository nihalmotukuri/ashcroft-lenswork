import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CamDrop = () => {
    useGSAP(() => {
        const camDropTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec6',
                start: 'top bottom'
            }
        })

        camDropTL
            .to('#cam', {
                marginTop: '100vh',
                duration: 0.8,
                ease: 'expo.in'
            }, 0)
            .to('#rope', {
                yPercent: -100,
                duration: 1,
                ease: 'expo.in',
                delay: 0.1
            }, 0)
    }, [])

    return (
        <div id="camDrop" className=' fixed z-13 top-0 left-[320px]'>
            <img id="rope" src="/ROPE - Subtract.png" alt="" />
            <img id="cam" className='mt-[-140px]' src="/CAMERA - Subtract.png" alt="" />
        </div>
    )
}

export default CamDrop