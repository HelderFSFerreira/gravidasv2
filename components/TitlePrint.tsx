import Image from 'next/image';

const TitlePrint =  () => {
    return (
        <div className='inline-flex space-x-4'>
            <Image  src='/logo.png'
                    width={50}
                    height={50}></Image>
            <h3>Planeamento de gravidez</h3>
        </div>
    )
}

export default TitlePrint;