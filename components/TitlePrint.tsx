import Image from 'next/image';

const TitlePrint =  () => {
    return (
        <div className='inline-flex space-x-4'>
            <Image  src='/logo.png'
                    width={50}
                    height={50}/>
            <h1>Planeamento de gravidez</h1>
        </div>
    );
};

export default TitlePrint;