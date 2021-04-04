import Image from 'next/image';


const Title =  () => {
    return (
        <div className='grid justify-items-center'>
            <Image  src='/logo.png'
                    width={200}
                    height={200}></Image>
            <h1>Planeamento de gravidez</h1>
        </div>
    )
}

export default Title;