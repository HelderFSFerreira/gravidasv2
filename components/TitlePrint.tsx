import Image from 'next/image';

const TitlePrint =  () => {
    return (
        <div className='inline-flex space-x-4'>
            <Image  src='/logo.png'
                    width={50}
                    height={50}/>
            <h2>Planeamento de gravidez</h2>
        </div>
    );
};

export default TitlePrint;